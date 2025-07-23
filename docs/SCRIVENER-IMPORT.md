# Importing from Scrivener

## Best Export Settings in Scrivener

### Method 1: MultiMarkdown (Recommended)

1. **In Scrivener:**
   - File → Compile
   - Format: MultiMarkdown
   - Options:
     - ✓ Convert rich text to MultiMarkdown
     - ✓ Export images to folder
     - ✓ Create document links
   
2. **Export Structure:**
   ```
   exported-manual/
   ├── manual.md
   └── images/
       ├── figure1.png
       ├── figure2.jpg
       └── ...
   ```

3. **Import to Resources:**
   ```bash
   # Copy markdown file
   cp exported-manual/manual.md "Machine Name/resources/"
   
   # Copy images to assets
   cp -r exported-manual/images/* "Machine Name/assets/"
   ```

### Method 2: HTML Export

1. **In Scrivener:**
   - File → Compile
   - Format: Web Page (.html)
   - Options:
     - ✓ Export images to folder
     - ✓ Generate CSS

2. **Convert with Pandoc:**
   ```bash
   # Install pandoc if needed
   brew install pandoc
   
   # Convert HTML to Markdown
   pandoc manual.html -f html -t markdown -o manual.md
   ```

### Method 3: Folder Sync (Best for Updates)

1. **In Scrivener:**
   - File → Sync → with External Folder
   - Format: Plain Text (Markdown)
   - Check: ✓ Take snapshots

2. **Benefits:**
   - Two-way sync
   - Preserves Scrivener structure
   - Easy updates

## Image Handling

### In Scrivener:
- Name images descriptively: `control-panel-overview.png`
- Use consistent image folders
- Keep high resolution (min 1920x1080)

### After Export:
1. Move images to `Machine Name/assets/`
2. Update image paths in markdown:
   ```markdown
   <!-- From Scrivener -->
   ![Control Panel](images/control-panel.png)
   
   <!-- Update to -->
   ![Control Panel](./assets/control-panel.png)
   ```

## Processing Workflow

1. **Export from Scrivener** to a temporary folder
2. **Review the markdown** file in a text editor
3. **Copy to resources folder** for processing
4. **Move images** to assets folder
5. **Run processing script** to split into manual sections

## Automated Processing Script

Create `process-scrivener.sh`:

```bash
#!/bin/bash

# Usage: ./process-scrivener.sh "Machine Name" path/to/exported-file.md

MACHINE="$1"
SOURCE_FILE="$2"
RESOURCE_DIR="$MACHINE/resources"
ASSET_DIR="$MACHINE/assets"

# Copy source file
cp "$SOURCE_FILE" "$RESOURCE_DIR/scrivener-export.md"

# Copy images if they exist
if [ -d "$(dirname "$SOURCE_FILE")/images" ]; then
    cp -r "$(dirname "$SOURCE_FILE")/images/"* "$ASSET_DIR/"
fi

echo "✓ Imported to $MACHINE resources"
echo "✓ Images copied to assets"
echo "Next: Process the file to create manual sections"
```

## Tips for Scrivener Organization

1. **Use Folders** for main sections (Safety, Operation, etc.)
2. **Use Documents** for subsections
3. **Add Labels** for content types (Warning, Note, Procedure)
4. **Use Status** to track completion
5. **Compile Groups** for different output versions

## Common Issues

### Problem: Images not exporting
**Solution:** Check image format, use PNG/JPG only

### Problem: Formatting lost
**Solution:** Use Markdown formatting in Scrivener

### Problem: Links broken
**Solution:** Use relative links, update after export