#!/bin/bash

# Process Scrivener export while maintaining image organization
# Usage: ./process-scrivener-export.sh "Robo Ice Cream"

MACHINE="$1"
RESOURCE_DIR="$MACHINE/resources/Draft"
OUTPUT_DIR="$MACHINE/content"

echo "Processing Scrivener export for: $MACHINE"
echo "========================================="

# Create output directory structure
mkdir -p "$OUTPUT_DIR"/{images,sections}

# Function to copy images from a directory to output, maintaining structure
copy_images() {
    local source_dir="$1"
    local relative_path="${source_dir#$RESOURCE_DIR/}"
    
    # Find all image files
    find "$source_dir" -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.gif" \) | while read -r img; do
        # Create relative directory structure in output
        img_dir=$(dirname "${img#$RESOURCE_DIR/}")
        mkdir -p "$OUTPUT_DIR/images/$img_dir"
        cp "$img" "$OUTPUT_DIR/images/$img_dir/"
        echo "  ✓ Copied image: $(basename "$img")"
    done
}

# Process main sections based on your structure
echo "Processing sections..."

# Map Scrivener sections to manual sections
declare -A section_map=(
    ["03 Intro"]="overview.md"
    ["04 Safety"]="safety.md"
    ["05 Getting Started"]="setup.md"
    ["18 Operation"]="operation.md"
    ["19 Maintenance"]="maintenance.md"
    ["16 Section 11 Troubleshooting"]="troubleshooting.md"
    ["20 Customer Support"]="parts-service.md"
    ["21 Legal and Warranty Information"]="legal.md"
)

# Process each section
for scrivener_section in "${!section_map[@]}"; do
    manual_section="${section_map[$scrivener_section]}"
    echo ""
    echo "Processing: $scrivener_section → $manual_section"
    
    # Find the section directory
    section_dir=$(find "$RESOURCE_DIR" -type d -name "$scrivener_section*" | head -1)
    
    if [ -d "$section_dir" ]; then
        # Combine all .md files in this section
        echo "# $(basename "$section_dir" | sed 's/^[0-9]* //')" > "$MACHINE/$manual_section"
        echo "" >> "$MACHINE/$manual_section"
        
        # Process all markdown files in the section
        find "$section_dir" -name "*.md" -type f | sort | while read -r md_file; do
            # Skip files that are actually directories (Scrivener quirk)
            if [ -f "$md_file" ]; then
                echo "  Processing: $(basename "$md_file")"
                
                # Get content, update image paths
                content=$(cat "$md_file")
                
                # Update image references to use the new structure
                # This regex handles various image path formats
                updated_content=$(echo "$content" | sed -E 's|!\[([^]]*)\]\(([^)]+\.(png|jpg|jpeg|gif))\)|![\1](./images/'"${section_dir#$RESOURCE_DIR/}"'/\2)|gi')
                
                echo "$updated_content" >> "$MACHINE/$manual_section"
                echo "" >> "$MACHINE/$manual_section"
            fi
        done
        
        # Copy images from this section
        copy_images "$section_dir"
    else
        echo "  ⚠️  Section not found: $scrivener_section"
    fi
done

# Special handling for FAQ and installation chat
echo ""
echo "Processing additional resources..."
if [ -f "$MACHINE/resources/customer-faq.txt" ]; then
    echo "  ✓ Found customer FAQ"
fi
if [ -f "$MACHINE/resources/f2-installation-chat.txt" ]; then
    echo "  ✓ Found F2 installation chat"
fi

echo ""
echo "========================================="
echo "✓ Processing complete!"
echo ""
echo "Next steps:"
echo "1. Review the generated .md files in $MACHINE/"
echo "2. Check image paths are correct"
echo "3. Run: ./build-manuals.sh serve \"$MACHINE\""
echo ""
echo "Image organization preserved in: $OUTPUT_DIR/images/"