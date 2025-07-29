#!/bin/bash

# Development server script for Sweet Robo Manuals
# Provides live reload during development

# Set mdbook path
MDBOOK="$HOME/bin/mdbook"

echo "Sweet Robo Manual Development Server"
echo "==================================="

# Function to serve a manual with live reload
serve_manual() {
    local machine="$1"
    local port="$2"
    
    if [ -z "$port" ]; then
        port=3090
    fi
    
    echo "Starting development server for: $machine"
    echo "Server will run on: http://localhost:$port"
    echo "Press Ctrl+C to stop the server"
    echo ""
    
    if [ -d "$machine" ]; then
        cd "$machine"
        echo "Watching for changes in: $(pwd)"
        $MDBOOK serve --port "$port"
        cd ..
    else
        echo "✗ Directory '$machine' not found"
        echo "Available manuals:"
        ls -d */ 2>/dev/null | grep -E "(Candy Monster|Robo Ice Cream|Pop Cart)" | sed 's|/||'
    fi
}

# Function to serve the main index page with all manuals
serve_all() {
    local port="$1"
    
    if [ -z "$port" ]; then
        port=3090
    fi
    
    echo "Starting development server for all manuals"
    echo "Main index will be served on: http://localhost:$port"
    echo "Press Ctrl+C to stop the server"
    echo ""
    
    # Check if index.html exists
    if [ ! -f "index.html" ]; then
        echo "⚠ Warning: index.html not found in root directory"
        echo "You may need to create a main index page or build the manuals first"
        echo ""
    fi
    
    # Use Python's built-in HTTP server to serve the current directory
    if command -v python3 &> /dev/null; then
        echo "Using Python 3 HTTP server"
        echo "Serving from: $(pwd)"
        echo ""
        echo "📁 Available paths:"
        echo "  http://localhost:$port/                    # Main index"
        echo "  http://localhost:$port/build/candy-monster/ # Candy Monster manual"
        echo "  http://localhost:$port/build/robo-ice-cream/ # Robo Ice Cream manual"
        echo "  http://localhost:$port/build/pop-cart/     # Pop Cart manual"
        echo ""
        echo "💡 Note: For 404 errors, a custom error page with navigation is available"
        echo ""
        python3 -m http.server "$port"
    elif command -v python &> /dev/null; then
        echo "Using Python 2 HTTP server"
        echo "Serving from: $(pwd)"
        echo ""
        echo "📁 Available paths:"
        echo "  http://localhost:$port/                    # Main index"
        echo "  http://localhost:$port/build/candy-monster/ # Candy Monster manual"
        echo "  http://localhost:$port/build/robo-ice-cream/ # Robo Ice Cream manual"
        echo "  http://localhost:$port/build/pop-cart/     # Pop Cart manual"
        echo ""
        python -m SimpleHTTPServer "$port"
    else
        echo "✗ Python not found. Cannot serve static files."
        echo "Please install Python or use a different HTTP server."
        echo ""
        echo "Alternative: Build the manuals and open index.html directly:"
        echo "  ./scripts/build-manuals.sh all"
        echo "  open index.html"
    fi
}

# Function to show available books
show_books() {
    echo "Available manuals:"
    echo "  1. Candy Monster"
    echo "  2. Robo Ice Cream" 
    echo "  3. Pop Cart"
    echo ""
}

# Main script logic
case "$1" in
    "all")
        serve_all "$2"
        ;;
    "candy" | "candy-monster" | "Candy Monster")
        serve_manual "Candy Monster" "$2"
        ;;
    "ice" | "ice-cream" | "robo-ice-cream" | "Robo Ice Cream")
        serve_manual "Robo Ice Cream" "$2"
        ;;
    "pop" | "pop-cart" | "Pop Cart")
        serve_manual "Pop Cart" "$2"
        ;;
    "list")
        show_books
        ;;
    *)
        if [ -z "$1" ]; then
            echo "Usage:"
            echo "  ./dev-server.sh all [port]           # Serve main index with all manuals (default port: 3090)"
            echo "  ./dev-server.sh candy [port]         # Serve Candy Monster manual"
            echo "  ./dev-server.sh ice [port]           # Serve Robo Ice Cream manual"
            echo "  ./dev-server.sh pop [port]           # Serve Pop Cart manual"
            echo "  ./dev-server.sh list                 # Show available manuals"
            echo ""
            echo "Examples:"
            echo "  ./dev-server.sh all                  # Start main index on port 3090"
            echo "  ./dev-server.sh candy 3091           # Start Candy Monster on port 3091"
            echo "  ./dev-server.sh ice 3092             # Start Robo Ice Cream on port 3092"
            echo "  ./dev-server.sh pop 3093             # Start Pop Cart on port 3093"
            echo ""
            show_books
        else
            echo "Unknown manual: $1"
            echo ""
            show_books
            echo "Use './dev-server.sh' for usage information."
        fi
        ;;
esac