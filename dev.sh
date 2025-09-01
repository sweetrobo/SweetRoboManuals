#!/bin/bash

# Sweet Robo Manual Development Server
# Run from project root directory

MDBOOK="$HOME/bin/mdbook"

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

echo -e "${CYAN}╔════════════════════════════════════════╗${NC}"
echo -e "${CYAN}║  Sweet Robo Manual Development Server  ║${NC}"
echo -e "${CYAN}╚════════════════════════════════════════╝${NC}"
echo ""

# Function to start a single dev server
start_single_server() {
    local manual="$1"
    local port="$2"
    
    echo -e "${GREEN}Starting: ${YELLOW}$manual${NC} on port ${BLUE}$port${NC}"
    cd "$manual"
    $MDBOOK serve --port $port --hostname 0.0.0.0 &
    cd ..
}

# Function to start all servers
start_all_servers() {
    echo -e "${GREEN}Starting ALL manual development servers...${NC}"
    echo ""
    
    # Start each server in background
    start_single_server "robo-ice-cream" 4001
    start_single_server "candy-monster" 4002
    start_single_server "pop-cart" 4003
    
    # Start Python server for main index
    echo -e "${GREEN}Starting main index server on port ${BLUE}4000${NC}"
    python3 -m http.server 4000 --bind 0.0.0.0 &
    
    echo ""
    echo -e "${CYAN}═══════════════════════════════════════════════════${NC}"
    echo -e "${GREEN}All servers are running!${NC}"
    echo ""
    echo -e "  ${YELLOW}Main Index:${NC}      http://localhost:4000"
    echo -e "  ${YELLOW}Robo Ice Cream:${NC} http://localhost:4001"
    echo -e "  ${YELLOW}Candy Monster:${NC}  http://localhost:4002"
    echo -e "  ${YELLOW}Pop Cart:${NC}       http://localhost:4003"
    echo ""
    echo -e "${CYAN}═══════════════════════════════════════════════════${NC}"
    echo -e "${YELLOW}Press Ctrl+C to stop all servers${NC}"
    
    # Open main index in browser
    sleep 2
    if command -v open &> /dev/null; then
        open "http://localhost:4000"
    fi
    
    # Wait for interrupt
    trap 'kill $(jobs -p); echo -e "\n${RED}All servers stopped.${NC}"; exit' INT
    wait
}

# Function to start a specific manual
start_specific_manual() {
    local choice="$1"
    local manual_name=""
    local port=0
    
    case "$choice" in
        "ice" | "ice-cream" | "robo-ice-cream" | "1")
            manual_name="Robo Ice Cream"
            port=4001
            ;;
        "candy" | "candy-monster" | "2")
            manual_name="Candy Monster"
            port=4002
            ;;
        "pop" | "pop-cart" | "3")
            manual_name="Pop Cart"
            port=4003
            ;;
        *)
            echo -e "${RED}Unknown manual: $choice${NC}"
            show_help
            exit 1
            ;;
    esac
    
    echo -e "${GREEN}Starting: ${YELLOW}$manual_name${NC}"
    echo -e "${BLUE}Server: http://localhost:$port${NC}"
    echo -e "${YELLOW}Press Ctrl+C to stop${NC}"
    echo ""
    
    cd "$manual_name"
    $MDBOOK serve --port $port --open
}

# Function to show help
show_help() {
    echo "Usage: ./dev.sh [option]"
    echo ""
    echo "Options:"
    echo "  all           - Start all manuals and main index"
    echo "  ice, 1        - Start Robo Ice Cream manual"
    echo "  candy, 2      - Start Candy Monster manual"
    echo "  pop, 3        - Start Pop Cart manual"
    echo "  help          - Show this help message"
    echo ""
    echo "Without arguments, shows interactive menu"
}

# Main logic
if [ -z "$1" ]; then
    # Interactive menu
    echo "Choose an option:"
    echo ""
    echo -e "  ${GREEN}0${NC}) ALL manuals (with main index)"
    echo -e "  ${GREEN}1${NC}) Robo Ice Cream"
    echo -e "  ${GREEN}2${NC}) Candy Monster"
    echo -e "  ${GREEN}3${NC}) Pop Cart"
    echo ""
    echo -n "Enter your choice (0-3): "
    read choice
    
    case $choice in
        0)
            start_all_servers
            ;;
        1|2|3)
            start_specific_manual "$choice"
            ;;
        *)
            echo -e "${RED}Invalid choice!${NC}"
            exit 1
            ;;
    esac
else
    # Command line argument
    case "$1" in
        "all")
            start_all_servers
            ;;
        "help" | "-h" | "--help")
            show_help
            ;;
        *)
            start_specific_manual "$1"
            ;;
    esac
fi