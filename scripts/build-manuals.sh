#!/bin/bash

# Build script for Sweet Robo Manuals

# Set mdbook path
MDBOOK="$HOME/bin/mdbook"

echo "Sweet Robo Manual Builder"
echo "========================"

# Function to build the main index page (static HTML)
build_index() {
    echo "Main index page is static HTML (index.html)"
    echo "✓ No build required for main index page"
}

# Function to build a single manual
build_manual() {
    local machine="$1"
    echo "Building manual for: $machine"
    
    if [ -d "$machine" ]; then
        cd "$machine"
        $MDBOOK build
        cd ..
        echo "✓ $machine manual built successfully"
    else
        echo "✗ Directory '$machine' not found"
    fi
}

# Function to copy shared resources
copy_shared_resources() {
    echo "Copying shared resources..."
    mkdir -p "build/shared-theme"
    cp -r shared-theme/* build/shared-theme/ 2>/dev/null || true
    
    # Copy manual-styles.css to each manual build directory
    for dir in "build/candy-monster" "build/robo-ice-cream" "build/pop-cart"; do
        if [ -d "$dir" ]; then
            cp shared-theme/manual-styles.css "$dir/" 2>/dev/null || true
            echo "✓ Copied manual-styles.css to $dir"
        fi
    done
    
    echo "✓ Shared resources copied"
}

# Main script logic
case "$1" in
    "all")
        echo "Building all manuals..."
        build_index
        build_manual "Candy Monster"
        build_manual "Robo Ice Cream"
        build_manual "Pop Cart"
        copy_shared_resources
        echo ""
        echo "All manuals built! Check build/ directory for outputs."
        echo "Main index: index.html"
        ;;
    *)
        if [ -z "$1" ]; then
            echo "Usage:"
            echo "  ./build-manuals.sh all                    # Build all manuals"
            echo "  ./build-manuals.sh \"Candy Monster\"        # Build specific manual"
            echo "  ./build-manuals.sh \"Robo Ice Cream\"       # Build specific manual"
            echo "  ./build-manuals.sh \"Pop Cart\"             # Build specific manual"
            echo ""
            echo "After building, open index.html in your browser to access all manuals."
        else
            build_manual "$1"
            copy_shared_resources
        fi
        ;;
esac