#!/usr/bin/env python3

"""
Command-Line Argument Image Rotator
No input limits - pass files as arguments
Usage: ./rotate-args.py [rotation] file1.jpg file2.png ...
"""

import sys
import os
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("❌ Error: PIL/Pillow not installed")
    print("Install it with: pip3 install Pillow")
    sys.exit(1)


def rotate_image(filepath, rotation):
    """Rotate image by specified degrees"""
    try:
        img = Image.open(filepath)

        # Remove EXIF orientation data if present
        if hasattr(img, '_getexif') and img._getexif() is not None:
            exif = img._getexif()
            if exif and 274 in exif:
                img = img.rotate(0, expand=True)

        # Rotate
        if rotation == 90:
            img = img.rotate(-90, expand=True)
        elif rotation == -90:
            img = img.rotate(90, expand=True)
        elif rotation == 180:
            img = img.rotate(180, expand=True)

        img.save(filepath, quality=95, optimize=True)
        return True
    except Exception as e:
        print(f"   ❌ Error: {e}")
        return False


def print_usage():
    print("Usage: ./rotate-args.py [ROTATION] FILES...")
    print()
    print("ROTATION:")
    print("  90, cw, clockwise       - Rotate 90° clockwise")
    print("  -90, ccw, counter       - Rotate 90° counter-clockwise")
    print("  180, flip               - Rotate 180°")
    print()
    print("Examples:")
    print("  ./rotate-args.py 90 image1.jpg image2.png")
    print("  ./rotate-args.py cw *.webp")
    print("  ./rotate-args.py -90 /path/to/image.jpg")
    print()


def main():
    if len(sys.argv) < 3:
        print("❌ Error: Not enough arguments\n")
        print_usage()
        sys.exit(1)

    # Parse rotation argument
    rotation_arg = sys.argv[1].lower()
    rotation_map = {
        '90': 90, 'cw': 90, 'clockwise': 90, 'right': 90,
        '-90': -90, 'ccw': -90, 'counter': -90, 'left': -90,
        '180': 180, 'flip': 180, 'upside': 180
    }

    if rotation_arg not in rotation_map:
        print(f"❌ Error: Invalid rotation '{rotation_arg}'\n")
        print_usage()
        sys.exit(1)

    rotation = rotation_map[rotation_arg]
    rotation_desc = {90: "90° clockwise", -90: "90° counter-clockwise", 180: "180°"}[rotation]

    # Get file list
    file_paths = sys.argv[2:]

    # Filter to existing image files
    image_paths = []
    for filepath in file_paths:
        if not os.path.isfile(filepath):
            print(f"⚠️  Skipping non-existent: {filepath}")
            continue

        try:
            Image.open(filepath)
            image_paths.append(filepath)
        except:
            print(f"⚠️  Skipping non-image: {Path(filepath).name}")

    if not image_paths:
        print("❌ No valid image files found")
        sys.exit(1)

    print()
    print("=" * 60)
    print(f"  Rotating {len(image_paths)} images {rotation_desc}")
    print("=" * 60)
    print()

    success_count = 0
    fail_count = 0

    for i, filepath in enumerate(image_paths, 1):
        filename = Path(filepath).name
        print(f"[{i}/{len(image_paths)}] {filename}...", end=" ")

        if rotate_image(filepath, rotation):
            print("✅")
            success_count += 1
        else:
            print("❌")
            fail_count += 1

    print()
    print("=" * 60)
    print(f"✅ Success: {success_count}")
    if fail_count > 0:
        print(f"❌ Failed: {fail_count}")
    print("=" * 60)
    print()
    print("💡 Close and reopen Preview to see changes")
    print()


if __name__ == "__main__":
    main()
