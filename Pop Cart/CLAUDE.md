# Pop Cart Manual - Complete Styling Guide

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

#### Side-by-Side Images (Official Style)
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

### Image Organization
- Place images in appropriate section folders:
  - `/assets/overview/` - Machine overview and diagrams
  - `/assets/setup/` - Installation and setup photos
  - `/assets/operation/` - Interface screenshots and operation guides
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

The Pop Cart supports remote management requiring an internet connection, ensure a stable Wi-Fi signal or an accessible Ethernet port is available near the machine.

</div>
```

### Step-by-Step Instructions (Official Style)

#### Section Headers
```html
<div class="step-header">1. Position the Machine:</div>
```

#### Numbered Steps with Blue Circles
```html
<div class="numbered-steps">

<div>
Carefully move the Pop Cart to its final operating location, ensuring it meets all site requirements.
</div>

<div>
Ensure all four feet are firmly on the ground and the machine is level.
</div>

<div>
Lock the feet in place when ready.
</div>

</div>
```

### Feature Grids (Two-Column Layout)

```html
<div class="feature-grid">

<div class="feature-item">

#### Fresh Popping System:
Advanced popping mechanism creates fresh popcorn on demand with optimal kernel-to-pop ratios.

</div>

<div class="feature-item">

#### Multiple Flavor Options:
Support for various seasoning dispensers allowing diverse flavor combinations.

</div>

<div class="feature-item">

#### User-Friendly Interface:
Intuitive touchscreen interface for easy customer operation and selection.

</div>

<div class="feature-item">

#### Easy Maintenance:
Designed for straightforward access to popping chamber, seasoning dispensers, and collection areas.

</div>

</div>
```

### Technical Specifications (Official Style)

#### Standard Table
```markdown
| Machine Name | Pop Cart |
|--------------|----------|
| Dimensions (W×D×H) | TBD × TBD × TBD cm |
| Weight | TBD kg (approx. TBD lbs) |
| Power Voltage | 110-125V or 220-240V |
| Power Consumption | Max TBD W |
```

#### Custom Specifications Table
```html
<div class="specs-table">

<div class="spec-row">
<div class="spec-label">Machine Name</div>
<div class="spec-value">Pop Cart</div>
</div>

<div class="spec-row">
<div class="spec-label">Dimensions (W×D×H)</div>
<div class="spec-value">TBD × TBD × TBD cm (TBD × TBD × TBD in)</div>
</div>

<div class="spec-row">
<div class="spec-label">Weight</div>
<div class="spec-value">TBD kg (approx. TBD lbs)</div>
</div>

</div>
```

### Section Dividers
```html
<hr class="section-divider">
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