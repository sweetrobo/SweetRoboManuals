# Sweet Robo Styling Components Demo

This page demonstrates all the official styling components extracted from the Sweet Robo PDF manual design.

---

## Title Page Layout

<div class="title-page">

<div class="title-page-header">
<div class="title">Sweet Robo - User Manual - Robo Ice Cream</div>
<img src="./assets/logo.webp" alt="Sweet Robo Logo" class="logo" />
</div>

<div class="title-page-main">
<h1>Robo Ice Cream</h1>
<h2>User Manual</h2>
<img src="./assets/overview/machines-overview.webp" alt="Robo Ice Cream Machine" class="machine-image" />
</div>

<div class="title-page-footer">
<p>Revision & Date:</p>
<p>Rev 1. 05.2025</p>
</div>

</div>

---

## Callout Boxes

### Warning Box (Pink Background)

<div class="warning-box">

**WARNING: Electrical Shock Hazard.** Ensure your hands are dry and you are not standing in water when connecting the power cord. Can cause serious injury or death.

</div>

### Caution Box (Yellow Background)

<div class="caution-box">

**CAUTION:** Two or more people may be required for safely moving and positioning the machine. Use appropriate lifting equipment if necessary.

</div>

### Info Box (Purple Background)

<div class="info-box">

**Machine Capabilities**

The machine supports remote management requiring an internet connection. Ensure a stable Wi-Fi signal or an accessible Ethernet port is available near the machine.

</div>

### Important Box (Light Blue Background)

<div class="important-box">

**IMPORTANT**

Some accessories or consumables may be packaged and stored inside the machine body for secure transit. Before powering on the machine, carefully open all access doors and inspect the interior.

</div>

---

## Numbered Steps with Blue Circles

### Basic Numbered Steps

<div class="numbered-steps">

<div>
<div>
Power on the machine using the main breaker switch located on the side panel.
</div>
</div>

<div>
<div>
Wait 5-10 minutes for the system to boot and reach operating temperature.
</div>
</div>

<div>
<div>
Check the display shows "L: 100%" and "R: 100%" indicating both hoppers are ready.
</div>
</div>

<div>
<div>
Access the backend interface by tapping and holding the top-right corner for 3-5 seconds.
</div>
</div>

<div>
<div>
Enter the default password 123456 to access operator settings.
</div>
</div>

</div>

### Steps with Headers

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
• Listen for unusual noises<br>
• Verify UV sanitizer activates
</div>
</div>

<div>
<div>
<h3>Ready for Operation</h3>
• Confirm both hoppers show 100%<br>
• Test dispense functions<br>
• Enable customer interface
</div>
</div>

</div>

---

## Sidebar Highlights

<div class="sidebar-highlight">

<h4>Proper Usage</h4>

Manuals provide detailed instructions and information on setup, operation, and maintenance. Following these instructions ensures that the equipment works efficiently.

</div>

<div class="sidebar-highlight">

<h4>Optimal Performance</h4>

The manual often includes insights into how to get the best understanding how to use the equipment for optimal results, whether that's producing high-quality ice cream or maintaining efficiency.

</div>

<div class="sidebar-highlight">

<h4>Safety First</h4>

Always follow safety guidelines outlined in the manual. These guidelines are designed to protect operators from injury and prevent damage to the equipment. Never bypass safety features or ignore warning labels.

</div>

<div class="sidebar-highlight">

<h4>Regular Maintenance</h4>

Consistent maintenance according to the manual's schedule helps extend equipment life, prevent breakdowns, and ensure food safety compliance. Document all maintenance activities for regulatory purposes.

</div>

---

## Feature Grids

### Default Auto-Fit Grid (Responsive Columns)

By default, feature grids automatically adjust columns based on content width (minmax 200px):

<div class="feature-grid">

<div class="feature-item">

#### Quick Setup
Fast installation process

</div>

<div class="feature-item">

#### Easy Clean
Simple maintenance routine

</div>

<div class="feature-item">

#### Safe Operation
Built-in safety features

</div>

<div class="feature-item">

#### 24/7 Support
Round-the-clock assistance

</div>

<div class="feature-item">

#### Remote Access
Cloud-based monitoring

</div>

<div class="feature-item">

#### Energy Efficient
Low power consumption

</div>

</div>

### Two-Column Layout (grid-2)

Use `grid-2` class when you need exactly 2 columns for longer content or visual balance:

<div class="feature-grid grid-2">

<div class="feature-item">

<img src="./assets/operation/password-input-screen.webp" alt="User Interface" />

#### User-Friendly Interface
An intuitive touchscreen interface allows operators to easily manage machine settings and monitor performance in real-time. The system provides clear visual feedback and step-by-step guidance.

</div>

<div class="feature-item">

<img src="./assets/supplies/ice-cream-mix-powder.webp" alt="Ice Cream Mix" />

#### Dual-Flavor System
Advanced dispensing system supports two different ice cream flavors with precise portion control and swirl capabilities. Each hopper operates independently with its own temperature control.

</div>

<div class="feature-item">

<img src="./assets/maintenance/mixing-bucket.webp" alt="Maintenance Tools" />

#### Easy Maintenance
Designed for straightforward access to hoppers, dispensers, and cleaning components with color-coded service points. All critical parts are easily accessible without special tools.

</div>

<div class="feature-item">

<img src="./assets/parts-service/spare-parts-kit-with-manual.webp" alt="Parts Kit" />

#### Robust Construction
Built for durability and reliable operation in various commercial environments with stainless steel components. Engineered to withstand heavy daily use while maintaining consistent performance.

</div>

</div>

### Three-Column Layout (grid-3)

Use `grid-3` for content that works well in three columns:

<div class="feature-grid grid-3">

<div class="feature-item">

<img src="./assets/supplies/chocolate-syrup-hersheys.webp" alt="Chocolate Syrup" />

#### Chocolate
Classic favorite syrup for enhanced flavor

</div>

<div class="feature-item">

<img src="./assets/supplies/syrup-topping-spoons.webp" alt="Topping Spoons" />

#### Toppings
Premium dry toppings and dispensing tools

</div>

<div class="feature-item">

<img src="./assets/parts-service/installation-tools-kit.webp" alt="Tools Kit" />

#### Tools Kit
Complete installation and maintenance toolkit

</div>

</div>

### Four-Column Layout (grid-4)

Use `grid-4` for brief items that fit in four columns:

<div class="feature-grid grid-4">

<div class="feature-item">

#### E01
Temperature

</div>

<div class="feature-item">

#### E02
Door Sensor

</div>

<div class="feature-item">

#### E03
Cup Jam

</div>

<div class="feature-item">

#### E04
Empty Hopper

</div>

</div>

### Centered Text Variant

Add `text-center` class to center all text within feature grid items:

<div class="feature-grid grid-3 text-center">

<div class="feature-item">

<img src="./assets/setup/wheel-lock-mechanism.webp" alt="Wheel Lock" />

#### Step 1
Position Machine

</div>

<div class="feature-item">

<img src="./assets/setup/led-signage-roof.webp" alt="LED Signage" />

#### Step 2
Install Signage

</div>

<div class="feature-item">

<img src="./assets/maintenance/airpath-hopper-view.webp" alt="Hopper View" />

#### Step 3
Check Systems

</div>

</div>

---

## Tables

### Standard Table in Info Box

<div class="info-box">

**Machine Specifications**

| Parameter | Value | Notes |
|:-----:|:-----:|:-----:|
| Dimensions | 120 × 86.5 × 245 cm | Width × Depth × Height |
| Weight | 380 kg | Approximately 838 lbs |
| Power | 220V, 15A | Dedicated circuit required |
| Capacity | 200 cups | 4 tubes × 50 cups each |

</div>

### Specifications Table (Key-Value Pairs)

<div class="specs-table">

<div class="spec-row">
<div class="spec-label">Machine Name</div>
<div class="spec-value">Robo Ice Cream F2</div>
</div>

<div class="spec-row">
<div class="spec-label">Model Number</div>
<div class="spec-value">F2-2025-DUAL</div>
</div>

<div class="spec-row">
<div class="spec-label">Manufacturing Year</div>
<div class="spec-value">2025</div>
</div>

<div class="spec-row">
<div class="spec-label">Warranty Period</div>
<div class="spec-value">1 Year Parts & Labor</div>
</div>

</div>

---

## Image Layouts

### Single Image

<img src="./assets/overview/machines-overview.webp" alt="Machines Overview" />
<p style="text-align: center; font-style: italic; margin-top: -10px;">Overview of Sweet Robo machines including the F2 model</p>

### Side-by-Side Images

<div class="side-by-side-images">
<img src="./assets/setup/hopper-setup.webp" alt="Hopper Setup" />
<img src="./assets/setup/cup-dispenser-installation.webp" alt="Cup Dispenser" />
</div>
<p style="text-align: center; font-style: italic; margin-top: -10px;">Left: Hopper setup process | Right: Cup dispenser installation</p>

### Three-Column Images

<div class="three-column-images">
<img src="./assets/parts-service/dispenser-seal-kit.webp" alt="Dispenser Seal Kit" />
<img src="./assets/parts-service/digital-clamp-multimeter.webp" alt="Digital Multimeter" />
<img src="./assets/troubleshooting/qr-code-manual.webp" alt="QR Code Manual" />
</div>
<p style="text-align: center; font-style: italic; margin-top: -10px;">Essential tools and resources for machine maintenance</p>

### Image Placeholder

<div class="image-placeholder">IMAGE EXAMPLE UNLOCKED</div>

---

## Combined Examples

### Warning with Numbered Steps

<div class="warning-box">

**Core Board Error Prevention**

To avoid the dreaded core board error, always follow these steps:

</div>

<div class="numbered-steps">

<div>
<div>
Fill both hoppers with at least 2L of prepared ice cream mix
</div>
</div>

<div>
<div>
Turn on the hopper switches located at the bottom of each hopper
</div>
</div>

<div>
<div>
Only then power on the main machine using the breaker
</div>
</div>

</div>

### Feature Grid with Different Content Types

<div class="feature-grid grid-2">

<div class="feature-item">

#### Daily Tasks
• Clean touchscreen<br>
• Check mix levels<br>
• Verify cup inventory<br>
• Empty drip tray

</div>

<div class="feature-item">

#### Weekly Tasks
• Deep clean hoppers<br>
• Test all dispensers<br>
• Check UV lamp<br>
• Update cleaning log

</div>

<div class="feature-item">

#### Error Codes
• E01: Temperature fault<br>
• E02: Door sensor error<br>
• E03: Cup jam detected<br>
• E04: Hopper empty

</div>

<div class="feature-item">

#### Support Contacts
• Phone: +1-844-793-3872<br>
• Email: support@sweetrobo.com<br>
• Hours: 24/7 Available<br>
• Response: Within 24 hours

</div>

</div>

### Multi-Level Information

<div class="info-box">

**System Requirements**

The F2 machine requires the following for optimal operation:

</div>

<div class="feature-grid">

<div class="feature-item">

#### Environmental
• Temperature: 15-30°C<br>
• Humidity: < 85%<br>
• Ventilation: 40cm rear clearance<br>
• Level surface: Max 2° inclination

</div>

<div class="feature-item">

#### Electrical
• Voltage: 220-240V AC<br>
• Current: 15A dedicated circuit<br>
• Grounding: < 4Ω resistance<br>
• Protection: GFCI required

</div>

</div>

<div class="caution-box">

Never operate the machine in environments exceeding these specifications as it may cause equipment failure or safety hazards.

</div>

---

## Section Divider

<hr class="section-divider">

## Typography Examples

### Headers with Blue Accent

All headers automatically use the primary blue color (#2c5282) from the official Sweet Robo brand.

### Lists with Blue Arrows

Standard unordered lists automatically get blue arrow bullets:

- This is a standard list item with automatic blue arrow
- Another item showing the consistent styling
- Lists are great for organizing information
  - Nested items also get the blue arrow
  - Consistent throughout the document

### Inline Styling

You can use **bold text** for emphasis and *italic text* for notes. The `inline code` appears with a light background.

---

## Chapter Headers

<div class="chapter-header">
<h1>Chapter 1: Getting Started</h1>
</div>

This is how chapter headers appear with the official blue background and white text.

---

## Image-Text Layouts

### Two-Column Layout with Image and Text

<div class="image-text-layout">
<div>
<img src="./assets/overview/internal-components.webp" alt="Internal Components" />
</div>
<div class="text-with-line">

### Key Features
The Robo Ice Cream F2 represents the pinnacle of automated ice cream vending technology. With dual hoppers and advanced temperature control, it delivers consistent quality every time.

Features include:
- Dual flavor dispensing
- 200 cup capacity
- UV sanitization
- Touch-free operation

</div>
</div>

### Text Block with Side Line (Blue)

<div class="text-with-line">

### Important Note
This styling is perfect for highlighting important information or creating sidebars. The blue line on the left draws attention while maintaining a clean, professional appearance.

You can include multiple paragraphs, lists, or any other content within these blocks.

</div>

### Highlight Block with Purple Header

<div class="highlight-block">

### Pro Tip
This purple highlight block is perfect for tips, best practices, or special notes. The purple header and matching left border create a distinctive visual element.

Key benefits:
- Draws attention to important information
- Visually distinct from other content
- Perfect for tips and recommendations

</div>

---

## Responsive Design

All components automatically adapt to different screen sizes:

- **Desktop**: Full layouts with side-by-side elements
- **Tablet**: Adjusted grids and image sizes
- **Mobile**: Single column layout for easy reading
- **Print/PDF**: Optimized formatting with proper page breaks

---

## Color Palette

The official Sweet Robo colors used throughout:

<div class="specs-table">

<div class="spec-row">
<div class="spec-label">Primary Blue</div>
<div class="spec-value">#2c5282</div>
</div>

<div class="spec-row">
<div class="spec-label">Warning Pink</div>
<div class="spec-value">#fed7d7</div>
</div>

<div class="spec-row">
<div class="spec-label">Caution Orange</div>
<div class="spec-value">#fed7aa</div>
</div>

<div class="spec-row">
<div class="spec-label">Info Purple</div>
<div class="spec-value">#e9d8fd</div>
</div>

<div class="spec-row">
<div class="spec-label">Important Blue</div>
<div class="spec-value">#e6f3ff</div>
</div>

</div>

---

## Customer Operation Flow with Images

### F2 Dual-Flavor Experience

The F2 provides customers with exciting flavor options through its dual-hopper system:

<div class="numbered-steps-with-images">

<div class="step-with-image">
<div class="step-content">
<h3>Primary Selection Screen</h3>
Customer approaches the intuitive touchscreen interface. Machine displays available flavor combinations:<br>
<br>
• <strong>Left Flavor Only</strong>: Single flavor from left hopper<br>
• <strong>Right Flavor Only</strong>: Single flavor from right hopper<br>
• <strong>Swirl Combination</strong>: Both flavors blended together
</div>
<div class="step-image">
<img src="./assets/operation/device-settings.webp" alt="Device Settings Interface" />
</div>
</div>

<div class="step-with-image">
<div class="step-content">
<h3>Enhanced Customization</h3>
• Customer selects preferred size<br>
• Choose from multiple syrup options (1-3 available)<br>
• Add dry toppings for additional texture (1-3 available)<br>
• Preview final product combination
</div>
<div class="step-image">
<img src="./assets/operation/management-interface.webp" alt="Management Interface" />
</div>
</div>

<div class="step-with-image">
<div class="step-content">
<h3>Payment and Dispensing</h3>
Customer completes payment via cash, coin, or card. F2 automatically executes the dual-flavor process:<br>
<br>
• Drops cup into position<br>
• Dispenses ice cream from selected hopper(s)<br>
• <strong>Swirl Mode</strong>: Alternates between left and right hoppers<br>
• Adds selected syrups in sequence<br>
• Applies chosen toppings<br>
• Opens collection door for pickup
</div>
<div class="step-image">
<img src="./assets/operation/serving-cups.webp" alt="Serving Cups" />
</div>
</div>

</div>

---

This styling system provides a professional, consistent appearance that matches the official Sweet Robo brand guidelines while ensuring excellent readability across all devices and formats.