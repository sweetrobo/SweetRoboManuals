#!/usr/bin/env python3

"""
Rename PNG Files Based on Image Catalog
Reads image-catalog.json and renames PNG files to match their webp counterparts
"""

import json
import os
import sys
from pathlib import Path
import shutil


def main():
    # Get the ui-images directory
    if len(sys.argv) > 1:
        images_dir = Path(sys.argv[1])
    else:
        images_dir = Path.cwd() / "robo-ice-cream" / "assets" / "ui-images"

    # Check if directory exists
    if not images_dir.exists():
        print(f"❌ Error: Directory not found: {images_dir}")
        sys.exit(1)

    # Find the catalog file
    catalog_file = images_dir / "image-catalog.json"

    if not catalog_file.exists():
        print(f"❌ Error: Catalog not found: {catalog_file}")
        sys.exit(1)

    # Read the catalog
    try:
        with open(catalog_file, 'r') as f:
            catalog = json.load(f)
    except Exception as e:
        print(f"❌ Error reading catalog: {e}")
        sys.exit(1)

    print("=" * 60)
    print("  PNG File Renamer (Based on Image Catalog)")
    print("=" * 60)
    print()
    print(f"📁 Directory: {images_dir}")
    print(f"📋 Catalog: {catalog_file}")
    print()

    # Build mapping from original webp names to new names
    rename_map = {}
    for image in catalog.get('images', []):
        original = image.get('original_filename', '')
        new_name = image.get('filename', '')

        if original and new_name:
            # Convert webp names to png names
            original_png = original.replace('.webp', '.png')
            new_png = new_name.replace('.webp', '.png')

            # Check if the original PNG exists
            original_path = images_dir / original_png
            if original_path.exists():
                rename_map[original_png] = new_png

    if not rename_map:
        print("❌ No PNG files found that need renaming")
        sys.exit(0)

    print(f"📸 Found {len(rename_map)} PNG files to rename:")
    print()

    # Show what will be renamed
    for i, (old_name, new_name) in enumerate(rename_map.items(), 1):
        print(f"{i:2d}. {old_name}")
        print(f"    → {new_name}")
        print()

    # Ask for confirmation
    response = input("Proceed with renaming? [y/N]: ").strip().lower()

    if response != 'y':
        print("❌ Cancelled")
        sys.exit(0)

    print()
    print("🔄 Renaming files...")
    print()

    success_count = 0
    fail_count = 0

    for old_name, new_name in rename_map.items():
        old_path = images_dir / old_name
        new_path = images_dir / new_name

        try:
            # Check if target already exists
            if new_path.exists():
                print(f"⚠️  Target exists, creating backup: {new_name}")
                backup_path = images_dir / f"{new_name}.backup"
                shutil.move(str(new_path), str(backup_path))
                print(f"   Backed up to: {backup_path.name}")

            # Rename the file
            shutil.move(str(old_path), str(new_path))
            print(f"✅ {old_name} → {new_name}")
            success_count += 1

        except Exception as e:
            print(f"❌ Failed: {old_name}")
            print(f"   Error: {e}")
            fail_count += 1

    print()
    print("=" * 60)
    print(f"✅ Success: {success_count}")
    if fail_count > 0:
        print(f"❌ Failed: {fail_count}")
    print("=" * 60)
    print()

    if success_count > 0:
        print("💡 PNG files have been renamed to match their webp counterparts")
        print("   You can now commit both PNG and webp files together")
        print()


if __name__ == "__main__":
    main()
