# Shared Theme for Sweet Robo Manuals

This directory contains shared theme assets for all Sweet Robo machine manuals.

## Overview

The `custom.css` file in this directory provides consistent styling across all three machine manuals:
- Robo Ice Cream
- Candy Monster  
- Pop Cart

## Usage

Each machine manual's `book.toml` file references this shared theme using a relative path:

```toml
[output.html]
additional-css = ["../shared-theme/custom.css"]
```

## CSS Features

The custom.css file includes:

### Image Styling
- Responsive image sizing with max-width: 100% and max-height: 50vh
- Automatic centering and shadow effects
- Border radius for polished appearance

### Size Classes
- `.img-small` - max-width: 300px
- `.img-medium` - max-width: 500px  
- `.img-large` - max-width: 700px
- `.img-full` - max-width: 900px

### Section-Specific Classes
- `.setup-image` - For setup documentation (600px max, special border)
- `.overview-diagram` - For system overviews (700px max)
- `.operation-screenshot` - For operational screens (500px max, orange border)
- `.maintenance-photo` - For maintenance steps (400px max, green border)
- `.component-detail` - For component closeups (350px max, purple border)

### Layout Classes
- `.img-row` - Flexbox container for multiple images
- `.img-half` - 45% width for side-by-side images
- `.img-third` - 30% width for three-column layouts

### Responsive Features
- Mobile optimizations for screens under 768px
- Print-specific styling for PDF generation
- Automatic caption styling for italic text under images

## Modifying the Theme

When updating the theme:
1. Edit the `custom.css` file in this directory
2. Changes will automatically apply to all three manuals
3. Test changes by building each manual with `mdbook build`
4. Ensure consistency across all manuals before committing changes

## Adding New Theme Files

To add additional theme assets:
1. Place the new file in this shared-theme directory
2. Update each manual's book.toml to reference the new file
3. Use relative paths from each manual directory (../shared-theme/filename)