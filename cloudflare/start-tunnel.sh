#!/bin/bash

set -e

CONFIG_FILE="./cloudflare/config.yml"
CREDENTIALS_FILE="./cloudflare/credentials.json"

# Check if config file exists
if [ ! -f "$CONFIG_FILE" ]; then
    echo "Error: Config file not found at $CONFIG_FILE"
    exit 1
fi

# Check if credentials file exists
if [ ! -f "$CREDENTIALS_FILE" ]; then
    echo "Error: Credentials file not found at $CREDENTIALS_FILE"
    echo "Please run ./cloudflare/setup-tunnel.sh first"
    exit 1
fi

echo "Starting Cloudflare Tunnel..."
echo "Tunnel will be available at: https://sr-manuals-dev.meir.pro"
echo "Proxying to: http://localhost:3105"
echo ""
echo "Press Ctrl+C to stop the tunnel"

# Run the tunnel
cloudflared tunnel --config "$CONFIG_FILE" run