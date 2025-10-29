# Image Rotation Scripts

Three handy scripts to fix rotated images in the manual documentation.

## 🔄 Option 1: Interactive Rotator (Recommended)

**Best for:** Rotating individual images with full control

```bash
./scripts/rotate-image.sh
```

Then drag and drop image files into the terminal. For each image, you can choose:
- Rotate 90° clockwise
- Rotate 90° counter-clockwise
- Rotate 180°
- Auto-fix orientation from EXIF data

**Example:**
```bash
cd /Users/lightwing/Documents/GitHub/SweetRoboManuals
./scripts/rotate-image.sh

# Drag file into terminal, press enter, select rotation option
```

---

## 📦 Option 2: Batch Rotator

**Best for:** Rotating all images in a folder at once

```bash
./scripts/batch-rotate.sh /path/to/folder
```

Or run without arguments to be prompted:
```bash
./scripts/batch-rotate.sh
# Then drag and drop the folder
```

This will rotate ALL images in the folder with the same rotation.

**Example:**
```bash
cd /Users/lightwing/Documents/GitHub/SweetRoboManuals
./scripts/batch-rotate.sh robo-ice-cream/assets/ui-images/
```

---

## 👀 Option 3: Auto-Rotate Watcher

**Best for:** Continuous workflow - drop images and they rotate automatically

```bash
./scripts/auto-rotate-watcher.sh [folder] [rotation]
```

- **folder** (optional): Path to watch folder (default: `./rotate-queue`)
- **rotation** (optional): Rotation degrees (default: `90`)
  - `90` = clockwise
  - `-90` = counter-clockwise
  - `180` = flip

**Examples:**
```bash
# Watch default folder, rotate 90° clockwise
./scripts/auto-rotate-watcher.sh

# Watch specific folder, rotate 90° counter-clockwise
./scripts/auto-rotate-watcher.sh ~/Desktop/images -90

# Watch UI images folder
./scripts/auto-rotate-watcher.sh robo-ice-cream/assets/ui-images/ 90
```

The script will:
1. Create the watch folder if it doesn't exist
2. Process any existing images in the folder
3. Watch for new images dropped into the folder
4. Automatically rotate them

Press `Ctrl+C` to stop watching.

---

## 💡 Tips

### Drag and Drop in Terminal
On macOS, you can drag files/folders from Finder directly into Terminal to get their paths automatically.

### Better Performance for File Watcher
Install `fswatch` for more efficient file monitoring:
```bash
brew install fswatch
```

The auto-rotate watcher will automatically use it if available.

### Common Rotations
- **90** = Rotate clockwise (→)
- **-90** = Rotate counter-clockwise (←)
- **180** = Flip upside down

### EXIF Auto-Fix
If your images have EXIF orientation data (from cameras/phones), use the "Auto-fix orientation" option. This reads the EXIF data and rotates the image correctly.

---

## 🛠️ Technical Details

All scripts use macOS built-in `sips` (Scriptable Image Processing System) command, so no additional software installation required!

### What is `sips`?
- Built into every Mac
- Fast and lightweight
- Supports JPEG, PNG, WEBP, GIF, and more
- Preserves image quality
- Can read/write EXIF data

---

## 📝 Use Cases

### Fix UI Screenshots
```bash
cd /Users/lightwing/Documents/GitHub/SweetRoboManuals
./scripts/batch-rotate.sh robo-ice-cream/assets/ui-images/
```

### Process Individual Files
```bash
./scripts/rotate-image.sh
# Drag files one by one for precise control
```

### Set Up Drop Folder Workflow
```bash
# Terminal 1 - Start watcher
./scripts/auto-rotate-watcher.sh ~/Desktop/rotate-me 90

# Then just drop images into ~/Desktop/rotate-me
# They'll rotate automatically!
```

---

## 🚨 Important Notes

- **Scripts modify images in-place** - no backup is created
- Make sure to commit your work before batch rotating
- Test on a single image first if unsure
- The scripts preserve image format and quality

---

## 🐛 Troubleshooting

**Script not executable?**
```bash
chmod +x scripts/*.sh
```

**Permission denied?**
```bash
# Run from the project root
cd /Users/lightwing/Documents/GitHub/SweetRoboManuals
./scripts/rotate-image.sh
```

**File watcher not detecting files?**
- Install fswatch: `brew install fswatch`
- Or just use the polling mode (works without fswatch, just slower)
