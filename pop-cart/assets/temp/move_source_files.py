#!/usr/bin/env python3
"""
Move original JPG source files to the same folders as their WebP versions,
using the same base filename (just .jpg instead of .webp)
"""
import json
import shutil
from pathlib import Path

# Load catalog
with open('image-catalog.json', 'r') as f:
    catalog = json.load(f)

base_path = Path('/Users/lightwing/Documents/GitHub/SweetRoboManuals/pop-cart')
temp_path = base_path / 'assets' / 'temp'

moved_count = 0
skipped_count = 0
error_count = 0

print("="*70)
print("MOVING SOURCE JPG FILES TO MATCH WEBP LOCATIONS")
print("="*70)

for img in catalog['images']:
    original_file = temp_path / img['original_filename']

    # Skip if original doesn't exist
    if not original_file.exists():
        print(f"⊘ Source not found: {img['original_filename']}")
        skipped_count += 1
        continue

    # Get the WebP location and create JPG path
    final_location = img.get('final_location', '')
    if not final_location:
        print(f"⊘ No final location for: {img['original_filename']}")
        skipped_count += 1
        continue

    # Replace .webp with .jpg
    jpg_location = final_location.replace('.webp', '.jpg')
    target_file = base_path / jpg_location

    # Check if target already exists
    if target_file.exists():
        print(f"⊘ Already exists: {jpg_location}")
        skipped_count += 1
        continue

    try:
        # Move the file
        shutil.move(str(original_file), str(target_file))
        print(f"✓ Moved: {img['original_filename']}")
        print(f"     → {jpg_location}")
        moved_count += 1
    except Exception as e:
        print(f"✗ Error moving {img['original_filename']}: {e}")
        error_count += 1

print("\n" + "="*70)
print("SUMMARY")
print("="*70)
print(f"✓ Moved:   {moved_count} files")
print(f"⊘ Skipped: {skipped_count} files")
print(f"✗ Errors:  {error_count} files")
print("="*70)

# Show what's left in temp
remaining = list(temp_path.glob('*.jpg'))
if remaining:
    print(f"\nRemaining JPG files in temp/: {len(remaining)}")
else:
    print(f"\n✓ All JPG files moved from temp/")
