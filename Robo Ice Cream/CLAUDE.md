# Robo Ice Cream Manual - Complete Styling Guide

## Image Guidelines

### Image Format
All images should be in WebP format for optimal file size. Use the `convert-to-webp.sh` script to convert PNG/JPG images.

### Adding Images to Manual

#### Single Image (Default)
```html
<img src="./assets/section/image-name.webp" alt="Descriptive Alt Text" />
```
- Images automatically scale to max 50vh height and 100% width
- Centered with rounded corners and subtle shadow
- No additional classes needed for most cases

#### Side-by-Side Images (New Official Style)
```html
<div class="side-by-side-images">
<img src="./assets/section/image1.webp" alt="First Image" />
<img src="./assets/section/image2.webp" alt="Second Image" />
</div>
```

#### Image Placeholders (Official Style)
```html
<div class="image-placeholder">IMAGE EXAMPLE UNLOCKED</div>
```

#### Legacy Image Classes (Still Supported)
- `setup-image` - Adds border and padding for setup instructions
- `overview-diagram` - For technical diagrams
- `operation-screenshot` - Orange border for operation screens
- `maintenance-photo` - Green border for maintenance images
- `component-detail` - Purple border for component close-ups

### Image Organization
- Place images in appropriate section folders:
  - `/assets/overview/` - Machine overview and diagrams
  - `/assets/setup/` - Installation and setup photos
  - `/assets/operation/` - Screenshots and operation guides
  - `/assets/maintenance/` - Maintenance procedures and supplies
  - `/assets/troubleshooting/` - Error screens and fixes
  - `/assets/safety/` - Safety warnings and procedures
  - `/assets/parts-service/` - Component diagrams and parts

## Official Sweet Robo Styling Components

Based on the official PDF design, use these components to match the professional manual styling:

### Callout Boxes

#### Important Information
```html
<div class="important-box">

**IMPORTANT**

Some accessories or consumables may be packaged and stored inside the machine body for secure transit. Before powering on the machine, carefully open all access doors and inspect the interior.

</div>
```

#### Warnings (Pink Background)
```html
<div class="warning-box">

**WARNING: Electrical Shock Hazard.** Ensure your hands are dry and you are not standing in water when connecting the power cord.

</div>
```

#### Cautions (Orange Background)
```html
<div class="caution-box">

**CAUTION:** Two or more people may be required for safely moving and positioning the machine. Use appropriate lifting equipment if necessary.

</div>
```

#### Information Boxes (Blue Background)
```html
<div class="info-box">

The machine supports remote management requiring an internet connection, ensure a stable Wi-Fi signal or an accessible Ethernet port is available near the machine.

</div>
```

### Step-by-Step Instructions (Official Style)

#### Section Headers
```html
<div class="step-header">1. Position the Machine:</div>
```

#### Numbered Steps with Blue Circles

Basic numbered steps (no headers):
```html
<div class="numbered-steps">

<div>
<div>
Carefully move the machine to its final operating location, ensuring it meets all site requirements.
</div>
</div>

<div>
<div>
Ensure all four feet are firmly on the ground and the machine is level.
</div>
</div>

<div>
<div>
Lock the feet in place when ready.
</div>
</div>

</div>
```

Steps with headers (automatically styled):
```html
<div class="numbered-steps">

<div>
<div>
<h3>Prepare the Machine</h3>
• Turn on the main power breaker<br>
• Verify all doors are closed<br>
• Check that hoppers contain at least 2L of mix
</div>
</div>

<div>
<div>
<h3>Initial System Check</h3>
• Monitor temperature displays<br>
• Listen for unusual noises<br>
• Verify UV sanitizer activates
</div>
</div>

</div>
```

### Feature Grids (Two-Column Layout)

```html
<div class="feature-grid">

<div class="feature-item">

#### User-Friendly Interface:
An intuitive touchscreen interface allows operators to easily manage machine settings and monitor performance.

</div>

<div class="feature-item">

#### Dual-Flavor System:
Advanced dispensing system supports two different ice cream flavors with precise portion control.

</div>

<div class="feature-item">

#### Easy Maintenance:
Designed for straightforward access to hoppers, dispensers, and cleaning components.

</div>

<div class="feature-item">

#### Robust Construction:
Built for durability and reliable operation in various commercial environments.

</div>

</div>
```

### Technical Specifications (Official Style)

#### Standard Table
```markdown
| Machine Name | Robo Ice Cream F2 |
|--------------|-------------------|
| Dimensions (W×D×H) | 120 × 86.5 × 245 cm |
| Weight | 380 kg (approx. 838 lbs) |
| Power Voltage | 220V only |
| Power Consumption | 2,860W max (13A @ 220V) |
```

#### Custom Specifications Table
```html
<div class="specs-table">

<div class="spec-row">
<div class="spec-label">Machine Name</div>
<div class="spec-value">Robo Ice Cream F2</div>
</div>

<div class="spec-row">
<div class="spec-label">Dimensions (W×D×H)</div>
<div class="spec-value">120 × 86.5 × 245 cm (47.2 × 34.1 × 96.5 in / 3.94 × 2.84 × 8.04 ft)</div>
</div>

<div class="spec-row">
<div class="spec-label">Weight</div>
<div class="spec-value">380 kg (approx. 838 lbs)</div>
</div>

</div>
```

### Section Dividers
```html
<hr class="section-divider">
```

### Sidebar Highlights (Blue Line with Header)
```html
<div class="sidebar-highlight">

<h4>Proper Usage</h4>

Manuals provide detailed instructions and information on setup, operation, and maintenance. Following these instructions ensures that the equipment works efficiently.

</div>
```

### Title Page
```html
<div class="title-page">

<div class="title-page-header">
<div class="title">Sweet Robo - User Manual - Robo Ice Cream</div>
<img src="./assets/logo.webp" alt="Sweet Robo Logo" class="logo" />
</div>

<div class="title-page-main">
<h1>Robo Ice Cream</h1>
<h2>User Manual</h2>
<img src="./assets/overview/robo-ice-cream-f2.webp" alt="Robo Ice Cream Machine" class="machine-image" />
</div>

<div class="title-page-footer">
<p>Revision & Date:</p>
<p>Rev 1. 05.2025</p>
</div>

</div>
```

## Color System (Official Brand Colors)

- **Primary Blue**: `#2c5282` (headings, buttons, accents)
- **Light Blue**: `#e6f3ff` (section backgrounds)
- **Warning Pink**: `#fed7d7` (warning boxes)
- **Caution Orange**: `#fed7aa` (caution boxes)
- **Info Purple**: `#e9d8fd` (info boxes)

## Content Structure Best Practices

1. **Use section headers** (`<div class="step-header">`) for major step groupings
2. **Use numbered steps** for sequential instructions
3. **Use callout boxes** for important notes, warnings, and cautions
4. **Use feature grids** for showcasing capabilities and benefits
5. **Use image placeholders** until real images are available
6. **Maintain consistent spacing** between sections

## Responsive Design
All components automatically adapt to:
- Desktop (full layouts)
- Tablet (adjusted grids)
- Mobile (single column)
- Print/PDF (optimized formatting)

## PDF Considerations
- All styling works in PDF output
- Print-specific optimizations included
- Page breaks handled automatically
- Colors adjust appropriately for print

## Internal Links in mdBook

### Cross-Reference Links
When linking between manual sections:

#### In Regular Markdown Content
```markdown
See [Device Testing](operation.md#device-testing---component-control) for more info.
```

#### Inside HTML Elements (divs, numbered-steps, etc.)
When inside HTML tags, use HTML anchor tags instead of markdown:
```html
<div>
<div>
Access backend system (see <a href="./operation.html#device-testing---component-control">operation section</a> for more info).
</div>
</div>
```

**Important Notes:**
- mdBook converts `.md` files to `.html` in rendered output
- Use `.html` extension for links: `operation.html` not `operation.md`
- Anchors are generated from headings using lowercase with hyphens
- Example: `### Device Testing - Component Control` becomes `#device-testing---component-control`
- Inside HTML elements, markdown links won't be processed - use `<a href="">` tags

## Change Log

### 2025-07-29: Simplified Numbered Steps Structure
- Simplified HTML structure for numbered steps by removing unnecessary nested divs
- Replaced `.step-header` class with semantic `<h3>` tags
- Removed `.flex-col` class (CSS now auto-detects steps with headers)
- Reduced from 2-3 nested divs to just 1 wrapper div per step
- Maintains exact visual appearance with cleaner, more maintainable code

### 2025-07-29: Added Sidebar Highlights Component
- Added new `.sidebar-highlight` class for emphasized content sections
- Features blue vertical line (4px) and blue bold headers
- Provides professional sidebar-style emphasis for key information
- Documented in both shared theme and manual CLAUDE.md files

### 2025-07-29: Added Title Page and Print Headers
- Added `.title-page` component for professional cover pages
- Implemented compact print header with manual title (10pt font, minimal padding)
- Added page numbers on same line as header (right-aligned)
- Title page includes header with logo, main content area, and footer
- Print styles hide navigation and optimize layout for PDF generation