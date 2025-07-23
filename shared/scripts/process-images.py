#!/usr/bin/env python3
"""
Image Processing Script for Sweet Robo Manuals
Converts images to WebP format and generates metadata for AI assistant
"""

import os
import json
import subprocess
import sys
from pathlib import Path
from datetime import datetime
import hashlib

def get_image_info(image_path):
    """Extract basic image information"""
    try:
        result = subprocess.run(['identify', '-ping', '-format', '%[width]x%[height]', str(image_path)], 
                              capture_output=True, text=True)
        if result.returncode == 0:
            width, height = result.stdout.strip().split('x')
            return {'width': int(width), 'height': int(height)}
    except:
        pass
    return {'width': 0, 'height': 0}

def generate_descriptive_filename(original_path, section):
    """Generate descriptive filename based on original name and section"""
    original_name = Path(original_path).stem
    
    # Common replacements for better filenames
    replacements = {
        'PastedGraphic': 'screenshot',
        'CleanShot': 'photo',
        'AD_4nX': 'diagram',
        '77969-optimisedtiff': 'pc-component',
        'generalview': 'front-view-labeled',
        'rightsideinternalview': 'right-side-internal-view',
        'Rightsideinternalsview': 'right-side-internal-components',
        'taggedwires': 'touch-screen-connections',
        'Sparepartscustomergets': 'spare-parts-kit',
        'Keyspositionnearbackpowerline': 'keys-position-power-line',
        'cupsarea': 'cups-dispenser-area',
        '6candydisplays': 'candy-display-units',
        'Youneedtotakeoffthescrewstofillupwithcandiesfordisplay': 'display-refill-screws',
        'devicesettings': 'device-settings-screen',
        'passwordinputscreen': 'password-input-screen',
        'positiontopresstogetintothesettings': 'settings-access-position',
        'managementscreen': 'management-interface',
        'status': 'device-status-screen',
        'inventoryoverview': 'inventory-overview-screen',
        'editcandyitem': 'edit-candy-item-screen',
        'cupstockedit': 'cup-stock-edit-screen',
        'testpage': 'test-functions-screen',
        '5selectnone': 'candy-selection-none',
        '5select5': 'candy-selection-5-items'
    }
    
    # Apply replacements
    new_name = original_name.lower()
    for old, new in replacements.items():
        if old.lower() in new_name:
            new_name = new_name.replace(old.lower(), new)
    
    # Add section prefix if not already present
    if section not in new_name:
        new_name = f"{section}-{new_name}"
    
    # Clean up the filename
    new_name = new_name.replace(' ', '-').replace('_', '-')
    new_name = '-'.join(filter(None, new_name.split('-')))  # Remove empty parts
    
    return new_name

def generate_tags(filename, section, original_path):
    """Generate relevant tags based on filename and section"""
    tags = [section]
    
    # Section-specific base tags
    section_tags = {
        'header': ['branding', 'logo', 'title'],
        'introduction': ['overview', 'getting-started', 'manual-intro'],
        'safety': ['warning', 'caution', 'safety-guidelines'],
        'getting-started': ['setup', 'installation', 'configuration'],
        'operation': ['usage', 'interface', 'controls'],
        'maintenance': ['cleaning', 'service', 'upkeep'],
        'troubleshooting': ['problems', 'solutions', 'errors'],
        'support': ['contact', 'help', 'assistance'],
        'legal': ['warranty', 'terms', 'conditions'],
        'feedback': ['qr-code', 'online-manual', 'contact']
    }
    
    if section in section_tags:
        tags.extend(section_tags[section])
    
    # Content-based tags
    filename_lower = filename.lower()
    
    # Component tags
    if any(word in filename_lower for word in ['component', 'parts', 'hardware']):
        tags.extend(['components', 'hardware', 'parts-identification'])
    
    # Interface tags
    if any(word in filename_lower for word in ['screen', 'interface', 'display', 'touch']):
        tags.extend(['user-interface', 'touchscreen', 'display'])
    
    # Payment tags
    if any(word in filename_lower for word in ['payment', 'cash', 'card', 'bill', 'coin']):
        tags.extend(['payment-system', 'transactions', 'money-handling'])
    
    # Candy-specific tags
    if 'candy' in filename_lower:
        tags.extend(['candy', 'product', 'inventory'])
    
    # View tags
    if any(word in filename_lower for word in ['view', 'front', 'side', 'internal', 'external']):
        tags.extend(['machine-view', 'perspective', 'orientation'])
    
    # Settings/config tags
    if any(word in filename_lower for word in ['settings', 'config', 'setup', 'login', 'password']):
        tags.extend(['configuration', 'admin-access', 'backend'])
    
    # Status/monitoring tags
    if any(word in filename_lower for word in ['status', 'statistics', 'inventory', 'test']):
        tags.extend(['monitoring', 'diagnostics', 'system-health'])
    
    # Customer vs operator tags
    if 'customer' in str(original_path).lower():
        tags.extend(['customer-facing', 'public-interface', 'end-user'])
    elif 'operator' in str(original_path).lower():
        tags.extend(['operator-interface', 'admin-panel', 'management'])
    
    # Remove duplicates and return
    return sorted(list(set(tags)))

def generate_caption(filename, section):
    """Generate appropriate figure caption"""
    # Clean filename for caption
    words = filename.replace('-', ' ').replace('_', ' ').split()
    
    # Remove section prefix if present
    if words and words[0] == section:
        words = words[1:]
    
    # Capitalize appropriately
    caption_words = []
    for word in words:
        if word.lower() in ['and', 'or', 'the', 'of', 'in', 'on', 'at', 'to', 'for']:
            caption_words.append(word.lower())
        else:
            caption_words.append(word.capitalize())
    
    if caption_words:
        caption_words[0] = caption_words[0].capitalize()
    
    return ' '.join(caption_words)

def convert_to_webp(input_path, output_path, quality=85):
    """Convert image to WebP format"""
    try:
        cmd = ['cwebp', '-q', str(quality), str(input_path), '-o', str(output_path)]
        result = subprocess.run(cmd, capture_output=True, text=True)
        return result.returncode == 0
    except FileNotFoundError:
        print("Error: cwebp not found. Please install webp tools:")
        print("  macOS: brew install webp")
        print("  Ubuntu: sudo apt-get install webp")
        return False

def process_images(machine_dir, dry_run=False):
    """Process all images in the machine directory"""
    machine_path = Path(machine_dir)
    draft_dir = machine_path / "resources" / "Draft"
    assets_dir = machine_path / "assets" / "images"
    original_images_dir = machine_path / "resources" / "original-images"
    
    if not draft_dir.exists():
        print(f"Error: Draft directory not found at {draft_dir}")
        return
    
    # Create directories if not in dry run
    if not dry_run:
        assets_dir.mkdir(parents=True, exist_ok=True)
        original_images_dir.mkdir(parents=True, exist_ok=True)
    
    metadata = {
        "manual_name": machine_path.name,
        "generation_date": datetime.now().isoformat(),
        "purpose": "AI assistant training dataset for Sweet Robo manual",
        "images": []
    }
    
    # Map draft sections to final sections
    section_mapping = {
        '01 Header': 'header',
        '03 Intro': 'introduction',
        '04 Safety': 'safety',
        '05 Getting Started': 'getting-started',
        '06 Operation': 'operation',
        '07 Maintenance': 'maintenance',
        '08 Troubleshooting': 'troubleshooting',
        '09 Customer Support': 'support',
        '10 Legal': 'legal',
        '11 Online Manual': 'feedback'
    }
    
    # Find all images
    image_extensions = ['*.png', '*.jpg', '*.jpeg', '*.PNG', '*.JPG', '*.JPEG']
    all_images = []
    
    for ext in image_extensions:
        all_images.extend(draft_dir.rglob(ext))
    
    print(f"Found {len(all_images)} images to process")
    
    for idx, image_path in enumerate(all_images, 1):
        print(f"\nProcessing {idx}/{len(all_images)}: {image_path.name}")
        
        # Determine section
        section = None
        for draft_section, final_section in section_mapping.items():
            if draft_section in str(image_path):
                section = final_section
                break
        
        if not section:
            # Try to determine from path
            if 'Machine Components' in str(image_path):
                section = 'getting-started'
            elif 'Customer Interface' in str(image_path):
                section = 'operation'
            elif 'Operator Interface' in str(image_path):
                section = 'operation'
            else:
                section = 'general'
        
        # Generate new filename
        new_filename = generate_descriptive_filename(image_path, section)
        webp_filename = f"{new_filename}.webp"
        
        # Determine output paths
        if 'Customer Interface' in str(image_path):
            section_dir = assets_dir / 'operation' / 'customer-interface'
        elif 'Operator Interface' in str(image_path):
            section_dir = assets_dir / 'operation' / 'operator-interface'
        elif 'Machine Components' in str(image_path):
            section_dir = assets_dir / 'getting-started' / 'components'
        else:
            section_dir = assets_dir / section
        
        if not dry_run:
            section_dir.mkdir(parents=True, exist_ok=True)
        
        webp_path = section_dir / webp_filename
        
        # Get image info
        img_info = get_image_info(image_path)
        
        # Generate metadata
        image_metadata = {
            "filename": webp_filename,
            "original_filename": image_path.name,
            "path": str(webp_path.relative_to(machine_path)),
            "section": section,
            "subsection": str(image_path.parent.name),
            "dimensions": img_info,
            "format": "WebP",
            "tags": generate_tags(new_filename, section, image_path),
            "description": "",  # To be filled manually or by AI
            "caption": f"Figure: {generate_caption(new_filename, section)}",
            "alt_text": generate_caption(new_filename, section),
            "use_cases": [],  # To be filled based on content
            "text_in_image": [],  # To be filled after visual inspection
            "ai_training_notes": ""  # To be filled based on analysis
        }
        
        metadata["images"].append(image_metadata)
        
        if not dry_run:
            # Copy original
            original_path = original_images_dir / image_path.name
            subprocess.run(['cp', str(image_path), str(original_path)])
            
            # Convert to WebP
            if convert_to_webp(image_path, webp_path):
                print(f"  ✓ Converted to {webp_path.name}")
            else:
                print(f"  ✗ Failed to convert {image_path.name}")
    
    # Save metadata
    metadata_path = machine_path / "assets" / "images" / "image-metadata.json"
    
    if dry_run:
        print("\n=== DRY RUN - Metadata Preview ===")
        print(json.dumps(metadata, indent=2))
    else:
        metadata_path.parent.mkdir(parents=True, exist_ok=True)
        with open(metadata_path, 'w') as f:
            json.dump(metadata, f, indent=2)
        print(f"\nMetadata saved to {metadata_path}")
    
    print(f"\n{'Would process' if dry_run else 'Processed'} {len(all_images)} images")

if __name__ == "__main__":
    import argparse
    
    parser = argparse.ArgumentParser(description="Process images for Sweet Robo manuals")
    parser.add_argument("machine_dir", help="Path to machine directory (e.g., 'Candy Monster')")
    parser.add_argument("--dry-run", action="store_true", help="Preview without making changes")
    
    args = parser.parse_args()
    
    process_images(args.machine_dir, args.dry_run)