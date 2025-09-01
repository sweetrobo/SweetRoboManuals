# SweetRoboManuals Project Guidelines

## Folder Naming Convention

All manual folders use lowercase with hyphens for consistency across local development, build output, and GitHub Pages deployment:

- `robo-ice-cream/` - Robo Ice Cream F2 manual
- `candy-monster/` - Candy Monster manual  
- `pop-cart/` - Pop Cart manual

This naming convention ensures:
1. Consistent paths between local development and GitHub Pages
2. No URL encoding issues with spaces
3. Compatibility with web standards (lowercase URLs)
4. Matching folder names in source, build, and deployment

## Image Path Handling

Images are stored in each manual's `assets/` folder with subdirectories for organization:
- `assets/overview/` - Machine overview and diagrams
- `assets/setup/` - Installation and setup photos
- `assets/operation/` - Screenshots and operation guides
- `assets/maintenance/` - Maintenance procedures and supplies
- `assets/troubleshooting/` - Error screens and fixes
- `assets/safety/` - Safety warnings and procedures
- `assets/parts-service/` - Component diagrams and parts

When referencing images:
- In markdown files: Use relative paths `./assets/section/image.webp`
- In the main index.html: Use direct paths `robo-ice-cream/assets/overview/image.webp`

## Build System

The project uses mdBook to build each manual:
- Source folders: `robo-ice-cream/`, `candy-monster/`, `pop-cart/`
- Build output: `build/robo-ice-cream/`, `build/candy-monster/`, `build/pop-cart/`
- Development servers: Ports 4001, 4002, 4003 respectively
- Main index server: Port 4000

## Development Workflow

Use the `dev.sh` script to start development servers:
```bash
./dev.sh all    # Start all servers
./dev.sh ice    # Start Robo Ice Cream server only
./dev.sh candy  # Start Candy Monster server only
./dev.sh pop    # Start Pop Cart server only
```