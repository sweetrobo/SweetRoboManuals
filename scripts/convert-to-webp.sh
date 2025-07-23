#!/bin/bash

# Convert images to WebP format for better compression
# Requires: brew install webp

MACHINE_DIR="Robo Ice Cream"
ASSETS_DIR="$MACHINE_DIR/assets"

echo "Converting images to WebP format..."
echo "======================================"

# Function to convert image to WebP
convert_to_webp() {
    local input_file="$1"
    local output_file="${input_file%.*}.webp"
    
    # Skip if already WebP
    if [[ "$input_file" == *.webp ]]; then
        echo "  Skipping $input_file (already WebP)"
        return
    fi
    
    # Convert to WebP with quality 85 (good balance of size/quality)
    if command -v cwebp >/dev/null 2>&1; then
        cwebp -q 85 "$input_file" -o "$output_file"
        if [ $? -eq 0 ]; then
            # Get file sizes for comparison
            original_size=$(stat -f%z "$input_file" 2>/dev/null || stat -c%s "$input_file" 2>/dev/null)
            webp_size=$(stat -f%z "$output_file" 2>/dev/null || stat -c%s "$output_file" 2>/dev/null)
            reduction=$(( (original_size - webp_size) * 100 / original_size ))
            
            echo "  ✓ $input_file → $output_file (${reduction}% smaller)"
            
            # Remove original file after successful conversion
            rm "$input_file"
        else
            echo "  ✗ Failed to convert $input_file"
        fi
    else
        echo "  ✗ cwebp not found. Install with: brew install webp"
        return 1
    fi
}

# Check if WebP tools are installed
if ! command -v cwebp >/dev/null 2>&1; then
    echo "WebP tools not found. Installing..."
    if command -v brew >/dev/null 2>&1; then
        brew install webp
    else
        echo "Please install WebP tools manually:"
        echo "macOS: brew install webp"
        echo "Ubuntu: sudo apt-get install webp"
        exit 1
    fi
fi

# Convert images in each section
for section in overview setup operation maintenance troubleshooting safety parts-service; do
    section_dir="$ASSETS_DIR/$section"
    if [ -d "$section_dir" ]; then
        echo ""
        echo "Processing $section section..."
        find "$section_dir" -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) | while read -r img; do
            convert_to_webp "$img"
        done
    fi
done

echo ""
echo "======================================"
echo "WebP conversion complete!"
echo ""
echo "Next steps:"
echo "1. Update image references in markdown files"
echo "2. Test manual rendering"
echo "3. Rebuild manual with optimized images"