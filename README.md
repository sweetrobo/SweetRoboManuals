# Sweet Robo Manuals

This repository contains operation and maintenance manuals for Sweet Robo ice cream and vending machines.

## Available Machines

- **Candy Monster** - Candy vending machine
- **Pop Cart** - Snack and beverage vending machine  
- **Robo Ice Cream** - Automated ice cream dispensing machine

## Repository Structure

```
SweetRoboManuals/
├── README.md
├── .gitignore
├── templates/           # Manual templates
├── shared/             # Shared content across manuals
├── shared-theme/       # Common styling and assets
├── scripts/           # Build and processing scripts
├── docs/              # Project documentation
├── cloudflare/        # Tunnel configuration for hosting
├── Candy Monster/     # Candy Monster manual
├── Pop Cart/          # Pop Cart manual
└── Robo Ice Cream/    # Robo Ice Cream manual
```

Each machine folder contains:
- `README.md` - Machine overview
- `SUMMARY.md` - Table of contents for mdBook
- `book.toml` - mdBook configuration
- `overview.md` - Machine specifications and overview
- `safety.md` - Safety guidelines and warnings
- `setup.md` - Installation and setup instructions
- `operation.md` - Operating procedures
- `maintenance.md` - Maintenance schedules and procedures
- `troubleshooting.md` - Common issues and solutions
- `parts-service.md` - Parts lists and service information
- `assets/` - Images and media files
- `resources/` - Additional documentation and source materials

## Building the Manuals

This project uses [mdBook](https://rust-lang.github.io/mdBook/) to generate HTML documentation from Markdown files.

### Quick Start
```bash
# Build all manuals
./scripts/build-manuals.sh all

# Build specific manual
./scripts/build-manuals.sh "Candy Monster"

# Preview manual in browser
./scripts/build-manuals.sh serve "Candy Monster"

# PDF generation info
./scripts/build-manuals.sh pdf
```

### Image Processing
```bash
# Convert images to WebP format
./scripts/convert-to-webp.sh

# Process Scrivener exports
./scripts/process-scrivener-export.sh
```

### Hosting Options
See [docs/HOSTING-OPTIONS.md](docs/HOSTING-OPTIONS.md) for deployment options.

## Development Server

The project includes Cloudflare Tunnel configuration for easy development hosting:

```bash
# One-time setup
./cloudflare/setup-tunnel.sh

# Start development server
./cloudflare/start-tunnel.sh
```

This will make your local development server available at `https://sr-manuals-dev.meir.pro`

## Contributing

When adding a new machine manual:
1. Create a new folder with the machine name
2. Use the template in `templates/manual-template.md` as a starting point
3. Fill in all relevant sections
4. Include photos and diagrams where applicable
5. Add resources to the `resources/` folder
6. Add images to the `assets/` folder

## Manual Format

All manuals should include:
- Machine specifications
- Setup instructions
- Operating procedures
- Maintenance requirements
- Safety warnings
- Legal information
- Contact information for support