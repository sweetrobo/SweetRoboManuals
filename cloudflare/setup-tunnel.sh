#!/bin/bash

set -e

echo "Setting up Cloudflare Tunnel for sr-manuals-dev.meir.pro"

# Check if cloudflared is installed
if ! command -v cloudflared &> /dev/null; then
    echo "cloudflared not found. Installing..."
    
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        brew install cloudflared
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Linux
        curl -L --output cloudflared.deb https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
        sudo dpkg -i cloudflared.deb
        rm cloudflared.deb
    else
        echo "Unsupported OS. Please install cloudflared manually."
        exit 1
    fi
else
    echo "cloudflared is already installed"
fi

# Check if we're already logged in
if ! cloudflared tunnel list &> /dev/null; then
    echo ""
    echo "You need to authenticate with Cloudflare first."
    echo "Running: cloudflared tunnel login"
    echo ""
    cloudflared tunnel login
fi

# Check if tunnel already exists
if cloudflared tunnel list | grep -q "sr-manuals-dev"; then
    echo "Tunnel 'sr-manuals-dev' already exists"
else
    echo "Creating tunnel 'sr-manuals-dev'..."
    cloudflared tunnel create sr-manuals-dev
fi

# Check if credentials file exists
CREDENTIALS_FILE="./cloudflare/credentials.json"
if [ ! -f "$CREDENTIALS_FILE" ]; then
    # Find the credentials file that was created
    TUNNEL_ID=$(cloudflared tunnel list | grep "sr-manuals-dev" | awk '{print $1}')
    if [ -n "$TUNNEL_ID" ]; then
        CREDS_PATH="$HOME/.cloudflared/${TUNNEL_ID}.json"
        if [ -f "$CREDS_PATH" ]; then
            echo "Copying credentials to project directory..."
            cp "$CREDS_PATH" "$CREDENTIALS_FILE"
        else
            echo "Error: Could not find credentials file for tunnel"
            exit 1
        fi
    else
        echo "Error: Could not find tunnel ID"
        exit 1
    fi
fi

# Route the tunnel to the domain
echo ""
echo "Setting up DNS route for sr-manuals-dev.meir.pro..."
cloudflared tunnel route dns sr-manuals-dev sr-manuals-dev.meir.pro || true

echo ""
echo "Setup complete! You can now run ./cloudflare/start-tunnel.sh"