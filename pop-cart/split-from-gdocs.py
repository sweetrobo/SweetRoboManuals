#!/usr/bin/env python3
"""
Split Google Docs export back into individual manual sections.
Handles both HTML and Markdown exports from Google Docs.
"""

import re
from pathlib import Path
from html.parser import HTMLParser

class GoogleDocsHTMLParser(HTMLParser):
    """Parse Google Docs HTML export to extract plain text content."""

    def __init__(self):
        super().__init__()
        self.content = []
        self.current_tag = None
        self.list_level = 0
        self.in_code = False

    def handle_starttag(self, tag, attrs):
        self.current_tag = tag
        if tag == 'ul' or tag == 'ol':
            self.list_level += 1
        elif tag == 'code':
            self.in_code = True

    def handle_endtag(self, tag):
        if tag == 'ul' or tag == 'ol':
            self.list_level -= 1
            self.content.append('\n')
        elif tag in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']:
            self.content.append('\n\n')
        elif tag == 'p':
            self.content.append('\n\n')
        elif tag == 'br':
            self.content.append('\n')
        elif tag == 'hr':
            self.content.append('\n---\n')
        elif tag == 'code':
            self.in_code = False
        self.current_tag = None

    def handle_data(self, data):
        if not data.strip():
            return

        # Handle headers
        if self.current_tag in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']:
            level = int(self.current_tag[1])
            self.content.append('#' * level + ' ' + data.strip())

        # Handle list items
        elif self.current_tag == 'li':
            indent = '  ' * (self.list_level - 1)
            self.content.append(f"{indent}- {data.strip()}\n")

        # Handle code
        elif self.in_code or self.current_tag == 'code':
            self.content.append(f"`{data.strip()}`")

        # Handle regular text
        else:
            self.content.append(data.strip())

    def get_content(self):
        """Return the parsed content as markdown."""
        text = ' '.join(self.content)
        # Clean up excessive whitespace
        text = re.sub(r'\n{3,}', '\n\n', text)
        return text.strip()

def html_to_markdown(html_content):
    """Convert Google Docs HTML export to markdown."""
    parser = GoogleDocsHTMLParser()
    parser.feed(html_content)
    return parser.get_content()

def detect_format(file_path):
    """Detect if file is HTML or Markdown."""
    with open(file_path, 'r', encoding='utf-8') as f:
        first_line = f.readline().strip()
        if first_line.startswith('<!DOCTYPE') or first_line.startswith('<html'):
            return 'html'
    return 'markdown'

def split_manual(input_file):
    """Split combined manual back into individual section files."""
    base_dir = Path(__file__).parent

    print(f"Reading combined manual: {input_file.name}")

    # Detect format
    file_format = detect_format(input_file)
    print(f"Detected format: {file_format.upper()}")

    # Read content
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Convert HTML to markdown if needed
    if file_format == 'html':
        print("Converting HTML to markdown...")
        content = html_to_markdown(content)

    # Split by section markers
    sections = re.split(r'<!-- SECTION: ([^>]+) -->', content)

    # First element is header/preamble, skip it
    if len(sections) > 1:
        sections = sections[1:]
    else:
        print("⚠️  Warning: No section markers found!")
        print("    The file may not have been exported correctly.")
        print("    Expected format: <!-- SECTION: filename.md -->")
        response = input("\n    Continue anyway? [y/N]: ")
        if response.lower() != 'y':
            return

    # Process pairs: (filename, content)
    updates = []
    for i in range(0, len(sections), 2):
        if i + 1 >= len(sections):
            break

        filename = sections[i].strip()
        section_content = sections[i + 1]

        # Clean up the content
        section_content = section_content.strip()

        # Remove trailing dividers
        section_content = re.sub(r'\n*---\n*$', '', section_content)

        # Remove section title if it was added
        # (We'll keep original file structure)
        lines = section_content.split('\n')
        if lines and lines[0].startswith('# ') and filename != 'title-page.md':
            # Remove the first header line
            section_content = '\n'.join(lines[1:]).strip()

        file_path = base_dir / filename

        # Store for batch writing
        updates.append((file_path, filename, section_content))

    if not updates:
        print("\n❌ No sections found to update!")
        print("   Make sure the file contains section markers.")
        return

    # Show what will be updated
    print(f"\n📋 Found {len(updates)} sections to update:\n")
    for file_path, filename, _ in updates:
        status = "✓" if file_path.exists() else "NEW"
        print(f"  {status} {filename}")

    # Ask for confirmation
    response = input("\n⚠️  This will overwrite existing section files. Continue? [y/N]: ")

    if response.lower() != 'y':
        print("❌ Operation cancelled.")
        return

    # Write updates
    print("\n📝 Writing updates...")
    for file_path, filename, section_content in updates:
        try:
            # Create backup
            if file_path.exists():
                backup_path = file_path.with_suffix(file_path.suffix + '.backup')
                print(f"  Creating backup: {backup_path.name}")
                with open(file_path, 'r', encoding='utf-8') as f:
                    backup_content = f.read()
                with open(backup_path, 'w', encoding='utf-8') as f:
                    f.write(backup_content)

            # Write new content
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(section_content)
                f.write('\n')  # Ensure newline at end

            print(f"  ✅ Updated: {filename}")

        except Exception as e:
            print(f"  ❌ Error updating {filename}: {e}")

    print("\n✅ Manual sections updated successfully!")
    print("\n💡 Next steps:")
    print("   1. Review changes: git diff")
    print("   2. Test the build: mdbook build")
    print("   3. Remove backups: rm *.md.backup")
    print("   4. Commit: git add *.md && git commit")

def main():
    """Main entry point."""
    import sys

    if len(sys.argv) < 2:
        print("Usage: python3 split-from-gdocs.py <exported-file>")
        print("\nAccepts:")
        print("  - HTML exported from Google Docs")
        print("  - Markdown exported from Google Docs")
        print("  - Combined markdown file")
        print("\nExample:")
        print("  python3 split-from-gdocs.py ~/Downloads/Pop_Cart_Manual.html")
        print("  python3 split-from-gdocs.py ~/Downloads/Pop_Cart_Manual.md")
        sys.exit(1)

    input_file = Path(sys.argv[1])

    if not input_file.exists():
        # Try relative to script directory
        script_dir = Path(__file__).parent
        input_file = script_dir / input_file

    if not input_file.exists():
        print(f"❌ Error: File not found: {sys.argv[1]}")
        sys.exit(1)

    split_manual(input_file)

if __name__ == "__main__":
    main()
