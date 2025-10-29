#!/bin/bash

# Interactive Image Rotator
# Drag and drop image files to rotate them

echo "========================================="
echo "     Interactive Image Rotator"
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
    echo "Select rotation:"
    echo "  1) Rotate 90° clockwise (→)"
    echo "  2) Rotate 90° counter-clockwise (←)"
    echo "  3) Rotate 180° (flip)"
    echo "  4) Auto-fix orientation (EXIF)"
    echo "  s) Skip this file"
    echo ""
    echo -n "Choice [1-4/s]: "
    read -r choice

    case $choice in
        1)
            echo "🔄 Rotating 90° clockwise..."
            sips -r 90 "$filepath" > /dev/null 2>&1
            echo "✅ Done!"
            ;;
        2)
            echo "🔄 Rotating 90° counter-clockwise..."
            sips -r -90 "$filepath" > /dev/null 2>&1
            echo "✅ Done!"
            ;;
        3)
            echo "🔄 Rotating 180°..."
            sips -r 180 "$filepath" > /dev/null 2>&1
            echo "✅ Done!"
            ;;
        4)
            echo "🔄 Auto-fixing orientation from EXIF data..."
            sips -i "$filepath" > /dev/null 2>&1
            echo "✅ Done!"
            ;;
        s|S)
            echo "⏭️  Skipped"
            ;;
        *)
            echo "❌ Invalid choice"
            ;;
    esac

    echo ""
    echo "---"
    echo ""
done
