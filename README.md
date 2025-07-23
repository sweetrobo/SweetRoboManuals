# Sweet Robo Manuals

This repository contains operation and maintenance manuals for various machines and equipment.

## Repository Structure

Each machine has its own dedicated folder containing:
- Operation manual
- Maintenance schedules
- Troubleshooting guides
- Parts lists
- Safety procedures

## Folder Organization

```
SweetRoboManuals/
├── README.md
├── .gitignore
├── templates/
│   └── manual-template.md
└── [machine-name]/
    ├── README.md
    ├── operation-manual.md
    ├── maintenance-schedule.md
    ├── troubleshooting.md
    ├── parts-list.md
    └── safety-procedures.md
```

## Building the Manuals

This project uses [mdBook](https://rust-lang.github.io/mdBook/) to generate HTML documentation from Markdown files.

### Quick Start
```bash
# Build all manuals
./build-manuals.sh all

# Build specific manual
./build-manuals.sh "Candy Monster"

# Preview manual in browser
./build-manuals.sh serve "Candy Monster"

# PDF generation info
./build-manuals.sh pdf
```

### Hosting Options
See [HOSTING-OPTIONS.md](HOSTING-OPTIONS.md) for deployment options.

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