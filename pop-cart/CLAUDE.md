# Pop Cart Manual - Complete Styling Guide

## Pop Cart Machine Specifications

### Key Machine Facts

**IMPORTANT: When updating specifications, ensure changes are reflected in ALL locations:**
- `overview.md` - Technical Specifications section
- `operation.md` - Any references to storage, dispensers, or capacities
- `maintenance.md` - Supply capacity and refill quantities
- `parts-service.md` - Component specifications
- This CLAUDE.md file - Keep this section updated as the single source of truth

### Technical Overview

**Popcorn Storage System:**
- **2 storage containers** (dual cylinder system)
- Each container holds 3 kg of kernels (maximum capacity)
- Total capacity: 6 kg (60-70 servings per cylinder)
- Minimum operating level: 1 kg per cylinder (approximately 1/3 full)

**Seasoning Dispensing System:**
- **5 flavor lanes** (customizable seasonings)
- Individual dispensers assigned to lanes 1-5
- Each lane can hold different seasoning types

**Machine Specifications:**
- **Dimensions**: 520 × 450 × 1720 mm (20.5 × 17.7 × 67.7 in)
- **Weight**: 140 kg (309 lbs)
- **Power**: 110-125V AC or 220-240V AC, Max 2200W
- **Interface**: Touchscreen display with customer-facing operation
- **Payment**: Credit/Debit Card, Cash, Loyalty Credits
- **Environment**: Indoor use, 15-30°C (59-86°F)

### Writing Guidelines

When documenting the Pop Cart:
- Use **"both hoppers"** or **"both storage containers"** when referring to the popcorn storage (no need to add "dual cylinder system" every time - it's mentioned in specs)
- Use **"5 flavor lanes"** or **"all five lanes"** when referring to seasoning dispensers
- The admin interface is **built into the machine's app** (not web-based)
- WiFi is used for **backend data tracking and reporting** (not for app access)
- WiFi configuration is the **only setting requiring external configuration** (via Android settings)
- Don't repeat "(dual cylinder system)" everywhere - it's redundant since the machine only comes in one configuration
- **Never hardcode pricing** in documentation - all pricing is configurable by operators through the admin interface

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

#### Image Captions
To add captions to standalone images, use italic text immediately after the image:

```markdown
![Image description](./assets/image.webp)
*This is the image caption that will be centered and styled*
```

Or in HTML:
```html
<img src="./assets/image.webp" alt="Image description" />
<p><em>This is the image caption that will be centered and styled</em></p>
```

The caption will automatically be:
- Centered below the image
- Gray color (#666)
- Smaller font size (0.85em) 
- Italic style
- Proper spacing from the image

Note: Remove any asterisks (*) that are meant to surround the caption text - use proper markdown or HTML italic formatting instead.

### Image Organization
- Place images in appropriate section folders:
  - `/assets/overview/` - Machine overview and diagrams
  - `/assets/setup/` - Installation and setup photos
  - `/assets/operation/` - Interface screenshots and operation guides
  - `/assets/maintenance/` - Maintenance procedures and supplies
  - `/assets/troubleshooting/` - Error screens and fixes
  - `/assets/safety/` - Safety warnings and procedures
  - `/assets/parts-service/` - Component diagrams and parts

### ⚠️ Deprecated Image Classes (Remove by v2.0 - Q2 2026)

**Migration Required:** The following classes are deprecated and will be removed in v2.0 (Q2 2026). Please migrate to the new hybrid system documented in `/STYLE-GUIDE.md`.

| ❌ Deprecated Class | ✅ New Class | Migration Notes |
|---------------------|-------------|-----------------|
| `.setup-image` | `.img-large` or `.img-xl` | Use generic size class for flexibility |
| `.overview-diagram` | `.img-diagram` | Use semantic alias for self-documenting code |
| `.operation-screenshot` | `.img-ui-screenshot` | Use semantic alias for UI screenshots |
| `.maintenance-photo` | `.img-detail-photo` | Use semantic alias for component photos |
| `.component-detail` | `.img-small` | Use generic size class |
| `.side-image` | (remove class) | Default image sizing is appropriate |

**New System Benefits:**
- **Generic sizes**: `.img-small`, `.img-medium`, `.img-large`, `.img-xl` for straightforward size control
- **Semantic aliases**: `.img-ui-screenshot`, `.img-diagram`, `.img-detail-photo`, `.img-icon` for self-documenting purpose
- **Print-aware**: Inline `@media print` styles ensure proper dimensions on paper
- **Comprehensive documentation**: See `/STYLE-GUIDE.md` for complete reference with print dimensions

**Example Migration:**
```html
<!-- OLD (deprecated) -->
<img src="./assets/ui.webp" class="operation-screenshot" alt="UI Screen" />

<!-- NEW (recommended) -->
<img src="./assets/ui.webp" class="img-ui-screenshot" alt="UI Screen" />
```

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

## Cross-References and Links

### mdBook Markdown Limitation

**IMPORTANT:** mdBook does not process markdown syntax inside raw HTML tags (like `<div>`). This means markdown links `[text](url)` will appear as plain text instead of clickable links when placed inside HTML elements.

#### When to Use HTML Links vs Markdown Links

**Use HTML anchor tags** when inside any HTML element:
```html
<!-- Inside numbered-steps, feature-grids, callout boxes, or any <div> -->
<div class="numbered-steps">
<div>
<div>
Access the operator menu (see <a href="operation.html#admin-interface">Admin Interface</a> for details)
</div>
</div>
</div>
```

**Use markdown syntax** when in plain markdown (not inside HTML tags):
```markdown
For complete specifications, see [Overview](overview.md#technical-specifications)
```

#### Link Path Convention
- **In source files**: Reference other markdown files: `operation.md#section-id`
- **In HTML elements**: Use `.html` extension: `operation.html#section-id`
- mdBook automatically converts `.md` to `.html` during build

#### Common Locations Requiring HTML Links
- Inside `<div class="numbered-steps">`
- Inside `<div class="feature-grid">` and `<div class="feature-item">`
- Inside callout boxes (`warning-box`, `caution-box`, `info-box`, `important-box`)
- Inside any custom HTML structure

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