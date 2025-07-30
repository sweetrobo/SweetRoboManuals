# Candy Monster Manual - Complete Styling Guide

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
  - `/assets/images/header/` - Logo and header images
  - `/assets/images/getting-started/` - Setup and installation photos
  - `/assets/images/operation/` - Interface screenshots and operation guides
  - `/assets/images/maintenance/` - Maintenance procedures
  - `/assets/images/troubleshooting/` - Error screens and fixes
  - `/assets/images/safety/` - Safety warnings and procedures

## Official Sweet Robo Styling Components

Based on the official PDF design, use these components to match the professional manual styling:

### Callout Boxes

#### Important Information
```html
<div class="important-box">

**IMPORTANT**

Some accessories or consumables may be packaged and stored inside the machine body for secure transit. Before powering on the machine, carefully open all access doors and inspect the interior. Remove all packaging materials, zip ties used for securing components during shipping, and any loose items. Ensure nothing is obstructing moving parts.

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

The Candy Monster supports remote management requiring an internet connection, ensure a stable Wi-Fi signal or an accessible Ethernet port is available near the machine.

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
Carefully move the Candy Monster to its final operating location, ensuring it meets all site requirements.
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

#### User-Friendly Touchscreen:
An intuitive interface allows customers to easily browse candy options and make selections with just a few taps.

</div>

<div class="feature-item">

#### Multiple Candy Bays:
Offers a variety of choices with six individual candy bays, allowing you to cater to diverse customer preferences.

</div>

<div class="feature-item">

#### Engaging Delivery System:
"Green Robo," our friendly delivery bot, carefully collects the selected candies and presents them in an iconic cup, adding an element of entertainment.

</div>

<div class="feature-item">

#### Secure Cash Handling:
Features a lockable cash box for paper currency and a coin box for coin collection, ensuring secure storage of earnings (depends on options purchased).

</div>

</div>
```

### Technical Specifications (Official Style)

#### Standard Table
```markdown
| Machine Name | Candy Monster |
|--------------|---------------|
| Dimensions (W×D×H) | 137 × 83 × 235 cm (53.9 × 32.7 × 92.5 in) |
| Weight | 290 kg (approx. 639 lbs) |
| Power Voltage | 110-125V or 220-240V (Region-dependent) |
| Power Consumption | Max 1,400 W (110V: 12.8A; 220V: 6.4A) |
| Candy Bays | 6 |
| Cup Capacity | Up to 200 cups (4 tubes x 50 cups each) |
```

#### Custom Specifications Table
```html
<div class="specs-table">

<div class="spec-row">
<div class="spec-label">Machine Name</div>
<div class="spec-value">Candy Monster</div>
</div>

<div class="spec-row">
<div class="spec-label">Dimensions (W×D×H)</div>
<div class="spec-value">137 × 83 × 235 cm (53.9 × 32.7 × 92.5 in)</div>
</div>

<div class="spec-row">
<div class="spec-label">Weight</div>
<div class="spec-value">290 kg (approx. 639 lbs)</div>
</div>

<div class="spec-row">
<div class="spec-label">Power Voltage</div>
<div class="spec-value">110-125V or 220-240V (Region-dependent)</div>
</div>

<div class="spec-row">
<div class="spec-label">Power Consumption</div>
<div class="spec-value">Max 1,400 W (110V: 12.8A; 220V: 6.4A)</div>
</div>

<div class="spec-row">
<div class="spec-label">Candy Bays</div>
<div class="spec-value">6</div>
</div>

<div class="spec-row">
<div class="spec-label">Cup Capacity</div>
<div class="spec-value">Up to 200 cups (4 tubes x 50 cups each)</div>
</div>

</div>
```

### Section Dividers
```html
<hr class="section-divider">
```

## Content Structure Examples

### Unpacking List (Official Style)
```html
<div class="numbered-steps">

<div>
The Candy Monster Vending Machine (fully assembled, except for the roof piece in certain shipments)
</div>

<div>
Roof Assembly Piece (in certain shipments, usually already assembled)
</div>

<div>
This Operator's Manual
</div>

<div>
Power Cord (specific to your region), attached at the back
</div>

<div>
Keys for service doors and cash box, near the power cord
</div>

</div>
```

### Site Requirements (Official Style)
```html
<div class="step-header">Space</div>

A flat, level, and stable surface capable of supporting the machine's weight (approx. 290 KG / 639 LBS) + Candy weight (varies).

**Dimensions:** At least 150 cm (W) x 100 cm (D) x 250 cm (H) to allow for door opening, ventilation, and servicing.

Ensure adequate clearance at the front for customer access and at the sides/rear for service access and ventilation.

<div class="step-header">Power</div>

A dedicated, properly grounded electrical outlet matching the machine's voltage (110-125V or 220-240V, as specified for your region).

Outlet must support a 15A for 110V or 10A for 220V circuit. Refer to the Technical Specifications.

It is highly recommended to use a circuit with surge protection.
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
7. **Follow the PDF structure** for professional appearance

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