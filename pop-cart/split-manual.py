#!/usr/bin/env python3
"""
Split the combined Google Docs export back into individual manual sections.
This reverses the combine-manual.py operation.
"""

import os
import re
from pathlib import Path

def split_manual(input_file):
    """Split combined manual back into individual section files."""
    base_dir = Path(__file__).parent

    print(f"Reading combined manual: {input_file}")

    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"❌ Error: File not found: {input_file}")
        return

    # Split by section markers
    sections = re.split(r'<!-- SECTION: ([^>]+) -->', content)

    # First element is header/preamble, skip it
    sections = sections[1:]

    # Process pairs: (filename, content)
    updates = []
    for i in range(0, len(sections), 2):
        if i + 1 >= len(sections):
            break

        filename = sections[i].strip()
        section_content = sections[i + 1]

        # Clean up the content
        # Remove the section title that was added (if it exists)
        # We'll preserve the original file's structure
        section_content = section_content.strip()

        # Remove trailing dividers
        section_content = re.sub(r'\n*---\n*$', '', section_content)

        # Find the next section marker or end of manual marker
        end_marker = section_content.find('---')
        if end_marker != -1:
            section_content = section_content[:end_marker].strip()

        file_path = base_dir / filename

        # Store for batch writing
        updates.append((file_path, filename, section_content))

    # Show what will be updated
    print(f"\n📋 Found {len(updates)} sections to update:\n")
    for file_path, filename, _ in updates:
        print(f"  ✓ {filename}")

    # Ask for confirmation
    response = input("\n⚠️  This will overwrite the existing section files. Continue? [y/N]: ")

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
    print("\n💡 Tip: Backup files (.backup) have been created for safety.")
    print("   Review changes with: git diff")
    print("   Remove backups when satisfied: rm *.md.backup")

def main():
    """Main entry point."""
    import sys

    if len(sys.argv) < 2:
        print("Usage: python3 split-manual.py <exported-file.md>")
        print("\nExample:")
        print("  python3 split-manual.py POP_CART_MANUAL_COMPLETE.md")
        print("  python3 split-manual.py exported-from-google-docs.md")
        sys.exit(1)

    input_file = Path(sys.argv[1])

    if not input_file.exists():
        # Try relative to script directory
        script_dir = Path(__file__).parent
        input_file = script_dir / input_file

    split_manual(input_file)

if __name__ == "__main__":
    main()
