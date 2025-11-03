# Robo Ice Cream F2 Manual - Complete Styling Guide

## Important: Reference Materials Usage

The `/resources/` folder contains reference materials from various sources including older manuals and different machine models. These materials are:
- **FOR REFERENCE ONLY** - Not to be copied directly into the manual
- **MAY REFER TO DIFFERENT MACHINES** - Not all information applies to the Robo Ice Cream F2
- Always verify technical specifications and procedures are specific to the F2 model
- Extract and adapt relevant information carefully, ensuring accuracy for the F2

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

#### Side-by-Side Images (2 Columns)
```html
<div class="side-by-side-images">
<img src="./assets/section/image1.webp" alt="First Image" />
<img src="./assets/section/image2.webp" alt="Second Image" />
</div>
```

#### Three-Column Images (For What's Included, etc.)
```html
<div class="three-column-images">
<img src="./assets/section/image1.webp" alt="First Image" />
<img src="./assets/section/image2.webp" alt="Second Image" />
<img src="./assets/section/image3.webp" alt="Third Image" />
</div>
```
- Use for sections like "What's Included" where 3 items should display side-by-side
- In print: Images limited to ~30% of page height to fit 2-3 rows per page
- Responsive: 3 columns on desktop, 2 on tablet, 1 on mobile

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

#### ⚠️ Deprecated Image Classes (Remove by v2.0 - Q2 2026)

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
• Listen for unusual noises
</div>
</div>

</div>
```

### Feature Grids

Feature grids organize related content in responsive columns. Choose the appropriate grid class based on your content:

#### Default Auto-Fit Grid (Responsive)
```html
<div class="feature-grid">
<!-- Automatically adjusts columns based on content width (200px minimum) -->
<!-- Good for 3-6 items that should flow naturally -->
</div>
```

#### Two-Column Grid (grid-2)
```html
<div class="feature-grid grid-2">
<!-- Forces exactly 2 columns -->
<!-- Use when content is longer or needs visual balance -->
<!-- Example: 4 detailed features that should stay in 2x2 layout -->

<div class="feature-item">

#### Feature Title
Longer description that benefits from more horizontal space. This layout ensures content doesn't get too narrow.

</div>

<div class="feature-item">

#### Another Feature
Additional detailed information that needs room to breathe and be easily readable.

</div>

</div>
```

#### Three-Column Grid (grid-3)
```html
<div class="feature-grid grid-3">
<!-- Forces exactly 3 columns -->
<!-- Perfect for triplets of information -->
</div>
```

#### Four-Column Grid (grid-4)
```html
<div class="feature-grid grid-4">
<!-- Forces exactly 4 columns -->
<!-- Best for brief items like error codes or status indicators -->
</div>
```

**When to use grid-2:**
- Content has 4 items that should display as 2x2
- Text descriptions are longer and need more width
- You want consistent two-column layout regardless of screen size (until mobile breakpoint)
- Visual balance is important for the specific content

**When to use default (no grid class):**
- Content has 3, 5, or 6+ items
- Items are brief and can adapt to different column counts
- You want maximum responsiveness

#### Centered Text Option
Add `text-center` class along with any grid class to center all text within items:
```html
<div class="feature-grid grid-3 text-center">
<!-- All text within items will be centered -->
</div>
```

Use centered text for:
- Step-by-step visual guides
- Icon/image-focused layouts
- Status indicators
- Brief labels under images

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
<img src="./shared/images/sweetrobo-logo.webp" alt="Sweet Robo Logo" class="logo" />
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

## Numbered Steps with Images

For step-by-step instructions that benefit from visual aids, use the numbered-steps-with-images structure:

```html
<div class="numbered-steps-with-images">

<div class="step-with-image">
<div class="step-content">
<h3>Step Title Here</h3>
Description text goes here<br>
<br>
• First bullet point<br>
• Second bullet point<br>
• Third bullet point
</div>
<div class="step-image">
<img src="./assets/section/image.webp" alt="Step Image" />
</div>
</div>

<div class="step-with-image">
<div class="step-content">
<h3>Another Step</h3>
• Additional instructions<br>
• More details<br>
• Final points
</div>
<div class="step-image">
<img src="./assets/section/another-image.webp" alt="Another Image" />
</div>
</div>

</div>
```

### Key Features:
- **Desktop**: Split layout with 60% text on left, 40% image on right
- **Mobile**: Stacks vertically with text above image
- **Automatic numbering**: Blue circles with white numbers (1, 2, 3...)
- **Background cards**: Light gray background for each step
- **Responsive images**: Images scale appropriately for screen size

### Usage Notes:
- Each step gets its own `.step-with-image` container
- The `.step-content` div contains the text and gets the number
- The `.step-image` div contains the visual aid
- Use `<br>` tags for line breaks between bullet points
- Images should be in WebP format for optimal performance

### Example Use Cases:
- Customer operation flows with UI screenshots
- Assembly instructions with photos
- Maintenance procedures with visual guides
- Troubleshooting steps with error screenshots

## Change Log

### 2025-09-02: Added Numbered Steps with Images
- Created new `.numbered-steps-with-images` component for visual step-by-step guides
- Split-screen layout on desktop (60/40 text/image)
- Stacked layout on mobile (text above image)
- Automatic step numbering with blue circles
- Light gray background cards for visual separation
- Added to styling-demo.md with Customer Operation example

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