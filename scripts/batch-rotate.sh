#!/bin/bash

# Batch Image Rotator
# Rotate all images in a folder at once

echo "========================================="
echo "      Batch Image Rotator"
echo "========================================="
echo ""

# Get folder path
if [ -z "$1" ]; then
    echo "Drag and drop a folder (or type path):"
    read -r folderpath
    folderpath="${folderpath//\'/}"
    folderpath="${folderpath//\"/}"
    folderpath="$(echo "$folderpath" | xargs)"
else
    folderpath="$1"
fi

# Check if folder exists
if [ ! -d "$folderpath" ]; then
    echo "❌ Error: Folder not found: $folderpath"
    exit 1
fi

# Count images
image_count=$(find "$folderpath" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" -o -iname "*.gif" \) | wc -l | xargs)

if [ "$image_count" -eq 0 ]; then
    echo "❌ No images found in: $folderpath"
    exit 1
fi

echo "📁 Folder: $folderpath"
echo "🖼️  Images found: $image_count"
echo ""
echo "Select rotation:"
echo "  1) Rotate 90° clockwise (→)"
echo "  2) Rotate 90° counter-clockwise (←)"
echo "  3) Rotate 180° (flip)"
echo "  4) Auto-fix orientation (EXIF)"
echo ""
echo -n "Choice [1-4]: "
read -r choice

case $choice in
    1) rotation=90; desc="90° clockwise" ;;
    2) rotation=-90; desc="90° counter-clockwise" ;;
    3) rotation=180; desc="180°" ;;
    4) rotation="auto"; desc="auto-fix from EXIF" ;;
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac

echo ""
echo "🔄 Rotating $image_count images $desc..."
echo ""

count=0
success=0
failed=0

find "$folderpath" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" -o -iname "*.gif" \) | while read -r file; do
    count=$((count + 1))
    filename=$(basename "$file")

    echo -n "[$count/$image_count] $filename ... "

    if [ "$rotation" = "auto" ]; then
        sips -i "$file" > /dev/null 2>&1
    else
        sips -r "$rotation" "$file" > /dev/null 2>&1
    fi

    if [ $? -eq 0 ]; then
        echo "✅"
        success=$((success + 1))
    else
        echo "❌"
        failed=$((failed + 1))
    fi
done

echo ""
echo "========================================="
echo "✅ Success: $success"
[ $failed -gt 0 ] && echo "❌ Failed: $failed"
echo "========================================="
