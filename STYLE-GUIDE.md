# Sweet Robo Manuals - Complete Style Guide

**Version:** 1.5
**Last Updated:** 2025-11-03
**Target Removal Date for Deprecated Classes:** v2.0 (Q2 2026)

---

## Table of Contents

1. [Image Classes](#image-classes)
2. [Print Dimensions Reference](#print-dimensions-reference)
3. [Component Classes](#component-classes)
4. [Conditional Visibility](#conditional-visibility)
5. [Deprecated Classes](#deprecated-classes)

---

## Image Classes

### When to Use Each Size

#### **Default (no class needed)**
General photos, standard screenshots - no special sizing needed

```html
<img src="./assets/photo.webp" alt="Machine Setup" />
```

- **Screen:** 50vh max height
- **Print:** 14.26cm (5.61", 48% of page height)
- **Use for:** Most images that don't need special sizing

---

#### **Generic Size Classes**

Use these for straightforward size control:

##### `.img-small` - Icons, badges, small UI elements
```html
<img src="./assets/icon.webp" class="img-small" alt="Status Icon" />
```
- **Screen:** 30vh max, 300px wide
- **Print:** 5.94cm (2.34", 20% of page height)
- **Use for:** Small icons, badges, UI indicators

##### `.img-medium` - Standard photos
```html
<img src="./assets/photo.webp" class="img-medium" alt="Machine Photo" />
```
- **Screen:** 50vh max, 500px wide
- **Print:** 10.40cm (4.09", 35% of page height)
- **Use for:** Standard photographs, medium-detail screenshots

##### `.img-large` - Detailed diagrams
```html
<img src="./assets/diagram.webp" class="img-large" alt="System Diagram" />
```
- **Screen:** 70vh max, 700px wide
- **Print:** 11.88cm (4.68", 40% of page height)
- **Use for:** Detailed technical diagrams, large photos

##### `.img-xl` - Full-detail UI screenshots
```html
<img src="./assets/admin-panel.webp" class="img-xl" alt="Admin Interface" />
```
- **Screen:** 90vh max, 900px wide
- **Print:** 14.26cm (5.61", 48% of page height)
- **Use for:** Complex UI screenshots requiring maximum detail

---

#### **Semantic Aliases**

Use these when you want self-documenting code:

##### `.img-ui-screenshot` - Complex interface screenshots
```html
<img src="./assets/ui-admin.webp" class="img-ui-screenshot" alt="Admin Panel" />
```
- Same sizing as `.img-xl`
- Self-documenting purpose
- **Use for:** UI screens, admin panels, complex interfaces

##### `.img-diagram` - Technical drawings
```html
<img src="./assets/wiring-diagram.webp" class="img-diagram" alt="Wiring Diagram" />
```
- Same sizing as `.img-large`
- Self-documenting purpose
- **Use for:** Technical drawings, schematics, diagrams

##### `.img-detail-photo` - Component close-ups
```html
<img src="./assets/motor-assembly.webp" class="img-detail-photo" alt="Motor Detail" />
```
- **Screen:** 40vh max, 400px wide
- **Print:** 8.91cm (3.51", 30% of page height)
- **Use for:** Component photos, part close-ups, assembly details

##### `.img-icon` - Small UI elements
```html
<img src="./assets/warning-icon.webp" class="img-icon" alt="Warning" />
```
- **Screen:** 20vh max, 150px wide
- **Print:** 4.46cm (1.75", 15% of page height)
- **Use for:** Icons, small badges, UI indicators

---

### Image Layouts

#### Side-by-Side Images
```html
<div class="side-by-side-images">
  <img src="./assets/before.webp" alt="Before" />
  <img src="./assets/after.webp" alt="After" />
</div>
```

#### Three-Column Images
```html
<div class="three-column-images">
  <img src="./assets/step1.webp" alt="Step 1" />
  <img src="./assets/step2.webp" alt="Step 2" />
  <img src="./assets/step3.webp" alt="Step 3" />
</div>
```

#### Image with Caption
```markdown
![Machine Overview](./assets/machine.webp)
*Complete front view showing all access panels*
```

---

## Print Dimensions Reference

### Paper Specifications

- **Paper Size:** A4 (21cm × 29.7cm / 8.27" × 11.69")
- **Margins:** 0.8cm top, 0.5cm sides, 0.2cm bottom
- **Usable Area:** 20cm × 28.7cm (7.87" × 11.3")

### Height Percentage Guidelines

| Size | Screen | Print (cm) | Print (in) | Page % | Best For |
|------|--------|------------|------------|--------|----------|
| Default | 50vh | 14.26cm | 5.61" | 48% | General images |
| `.img-small` / `.img-icon` | 30vh / 20vh | 5.94-4.46cm | 2.34-1.75" | 20-15% | Icons, small elements |
| `.img-medium` / `.img-detail-photo` | 50vh / 40vh | 10.40-8.91cm | 4.09-3.51" | 35-30% | Standard photos |
| `.img-large` / `.img-diagram` | 70vh | 11.88cm | 4.68" | 40% | Detailed diagrams |
| `.img-xl` / `.img-ui-screenshot` | 90vh / 80vh | 14.26cm | 5.61" | 48% | Complex UI screenshots |

### Layout Recommendations

- **Single detailed image:** 35-48% height (allows text above/below)
- **Two images side-by-side:** 30-35% height each
- **Three images:** 25-30% height each
- **Four+ images:** 20-25% height each

---

## Component Classes

### Callout Boxes

#### Info Box (Blue)
```html
<div class="info-box">

The machine supports remote management requiring an internet connection.

</div>
```
- **Use for:** Helpful information, tips, notes

#### Important Box (Purple)
```html
<div class="important-box">

**IMPORTANT**

Remove all packing materials before first use.

</div>
```
- **Use for:** Important notices, critical information

#### Warning Box (Pink/Red)
```html
<div class="warning-box">

**WARNING: Electrical Shock Hazard.**

Disconnect power before servicing.

</div>
```
- **Use for:** Safety warnings, electrical hazards

#### Caution Box (Orange/Yellow)
```html
<div class="caution-box">

**CAUTION:** Two or more people required for lifting.

</div>
```
- **Use for:** Cautions, handling precautions

---

### Numbered Steps

#### Basic Steps
```html
<div class="numbered-steps">

<div>
<div>
Turn off the main power switch.
</div>
</div>

<div>
<div>
Wait 30 seconds for capacitors to discharge.
</div>
</div>

<div>
<div>
Disconnect the power cord.
</div>
</div>

</div>
```

#### Steps with Headers
```html
<div class="numbered-steps">

<div>
<div>
<h3>Prepare the Machine</h3>
Turn on power and verify all indicator lights are green.
</div>
</div>

<div>
<div>
<h3>Load Supplies</h3>
Fill hoppers with approved materials only.
</div>
</div>

</div>
```

---

### Feature Grids

#### Two-Column Grid
```html
<div class="feature-grid grid-2">

<div class="feature-item">

#### Feature Name
Description of the feature and its benefits.

</div>

<div class="feature-item">

#### Another Feature
Additional feature information.

</div>

</div>
```

#### Three-Column Grid
```html
<div class="feature-grid grid-3">
<!-- Three columns of features -->
</div>
```

#### Four-Column Grid
```html
<div class="feature-grid grid-4">
<!-- Four columns - best for brief items -->
</div>
```

---

### Technical Specifications

#### Specs Table
```html
<div class="specs-table">

<div class="spec-row">
<div class="spec-label">Machine Name</div>
<div class="spec-value">Pop Cart</div>
</div>

<div class="spec-row">
<div class="spec-label">Dimensions (W×D×H)</div>
<div class="spec-value">520 × 450 × 1720 mm</div>
</div>

</div>
```

---

### Step Headers
```html
<div class="step-header">1. Position the Machine</div>
```

### Section Dividers
```html
<hr class="section-divider">
```

---

## Conditional Visibility

### Development Mode

Hide content until ready for production:

```html
<div class="dev-only">
This section is still being written and reviewed.
</div>
```

- **Visibility:** Hidden by default
- **Show with:** `?dev=true` URL parameter
- **Print:** Always hidden
- **Use for:** Draft content, incomplete sections

---

### Pending Review

Mark content under review:

```html
<div class="pending">
This procedure is being updated with new photos.
Current instructions may be incomplete.
</div>
```

- **Visibility:** Always visible with "⚠️ PENDING REVIEW" banner
- **Print:** Banner hidden, content shows normally
- **Use for:** Content awaiting review, incomplete sections that should be visible

---

### Print Modes

Special modes for print testing:

- **`?showPrintCondensed=true`** - Shows print-only content on screen
- **`?printPreview=true`** - Preview print layout on screen

---

## Deprecated Classes

### Migration Guide

The following classes are **deprecated** and will be removed in **v2.0 (Q2 2026)**:

| ❌ Deprecated Class | ✅ New Class | Migration Notes |
|---------------------|-------------|-----------------|
| `.setup-image` | `.img-large` or `.img-xl` | Use generic size class |
| `.overview-diagram` | `.img-diagram` | Use semantic alias |
| `.operation-screenshot` | `.img-ui-screenshot` | Use semantic alias |
| `.maintenance-photo` | `.img-detail-photo` | Use semantic alias |
| `.component-detail` | `.img-small` | Use generic size class |
| `.side-image` | (remove class) | Default sizing is fine |

### Migration Timeline

- **v1.5 (Current):** Deprecated classes still work, warnings in code comments
- **v1.6-1.9 (Q1 2026):** Gradual migration in manuals
- **v2.0 (Q2 2026):** Deprecated classes removed from CSS

### Migration Examples

#### Before (Deprecated)
```html
<img src="./assets/ui.webp" class="operation-screenshot" alt="UI Screen" />
```

#### After (Modern)
```html
<img src="./assets/ui.webp" class="img-ui-screenshot" alt="UI Screen" />
```

---

## Quick Reference Card

### Most Common Classes

```
Images:
├─ .img-small       (icons, 30vh)
├─ .img-medium      (photos, 50vh)
├─ .img-large       (diagrams, 70vh)
└─ .img-xl          (UI screenshots, 90vh)

Semantic:
├─ .img-ui-screenshot  (complex UI)
├─ .img-diagram        (technical drawings)
└─ .img-detail-photo   (component close-ups)

Callouts:
├─ .info-box      (blue, helpful info)
├─ .important-box (purple, critical info)
├─ .warning-box   (pink, safety warnings)
└─ .caution-box   (yellow, precautions)

Steps:
└─ .numbered-steps  (auto-numbered procedure steps)

Grids:
├─ .feature-grid grid-2  (2 columns)
├─ .feature-grid grid-3  (3 columns)
└─ .feature-grid grid-4  (4 columns)

Conditional:
├─ .dev-only    (hidden until ?dev=true)
└─ .pending     (visible with warning banner)
```

---

## Additional Resources

- **Per-Manual Style Guides:** See `CLAUDE.md` in each manual folder for manual-specific examples
- **Print CSS:** All print styles consolidated in `/shared/css/custom-print.css`
- **Image CSS:** All image classes in `/shared/css/images.css`
- **Component CSS:** Callouts, steps, grids in `/shared/css/components.css`

---

**Questions or Issues?**
Contact the documentation team or file an issue in the repository.
