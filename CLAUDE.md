# SweetRoboManuals Project Guidelines

## Folder Naming Convention

All manual folders use lowercase with hyphens for consistency across local development, build output, and GitHub Pages deployment:

- `robo-ice-cream/` - Robo Ice Cream F2 manual
- `candy-monster/` - Candy Monster manual  
- `pop-cart/` - Pop Cart manual

This naming convention ensures:
1. Consistent paths between local development and GitHub Pages
2. No URL encoding issues with spaces
3. Compatibility with web standards (lowercase URLs)
4. Matching folder names in source, build, and deployment

## Shared Assets System

The project uses a shared assets structure to avoid duplication and maintain consistency across all manuals.

### Shared Assets Location

The `/shared/` directory contains resources used by all manuals:
- `shared/css/` - Shared stylesheets (typography, components, layout, etc.)
- `shared/js/` - Shared JavaScript utilities
- `shared/images/` - Company-wide assets (logos, product images)
- `shared/content/` - Legal and company information

Each manual has a **symlink** to the shared directory: `manual-folder/shared -> ../shared`

### Company Logo Usage

**IMPORTANT:** The Sweet Robo company logo is a **shared asset** and must be referenced from `/shared/images/`:

```html
<!-- Correct - use shared logo -->
<img src="./shared/images/sweetrobo-logo.webp" alt="Sweet Robo Logo" class="logo" />

<!-- Wrong - do not duplicate in manual assets -->
<img src="./assets/logo.webp" alt="Sweet Robo Logo" class="logo" />
```

**Configuration files** should also reference the shared logo:
```toml
# In book.toml
favicon = "shared/images/sweetrobo-logo.webp"
image = "shared/images/sweetrobo-logo.webp"
```

**Benefits:**
- Single source of truth for company branding
- Logo updates happen in one place
- Reduces file duplication (saves ~228KB across 3 manuals)
- Consistent with shared CSS/JS pattern

### Manual-Specific Images

Images are stored in each manual's `assets/` folder with subdirectories for organization:
- `assets/overview/` - Machine overview and diagrams
- `assets/setup/` - Installation and setup photos
- `assets/operation/` - Screenshots and operation guides
- `assets/maintenance/` - Maintenance procedures and supplies
- `assets/troubleshooting/` - Error screens and fixes
- `assets/safety/` - Safety warnings and procedures
- `assets/parts-service/` - Component diagrams and parts

**When to use shared vs manual-specific assets:**
- **Shared (`/shared/images/`)**: Company logo, common branding elements
- **Manual-specific (`manual/assets/`)**: Machine photos, UI screenshots, manual-specific diagrams

When referencing images:
- **Shared assets**: `./shared/images/filename.webp`
- **Manual assets**: `./assets/section/image.webp`
- In the main index.html: Use direct paths `robo-ice-cream/assets/overview/image.webp`

## Build System

The project uses mdBook to build each manual:
- Source folders: `robo-ice-cream/`, `candy-monster/`, `pop-cart/`
- Build output: `build/robo-ice-cream/`, `build/candy-monster/`, `build/pop-cart/`
- Development servers: Ports 4001, 4002, 4003 respectively
- Main index server: Port 4000

## Development Workflow

Use the `dev.sh` script to start development servers:
```bash
./dev.sh all    # Start all servers
./dev.sh ice    # Start Robo Ice Cream server only
./dev.sh candy  # Start Candy Monster server only
./dev.sh pop    # Start Pop Cart server only
```

## Code Quality Principles

### DRY (Don't Repeat Yourself)
- **Always prefer DRY code** - No code duplication when it can be avoided
- **Single source of truth** - Styles, logic, and data should be defined in one place
- **Use extraction and reuse** - Extract common patterns into reusable functions/styles
- **Dynamic over static** - Use JavaScript to dynamically apply styles rather than duplicating CSS
- **Example**: Print preview extracts @media print styles dynamically instead of duplicating them in a separate CSS file

## mdBook Cross-References and Links

### Important Limitation: Markdown Inside HTML

**mdBook does not process markdown syntax inside raw HTML tags.** This means markdown links `[text](url)` will appear as plain text (not clickable) when inside HTML elements like `<div>`.

### When to Use HTML vs Markdown Links

**Use HTML anchor tags inside HTML elements:**
```html
<div class="numbered-steps">
<div>
<div>
See <a href="operation.html#admin-interface">Admin Interface</a> for details
</div>
</div>
</div>
```

**Use markdown syntax in plain markdown:**
```markdown
For specifications, see [Overview](overview.md#technical-specifications)
```

### Link Path Convention
- **In markdown**: Use `.md` extension → `operation.md#section-id`
- **In HTML elements**: Use `.html` extension → `operation.html#section-id`
- mdBook converts `.md` to `.html` during build

### Common HTML Contexts Requiring HTML Links
- `<div class="numbered-steps">` - Sequential instruction steps
- `<div class="feature-grid">` and `<div class="feature-item">` - Feature showcases
- Callout boxes: `warning-box`, `caution-box`, `info-box`, `important-box`
- Any custom HTML structure

**Note:** Each manual's CLAUDE.md contains additional detail and examples specific to that manual's content structure.