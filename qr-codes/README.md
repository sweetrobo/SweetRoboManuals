# QR Code System Documentation

## Overview
This directory contains all QR codes generated for the Sweet Robo manuals. QR codes are generated locally using Node.js and stored in both SVG and PNG formats for maximum compatibility.

## Structure
- `qr-database.json` - Central database with all QR code metadata
- `QR-CODE-REPORT.md` - Summary report of all generated QR codes
- `*.svg` - Scalable vector QR codes for optimal quality
- `*.png` - PNG versions for compatibility

## Generation
To regenerate QR codes or add new ones:

1. Edit `scripts/generate-qr-codes.js` to add/modify QR codes
2. Run: `node scripts/generate-qr-codes.js`
3. All QR codes and database will be updated automatically

## Usage in Manuals

### Basic QR Code
```html
<div class="qr-code-wrapper">
    <a href="URL_HERE" class="qr-code-link">
        <span class="qr-tooltip">Tooltip text</span>
        <img src="../qr-codes/QR_CODE_ID.svg" alt="Alt text" />
        <div class="qr-code-description">Description<br/>text here</div>
    </a>
</div>
```

### QR Code Grid
```html
<div class="qr-code-grid">
    <!-- Multiple qr-code-wrapper elements -->
</div>
```

### Inline QR Code
```html
<span class="qr-code-inline">
    <img src="../qr-codes/QR_CODE_ID.svg" alt="Alt text" />
</span>
```

## Features

### Online Viewing
- QR codes are clickable links
- Hover shows tooltip with destination
- Slight scale animation on hover
- Description text below QR code

### Print Version
- QR codes print clearly with border
- Description text visible below
- No hover effects or tooltips
- Optimized size for scanning

## QR Code Categories

- **manual** - Direct links to online manuals
- **support** - Customer support contact methods
- **video** - Tutorial and guide videos
- **parts** - Parts ordering system
- **service** - Service request forms
- **documentation** - Warranty, troubleshooting guides
- **software** - Software updates and downloads
- **training** - Operator training materials

## Customization

QR codes use these CSS classes:
- `.qr-code-wrapper` - Main container
- `.qr-code-link` - Clickable link wrapper
- `.qr-tooltip` - Hover tooltip
- `.qr-code-description` - Text below QR code
- `.qr-code-grid` - Grid layout for multiple codes
- `.qr-code-inline` - Small inline QR codes

Styles are defined in `shared/css/components.css`