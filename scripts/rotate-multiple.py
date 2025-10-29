#!/usr/bin/env python3

"""
Multi-Image Rotator
Drag multiple images at once and rotate them all with the same rotation
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
        # Open image
        img = Image.open(filepath)

        # Remove EXIF orientation data if present
        if hasattr(img, '_getexif') and img._getexif() is not None:
            exif = img._getexif()
            if exif and 274 in exif:  # Orientation tag
                # Remove orientation
                img = img.rotate(0, expand=True)

        # Rotate based on choice
        if rotation == 90:
            img = img.rotate(-90, expand=True)  # PIL rotates counter-clockwise
        elif rotation == -90:
            img = img.rotate(90, expand=True)
        elif rotation == 180:
            img = img.rotate(180, expand=True)

        # Save back to same file
        img.save(filepath, quality=95, optimize=True)

        return True
    except Exception as e:
        print(f"   ❌ Error: {e}")
        return False


def parse_file_paths(input_str):
    """Parse multiple file paths from drag-and-drop input"""
    # Handle escaped spaces and special characters
    input_str = input_str.replace("\\ ", " ")
    input_str = input_str.replace("\\(", "(")
    input_str = input_str.replace("\\)", ")")
    input_str = input_str.replace("\\&", "&")
    input_str = input_str.replace("\\[", "[")
    input_str = input_str.replace("\\]", "]")

    # Remove quotes
    input_str = input_str.strip("'\"")

    # Split by spaces, but keep paths with spaces together
    # This handles multiple files dragged at once
    paths = []
    current_path = []

    # If there's only one file, just return it
    if os.path.isfile(input_str):
        return [input_str]

    # Try splitting by common separators
    # When you drag multiple files, they're often separated by newlines or spaces
    for part in input_str.split():
        test_path = ' '.join(current_path + [part])
        if os.path.isfile(test_path):
            paths.append(test_path)
            current_path = []
        else:
            current_path.append(part)

    # Add any remaining path
    if current_path:
        test_path = ' '.join(current_path)
        if os.path.isfile(test_path):
            paths.append(test_path)

    return paths


def main():
    print("=" * 50)
    print("        Multi-Image Rotator")
    print("=" * 50)
    print()
    print("Drag and drop MULTIPLE image files at once!")
    print("(Hold Cmd and click multiple files in Finder)")
    print()
    print("Press Ctrl+C to exit")
    print()

    while True:
        try:
            # Get file paths
            print("=" * 50)
            input_str = input("Drag files here (or type paths): ").strip()

            if not input_str:
                continue

            # Parse file paths
            file_paths = parse_file_paths(input_str)

            if not file_paths:
                print("❌ No valid files found")
                print()
                continue

            # Filter to only image files
            image_paths = []
            for filepath in file_paths:
                try:
                    Image.open(filepath)
                    image_paths.append(filepath)
                except:
                    print(f"⚠️  Skipping non-image: {Path(filepath).name}")

            if not image_paths:
                print("❌ No valid image files found")
                print()
                continue

            print()
            print(f"📸 Found {len(image_paths)} image(s):")
            for i, path in enumerate(image_paths, 1):
                print(f"   {i}. {Path(path).name}")

            print()
            print("Select rotation to apply to ALL images:")
            print("  1) Rotate 90° clockwise (→)")
            print("  2) Rotate 90° counter-clockwise (←)")
            print("  3) Rotate 180° (flip)")
            print("  s) Skip these files")
            print()

            choice = input("Choice [1-3/s]: ").strip().lower()

            if choice == 's':
                print("⏭️  Skipped all files")
                print()
                continue

            rotation_map = {
                '1': (90, "90° clockwise"),
                '2': (-90, "90° counter-clockwise"),
                '3': (180, "180°")
            }

            if choice not in rotation_map:
                print("❌ Invalid choice")
                print()
                continue

            rotation, desc = rotation_map[choice]

            print()
            print(f"🔄 Rotating {len(image_paths)} images {desc}...")
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
            print("=" * 50)
            print(f"✅ Success: {success_count}")
            if fail_count > 0:
                print(f"❌ Failed: {fail_count}")
            print("=" * 50)
            print()
            print("💡 Tip: Close and reopen Preview/image viewer to see changes")
            print()

        except KeyboardInterrupt:
            print("\n\nExiting...")
            sys.exit(0)
        except Exception as e:
            print(f"❌ Error: {e}")
            print()


if __name__ == "__main__":
    main()
