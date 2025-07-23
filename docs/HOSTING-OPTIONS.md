# Hosting Options for Sweet Robo Manuals

## Local Preview
```bash
# Preview a manual locally
./build-manuals.sh serve "Candy Monster"
```

## Static Site Hosting Options

### 1. GitHub Pages (Free)
- Enable GitHub Pages in repository settings
- Set source to `gh-pages` branch or `/docs` folder
- Manuals available at: `https://[username].github.io/SweetRoboManuals/`

### 2. Netlify (Free tier available)
- Connect GitHub repository
- Build command: `./build-manuals.sh all`
- Publish directory: `build/`
- Automatic deploys on push

### 3. Vercel (Free tier available)
- Similar to Netlify
- Great performance and global CDN

### 4. Self-Hosted
- Build manuals: `./build-manuals.sh all`
- Upload `build/` contents to your web server
- Can password-protect if needed

## PDF Generation Options

### Option 1: mdbook-pdf
```bash
# Install
cargo install mdbook-pdf

# Add to book.toml:
[output.pdf]

# Build
mdbook build
```

### Option 2: Browser Print
1. Open manual in browser
2. Click print icon in mdBook interface
3. Save as PDF

### Option 3: wkhtmltopdf
```bash
# Install wkhtmltopdf
brew install wkhtmltopdf  # macOS

# Convert
wkhtmltopdf build/candy-monster/print.html candy-monster-manual.pdf
```

## Advanced Features

### Search
mdBook includes built-in search that works offline.

### Multiple Languages
Add to book.toml:
```toml
[book]
multilingual = true

[language.en]
name = "English"

[language.es]
name = "Español"
```

### Custom Theme
- Copy default theme: `mdbook init --theme`
- Modify CSS in `theme/` directory
- Add company branding and colors