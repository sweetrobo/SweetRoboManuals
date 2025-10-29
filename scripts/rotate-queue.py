#!/usr/bin/env python3

"""
Queue-Based Image Rotator
Add unlimited images to a queue, then rotate them all at once
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

        # Rotate based on choice
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


def clean_path(path):
    """Clean up path from drag-and-drop"""
    path = path.strip("'\"")
    path = path.replace("\\ ", " ")
    path = path.replace("\\(", "(")
    path = path.replace("\\)", ")")
    path = path.replace("\\&", "&")
    path = path.replace("\\[", "[")
    path = path.replace("\\]", "]")
    return path.strip()


def main():
    print("=" * 55)
    print("          Queue-Based Image Rotator")
    print("=" * 55)
    print()
    print("📋 Add images to the queue, then process them all at once!")
    print()
    print("Commands:")
    print("  • Drag files to ADD to queue")
    print("  • Type 'list' or 'l' to see queue")
    print("  • Type 'clear' or 'c' to clear queue")
    print("  • Type 'remove N' or 'r N' to remove item N from queue")
    print("  • Type 'process' or 'p' to rotate all queued images")
    print("  • Type 'quit' or 'q' to exit")
    print()
    print("=" * 55)
    print()

    queue = []

    while True:
        try:
            # Show queue count
            if queue:
                print(f"📸 Queue: {len(queue)} image(s) | Type 'list' to see, 'process' to rotate")
            else:
                print("📭 Queue empty | Drag images or type 'quit' to exit")

            user_input = input("> ").strip()

            if not user_input:
                continue

            # Handle commands
            cmd = user_input.lower()

            # Quit
            if cmd in ['quit', 'q', 'exit']:
                print("\nExiting...")
                sys.exit(0)

            # List queue
            elif cmd in ['list', 'l', 'ls']:
                if not queue:
                    print("📭 Queue is empty")
                else:
                    print(f"\n📋 Queue ({len(queue)} images):")
                    for i, path in enumerate(queue, 1):
                        print(f"   {i:2d}. {Path(path).name}")
                print()
                continue

            # Clear queue
            elif cmd in ['clear', 'c']:
                queue.clear()
                print("🗑️  Queue cleared\n")
                continue

            # Remove from queue
            elif cmd.startswith('remove ') or cmd.startswith('r '):
                try:
                    idx = int(cmd.split()[1]) - 1
                    if 0 <= idx < len(queue):
                        removed = queue.pop(idx)
                        print(f"🗑️  Removed: {Path(removed).name}\n")
                    else:
                        print("❌ Invalid index\n")
                except:
                    print("❌ Usage: remove N (where N is the item number)\n")
                continue

            # Process queue
            elif cmd in ['process', 'p', 'go', 'rotate']:
                if not queue:
                    print("❌ Queue is empty! Add images first.\n")
                    continue

                print(f"\n📸 Ready to process {len(queue)} images")
                print("\nSelect rotation:")
                print("  1) Rotate 90° clockwise (→)")
                print("  2) Rotate 90° counter-clockwise (←)")
                print("  3) Rotate 180° (flip)")
                print("  c) Cancel")
                print()

                choice = input("Choice [1-3/c]: ").strip().lower()

                if choice == 'c':
                    print("⏭️  Cancelled\n")
                    continue

                rotation_map = {
                    '1': (90, "90° clockwise"),
                    '2': (-90, "90° counter-clockwise"),
                    '3': (180, "180°")
                }

                if choice not in rotation_map:
                    print("❌ Invalid choice\n")
                    continue

                rotation, desc = rotation_map[choice]

                print(f"\n🔄 Rotating {len(queue)} images {desc}...")
                print()

                success_count = 0
                fail_count = 0

                for i, filepath in enumerate(queue, 1):
                    filename = Path(filepath).name
                    print(f"[{i}/{len(queue)}] {filename}...", end=" ")

                    if rotate_image(filepath, rotation):
                        print("✅")
                        success_count += 1
                    else:
                        print("❌")
                        fail_count += 1

                print()
                print("=" * 55)
                print(f"✅ Success: {success_count}")
                if fail_count > 0:
                    print(f"❌ Failed: {fail_count}")
                print("=" * 55)
                print()
                print("💡 Close and reopen Preview to see changes")
                print()

                # Clear queue after processing
                queue.clear()
                print("📭 Queue cleared\n")
                continue

            # Otherwise, treat as file path(s)
            else:
                # Clean the path
                cleaned = clean_path(user_input)

                # Check if it's a valid file
                if os.path.isfile(cleaned):
                    try:
                        Image.open(cleaned)
                        if cleaned not in queue:
                            queue.append(cleaned)
                            print(f"✅ Added: {Path(cleaned).name}")
                        else:
                            print(f"⚠️  Already in queue: {Path(cleaned).name}")
                    except:
                        print(f"❌ Not a valid image: {Path(cleaned).name}")
                else:
                    # Try to parse multiple paths separated by spaces
                    # This handles drag-and-drop of multiple files
                    parts = user_input.split()
                    added = 0

                    for part in parts:
                        cleaned_part = clean_path(part)
                        if os.path.isfile(cleaned_part):
                            try:
                                Image.open(cleaned_part)
                                if cleaned_part not in queue:
                                    queue.append(cleaned_part)
                                    added += 1
                            except:
                                pass

                    if added > 0:
                        print(f"✅ Added {added} image(s) to queue")
                    else:
                        print(f"❌ File not found: {cleaned}")

                print()
                continue

        except KeyboardInterrupt:
            print("\n\nExiting...")
            sys.exit(0)
        except Exception as e:
            print(f"❌ Error: {e}\n")


if __name__ == "__main__":
    main()
