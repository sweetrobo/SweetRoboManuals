# Content Visibility System Documentation

## Overview

The Sweet Robo Manuals use a comprehensive content visibility system that controls what content is shown based on the environment (development vs production) and user roles. This system ensures sensitive development content is never exposed to end users while providing flexibility for developers and different user types.

## How It Works

### Environment Detection

The system automatically detects if you're in a development environment based on:
- **Local dev ports**: 4000-4003 (used by dev.sh script)
- **Localhost**: Running on localhost without `/SweetRoboManuals/` in the path
- **Production**: GitHub Pages or any deployment with `/SweetRoboManuals/` in the URL

### Dev Mode Behavior

**In Development (Local)**:
- Dev mode is **enabled by default**
- All content is visible including debug/draft content
- Can be temporarily disabled via controls or URL parameter
- Automatically re-enables on page refresh (unless explicitly disabled via URL)

**In Production**:
- Dev mode is **disabled by default**
- Development-only content is **removed from the DOM** (not just hidden)
- Cannot be enabled without explicit URL parameters

### URL Parameters

Control visibility via URL query parameters:

- `?dev=true` - Force enable dev mode (even in production)
- `?dev=false` - Force disable dev mode (even in local development)
- `?controls=true` - Show the content control panel
- `?debug=true` - Show debug-specific content
- `?technician=true` - Show technician-specific content
- `?operator=true` - Show operator-specific content

Examples:
```
http://localhost:4001/?dev=false         # Disable dev mode locally
http://localhost:4001/?controls=true     # Show control panel
https://sweetrobo.github.io/SweetRoboManuals/robo-ice-cream/?dev=true  # Enable dev in production (if needed)
```

### LocalStorage Persistence

Settings are saved to localStorage and persist across page loads:
- Key: `sweetrobo-conditional-views`
- Stores all visibility preferences
- URL parameters override stored preferences
- Clear with: `localStorage.removeItem('sweetrobo-conditional-views')`

## Content Marking

### HTML Attributes

Mark content for conditional visibility:

```html
<!-- Dev-only content (removed in production) -->
<div data-dev-only>This is only visible in dev mode</div>
<div class="dev-only">Development notes here</div>

<!-- Debug content -->
<div data-debug>Debug information</div>
<div class="debug-only">Debugging tools</div>

<!-- Role-based content -->
<div data-role="technician">Technician-only instructions</div>
<div data-role="operator">Operator guidelines</div>
<div data-role="customer">Customer information</div>

<!-- Draft content -->
<div class="draft-content">Work in progress</div>
```

### Automatic Detection

The system automatically hides/removes content containing these patterns:
- `styling-demo` / `Styling Demo`
- `missing-images` / `Missing Images`
- `image-inventory` / `Image Inventory`
- `DRAFT` / `Draft`
- `TODO`
- `FIXME`
- `DEBUG`
- `TEST`
- `WIP`

These patterns are checked in:
- Link hrefs
- Link text content
- File names

## CSS Classes

The system adds classes to the body element:

```css
/* Applied in dev mode */
body.dev-mode { }
body.show-dev { }

/* Applied for roles */
body.role-technician { }
body.role-operator { }
body.role-customer { }
body.role-internal { }

/* Applied for specific views */
body.show-debug { }
body.show-controls { }
```

## Security Notes

### DOM Removal
In production, dev-only content is **completely removed from the DOM**, not just hidden with CSS. This prevents users from discovering hidden content via browser inspector.

### Patterns to Avoid
- Don't put sensitive information in content that could be accidentally exposed
- Use server-side protection for truly sensitive data
- Remember that URL parameters can override visibility settings

## Control Panel

When `?controls=true` is added to the URL, a control panel appears allowing toggling of:
- Dev Mode (in local development)
- Dev View
- Internal View
- Technician View
- Operator View
- Customer View

The panel can be hidden but settings persist in localStorage.

## Examples

### Hiding Development Links

Links in SUMMARY.md are automatically hidden if they match dev patterns:
```markdown
- [Styling Demo](styling-demo.md)  <!-- Hidden in production -->
- [Missing Images](missing-images.md)  <!-- Hidden in production -->
```

### Conditional Content in Pages

```html
<!-- This entire section is removed in production -->
<div data-dev-only>
  <h2>Development Notes</h2>
  <p>TODO: Add more examples</p>
  <p>FIXME: Update this section</p>
</div>

<!-- Role-based visibility -->
<div data-role="technician">
  <h3>Service Instructions</h3>
  <p>Only visible to technicians...</p>
</div>
```

### Styling for Dev Mode

```css
/* Hide by default, show in dev */
.dev-only-feature {
  display: none;
}

body.dev-mode .dev-only-feature {
  display: block;
}
```

## Troubleshooting

### Content Not Hiding
1. Check if content matches one of the auto-hide patterns
2. Verify the HTML has appropriate data attributes or classes
3. Check browser console for JavaScript errors
4. Clear localStorage and refresh

### Content Not Showing in Dev
1. Check URL for `?dev=false` parameter
2. Clear localStorage: `localStorage.clear()`
3. Verify you're on correct port (4000-4003)
4. Check if parent element is also hidden

### Testing Production Behavior Locally
Add `?dev=false` to your local URL:
```
http://localhost:4001/?dev=false
```

This simulates production environment locally.

## Best Practices

1. **Use data attributes** for explicit control: `data-dev-only`, `data-role=""`
2. **Test both modes** before deploying: with and without dev mode
3. **Document conditional content** so other developers know what's hidden
4. **Don't rely solely on client-side hiding** for sensitive information
5. **Use semantic naming** for conditional content classes
6. **Keep production build clean** - ensure no dev content leaks through

## File Organization

Keep development-only files in clearly marked directories:
```
/DRAFT-COMPILATIONS/   # Auto-hidden
/resources/Draft/      # Auto-hidden
/debug/                # Auto-hidden
styling-demo.md        # Auto-hidden
missing-images.md      # Auto-hidden
```

## Integration with mdBook

The visibility system works with mdBook's generated HTML:
- Runs after mdBook generates the sidebar
- Handles dynamically generated navigation
- Compatible with mdBook's single-page navigation
- Works with print mode

## Future Enhancements

Potential improvements for the system:
- Server-side rendering of conditional content
- More granular role permissions
- Content versioning based on user type
- Analytics for content usage patterns
- A/B testing different content visibility