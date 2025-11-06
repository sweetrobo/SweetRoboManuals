# Quick Start: Google Docs Collaboration

## 📤 To Share with Team

```bash
cd /Users/lightwing/Documents/GitHub/SweetRoboManuals/pop-cart

# Step 1: Combine sections
python3 combine-manual.py

# Step 2: Convert to HTML (works better with Google Docs)
python3 convert-for-gdocs.py

# Step 3: Upload POP_CART_MANUAL_COMPLETE.html to Google Docs
# Go to Google Drive → Upload → Right-click → Open with Google Docs
```

## 📥 To Import Team Edits

```bash
cd /Users/lightwing/Documents/GitHub/SweetRoboManuals/pop-cart

# Download from Google Docs as HTML or Markdown
# Then split back into sections:
python3 split-from-gdocs.py ~/Downloads/Pop_Cart_Manual.html

git diff  # Review changes
rm *.md.backup  # Clean up when satisfied
```

## 📄 Files Created

### For Export:
- **POP_CART_MANUAL_COMPLETE.md** - Combined markdown (86KB)
- **POP_CART_MANUAL_COMPLETE.html** - HTML version for Google Docs (104KB) ⭐ **Use this!**
- **POP_CART_MANUAL_COMPLETE.txt** - Plain text fallback (84KB)

### Scripts:
- **combine-manual.py** - Combine sections into one file
- **convert-for-gdocs.py** - Convert to HTML/TXT formats
- **split-from-gdocs.py** - Split Google Docs export back into sections

### Documentation:
- **GOOGLE_DOCS_WORKFLOW.md** - Detailed workflow documentation
- **TEAM_EDITING_GUIDE.md** - Instructions for your team editors
- **IMAGE_HANDLING_SUMMARY.md** - How images work in this workflow

## ⚠️ Important

- Don't delete `<!-- SECTION: filename.md -->` markers
- Image paths won't display in Google Docs but will work when re-imported
- Make backups before running split-manual.py (script does this automatically)

See **GOOGLE_DOCS_WORKFLOW.md** for complete instructions.
