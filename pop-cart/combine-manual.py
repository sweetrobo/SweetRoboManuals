#!/usr/bin/env python3
"""
Combine Pop Cart manual sections into a single Google Docs-friendly markdown file.
"""

import os
import re
from pathlib import Path

# Define the manual structure based on SUMMARY.md
SECTIONS = [
    ("title-page.md", "Title Page"),
    ("overview.md", "Overview"),
    ("setup.md", "Setup & Installation"),
    ("operation.md", "Operation Guide"),
    ("maintenance.md", "Maintenance"),
    ("troubleshooting.md", "Troubleshooting"),
    ("parts-service.md", "Parts & Service"),
    ("safety.md", "Safety"),
]

def convert_html_images_to_markdown(content):
    """
    Convert HTML img tags to markdown image syntax for Google Docs compatibility.
    Example: <img src="./assets/overview/image.webp" alt="Description" />
    becomes: ![Description](./assets/overview/image.webp)
    """
    # Pattern to match img tags with src and optional alt
    pattern = r'<img[^>]+src="([^"]+)"[^>]*alt="([^"]*)"[^>]*/?>'

    def replace_img(match):
        src = match.group(1)
        alt = match.group(2) if match.group(2) else "Image"
        return f"![{alt}]({src})"

    content = re.sub(pattern, replace_img, content)

    # Handle img tags without alt attribute
    pattern_no_alt = r'<img[^>]+src="([^"]+)"[^>]*/?>'
    content = re.sub(pattern_no_alt, lambda m: f"![Image]({m.group(1)})", content)

    return content

def clean_html_tags(content):
    """
    Remove or convert common HTML tags to markdown equivalents.
    Preserves content while making it Google Docs friendly.
    """
    # Remove div and span tags but keep content
    content = re.sub(r'<div[^>]*>', '\n', content)
    content = re.sub(r'</div>', '\n', content)
    content = re.sub(r'<span[^>]*>', '', content)
    content = re.sub(r'</span>', '', content)

    # Convert br to newlines
    content = re.sub(r'<br\s*/?>', '\n', content)

    # Remove class/style attributes from remaining tags
    content = re.sub(r'\s+class="[^"]*"', '', content)
    content = re.sub(r'\s+style="[^"]*"', '', content)

    return content

def process_section(file_path):
    """Read and process a markdown section file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Convert HTML images to markdown
        content = convert_html_images_to_markdown(content)

        # Clean HTML tags
        content = clean_html_tags(content)

        return content
    except FileNotFoundError:
        return f"\n*[Section file not found: {file_path}]*\n"

def main():
    """Combine all manual sections into a single file."""
    base_dir = Path(__file__).parent
    output_file = base_dir / "POP_CART_MANUAL_COMPLETE.md"

    print("Combining Pop Cart manual sections...")

    with open(output_file, 'w', encoding='utf-8') as out:
        # Write header
        out.write("# Pop Cart Manual - Complete Edition\n\n")
        out.write("*Combined manual for team review and editing*\n\n")
        out.write("---\n\n")

        # Add note about images
        out.write("## 📝 Notes for Editing\n\n")
        out.write("**👥 Team Editors:** See `TEAM_EDITING_GUIDE.md` for detailed instructions!\n\n")
        out.write("### Key Points:\n\n")
        out.write("- **Images**: Image references appear as `![Description](./assets/path/image.webp)`\n")
        out.write("  - This is normal - images are local files and won't display in Google Docs\n")
        out.write("  - You CAN edit the description (text in brackets)\n")
        out.write("  - DON'T delete the file paths\n\n")
        out.write("- **Section Markers**: Comments like `<!-- SECTION: filename.md -->` must stay!\n")
        out.write("  - These help us split the document back into individual files\n\n")
        out.write("- **Focus**: Edit the text content - fix typos, clarify instructions, improve wording\n\n")
        out.write("---\n\n")

        # Process each section
        for filename, section_title in SECTIONS:
            file_path = base_dir / filename

            print(f"  Processing: {section_title} ({filename})")

            # Add section marker (helps with re-import)
            out.write(f"<!-- SECTION: {filename} -->\n\n")

            # Add section title as H1 if not title page
            if filename != "title-page.md":
                out.write(f"# {section_title}\n\n")

            # Process and write content
            content = process_section(file_path)
            out.write(content)

            # Add section divider
            out.write("\n\n---\n\n")

        # Add metadata footer
        out.write("<!-- END OF MANUAL -->\n")
        out.write(f"\n*Generated from individual sections on {Path.cwd()}*\n")

    print(f"\n✅ Manual combined successfully!")
    print(f"📄 Output: {output_file}")
    print(f"\n📋 Next steps:")
    print(f"   1. Import {output_file.name} into Google Docs")
    print(f"   2. Share with team for editing")
    print(f"   3. Export edited version as markdown")
    print(f"   4. Use section markers (<!-- SECTION: filename -->) to re-import changes")

if __name__ == "__main__":
    main()
