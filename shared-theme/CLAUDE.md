# Shared Theme for Sweet Robo Manuals

This directory contains shared theme assets for all Sweet Robo machine manuals.

## Overview

The shared theme provides:
- **custom.css** - Consistent styling across all manuals including image handling and conditional content
- **custom.js** - JavaScript functionality for print navigation and conditional content features

## Usage

Each machine manual's `book.toml` file references this shared theme using relative paths:

```toml
[output.html]
additional-css = ["custom.css", "manual-styles.css"]
additional-js = ["../shared-theme/custom.js"]
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

## Numbered Steps Structure

The numbered-steps structure provides a standardized way to display sequential instructions with automatic numbering. This structure is defined in `manual-styles.css`.

### HTML Structure

```html
<div class="numbered-steps">
  
  <!-- Step with header -->
  <div>
    <div>
      <h3>Step Title Here</h3>
      • First bullet point<br>
      • Second bullet point<br>
      • Third bullet point
    </div>
  </div>
  
  <!-- Simple step without header -->
  <div>
    <div>
      Simple step text without header
    </div>
  </div>
  
</div>
```

### Key CSS Classes and Behavior

- `.numbered-steps` - Main container that enables automatic counter numbering
- `<h3>` - Optional header for complex steps (blue text, bold, 1.1em)
- Steps are automatically numbered with blue circles (1, 2, 3, etc.)
- Each step is a direct child `<div>` of `.numbered-steps`
- Bullet points use `<br>` tags between items (not list elements)
- CSS automatically detects steps with `<h3>` and applies flex-column layout

### CSS Details

The numbered-steps styling includes:
- Automatic counter incrementing for each direct child div
- Blue numbered circles (2.5em diameter) with white text
- Flex layout with proper alignment
- Special handling for steps with headers (flex-col layout)
- Responsive design (mobile stacks number above content)
- Print-friendly formatting

### Usage Notes

1. Each numbered step must be a direct child `<div>` of `.numbered-steps`
2. Use `<h3>` tag for step titles/headers
3. Each step requires one inner wrapper `<div>` for content
4. Use `<br>` tags to separate bullet points, not `<ul>` elements
5. CSS automatically detects and styles steps containing `<h3>` headers

## Sidebar Highlights

The sidebar-highlight structure provides emphasized content with a vertical line and styled headers.

### HTML Structure

```html
<div class="sidebar-highlight">

<h4>Section Title</h4>

Content paragraph explaining the key concept or important information that needs to be highlighted.

</div>
```

### Key Features

- Blue vertical line (4px) on the left side
- Blue colored header text (h4) with bold weight
- 1.5em left padding for content alignment
- Proper spacing between multiple highlights
- Clean, professional appearance matching manual design

## Title Page

The title page component provides a professional cover page layout for manuals.

### HTML Structure

```html
<div class="title-page">

<div class="title-page-header">
<div class="title">Sweet Robo - User Manual - Machine Name</div>
<img src="./assets/logo.webp" alt="Sweet Robo Logo" class="logo" />
</div>

<div class="title-page-main">
<h1>Machine Name</h1>
<h2>User Manual</h2>
<img src="./assets/machine-image.webp" alt="Machine" class="machine-image" />
</div>

<div class="title-page-footer">
<p>Revision & Date:</p>
<p>Rev 1. 05.2025</p>
</div>

</div>
```

### Key Features

- Full-height layout with three sections (header, main, footer)
- Header with manual title and logo
- Centered main content with machine name and image
- Footer with revision information
- Professional appearance matching PDF manual style

## Print Headers and Page Numbers

The CSS includes automatic print headers and page numbers:

- **Compact Header**: "Sweet Robo - User Manual - [Machine Name]" at the top of every page
- **Page Numbers**: Same line as header, right-aligned
- **Minimal Space**: Header uses only 0.3cm padding with 10pt font
- **Title Page**: Automatically breaks to new page after
- **Navigation**: All web navigation elements hidden in print
- **Content Optimization**: Proper page breaks and spacing