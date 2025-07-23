# Robo Ice Cream Manual - Image Guidelines

## Image Format
All images should be in WebP format for optimal file size. Use the `convert-to-webp.sh` script to convert PNG/JPG images.

## Adding Images to Manual

### Single Image (Default)
```html
<img src="./assets/section/image-name.webp" alt="Descriptive Alt Text" />
```
- Images automatically scale to max 50vh height and 100% width
- Centered with rounded corners and subtle shadow
- No additional classes needed for most cases

### Side-by-Side Images
```html
<div class="img-row">
  <img src="./assets/section/image1.webp" alt="First Image" class="img-half" />
  <img src="./assets/section/image2.webp" alt="Second Image" class="img-half" />
</div>
```

### Three Images in a Row
```html
<div class="img-row">
  <img src="./assets/section/image1.webp" alt="First" class="img-third" />
  <img src="./assets/section/image2.webp" alt="Second" class="img-third" />
  <img src="./assets/section/image3.webp" alt="Third" class="img-third" />
</div>
```

### Section-Specific Classes (Optional)
- `setup-image` - Adds border and padding for setup instructions
- `overview-diagram` - For technical diagrams
- `operation-screenshot` - Orange border for operation screens
- `maintenance-photo` - Green border for maintenance images
- `component-detail` - Purple border for component close-ups

### Size Override Classes (When Needed)
- `img-small` - Max 300px width
- `img-medium` - Max 500px width  
- `img-large` - Max 700px width
- `img-full` - Max 900px width

## Image Organization
- Place images in appropriate section folders:
  - `/assets/overview/` - Machine overview and diagrams
  - `/assets/setup/` - Installation and setup photos
  - `/assets/operation/` - Screenshots and operation guides
  - `/assets/maintenance/` - Maintenance procedures and supplies
  - `/assets/troubleshooting/` - Error screens and fixes
  - `/assets/safety/` - Safety warnings and procedures
  - `/assets/parts-service/` - Component diagrams and parts

## PDF Considerations
- Images automatically fit within page width in PDF
- No height restrictions in PDF (natural sizing)
- Side-by-side layouts maintained in PDF output
- Images won't break across pages