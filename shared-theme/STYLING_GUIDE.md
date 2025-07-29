# Sweet Robo Manual Styling Guide

Based on the official PDF design patterns, this guide shows how to use the custom styling components in your markdown files.

## Quick Reference

All styling is applied through CSS classes. Add the class to HTML `<div>` elements in your markdown.

## Callout Boxes

### Important Information
```html
<div class="important-box">

**IMPORTANT**

Some accessories or consumables may be packaged and stored inside the machine body for secure transit. Before powering on the machine, carefully open all access doors and inspect the interior.

</div>
```

### Warnings
```html
<div class="warning-box">

**WARNING: Electrical Shock Hazard.** Ensure your hands are dry and you are not standing in water when connecting the power cord.

</div>
```

### Cautions
```html
<div class="caution-box">

**CAUTION:** Two or more people may be required for safely moving and positioning the machine. Use appropriate lifting equipment if necessary.

</div>
```

### Information Boxes
```html
<div class="info-box">

The Candy Monster supports remote management requiring an internet connection, ensure a stable Wi-Fi signal or an accessible Ethernet port is available near the machine.

</div>
```

## Step-by-Step Instructions

### Section Headers
```html
<div class="step-header">1. Position the Machine:</div>
```

### Numbered Steps
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

## Feature Grids (Two-Column Layout)

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
"Green Robo," our friendly delivery bot, carefully collects the selected candies and presents them in an iconic cup.

</div>

<div class="feature-item">

#### Secure Cash Handling:
Features a lockable cash box for paper currency and a coin box for coin collection, ensuring secure storage of earnings.

</div>

</div>
```

## Tables

Standard markdown tables will automatically receive the new styling:

```markdown
| Machine Name | Candy Monster |
|--------------|---------------|
| Dimensions (W×D×H) | 137 × 83 × 235 cm (53.9 × 32.7 × 92.5 in) |
| Weight | 290 kg (approx. 639 lbs) |
| Power Voltage | 110-125V or 220-240V (Region-dependent) |
| Power Consumption | Max 1,400 W (110V: 12.8A; 220V: 6.4A) |
```

## Custom Specifications Table

For a more styled specification layout:

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

</div>
```

## Images

### Side-by-Side Images
```html
<div class="side-by-side-images">

<div class="image-placeholder">IMAGE EXAMPLE UNLOCKED</div>
<div class="image-placeholder">IMAGE EXAMPLE LOCKED</div>

</div>
```

### Single Image Placeholders
```html
<div class="image-placeholder">IMAGE EXAMPLE HOW A READY MACHINE LOOKS LIKE</div>
```

### Regular Images
```markdown
![Machine Overview](./assets/overview/machine-photo.webp)
```

## Section Dividers

```html
<hr class="section-divider">
```

## Lists

Standard markdown lists will automatically receive enhanced styling:

```markdown
1. The Candy Monster Vending Machine (fully assembled, except for the roof piece in certain shipments)
2. Roof Assembly Piece (in certain shipments, usually already assembled)  
3. This Operator's Manual
4. Power Cord (specific to your region), attached at the back
5. Keys for service doors and cash box, near the power cord
```

## Color System

The styling uses these colors from the official PDF:

- **Primary Blue**: `#2c5282` (headings, buttons, accents)
- **Light Blue**: `#e6f3ff` (section backgrounds)
- **Warning Pink**: `#fed7d7` (warning boxes)
- **Caution Orange**: `#fed7aa` (caution boxes)
- **Info Purple**: `#e9d8fd` (info boxes)

## Best Practices

1. **Use callout boxes** for important information, warnings, and cautions
2. **Use numbered steps** for step-by-step instructions
3. **Use feature grids** for showcasing multiple features or benefits
4. **Use section headers** to break up long step sequences
5. **Always use image placeholders** until real images are available
6. **Test in both web and print modes** to ensure proper formatting

## Responsive Design

All components are responsive and will adapt to:
- Desktop (full grid layouts)
- Tablet (adjusted grids)
- Mobile (single column layouts)
- Print (optimized for PDF output)