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
    
    # Copy the entire shared folder to build directory
    if [ -d "shared" ]; then
        mkdir -p "build/shared"
        cp -r shared/* build/shared/ 2>/dev/null || true
        echo "✓ Copied shared folder to build/"
    fi
    
    # Copy shared resources to each manual's build directory
    for dir in "build/candy-monster" "build/robo-ice-cream" "build/pop-cart"; do
        if [ -d "$dir" ]; then
            mkdir -p "$dir/shared"
            cp -r shared/* "$dir/shared/" 2>/dev/null || true
            echo "✓ Copied shared resources to $dir"
        fi
    done
    
    echo "✓ All shared resources copied"
}

# Main script logic
case "$1" in
    "all")
        echo "Building all manuals..."
        build_index
        build_manual "candy-monster"
        build_manual "robo-ice-cream"
        build_manual "pop-cart"
        copy_shared_resources
        echo ""
        echo "All manuals built! Check build/ directory for outputs."
        echo "Main index: index.html"
        ;;
    *)
        if [ -z "$1" ]; then
            echo "Usage:"
            echo "  ./build-manuals.sh all                    # Build all manuals"
            echo "  ./build-manuals.sh candy-monster          # Build specific manual"
            echo "  ./build-manuals.sh robo-ice-cream         # Build specific manual"
            echo "  ./build-manuals.sh pop-cart               # Build specific manual"
            echo ""
            echo "After building, open index.html in your browser to access all manuals."
        else
            build_manual "$1"
            copy_shared_resources
        fi
        ;;
esac