# Team Editing Guide for Pop Cart Manual

## 📝 What You'll See in Google Docs

When you open the combined manual in Google Docs, you'll see content like this:

```
# Overview

![Pop Cart Popcorn Vending Machine - Full Front View](./assets/overview/machine_full_view_front.webp)
*Pop Cart - Vintage carnival-style automated popcorn vending machine*

## About the Pop Cart

The Pop Cart is Sweet Robo's automated popcorn vending machine...
```

## 🖼️ About the Images

### Why Images Appear as Text

The manual includes many images that look like this:

```
![Description of image](./assets/section/filename.webp)
```

**This is normal!** The images are stored as local files and won't display in Google Docs.

### How to Work with Image References

#### ✅ **You CAN:**

1. **Edit the description** (the text in brackets):
   ```
   ![Pop Cart Front View](./assets/overview/machine.webp)
   ```
   Change "Pop Cart Front View" to improve clarity

2. **Add new image references**:
   ```
   ![New diagram showing setup process](./assets/setup/new-diagram.webp)
   ```
   (Just tell us what image you want and where)

3. **Remove images** you think aren't needed:
   Just delete the entire line

4. **Suggest better images**:
   Add a comment like: "We need a clearer photo here showing XYZ"

#### ❌ **DON'T:**

- Don't try to insert actual images from Google Docs' Insert menu
- Don't delete the path part: `(./assets/section/filename.webp)`
- Don't worry about "fixing" the image syntax

## 📋 Focus on Content

Your job is to improve the **text content**:

- ✏️ Fix typos and grammar
- 📝 Clarify confusing instructions
- ➕ Add missing information
- ➖ Remove outdated content
- 🔄 Reorganize sections for better flow
- 💡 Add helpful tips and warnings

## 🚫 Section Markers - DO NOT DELETE

You'll see comments like this throughout the document:

```html
<!-- SECTION: overview.md -->
```

**⚠️ IMPORTANT: Leave these alone!**

These markers help us split the document back into individual files. If you delete them, we'll lose that section.

## 📐 Formatting Tips

### Headers

Use the built-in heading styles:
- **Heading 1** for main sections
- **Heading 2** for subsections
- **Heading 3** for sub-subsections

### Lists

Use the bullet or numbered list buttons in Google Docs

### Tables

Google Docs tables work fine - they'll convert back to markdown

### Code or Technical Terms

Use `monospace font` for:
- File paths
- Button labels
- Error codes
- Technical terms

## ✅ When You're Done

1. **Don't export yourself** - just let us know you're finished
2. **Leave comments** for questions or suggestions
3. **Highlight** sections you're unsure about

We'll handle the export and re-import process.

## 💬 Questions?

If you're unsure about something:
- **Use Google Docs comments** to ask questions
- **Highlight** the section in yellow if you need clarification
- **Don't delete** content you're unsure about - ask first!

---

## Example Edit

### Before:
```
![Machine](./assets/image.webp)
The Pop Cart makes popcorn. It has a screen.
```

### After:
```
![Pop Cart with touchscreen interface visible](./assets/image.webp)
The Pop Cart produces fresh popcorn on-demand through a fully automated process.
Customers interact with the 15" touchscreen display to select their preferences
and make payment.
```

**What changed:**
✅ Improved image description (more specific)
✅ Expanded explanation (more detailed)
✅ Added specific details (screen size)
✅ Kept the image path intact

---

*Happy editing! Your improvements will make the manual better for everyone.* 🎉
