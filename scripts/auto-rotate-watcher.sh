#!/bin/bash

# Auto Image Rotator - File Watcher
# Watches a folder and automatically rotates images 90° CW when dropped

# Configuration
WATCH_FOLDER="${1:-./rotate-queue}"
ROTATION="${2:-90}"  # Default: 90 degrees clockwise

# Create watch folder if it doesn't exist
mkdir -p "$WATCH_FOLDER"

echo "========================================="
echo "   Auto Image Rotator - File Watcher"
echo "========================================="
echo ""
echo "📁 Watching folder: $WATCH_FOLDER"
echo "🔄 Rotation: ${ROTATION}° (90 = clockwise, -90 = counter-clockwise, 180 = flip)"
echo ""
echo "Drop images into the folder to rotate them automatically!"
echo "Press Ctrl+C to stop"
echo ""
echo "---"
echo ""

# Process any existing images in the folder first
for file in "$WATCH_FOLDER"/*; do
    if [ -f "$file" ] && file "$file" | grep -qE 'image|PNG|JPEG|WEBP|GIF'; then
        filename=$(basename "$file")
        echo "🔄 Rotating existing file: $filename"
        sips -r "$ROTATION" "$file" > /dev/null 2>&1
        echo "✅ Rotated: $filename"
        echo ""
    fi
done

# Track processed files to avoid reprocessing
declare -A processed_files

# Watch for new files using fswatch if available, otherwise use a polling loop
if command -v fswatch &> /dev/null; then
    # Use fswatch for efficient file monitoring
    fswatch -0 --event Created --event MovedTo --event Renamed "$WATCH_FOLDER" | while read -d "" filepath; do
        # Skip if not a file or already processed
        [ ! -f "$filepath" ] && continue
        [[ ${processed_files[$filepath]} ]] && continue

        # Check if it's an image
        if file "$filepath" | grep -qE 'image|PNG|JPEG|WEBP|GIF'; then
            filename=$(basename "$filepath")
            echo "🔄 New file detected: $filename"

            # Small delay to ensure file is fully written
            sleep 0.5

            # Rotate the image
            sips -r "$ROTATION" "$filepath" > /dev/null 2>&1

            if [ $? -eq 0 ]; then
                echo "✅ Rotated: $filename"
                processed_files[$filepath]=1
            else
                echo "❌ Failed to rotate: $filename"
            fi
            echo ""
        fi
    done
else
    # Fallback to polling if fswatch not available
    echo "⚠️  Note: Install fswatch for better performance: brew install fswatch"
    echo ""

    while true; do
        for file in "$WATCH_FOLDER"/*; do
            # Skip if not a file or already processed
            [ ! -f "$file" ] && continue
            [[ ${processed_files[$file]} ]] && continue

            # Check if it's an image
            if file "$file" | grep -qE 'image|PNG|JPEG|WEBP|GIF'; then
                filename=$(basename "$file")
                echo "🔄 Processing: $filename"

                # Rotate the image
                sips -r "$ROTATION" "$file" > /dev/null 2>&1

                if [ $? -eq 0 ]; then
                    echo "✅ Rotated: $filename"
                    processed_files[$file]=1
                else
                    echo "❌ Failed to rotate: $filename"
                fi
                echo ""
            fi
        done

        # Poll every second
        sleep 1
    done
fi
