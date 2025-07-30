#!/usr/bin/env python3
"""
Simple HTTP server to run the image review tool locally.
This allows the browser to access local JSON and image files.
"""

import http.server
import socketserver
import os
import webbrowser
from threading import Timer

PORT = 8888

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers to allow local file access
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def open_browser():
    """Open the browser after a short delay"""
    webbrowser.open(f'http://localhost:{PORT}/image-review-tool.html')

if __name__ == "__main__":
    # Change to the SweetRoboManuals directory
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"Server running at http://localhost:{PORT}/")
        print(f"Opening image review tool at http://localhost:{PORT}/image-review-tool.html")
        print("Press Ctrl+C to stop the server")
        
        # Open browser after 1 second
        Timer(1, open_browser).start()
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")