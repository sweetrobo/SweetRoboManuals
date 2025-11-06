#!/usr/bin/env python3
"""
Convert the combined manual to Google Docs-friendly formats.
Generates: .docx, .html, and plain .txt versions
"""

import re
from pathlib import Path

def markdown_to_html(md_content):
    """Convert basic markdown to HTML for Google Docs import."""
    html = md_content

    # Convert headers
    html = re.sub(r'^# (.+)$', r'<h1>\1</h1>', html, flags=re.MULTILINE)
    html = re.sub(r'^## (.+)$', r'<h2>\1</h2>', html, flags=re.MULTILINE)
    html = re.sub(r'^### (.+)$', r'<h3>\1</h3>', html, flags=re.MULTILINE)
    html = re.sub(r'^#### (.+)$', r'<h4>\1</h4>', html, flags=re.MULTILINE)

    # Convert bold
    html = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', html)

    # Convert italic
    html = re.sub(r'\*(.+?)\*', r'<em>\1</em>', html)
    html = re.sub(r'_(.+?)_', r'<em>\1</em>', html)

    # Convert code/monospace
    html = re.sub(r'`(.+?)`', r'<code>\1</code>', html)

    # Convert images (keep as is for reference)
    html = re.sub(r'!\[([^\]]*)\]\(([^)]+)\)', r'<p><em>📷 Image: \1</em><br/>Path: <code>\2</code></p>', html)

    # Convert links
    html = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<a href="\2">\1</a>', html)

    # Convert horizontal rules
    html = re.sub(r'^---$', r'<hr/>', html, flags=re.MULTILINE)

    # Convert unordered lists
    lines = html.split('\n')
    in_ul = False
    processed = []

    for line in lines:
        # Detect list items
        if re.match(r'^[\-\*\+] ', line):
            if not in_ul:
                processed.append('<ul>')
                in_ul = True
            item = re.sub(r'^[\-\*\+] (.+)$', r'<li>\1</li>', line)
            processed.append(item)
        else:
            if in_ul:
                processed.append('</ul>')
                in_ul = False
            processed.append(line)

    if in_ul:
        processed.append('</ul>')

    html = '\n'.join(processed)

    # Convert paragraphs (lines that aren't already HTML tags)
    lines = html.split('\n')
    processed = []

    for line in lines:
        stripped = line.strip()
        if stripped and not stripped.startswith('<') and not stripped.startswith('<!--'):
            processed.append(f'<p>{line}</p>')
        else:
            processed.append(line)

    return '\n'.join(processed)

def create_html_file(input_file, output_file):
    """Create a complete HTML file that Google Docs can import."""

    with open(input_file, 'r', encoding='utf-8') as f:
        md_content = f.read()

    html_body = markdown_to_html(md_content)

    # Create complete HTML document
    html_doc = f"""<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Pop Cart Manual - Complete Edition</title>
    <style>
        body {{
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }}
        h1 {{ color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; }}
        h2 {{ color: #34495e; margin-top: 30px; }}
        h3 {{ color: #7f8c8d; }}
        code {{
            background: #f4f4f4;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
        }}
        hr {{ border: 1px solid #ddd; margin: 30px 0; }}
        .section-marker {{
            background: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 10px;
            margin: 20px 0;
            font-family: monospace;
        }}
        .image-ref {{
            background: #e7f3ff;
            border-left: 4px solid #2196F3;
            padding: 10px;
            margin: 10px 0;
        }}
    </style>
</head>
<body>
{html_body}
</body>
</html>"""

    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(html_doc)

    return output_file

def create_plain_text(input_file, output_file):
    """Create plain text version."""

    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove markdown syntax for plain text
    text = content

    # Remove image markdown but keep reference
    text = re.sub(r'!\[([^\]]*)\]\(([^)]+)\)', r'[IMAGE: \1 - Path: \2]', text)

    # Remove links but keep text
    text = re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', text)

    # Remove bold/italic markers
    text = re.sub(r'\*\*(.+?)\*\*', r'\1', text)
    text = re.sub(r'\*(.+?)\*', r'\1', text)

    # Remove code markers
    text = re.sub(r'`(.+?)`', r'\1', text)

    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(text)

    return output_file

def main():
    """Generate Google Docs-friendly formats."""
    base_dir = Path(__file__).parent
    input_file = base_dir / "POP_CART_MANUAL_COMPLETE.md"

    if not input_file.exists():
        print(f"❌ Error: {input_file} not found!")
        print("Run combine-manual.py first.")
        return

    print("Converting Pop Cart manual to Google Docs-friendly formats...\n")

    # Create HTML version (best for Google Docs)
    html_file = base_dir / "POP_CART_MANUAL_COMPLETE.html"
    create_html_file(input_file, html_file)
    print(f"✅ HTML created: {html_file.name}")
    print(f"   → Best option: File → Open in Google Docs\n")

    # Create plain text version (fallback)
    txt_file = base_dir / "POP_CART_MANUAL_COMPLETE.txt"
    create_plain_text(input_file, txt_file)
    print(f"✅ Plain text created: {txt_file.name}")
    print(f"   → Fallback: Copy/paste into Google Docs\n")

    # File sizes
    import os
    md_size = os.path.getsize(input_file) / 1024
    html_size = os.path.getsize(html_file) / 1024
    txt_size = os.path.getsize(txt_file) / 1024

    print("📊 File Sizes:")
    print(f"   Markdown: {md_size:.1f} KB")
    print(f"   HTML:     {html_size:.1f} KB")
    print(f"   Text:     {txt_size:.1f} KB")

    print("\n📋 How to Use:")
    print("\n1. **HTML (Recommended)**")
    print("   - Open Google Drive in browser")
    print("   - Right-click → Google Docs → Open with Google Docs")
    print(f"   - Upload: {html_file.name}")
    print("   - Formatting is preserved!")

    print("\n2. **Direct Upload (Alternative)**")
    print("   - Go to docs.google.com")
    print("   - File → Open → Upload")
    print(f"   - Upload: {html_file.name}")

    print("\n3. **Plain Text (Fallback)**")
    print(f"   - Open {txt_file.name} in text editor")
    print("   - Copy all content")
    print("   - Paste into new Google Doc")
    print("   - No formatting, but works 100%")

    print(f"\n✅ Files ready in: {base_dir}/")

if __name__ == "__main__":
    main()
