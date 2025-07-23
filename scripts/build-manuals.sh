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

# Function to serve a manual locally for preview
serve_manual() {
    local machine="$1"
    echo "Serving manual for: $machine"
    
    if [ -d "$machine" ]; then
        cd "$machine"
        $MDBOOK serve --open --port 3105
        cd ..
    else
        echo "✗ Directory '$machine' not found"
    fi
}

# Main script logic
case "$1" in
    "all")
        echo "Building all manuals..."
        build_index
        build_manual "Candy Monster"
        build_manual "Robo Ice Cream"
        build_manual "Pop Cart"
        echo ""
        echo "All manuals built! Opening main page..."
        open index.html
        ;;
    "serve")
        if [ -z "$2" ]; then
            echo "Please specify which manual to serve:"
            echo "  ./build-manuals.sh serve \"Candy Monster\""
            echo "  ./build-manuals.sh serve \"Robo Ice Cream\""
            echo "  ./build-manuals.sh serve \"Pop Cart\""
        else
            serve_manual "$2"
        fi
        ;;
    "pdf")
        echo "PDF generation requires additional tools:"
        echo "1. Install mdbook-pdf: cargo install mdbook-pdf"
        echo "2. Add [output.pdf] section to book.toml"
        echo "3. Or use print functionality in the HTML version (File > Print > Save as PDF)"
        ;;
    *)
        if [ -z "$1" ]; then
            echo "Usage:"
            echo "  ./build-manuals.sh all                    # Build all manuals + index page"
            echo "  ./build-manuals.sh \"Candy Monster\"        # Build specific manual"
            echo "  ./build-manuals.sh serve \"Candy Monster\"  # Preview manual in browser"
            echo "  ./build-manuals.sh pdf                    # Show PDF generation info"
            echo ""
            echo "After building, open index.html in your browser to access all manuals."
        else
            build_manual "$1"
        fi
        ;;
esac