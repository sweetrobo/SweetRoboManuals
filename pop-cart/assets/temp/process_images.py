#!/usr/bin/env python3
import json
import subprocess
import os
from pathlib import Path

# Load catalog
with open('image-catalog.json', 'r') as f:
    catalog = json.load(f)

base_path = Path('/Users/lightwing/Documents/GitHub/SweetRoboManuals/pop-cart/assets')
temp_path = base_path / 'temp'

processed_count = 0
failed_count = 0

for image in catalog['images']:
    if image['processed']:
        print(f"✓ Skipping {image['original_filename']} (already processed)")
        continue

    original_file = temp_path / image['original_filename']
    if not original_file.exists():
        print(f"✗ Missing: {image['original_filename']}")
        failed_count += 1
        continue

    # Determine target directory
    category = image['suggested_category']
    target_dir = base_path / category
    target_file = target_dir / image['suggested_filename']

    # Convert JPG to WebP
    try:
        cmd = [
            'cwebp',
            '-q', '85',
            str(original_file),
            '-o', str(target_file)
        ]
        result = subprocess.run(cmd, capture_output=True, text=True)
        if result.returncode == 0:
            print(f"✓ Converted: {image['original_filename']} → {category}/{image['suggested_filename']}")
            image['processed'] = True
            image['final_location'] = f"assets/{category}/{image['suggested_filename']}"
            processed_count += 1
        else:
            print(f"✗ Failed to convert {image['original_filename']}: {result.stderr}")
            failed_count += 1
    except Exception as e:
        print(f"✗ Error processing {image['original_filename']}: {e}")
        failed_count += 1

# Update catalog
with open('image-catalog.json', 'w') as f:
    json.dump(catalog, f, indent=2)

print(f"\n{'='*60}")
print(f"Processing Complete!")
print(f"Processed: {processed_count}")
print(f"Failed: {failed_count}")
print(f"Total: {processed_count + failed_count}")
print(f"{'='*60}")
