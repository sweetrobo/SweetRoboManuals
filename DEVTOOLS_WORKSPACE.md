# Chrome DevTools Workspace Setup

This project is configured to work with Chrome DevTools Workspaces, allowing you to edit files directly in Chrome and persist changes to your local file system.

## Setup Instructions

### 1. Start the Development Server

```bash
./dev.sh all
```

This starts:
- Main index server on http://localhost:4000 (with workspace metadata)
- Individual manual servers on ports 4001-4003

### 2. Enable Workspace in Chrome DevTools

1. Open http://localhost:4000 in Chrome
2. Open DevTools (F12 or Cmd+Option+I)
3. Go to **Sources** panel
4. In the left sidebar, click **Filesystem** tab
5. Click **+ Add folder to workspace**
6. Navigate to and select the SweetRoboManuals project folder
7. Click **Allow** when Chrome asks for permission

### 3. Verify Connection

The workspace is connected when:
- Green dot appears next to files in Sources panel
- Files show "Workspace" badge
- Changes made in DevTools persist to disk

## Using Workspaces

### Editing Files

1. Navigate to any `.md`, `.css`, or `.js` file in Sources panel
2. Make edits directly in DevTools
3. Press Cmd+S (Mac) or Ctrl+S (Windows/Linux) to save
4. Changes are instantly saved to your local file system

### Live Reload with mdBook

The mdBook servers (ports 4001-4003) automatically reload when files change:
- Edit markdown files in DevTools
- Save with Cmd+S
- Browser automatically refreshes with changes

### Supported File Types

- **Markdown files** (`.md`) - Manual content
- **CSS files** - Styling customizations  
- **JavaScript files** - Interactive features
- **HTML files** - Template modifications

## Workspace Metadata

The workspace configuration is stored in:
```
.well-known/appspecific/com.chrome.devtools.json
```

This file contains:
- Unique workspace UUID
- Project root path
- Served automatically by the development server

## Tips

1. **Source Maps**: mdBook generates source maps for debugging
2. **Local Overrides**: Use for testing changes before saving
3. **Network Throttling**: Test performance while editing
4. **Device Mode**: Preview responsive design changes

## Troubleshooting

### Workspace Not Connecting

1. Ensure development server is running (`./dev.sh all`)
2. Check that you're accessing via http://localhost:4000
3. Try removing and re-adding the workspace folder
4. Clear DevTools cache: Settings > Preferences > Network > Disable cache

### Changes Not Persisting

1. Verify green dot appears next to edited files
2. Check file permissions in project folder
3. Ensure you're saving with Cmd+S after edits
4. Confirm workspace folder matches project root

### Server Not Detecting Changes

1. Restart mdBook server if hot reload stops
2. Check that file watchers are not exhausted
3. Verify no syntax errors in edited files

## Benefits

- **Direct Editing**: No need to switch between editor and browser
- **Instant Preview**: See changes immediately with live reload
- **CSS Debugging**: Edit styles and see results in real-time
- **JavaScript Debugging**: Set breakpoints and edit code simultaneously
- **Version Control**: Changes are regular file edits, work with Git normally