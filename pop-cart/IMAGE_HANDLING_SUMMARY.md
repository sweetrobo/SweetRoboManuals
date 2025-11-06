# Image Handling in Google Docs Workflow

## 📸 How Images Work

### The Short Answer

Images **won't display** in Google Docs. They appear as text like this:

```
![Machine front view](./assets/overview/machine.webp)
```

**This is intentional and works perfectly for the workflow.**

## ✅ Why This Approach Works

### 1. **Images Stay Local**
- All images are in `./assets/` folders
- They're referenced by path, not embedded
- No huge file uploads to Google Drive

### 2. **Paths Are Preserved**
- When team edits in Google Docs, paths stay intact
- When you re-import, images work immediately
- No need to re-link or re-upload

### 3. **Team Can Still Improve Images**
- Edit descriptions: `![Better description here](./assets/path.webp)`
- Suggest new images: Add comment "Need photo of X here"
- Mark bad images: Highlight and comment "This image is blurry"

### 4. **Simple Round-Trip**
```
Local files → Combined MD → Google Docs → Export MD → Split back → Local files
     ↓                                                                    ↑
  Images stay in ./assets/ the whole time, never move  ←←←←←←←←←←←←←←←←←←←
```

## 🎯 What Your Team Does

### They Edit Text:
- Fix typos
- Improve clarity
- Add missing info
- Reorganize sections

### They Improve Image References:
```markdown
Before: ![image](./assets/overview/pic1.webp)
After:  ![Pop Cart front panel showing touchscreen and coin slot](./assets/overview/pic1.webp)
```

### They DON'T:
- ❌ Insert images from Google Docs menu
- ❌ Upload images to Drive
- ❌ Worry about making images display
- ❌ Delete image paths

## 📤 Alternative Approaches (If Needed)

If your team really needs to see images, here are options:

### Option A: Share the Built Manual
```bash
mdbook build
# Share: build/pop-cart/index.html (open in browser)
```
Team views the fully rendered manual with images while editing the Google Doc.

### Option B: PDF Reference
Generate PDF with images as visual reference:
```bash
mdbook build
# Use browser to print build/pop-cart/index.html to PDF
```

### Option C: Screenshot Gallery
Create a separate Google Doc with screenshots of each section showing the images.

## 💡 Recommended Workflow

1. **Upload combined manual to Google Docs** (text only)
2. **Share the live manual URL** with team: `https://manuals.sweetrobo.com/pop-cart/`
3. Team uses:
   - Google Doc for editing text
   - Live manual for seeing images/layout
4. **Export and re-import** when done

This way they can see images (on live site) while editing text (in Google Docs).

## 🔄 The Complete Flow

```
You:                                   Team:
────────────────────────────────────   ──────────────────────────────────
1. Run combine-manual.py
2. Upload to Google Docs        ───→   3. Open Google Doc
                                       4. Open live manual (for images)
                                       5. Edit text in Google Doc
                                       6. Reference live manual for context
                                  ←──── 7. Mark as complete
8. Download from Google Docs
9. Run split-manual.py
10. Review with git diff
11. Commit changes
```

## ❓ FAQs

**Q: Can we embed images so they display?**
A: Yes, but the file becomes 10-20MB+ and is harder to work with. Current approach is simpler.

**Q: What if team deletes an image path?**
A: That's fine! Just means that image won't appear in the final manual. You can add it back if needed.

**Q: What if team wants to add new images?**
A: They add the reference: `![Description](./assets/section/new-image.webp)` and tell you. You add the actual image file later.

**Q: Can images be in the Google Doc itself?**
A: Not recommended - inserted images won't transfer back to markdown properly. Keep references as text.

## 📊 Comparison

| Method | File Size | Team Sees Images | Re-import Easy | Recommended |
|--------|-----------|------------------|----------------|-------------|
| Text references (current) | 86KB | ❌ No | ✅ Yes | ✅ **Yes** |
| + Share live manual | 86KB | ✅ Yes (separate) | ✅ Yes | ✅ **Best!** |
| Base64 embed | 15-20MB | ⚠️ Maybe | ⚠️ Difficult | ❌ No |
| Google Drive links | 86KB | ✅ Yes | ⚠️ Complex | ⚠️ If needed |

## ✅ Bottom Line

**Keep it simple:**
- Images as text references in Google Doc
- Share live manual URL for visual reference
- Team edits text, you handle images
- Clean, fast, reliable workflow

Your team doesn't need to see images in the doc to improve the content!
