# Pop Cart Assets - Image Cataloging System

This directory contains the image cataloging system used to organize and manage the Pop Cart manual images.

## Files in This Directory

### `image-catalog.json`
The master catalog of all images for the Pop Cart manual. Contains:
- Original filenames (from source images)
- Suggested descriptive filenames (used for WebP files)
- Detailed descriptions of image content
- Category assignments (overview, setup, operation, maintenance, troubleshooting, parts-service)
- Tags for searchability
- Processing status and final locations
- Statistics and metadata

### `process_images.py`
Python script that converts and moves images based on the catalog:
- Reads `image-catalog.json`
- Converts JPG/PNG source images to WebP format (quality 85)
- Places WebP files in appropriate category subdirectories
- Updates catalog with processing status
- Generates conversion statistics

**Usage:**
```bash
python3 process_images.py
```

### `cleanup_catalog.py`
Maintenance script for catalog cleanup:
- Removes misplaced images (e.g., ice cream machine images from Pop Cart catalog)
- Fixes naming/description errors (e.g., "chocolate chips" → "blue popcorn kernels")
- Updates statistics
- Recalculates category counts

### `move_source_files.py`
Script to co-locate source files with their WebP versions:
- Moves original JPG/PNG files from temp/ to final locations
- Places them alongside their WebP counterparts with matching names
- Allows easy access to sources by changing file extension

## Directory Structure

Images are organized into these categories:

```
pop-cart/assets/
├── overview/          - Machine photos, exterior views, key features
├── setup/             - Unpacking, installation, WiFi configuration
├── operation/         - UI screenshots, customer interface, operator screens
├── maintenance/       - Cleaning procedures, supplies, routine tasks
├── troubleshooting/   - Error screens, diagnostic displays
├── parts-service/     - Component diagrams, parts photos, internal views
└── temp/              - THIS DIRECTORY (catalog and scripts)
```

## Using the Image Cataloger Agent

When adding new images to the Pop Cart manual in the future, use the **image-cataloger agent** to automate the cataloging process.

### How to Use the Image Cataloger Agent:

1. **Add new images to this temp/ directory**
   - Place new JPG or PNG files here
   - Use descriptive filenames if possible

2. **Invoke the agent in Claude Code:**
   ```
   "I have new images in pop-cart/assets/temp/ that need to be cataloged"
   ```
   or
   ```
   "Use the image-cataloger agent to process the new images I added"
   ```

3. **The agent will automatically:**
   - Analyze each image's content
   - Generate descriptive filenames (lowercase-with-hyphens.webp)
   - Write detailed descriptions
   - Suggest appropriate categories
   - Add relevant tags
   - Calculate dimensions
   - Add notes about usage
   - Update `image-catalog.json`

4. **After cataloging, run the processing script:**
   ```bash
   python3 process_images.py
   ```
   This will convert images to WebP and move them to proper locations.

5. **Co-locate source files:**
   ```bash
   python3 move_source_files.py
   ```
   This moves original source files alongside their WebP versions.

### Image Cataloger Agent Best Practices:

- **One batch at a time**: Add and catalog related images together (e.g., all setup photos, all UI screenshots)
- **Clear context**: Tell the agent what type of images you're adding (setup, troubleshooting, etc.)
- **Review suggestions**: Check the catalog entries before running `process_images.py`
- **Correct terminology**: Ensure descriptions match Pop Cart terminology (e.g., "blue popcorn kernels" not "chocolate chips")
- **Category accuracy**: Verify images are assigned to the correct category

### Example Agent Invocations:

```
"I've added 5 new troubleshooting screenshots to temp/.
Please use the image-cataloger agent to catalog them."
```

```
"Catalog these new maintenance procedure photos using the
image-cataloger agent, they show the cleaning process."
```

```
"I have new UI screenshots from the latest software update.
Use image-cataloger to process them for the operation section."
```

## Catalog Schema

Each image entry in `image-catalog.json` contains:

```json
{
  "original_filename": "photo_32_2025-10-22_17-06-26.jpg",
  "suggested_filename": "machine_full_view_front.webp",
  "description": "Full front view of Pop Cart popcorn vending machine...",
  "content_type": "photo",
  "suggested_category": "overview",
  "tags": ["full-view", "exterior", "front-view", "carnival-design"],
  "dimensions": "964x1280",
  "notes": "Complete machine view in office environment...",
  "processed": true,
  "final_location": "assets/overview/machine_full_view_front.webp"
}
```

## Maintenance Notes

### Adding New Categories
If you need a new category beyond the existing six:
1. Create the new directory: `mkdir /path/to/pop-cart/assets/new-category`
2. Update the `categories` dict in `image-catalog.json`
3. Update this CLAUDE.md documentation

### Correcting Catalog Entries
Edit `image-catalog.json` directly, or create a cleanup script like `cleanup_catalog.py` for systematic corrections.

### Source File Management
- Original JPG/PNG sources are kept alongside WebP files
- Access source by changing extension: `.webp` → `.jpg`
- Source files are not version controlled (add to .gitignore if needed)
- Only WebP files are referenced in markdown documentation

## Quick Reference Commands

```bash
# Catalog new images (use image-cataloger agent in Claude Code)

# Convert and organize images
python3 process_images.py

# Co-locate source files
python3 move_source_files.py

# View catalog statistics
python3 -c "import json; c=json.load(open('image-catalog.json')); print(c['statistics'])"

# List unprocessed images
python3 -c "import json; c=json.load(open('image-catalog.json')); [print(i['original_filename']) for i in c['images'] if not i.get('processed')]"
```

---

**Last Updated:** 2025-10-30
**Total Images:** 74 cataloged
**Categories:** 6 (overview, setup, operation, maintenance, troubleshooting, parts-service)
