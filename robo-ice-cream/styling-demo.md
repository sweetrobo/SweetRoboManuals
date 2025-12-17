# Sweet Robo Manual Styling Guide

This page demonstrates how to use all official styling components for creating Sweet Robo machine manuals. Each section shows the HTML/Markdown structure needed to achieve the desired styling, along with explanations of when and how to use each component.

***

## Title Page Layout

**Usage:** Create a professional cover page for your manual. The title page includes a header with logo, main content area with machine name and image, and a footer with revision information.

**HTML Structure:**

```html
<div class="title-page">
  <div class="title-page-header">
    <div class="title">Manual Title Here</div>
    <img src="./shared/images/sweetrobo-logo.webp" alt="Logo" class="logo" />
  </div>
  <div class="title-page-main">
    <h1>Machine Name</h1>
    <h2>Document Type</h2>
    <img src="./assets/machine.webp" alt="Machine" class="machine-image" />
  </div>
  <div class="title-page-footer">
    <p>Revision & Date:</p>
    <p>Rev X. MM.YYYY</p>
  </div>
</div>
```

**Live Example:**

Sweet Robo - User Manual - Robo Ice Cream![Sweet Robo Logo](shared/images/sweetrobo-logo.webp)

## Robo Ice Cream

### User Manual

![Robo Ice Cream Machine](../.gitbook/assets/f2-machine-title-page.webp)

Revision & Date:

Rev 1. 05.2025

***

## Callout Boxes

**Usage:** Callout boxes highlight critical information with color-coded backgrounds. Use them to draw attention to warnings, cautions, important notes, and general information.

### Warning Box (Pink Background)

**When to Use:** For serious safety hazards that could result in injury or death. Always start with **WARNING:** in bold.

**HTML Structure:**

```html
<div class="warning-box">

**WARNING: Hazard Type.** Detailed warning message here.

</div>
```

**Live Example:**

**WARNING: Electrical Shock Hazard.** This warning box uses a pink background (#fed7d7) to indicate serious safety hazards. The bold "WARNING:" prefix immediately identifies the severity. Use this style for electrical, mechanical, or other dangers that could cause injury.

### Caution Box (Yellow Background)

**When to Use:** For situations that could damage equipment or cause minor injury. Start with **CAUTION:** in bold.

**HTML Structure:**

```html
<div class="caution-box">

**CAUTION:** Caution message here.

</div>
```

**Live Example:**

**CAUTION:** This caution box uses a yellow/orange background (#fed7aa) to indicate potential equipment damage or minor injury risks. Use for heavy lifting requirements, temperature warnings, or procedural cautions that don't pose immediate danger but require careful attention.

### Info Box (Purple Background)

**When to Use:** For general information, tips, or feature highlights that enhance understanding.

**HTML Structure:**

```html
<div class="info-box">

**Optional Title**

Information content here.

</div>
```

**Live Example:**

**How Info Boxes Work**

This info box uses a light purple background (#e9d8fd) to present helpful information without urgency. Perfect for explaining features, providing context, or sharing tips. You can include an optional bold title at the top. Tables, lists, and other markdown elements work inside these boxes.

### Important Box (Light Blue Background)

**When to Use:** For critical operational information that users must not miss.

**HTML Structure:**

```html
<div class="important-box">

**IMPORTANT**

Important message here.

</div>
```

**Live Example:**

**IMPORTANT**

This important box uses a light blue background (#e6f3ff) to highlight essential information that isn't a safety warning but is crucial for proper operation. Use this for pre-operation checks, critical setup steps, or key operational requirements that users must understand.

***

## Numbered Steps with Blue Circles

**Usage:** Creates automatically numbered steps with blue circle indicators. Each step gets a sequential number (1, 2, 3...) in a blue circle.

### Basic Numbered Steps

**When to Use:** For sequential instructions where order matters.

**HTML Structure:**

```html
<div class="numbered-steps">
  <div>
    <div>Step 1 content here</div>
  </div>
  <div>
    <div>Step 2 content here</div>
  </div>
  <div>
    <div>Step 3 content here</div>
  </div>
</div>
```

**Live Example (showing 5 steps):**

This is the first step. Notice the blue circle with "1" appears automatically. You don't need to manually number anything - the CSS handles it.This is the second step. The numbering continues automatically. Each step maintains consistent spacing and alignment.Third step here. You can include any content within steps including \*\*bold text\*\*, \*italics\*, or even \`inline code\`.Fourth step. The blue circles (#2c5282 background) with white numbers provide clear visual progression through procedures.Fifth and final step in this example. The system supports unlimited steps and maintains consistent styling throughout.

### Steps with Headers

**When to Use:** For grouped instructions where each step contains multiple sub-tasks.

**HTML Structure:**

```html
<div class="numbered-steps">
  <div>
    <div>
      <h3>Step Header</h3>
      • Sub-task one<br>
      • Sub-task two<br>
      • Sub-task three
    </div>
  </div>
</div>
```

**Live Example:**

#### Understanding Step Headers

When you add an `<h3>` tag inside a numbered step, the CSS automatically adjusts the layout. The blue number circle aligns with the header, and content below maintains proper indentation. This is perfect for complex procedures with multiple actions per step.

#### Using Bullet Points

• Use `<br>` tags between bullet points for proper spacing\
• Start each line with a bullet character (•)\
• Maintain consistent formatting throughout\
• The bullets align nicely under the header

#### Combining Content Types

You can mix different content types within a single step:\
\
• Bullet points for lists\
• Regular paragraphs for descriptions\
• \*\*Bold\*\* and \*italic\* text for emphasis\
• Even small tables or other HTML elements

***

## Sidebar Highlights

**Usage:** Creates emphasized content blocks with a blue vertical line and styled header. Perfect for tips, best practices, or supplementary information.

**HTML Structure:**

```html
<div class="sidebar-highlight">

<h4>Header Text</h4>

Content paragraph here.

</div>
```

**Live Examples (showing different use cases):**

**How Sidebar Highlights Work**

The sidebar highlight component features a 4px blue vertical line on the left (#2c5282) with light gray background (#f8f9fa). The `<h4>` header appears in blue and bold. Use these for information that supplements the main content but deserves special attention.

**Best Practices**

Keep sidebar highlights concise and focused. They work best for tips, reminders, or additional context that enhances understanding without interrupting the main flow. You can include multiple paragraphs, lists, or other markdown elements within these blocks.

**Visual Hierarchy**

Sidebar highlights create visual breaks in long content sections. The blue accent color ties them to the Sweet Robo brand while the gray background ensures they don't compete with primary content. Use sparingly for maximum impact.

**Responsive Design**

These components adapt to all screen sizes. On mobile devices, they maintain readability with appropriate padding and font sizes. In print/PDF output, they appear with clear borders and proper spacing.

***

## Feature Grids

**Usage:** Feature grids organize related content in responsive columns. Each item gets a card-style appearance with consistent spacing.

### Default Auto-Fit Grid (Responsive Columns)

**When to Use:** For 3-6 items that should flow naturally. Columns auto-adjust based on available space (200px minimum width per column).

**HTML Structure:**

```html
<div class="feature-grid">
  <div class="feature-item">
    <h4>Title</h4>
    Description text
  </div>
  <!-- More items... -->
</div>
```

**Live Example (6 items auto-flowing):**

**Auto-Responsive**

This grid automatically adjusts columns based on screen width. No need to specify column count.

**Minimum Width**

Each column maintains a 200px minimum width, preventing content from becoming too narrow.

**Card Styling**

Each item appears in a subtle card with padding and border for visual separation.

**Flexible Content**

Supports headings, paragraphs, lists, images, and any other HTML/Markdown content.

**Consistent Spacing**

10px gaps between items maintain visual rhythm without feeling cramped.

**Mobile Friendly**

Automatically stacks to single column on small screens for optimal readability.

### Two-Column Layout (grid-2)

**When to Use:** Force exactly 2 columns when you have 4 items (2x2 layout) or need wider columns for longer content.

**HTML Structure:**

```html
<div class="feature-grid grid-2">
  <div class="feature-item">Content 1</div>
  <div class="feature-item">Content 2</div>
  <div class="feature-item">Content 3</div>
  <div class="feature-item">Content 4</div>
</div>
```

**Live Example with Images:**

![User Interface](../.gitbook/assets/password-input-screen.webp)

**Including Images**

Feature items can include images. The image will scale to fit the column width while maintaining aspect ratio. This two-column layout ensures images don't get too large.

![Ice Cream Mix](../.gitbook/assets/ice-cream-mix-powder.webp)

**Longer Descriptions**

The grid-2 class forces exactly two columns, giving more horizontal space for detailed descriptions. This is ideal when your content needs room to breathe.

![Maintenance Tools](../.gitbook/assets/mixing-bucket.webp)

**Consistent Layout**

With grid-2, you get a predictable 2x2 layout for 4 items, or 2x3 for 6 items. The layout remains two columns until the mobile breakpoint.

![Parts Kit](../.gitbook/assets/spare-parts-kit-with-manual.webp)

**Visual Balance**

Two-column layouts create strong visual balance, especially when items have similar content lengths. Perfect for before/after comparisons or paired information.

### Three-Column Layout (grid-3)

**When to Use:** Perfect for triplets of information, product features, or step sequences.

**HTML Structure:**

```html
<div class="feature-grid grid-3">
  <div class="feature-item">Item 1</div>
  <div class="feature-item">Item 2</div>
  <div class="feature-item">Item 3</div>
</div>
```

**Live Example:**

![Chocolate Syrup](../.gitbook/assets/chocolate-syrup-hersheys.webp)

**First Column**

The grid-3 class creates exactly three columns. This layout is ideal for showcasing related items or comparing three options.

![Topping Spoons](../.gitbook/assets/syrup-topping-spoons.webp)

**Second Column**

Three columns provide a nice balance between content density and readability. Common uses include product features or service tiers.

![Tools Kit](../.gitbook/assets/installation-tools-kit.webp)

**Third Column**

On tablets and smaller screens, this automatically adjusts to 2 columns, then 1 column on mobile for optimal viewing.

### Four-Column Layout (grid-4)

**When to Use:** Best for brief items like error codes, status indicators, or quick reference lists.

**HTML Structure:**

```html
<div class="feature-grid grid-4">
  <div class="feature-item">Brief item</div>
  <!-- 3 more items... -->
</div>
```

**Live Example (Error Codes):**

**Grid-4 Usage**

Four narrow columns for brief content

**Compact Display**

Maximizes horizontal space usage

**Quick Reference**

Perfect for lookup tables or codes

**Responsive**

Adjusts to fewer columns on smaller screens

### Centered Text Variant

**When to Use:** Add `text-center` class along with any grid class to center all text within items. Perfect for image-focused layouts or step sequences.

**HTML Structure:**

```html
<div class="feature-grid grid-3 text-center">
  <div class="feature-item">
    <img src="image.webp" alt="Alt text" />
    <h4>Centered Title</h4>
    Centered description
  </div>
</div>
```

**Live Example:**

![Wheel Lock](../.gitbook/assets/wheel-lock-mechanism.webp)

**Centered Headers**

All text within text-center grids aligns to center

![LED Signage](../.gitbook/assets/unpacking-step-4.webp)

**Visual Focus**

Centering works well with images above text

![Hopper View](../.gitbook/assets/airpath-hopper-view.webp)

**Clean Appearance**

Creates a polished, professional look

***

## Tables

**Usage:** Tables display structured data in rows and columns. They can be standalone or placed within callout boxes.

### Standard Markdown Table

**Markdown Structure:**

```markdown
| Column 1 | Column 2 | Column 3 |
|:---------|:--------:|----------:|
| Left align | Center | Right align |
| Data | Data | Data |
```

**Live Example in Info Box:**

**How Tables Work in Callout Boxes**

Tables inherit styling from their container. In info boxes, they get the purple background. Use alignment markers (`:`) in the separator row to control text alignment.

| Alignment | Markdown |            Result |
| --------- | :------: | ----------------: |
| Left      |  `:---`  |  Text aligns left |
| Center    |  `:---:` |      Text centers |
| Right     |  `---:`  | Text aligns right |
| Default   |   `---`  |      Left aligned |

### Specifications Table (Key-Value Pairs)

**When to Use:** For displaying specifications, settings, or any key-value data with consistent formatting.

**HTML Structure:**

```html
<div class="specs-table">
  <div class="spec-row">
    <div class="spec-label">Label</div>
    <div class="spec-value">Value</div>
  </div>
  <!-- More rows... -->
</div>
```

**Live Example:**

Component TypeSpecifications TableLabel Width40% of containerValue Width60% of containerBorder StyleBottom border on each rowBest ForTechnical specifications, settings, or any structured key-value data

***

## Image Layouts

**Usage:** Various layouts for displaying images with proper responsive behavior.

### Single Image (Default)

**When to Use:** For standalone images that should be centered and responsive.

**HTML Structure:**

```html
<img src="./assets/section/image.webp" alt="Alt text" />
```

**Adding Captions:**

```html
<img src="./assets/section/image.webp" alt="Alt text" />
<p style="text-align: center; font-style: italic; margin-top: -10px;">Caption text here</p>
```

**Live Example:**

![Machines Overview](../.gitbook/assets/f2-machine-title-page.webp)

Images are automatically centered with rounded corners and subtle shadows. Maximum height is 50vh to prevent oversized images.

### Side-by-Side Images (2 Columns)

**When to Use:** For comparing two images or showing before/after states.

**HTML Structure:**

```html
<div class="side-by-side-images">
  <img src="./assets/image1.webp" alt="First" />
  <img src="./assets/image2.webp" alt="Second" />
</div>
```

**Live Example:**

![Hopper Setup](../.gitbook/assets/hopper-setup.webp) ![Cup Dispenser](../.gitbook/assets/cup-dispenser-installation.webp)

Two images display side-by-side on desktop, stack vertically on mobile. Each image takes 48% width with a 4% gap between.

### Three-Column Images

**When to Use:** For displaying multiple related items like "What's Included" or tool sets.

**HTML Structure:**

```html
<div class="three-column-images">
  <img src="./assets/image1.webp" alt="First" />
  <img src="./assets/image2.webp" alt="Second" />
  <img src="./assets/image3.webp" alt="Third" />
</div>
```

**Live Example:**

![Dispenser Seal Kit](../.gitbook/assets/dispenser-seal-kit.webp) ![Digital Multimeter](../.gitbook/assets/digital-clamp-multimeter.webp) ![QR Code Manual](../.gitbook/assets/qr-code-manual.webp)

Three columns on desktop, two on tablet, one on mobile. In print, images are limited to \~30% page height for better pagination.

### Image Placeholder

**When to Use:** As temporary placeholders while waiting for actual images.

**HTML Structure:**

```html
<div class="image-placeholder">PLACEHOLDER TEXT</div>
```

**Live Example:**

IMAGE EXAMPLE UNLOCKED

**Note:** These placeholders maintain consistent height (200px) and use a dashed border to clearly indicate missing content.

***

## Combined Examples

**Usage:** These examples show how to combine different styling components for complex layouts.

### Warning with Numbered Steps

**When to Use:** For critical procedures where both warning emphasis and step-by-step clarity are needed.

**Structure:** Place the warning box first to grab attention, then follow with numbered steps.

**Example: Combining Components**

This demonstrates how warning boxes and numbered steps work together. The warning provides context and urgency, while the steps provide clear instructions.

First, display the warning to ensure users understand the importanceThen provide clear, numbered steps that are easy to followThe visual separation between warning and steps maintains clarity while showing their relationship

### Feature Grid with Mixed Content

**When to Use:** Feature grids can contain any type of content - lists, paragraphs, images, or combinations.

**Example showing content variety:**

**Lists in Grids**

You can use bullet points: • Use `<br>` tags between items\
• Maintains consistent spacing\
• Works with any list length\
• Looks professional

**Paragraphs in Grids**

Regular paragraph text flows naturally within feature items. You can include multiple paragraphs, emphasize text with **bold** or _italics_, and even add `inline code`.

The grid maintains consistent padding and spacing regardless of content type.

**Mixed Content**

Combine different elements:

**Subheading** A paragraph of explanation.

• Point one\
• Point two\
• Point three

**Tables in Grids**

| Item    | Value             |
| ------- | ----------------- |
| Width   | Auto              |
| Height  | Auto              |
| Padding | 15px              |
| Border  | 1px solid #e2e8f0 |

### Multi-Level Information Architecture

**When to Use:** For complex information that needs multiple levels of emphasis and organization.

**Example showing layered information:**

**Building Complex Layouts**

You can combine multiple components to create sophisticated information hierarchies. Start with a callout box to introduce the topic.

**Layer 1: Context**

Use info boxes to provide overview and context. They set the stage for detailed information that follows.

**Layer 2: Details**

Feature grids organize related information into digestible chunks. Each item focuses on one aspect.

**Layer 3: Emphasis** - End with warnings or cautions to reinforce critical points. The color coding (yellow for caution) ensures important information isn't missed.

***

## Section Divider

**Usage:** Creates a styled horizontal rule to separate major sections.

**HTML:** `<hr class="section-divider">`

***

## Typography & Text Styling

### Headers (Automatic Blue Styling)

**How it Works:** All headers (h1-h6) automatically use Sweet Robo blue (#2c5282). No special classes needed.

```markdown
# H1 Header - Largest, blue
## H2 Header - Large, blue
### H3 Header - Medium, blue
#### H4 Header - Small, blue
```

### Lists with Blue Arrow Bullets

**How it Works:** All unordered lists automatically get blue arrow bullets (▶) instead of standard bullets.

**Markdown creates:**

* First level items get blue arrows automatically
* No special markup required
* Just use standard markdown lists
  * Nested items also get blue arrows
  * Maintains visual consistency
  * Works at any nesting level

### Inline Text Formatting

**Available Styles:**

* **Bold text** using `**text**` for strong emphasis
* _Italic text_ using `*text*` for subtle emphasis
* `Inline code` using backticks for technical terms
* _**Bold italic**_ using `***text***` for maximum emphasis
* ~~Strikethrough~~ using `~~text~~` for deprecated content

***

## Chapter Headers

**Usage:** Creates prominent section headers with blue background and white text.

**HTML Structure:**

```html
<div class="chapter-header">
<h1>Chapter Title Here</h1>
</div>
```

**Live Example:**

## Chapter Headers Explained

Chapter headers use Sweet Robo blue background (#2c5282) with white text for maximum contrast. They span the full width and provide clear visual breaks between major sections. Use for top-level divisions in your manual.

***

## Image-Text Layouts

### Two-Column Layout with Image and Text

**When to Use:** For featuring content with supporting imagery.

**HTML Structure:**

```html
<div class="image-text-layout">
  <div>
    <img src="image.webp" alt="Alt" />
  </div>
  <div class="text-with-line">
    <!-- Text content with blue line accent -->
  </div>
</div>
```

**Live Example:**

![Internal Components](../.gitbook/assets/internal-components.jpg)

#### How This Layout Works

The image-text-layout creates a 50/50 split on desktop. The image appears on the left, while text appears on the right with a blue accent line.

On mobile devices, this stacks vertically with the image on top. The blue line accent (4px wide, #2c5282) adds visual interest and brand consistency.

### Text Block with Side Line (Blue)

**When to Use:** For emphasizing text blocks without using callout boxes.

**HTML Structure:**

```html
<div class="text-with-line">
  Content here gets a blue left border
</div>
```

**Live Example:**

#### Understanding Text-with-Line

This component adds a 4px blue border on the left side of any content. It's lighter weight than callout boxes but still provides visual emphasis.

Use cases include:

* Highlighting key paragraphs
* Creating visual breaks
* Emphasizing quotes or testimonials
* Setting apart supplementary information

### Highlight Block with Purple Header

**When to Use:** For pro tips, best practices, or special insights.

**HTML Structure:**

```html
<div class="highlight-block">
  <h3>Title (appears in purple)</h3>
  Content here
</div>
```

**Live Example:**

#### How Highlight Blocks Work

The highlight-block class creates a light gray background (#f8f9fa) with a purple left border (#9f7aea). Headers within the block automatically turn purple.

This creates a distinctive visual element that's perfect for:

* Pro tips and expert advice
* Best practices
* Time-saving shortcuts
* Special recommendations

***

## Responsive Design

**How It Works:** All styling components include responsive breakpoints for optimal viewing on any device.

### Breakpoint Behavior

Desktop (>1024px)Full multi-column layouts, side-by-side images, maximum featuresTablet (768-1024px)Reduced columns, adjusted font sizes, optimized spacingMobile (<768px)Single column, stacked layouts, touch-friendly sizingPrint/PDFPage break control, adjusted margins, print-optimized colors

***

## Color Palette

**Usage:** These are the official Sweet Robo brand colors. They're automatically applied through the CSS classes - you don't need to specify colors manually.

Primary Blue (#2c5282)Headers, links, numbered step circles, accent linesWarning Pink (#fed7d7)Warning box backgrounds for safety hazardsCaution Orange (#fed7aa)Caution box backgrounds for equipment warningsInfo Purple (#e9d8fd)Info box backgrounds for helpful informationImportant Blue (#e6f3ff)Important box backgrounds for critical notesHighlight Purple (#9f7aea)Highlight block borders and headersLight Gray (#f8f9fa)Sidebar highlights, feature items, subtle backgrounds

***

## Numbered Steps with Images

### Visual Step-by-Step Instructions

**When to Use:** For procedures that benefit from visual aids alongside text instructions.

**HTML Structure:**

```html
<div class="numbered-steps-with-images">
  <div class="step-with-image">
    <div class="step-content">
      <h3>Step Title</h3>
      Step description and details
    </div>
    <div class="step-image">
      <img src="image.webp" alt="Alt" />
    </div>
  </div>
  <!-- More steps... -->
</div>
```

**Key Features:**

* **Desktop**: 60% text on left, 40% image on right
* **Mobile**: Stacks with text above image
* **Automatic numbering**: Blue circles with white numbers
* **Background cards**: Light gray for visual separation

**Live Example:**

#### How These Steps Work

Each step combines text instructions with a supporting image. The layout automatically numbers steps with blue circles matching the brand color. On desktop, text and images appear side-by-side for easy reference.DEVICE SETTINGS INTERFACE

#### Responsive Behavior

On mobile devices, the layout stacks vertically with text above the image. This ensures readability on all screen sizes. The numbered circles remain prominent regardless of screen size.MANAGEMENT INTERFACE

#### Content Flexibility

Include any content in the step-content div:\
\
• Bullet points with `<br>` tags\
• Regular paragraphs\
• \*\*Bold\*\* and \*italic\* text\
• Even small tables or code blocks\
\
The image automatically scales to fit the available space while maintaining aspect ratio.![Serving Cups](../.gitbook/assets/serving-cups.webp)

***

## Best Practices

**Component Selection Guide**

Choose components based on content purpose:

* **Safety/Risk**: Use warning (pink) or caution (yellow) boxes
* **Key Information**: Use important (blue) or info (purple) boxes
* **Step-by-Step**: Use numbered steps with or without images
* **Feature Lists**: Use feature grids with appropriate column count
* **Technical Data**: Use specs tables or markdown tables
* **Visual Content**: Choose appropriate image layout (single, 2-column, 3-column)

**Consistency Tips**

Maintain consistency throughout your manual:

* Use the same component for similar content types
* Keep language style consistent (imperative for steps, descriptive for features)
* Apply image treatments uniformly (all WebP format, consistent alt text style)
* Use callout boxes sparingly for maximum impact

***

This comprehensive styling guide demonstrates every component available for Sweet Robo manuals. Each element has been designed to match the official brand guidelines while ensuring excellent readability across all devices and formats. Use these components consistently to create professional, user-friendly documentation.
