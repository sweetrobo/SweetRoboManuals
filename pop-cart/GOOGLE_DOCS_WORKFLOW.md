# Google Docs Collaboration Workflow

This document explains how to collaborate on the Pop Cart manual using Google Docs.

## 🎯 Overview

The Pop Cart manual is split across multiple markdown files for maintainability. To collaborate with your team in Google Docs:

1. **Combine** individual sections into one file
2. **Import** to Google Docs for team editing
3. **Export** edited version from Google Docs
4. **Split** back into individual section files

## 📤 Export to Google Docs

### Step 1: Combine Manual Sections

```bash
cd /Users/lightwing/Documents/GitHub/SweetRoboManuals/pop-cart
python3 combine-manual.py
```

This creates: `POP_CART_MANUAL_COMPLETE.md`

### Step 2: Import to Google Docs

1. Go to [Google Docs](https://docs.google.com)
2. Click **File → Open → Upload**
3. Upload `POP_CART_MANUAL_COMPLETE.md`
4. Google Docs will convert markdown to formatted text

**Note about images:**
- Image paths are preserved as text: `![Description](./assets/path/image.webp)`
- Google Docs won't display the images (they're local files)
- The paths remain intact for re-import

### Step 3: Share with Team

Click **Share** and add your team members with edit permissions.

## 📥 Import from Google Docs

After your team finishes editing:

### Step 1: Export from Google Docs

1. In Google Docs, click **File → Download → Markdown (.md)**
2. Save the file (e.g., `POP_CART_MANUAL_COMPLETE.md`)

### Step 2: Split Back into Sections

```bash
cd /Users/lightwing/Documents/GitHub/SweetRoboManuals/pop-cart
python3 split-manual.py ~/Downloads/POP_CART_MANUAL_COMPLETE.md
```

This will:
- Create `.backup` files of existing sections
- Update each section file with edited content
- Preserve section markers for proper splitting

### Step 3: Review Changes

```bash
# See what changed
git diff

# Review specific file
git diff overview.md
```

### Step 4: Clean Up

If everything looks good:

```bash
# Remove backup files
rm *.md.backup

# Commit changes
git add *.md
git commit -m "docs: update Pop Cart manual from team review"
```

## 🔄 Section Markers

The combined file uses HTML comments to mark sections:

```markdown
<!-- SECTION: overview.md -->

# Overview
[content here]

---

<!-- SECTION: setup.md -->

# Setup & Installation
[content here]

---
```

**Important:** Don't delete these markers! They're used to split the file back into individual sections.

## 🖼️ Working with Images

### In the Combined File

Images appear as markdown syntax:
```markdown
![Machine Overview](./assets/overview/machine_full_view_front.webp)
```

### In Google Docs

- Google Docs shows this as plain text (since images are local files)
- You can:
  - Leave image references as-is
  - Edit the alt text (description in brackets)
  - Change the file path if needed
  - Add new image references

### Re-importing Images

When you split the file back:
- Image paths are preserved exactly as edited
- Ensure paths still point to correct files in `./assets/`
- Format: `![Description](./assets/section/filename.webp)`

## ✅ Best Practices

1. **Keep section markers intact** - Don't delete `<!-- SECTION: filename -->` comments
2. **Preserve image syntax** - Keep the `![alt](path)` format even if images don't display
3. **One export cycle at a time** - Don't make local edits while document is in Google Docs
4. **Review before committing** - Use `git diff` to verify changes make sense
5. **Test the build** - Run `mdbook build` to ensure manual still builds correctly

## 🔧 Troubleshooting

### Images look weird in Google Docs

**This is normal.** Google Docs shows: `![Alt text](./assets/path/file.webp)`

Just edit the alt text if needed. When re-imported, images will work correctly.

### Section got lost during re-import

Check that:
- The section marker `<!-- SECTION: filename.md -->` wasn't deleted
- The markdown export from Google Docs is complete
- File is saved with UTF-8 encoding

### Content formatting changed

Google Docs may alter:
- Line breaks and spacing
- Code blocks formatting
- Table structures

Review with `git diff` and fix any issues before committing.

## 📞 Need Help?

If you encounter issues:
1. Check that section markers are present
2. Verify the exported file is valid markdown
3. Review backups in `*.md.backup` files
4. Use `git diff` to see what changed
