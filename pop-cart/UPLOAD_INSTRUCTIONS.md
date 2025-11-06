# 📤 How to Upload to Google Docs

The manual is ready! Here are **3 methods** to get it into Google Docs:

---

## ⭐ Method 1: Upload HTML to Google Drive (RECOMMENDED)

**This works best and preserves formatting!**

### Steps:

1. **Go to Google Drive** (drive.google.com)

2. **Upload the HTML file:**
   - Click "New" → "File upload"
   - Select: `POP_CART_MANUAL_COMPLETE.html`
   - Wait for upload to complete

3. **Open with Google Docs:**
   - Right-click the uploaded file
   - Select "Open with" → "Google Docs"
   - Google will convert it to an editable doc

4. **Share with team:**
   - Click "Share" button
   - Add team members with "Editor" access

### ✅ What You Get:
- Headers preserved (H1, H2, H3)
- Bold/italic formatting maintained
- Lists formatted correctly
- Section markers intact
- Ready to edit!

---

## Method 2: Direct Import to Google Docs

**Alternative method using Google Docs directly**

### Steps:

1. **Go to Google Docs** (docs.google.com)

2. **Click File → Open → Upload**

3. **Select:** `POP_CART_MANUAL_COMPLETE.html`

4. **Google Docs converts it** - may take a moment

5. **Share with team**

### ⚠️ Note:
Sometimes direct upload doesn't work as well as Method 1. If formatting looks wrong, try Method 1 instead.

---

## Method 3: Plain Text Fallback

**If HTML methods don't work, use this simple approach**

### Steps:

1. **Open in text editor:**
   ```bash
   open -a TextEdit POP_CART_MANUAL_COMPLETE.txt
   ```

2. **Select all text** (Cmd+A)

3. **Copy** (Cmd+C)

4. **Go to Google Docs** and create new document

5. **Paste** (Cmd+V)

### ⚠️ Trade-offs:
- ✅ Always works
- ❌ Loses all formatting
- ❌ No headers, bold, etc.
- 💡 Team can add formatting manually

---

## 🖼️ About Images

**All methods:** Images appear as text references like:

```
📷 Image: Machine front view
Path: ./assets/overview/machine.webp
```

**This is normal and expected!**

- Images are local files and won't upload
- Paths are preserved for when you re-import
- Your team edits the text content
- Share the live manual URL for image reference: `https://manuals.sweetrobo.com/pop-cart/`

---

## ✅ Recommended Workflow

1. **Upload HTML using Method 1** (Google Drive → Open with Docs)

2. **Also share this link** with your team:
   - Live manual: `https://manuals.sweetrobo.com/pop-cart/`
   - They view images here while editing text in Google Docs

3. **Tell your team:**
   - Edit text content freely
   - Don't worry about image references appearing as text
   - Don't delete `<!-- SECTION: filename.md -->` markers
   - See `TEAM_EDITING_GUIDE.md` for full instructions

---

## 📥 When Team is Done Editing

1. **Download from Google Docs:**
   - File → Download → Web Page (.html)
   - Or: File → Download → Markdown (.md)

2. **Split back into sections:**
   ```bash
   python3 split-from-gdocs.py ~/Downloads/Pop_Cart_Manual.html
   ```

3. **Review and commit:**
   ```bash
   git diff
   rm *.md.backup
   git add *.md
   git commit -m "docs: update manual from team review"
   ```

---

## 🔧 Troubleshooting

### "Can't upload HTML file"
- Try Method 1 (upload to Drive first)
- Or use Method 3 (plain text)

### "Formatting looks wrong"
- Use Method 1 instead of Method 2
- Or regenerate: `python3 convert-for-gdocs.py`

### "Images not showing"
- This is expected!
- Share live manual URL: `https://manuals.sweetrobo.com/pop-cart/`

### "Section markers disappeared"
- Check the HTML file still has them
- Re-export: `python3 convert-for-gdocs.py`

---

## 📞 Need Help?

See detailed docs:
- `GOOGLE_DOCS_WORKFLOW.md` - Full workflow
- `TEAM_EDITING_GUIDE.md` - For your team
- `IMAGE_HANDLING_SUMMARY.md` - Image strategy
- `QUICK_START.md` - Quick reference

**Files ready at:**
```
/Users/lightwing/Documents/GitHub/SweetRoboManuals/pop-cart/
```

🎉 **You're all set! Upload and share with your team!**
