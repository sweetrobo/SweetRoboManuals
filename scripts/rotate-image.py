#!/usr/bin/env python3

"""
Interactive Image Rotator (Python version)
More reliable than sips - actually rotates pixels
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
        print(f"❌ Error: {e}")
        return False


def main():
    print("=" * 45)
    print("  Interactive Image Rotator (Python)")
    print("=" * 45)
    print()
    print("Drag and drop an image file (or type path)")
    print("Press Ctrl+C to exit")
    print()

    while True:
        try:
            # Get file path
            filepath = input("Image path: ").strip()

            # Remove quotes if present (from drag-drop)
            filepath = filepath.strip("'\"")

            # Handle escaped spaces and special characters from drag-drop
            # When dragging from Finder, paths have backslash escapes
            filepath = filepath.replace("\\ ", " ")
            filepath = filepath.replace("\\(", "(")
            filepath = filepath.replace("\\)", ")")
            filepath = filepath.replace("\\&", "&")
            filepath = filepath.replace("\\[", "[")
            filepath = filepath.replace("\\]", "]")

            # Expand user path if needed
            filepath = os.path.expanduser(filepath)

            # Check if file exists
            if not os.path.isfile(filepath):
                print(f"❌ Error: File not found: {filepath}")
                print()
                continue

            # Check if it's an image
            try:
                Image.open(filepath)
            except:
                print("❌ Error: Not a valid image file")
                print()
                continue

            print()
            print(f"Current file: {Path(filepath).name}")
            print()
            print("Select rotation:")
            print("  1) Rotate 90° clockwise (→)")
            print("  2) Rotate 90° counter-clockwise (←)")
            print("  3) Rotate 180° (flip)")
            print("  s) Skip this file")
            print()

            choice = input("Choice [1-3/s]: ").strip().lower()

            if choice == '1':
                print("🔄 Rotating 90° clockwise...")
                if rotate_image(filepath, 90):
                    print("✅ Done! (Pixels actually rotated)")
            elif choice == '2':
                print("🔄 Rotating 90° counter-clockwise...")
                if rotate_image(filepath, -90):
                    print("✅ Done! (Pixels actually rotated)")
            elif choice == '3':
                print("🔄 Rotating 180°...")
                if rotate_image(filepath, 180):
                    print("✅ Done! (Pixels actually rotated)")
            elif choice == 's':
                print("⏭️  Skipped")
            else:
                print("❌ Invalid choice")

            print()
            print("💡 Tip: Close and reopen Preview/image viewer to see changes")
            print()
            print("---")
            print()

        except KeyboardInterrupt:
            print("\n\nExiting...")
            sys.exit(0)
        except Exception as e:
            print(f"❌ Error: {e}")
            print()


if __name__ == "__main__":
    main()
