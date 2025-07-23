#!/usr/bin/env python3
"""
Content Migration Script for Sweet Robo Manuals
Copies content from draft files to mdBook structure with updated image references
"""

import os
import re
import json
from pathlib import Path
import shutil

def load_image_metadata(machine_dir):
    """Load the image metadata JSON file"""
    metadata_path = Path(machine_dir) / "assets" / "images" / "image-metadata.json"
    if metadata_path.exists():
        with open(metadata_path, 'r') as f:
            return json.load(f)
    return None

def create_image_mapping(metadata):
    """Create a mapping from original filename to new WebP path"""
    mapping = {}
    if metadata and 'images' in metadata:
        for img in metadata['images']:
            original = img['original_filename']
            new_path = img['path']
            mapping[original] = new_path
            # Also map without extension
            mapping[Path(original).stem] = new_path
    return mapping

def update_image_references(content, image_mapping, current_file_path):
    """Update image references in markdown content"""
    # Pattern to match image references
    patterns = [
        # Standard markdown images: ![alt](image.png)
        (r'!\[([^\]]*)\]\(([^)]+\.(?:png|jpg|jpeg|PNG|JPG|JPEG))\)', 'standard'),
        # Reference-style images: ![alt][ref]
        (r'!\[([^\]]*)\]\[([^\]]+)\]', 'reference'),
        # Reference definitions: [ref]: image.png
        (r'\[([^\]]+)\]:\s*([^)\s]+\.(?:png|jpg|jpeg|PNG|JPG|JPEG))(?:\s+.*)?', 'definition'),
        # Table images: ![][ref]
        (r'!\[\]\[([^\]]+)\]', 'table_ref')
    ]
    
    updated_content = content
    
    for pattern, style in patterns:
        for match in re.finditer(pattern, updated_content):
            if style == 'standard':
                alt_text = match.group(1)
                img_path = match.group(2)
                filename = Path(img_path).name
                
                if filename in image_mapping:
                    new_path = f"../{image_mapping[filename]}"
                    new_ref = f"![{alt_text}]({new_path})"
                    updated_content = updated_content.replace(match.group(0), new_ref)
                    
            elif style == 'definition':
                ref_name = match.group(1)
                img_path = match.group(2)
                filename = Path(img_path).name
                
                if filename in image_mapping:
                    new_path = f"../{image_mapping[filename]}"
                    # Keep the reference style but update the path
                    new_def = f"[{ref_name}]: {new_path}"
                    updated_content = updated_content.replace(match.group(0), new_def)
    
    # Add figure captions after images
    lines = updated_content.split('\n')
    new_lines = []
    for i, line in enumerate(lines):
        new_lines.append(line)
        # Check if this line contains an image
        if re.match(r'!\[.*\]\(.*\.webp\)', line):
            # Extract the image path to find caption from metadata
            img_match = re.search(r'!\[.*\]\((.*\.webp)\)', line)
            if img_match:
                img_path = img_match.group(1).replace('../', '')
                # Add a caption line
                new_lines.append(f"\n*Figure: {Path(img_path).stem.replace('-', ' ').title()}*\n")
    
    return '\n'.join(new_lines)

def migrate_content(machine_dir, dry_run=False):
    """Migrate content from draft to mdBook structure"""
    machine_path = Path(machine_dir)
    draft_dir = machine_path / "resources" / "Draft" / "Draft"
    
    # Load image metadata
    metadata = load_image_metadata(machine_dir)
    image_mapping = create_image_mapping(metadata)
    
    # Content migration mapping
    migrations = [
        # Introduction
        {
            'source': draft_dir / '03 Intro' / '1 Introduction.md' / '1 Introduction.md',
            'dest': machine_path / 'introduction' / 'introduction.md',
            'title': '# Introduction\n\n'
        },
        {
            'source': draft_dir / '03 Intro' / '2 Importance of the Manual.md' / '2 Importance of the Manual.md',
            'dest': machine_path / 'introduction' / 'importance-of-manual.md',
            'title': '# Importance of the Manual\n\n'
        },
        # Safety
        {
            'source': draft_dir / '04 Safety' / '04 Safety.md',
            'dest': machine_path / 'safety' / 'safety.md',
            'title': '# Safety Guidelines\n\n'
        },
        {
            'source': draft_dir / '04 Safety' / '1 Symbols in This Manual.md',
            'dest': machine_path / 'safety' / 'symbols.md',
            'title': '# Symbols in This Manual\n\n'
        },
        {
            'source': draft_dir / '04 Safety' / '2 1. General Safety.md',
            'dest': machine_path / 'safety' / 'general-safety.md',
            'title': '# General Safety\n\n'
        },
        {
            'source': draft_dir / '04 Safety' / '3 2. Electrical Safety.md',
            'dest': machine_path / 'safety' / 'electrical-safety.md',
            'title': '# Electrical Safety\n\n'
        },
        {
            'source': draft_dir / '04 Safety' / '4 3. Operational Safety.md',
            'dest': machine_path / 'safety' / 'operational-safety.md',
            'title': '# Operational Safety\n\n'
        },
        {
            'source': draft_dir / '04 Safety' / '5 4. Cleaning and Maintenance Safety.md',
            'dest': machine_path / 'safety' / 'cleaning-maintenance-safety.md',
            'title': '# Cleaning and Maintenance Safety\n\n'
        },
        {
            'source': draft_dir / '04 Safety' / '6 5. Servicing and Repairs.md',
            'dest': machine_path / 'safety' / 'servicing-repairs.md',
            'title': '# Servicing and Repairs\n\n'
        },
        {
            'source': draft_dir / '04 Safety' / '7 6. Emergency Contact.md' / '7 6. Emergency Contact.md',
            'dest': machine_path / 'safety' / 'emergency-contact.md',
            'title': '# Emergency Contact\n\n'
        },
        # Getting Started
        {
            'source': draft_dir / '05 Getting Started' / '1 Product Overview and Specifications.md',
            'dest': machine_path / 'getting-started' / 'product-overview.md',
            'title': '# Product Overview\n\n'
        },
        {
            'source': draft_dir / '05 Getting Started' / '2 Technical Specifications.md',
            'dest': machine_path / 'getting-started' / 'technical-specifications.md',
            'title': '# Technical Specifications\n\n'
        },
        {
            'source': draft_dir / '05 Getting Started' / '3 Machine Components Overview' / '3 Machine Components Overview.md' / '3 Machine Components Overview.md',
            'dest': machine_path / 'getting-started' / 'components-overview.md',
            'title': '# Machine Components Overview\n\n'
        },
        # Add more migrations as needed...
    ]
    
    processed = 0
    for migration in migrations:
        if migration['source'].exists():
            print(f"Migrating: {migration['source'].name} → {migration['dest'].name}")
            
            # Read source content
            with open(migration['source'], 'r') as f:
                content = f.read()
            
            # Update image references
            updated_content = update_image_references(content, image_mapping, migration['dest'])
            
            # Add title if not present
            if not updated_content.startswith('#'):
                updated_content = migration['title'] + updated_content
            
            if not dry_run:
                # Ensure destination directory exists
                migration['dest'].parent.mkdir(parents=True, exist_ok=True)
                
                # Write updated content
                with open(migration['dest'], 'w') as f:
                    f.write(updated_content)
            
            processed += 1
        else:
            print(f"Warning: Source file not found: {migration['source']}")
    
    print(f"\n{'Would migrate' if dry_run else 'Migrated'} {processed} files")

if __name__ == "__main__":
    import argparse
    
    parser = argparse.ArgumentParser(description="Migrate content from draft to mdBook")
    parser.add_argument("machine_dir", help="Path to machine directory (e.g., 'Candy Monster')")
    parser.add_argument("--dry-run", action="store_true", help="Preview without making changes")
    
    args = parser.parse_args()
    
    migrate_content(args.machine_dir, args.dry_run)