# Robo Ice Cream Manual - Box Styling Documentation

## Overview
This document records the styling decisions for callout boxes in the Robo Ice Cream manual, ensuring consistency across all box types.

## Box Types and Styling

### Common Properties (All Boxes)
- **Border Radius**: 0 (no rounded corners - sharp, professional appearance)
- **Side Margins**: 2em (consistent spacing from page edges)
- **Vertical Margins**: 1.5em (consistent vertical spacing)
- **Border**: 1px solid with color variations

### Info Box
```css
.info-box {
    background: #f0f9ff;    /* Very light sky blue */
    border: 1px solid #bfdbfe;  /* Light blue border */
    border-radius: 0;
    padding: 1.25em 1.5em;
    margin: 1.5em 2em;
    position: relative;
    z-index: 1;
}
```
- **Purpose**: General information, tips, and non-critical notes
- **Background**: Light sky blue (#f0f9ff) - subtle, non-intrusive
- **Border**: Light blue (#bfdbfe) - complements background
- **Headers**: Primary blue color (#2c5282)

### Warning Box
```css
.warning-box {
    background: var(--warning-pink);  /* #fed7d7 */
    border: 1px solid #feb2b2;
    border-radius: 0;
    padding: 1em;
    margin: 1.5em 2em;
}
```
- **Purpose**: Safety warnings and critical alerts
- **Background**: Light pink (#fed7d7) - attention-grabbing
- **Border**: Darker pink (#feb2b2)
- **Headers**: Warning red (#e53e3e)

### Caution Box
```css
.caution-box {
    background: var(--caution-orange);  /* #fef3c7 */
    border: 1px solid #ffde58;
    border-radius: 0;
    padding: 1em;
    margin: 1.5em 2em;
}
```
- **Purpose**: Important operational cautions
- **Background**: Light yellow-orange (#fef3c7)
- **Border**: Darker yellow (#ffde58)
- **Headers**: Dark brown (#92400e)

### Important Box
```css
.important-box {
    background: var(--info-purple);  /* #e9d8fd */
    border: 1px solid #d6bcfa;
    border-radius: 0;
    padding: 1.5em;
    margin: 1.5em 2em;
    border-left: 5px solid var(--info-text);
}
```
- **Purpose**: Critical information and key points
- **Background**: Light purple (#e9d8fd)
- **Border**: Darker purple (#d6bcfa)
- **Special**: 5px left border in dark purple (#553c9a)
- **Headers**: Dark purple (#553c9a)

## Design Rationale

### No Border Radius
- Creates a clean, professional appearance
- Matches technical documentation standards
- Provides clear visual boundaries
- Consistent with corporate manual styling

### Consistent Side Margins (2em)
- Prevents boxes from spanning full page width
- Creates visual breathing room
- Improves readability on wide screens
- Maintains consistent content flow

### Color Choices
- **Info (Blue)**: Non-threatening, informational
- **Warning (Pink/Red)**: High visibility for safety
- **Caution (Orange/Yellow)**: Medium alert level
- **Important (Purple)**: Distinctive for key information

## Usage Guidelines

1. **Info Box**: Use for tips, additional context, or helpful notes
2. **Warning Box**: Use for safety hazards and critical warnings
3. **Caution Box**: Use for operational cautions that could affect performance
4. **Important Box**: Use for critical operational information

## Print Considerations
- All boxes maintain borders in print
- Background colors adjust for print optimization
- Margins ensure proper spacing in PDF output

## Change History
- **2025-07-29**: Standardized all box types to use 2em side margins
- **2025-07-29**: Removed border-radius from all boxes for consistency
- **2025-07-29**: Fixed info-box background color conflict with h2 elements