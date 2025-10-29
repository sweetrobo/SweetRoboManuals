#!/bin/bash

# Interactive Image Rotator - FIXED VERSION
# Actually rotates pixels, not just EXIF data

echo "========================================="
echo "  Interactive Image Rotator (Fixed)"
echo "========================================="
echo ""
echo "Drag and drop an image file (or type path)"
echo "Press Ctrl+C to exit"
echo ""

while true; do
    echo -n "Image path: "
    read -r filepath

    # Remove quotes if present (from drag-drop)
    filepath="${filepath//\'/}"
    filepath="${filepath//\"/}"

    # Trim whitespace
    filepath="$(echo "$filepath" | xargs)"

    # Handle escaped characters from Finder drag-drop
    filepath="${filepath//\\ / }"
    filepath="${filepath//\\(/(}"
    filepath="${filepath//\\)/)}"
    filepath="${filepath//\\&/&}"
    filepath="${filepath//\\[/[}"
    filepath="${filepath//\\]/]}"

    # Check if file exists
    if [ ! -f "$filepath" ]; then
        echo "❌ Error: File not found: $filepath"
        echo ""
        continue
    fi

    # Check if it's an image
    if ! file "$filepath" | grep -qE 'image|PNG|JPEG|WEBP|GIF'; then
        echo "❌ Error: Not an image file"
        echo ""
        continue
    fi

    echo ""
    echo "Current file: $(basename "$filepath")"
    echo ""
    echo "Select rotation:"
    echo "  1) Rotate 90° clockwise (→)"
    echo "  2) Rotate 90° counter-clockwise (←)"
    echo "  3) Rotate 180° (flip)"
    echo "  s) Skip this file"
    echo ""
    echo -n "Choice [1-3/s]: "
    read -r choice

    case $choice in
        1)
            echo "🔄 Rotating 90° clockwise..."
            # Force actual pixel rotation and strip EXIF
            sips -r 90 "$filepath" --deleteColorManagementProperties > /dev/null 2>&1
            sips -s formatOptions 100 "$filepath" > /dev/null 2>&1
            echo "✅ Done! (Pixels actually rotated)"
            ;;
        2)
            echo "🔄 Rotating 90° counter-clockwise..."
            # Force actual pixel rotation and strip EXIF
            sips -r -90 "$filepath" --deleteColorManagementProperties > /dev/null 2>&1
            sips -s formatOptions 100 "$filepath" > /dev/null 2>&1
            echo "✅ Done! (Pixels actually rotated)"
            ;;
        3)
            echo "🔄 Rotating 180°..."
            # Force actual pixel rotation and strip EXIF
            sips -r 180 "$filepath" --deleteColorManagementProperties > /dev/null 2>&1
            sips -s formatOptions 100 "$filepath" > /dev/null 2>&1
            echo "✅ Done! (Pixels actually rotated)"
            ;;
        s|S)
            echo "⏭️  Skipped"
            ;;
        *)
            echo "❌ Invalid choice"
            ;;
    esac

    # Force Preview to reload by touching the file
    touch "$filepath"

    echo ""
    echo "💡 Tip: Close and reopen Preview if image still looks wrong"
    echo "        (Preview sometimes caches the old version)"
    echo ""
    echo "---"
    echo ""
done
