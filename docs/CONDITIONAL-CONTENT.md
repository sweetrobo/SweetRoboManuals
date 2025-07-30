# Conditional Content Guide for Sweet Robo Manuals

This guide explains how to use the conditional content system to show/hide content based on URL parameters.

## Quick Start

1. Add the conditional content files to your manual's `book.toml`:

```toml
[output.html]
additional-css = ["../shared-theme/custom.css", "../shared-theme/conditional-content.css"]
additional-js = ["../shared-theme/print-navigation.js", "../shared-theme/conditional-content.js"]
```

2. Use conditional content in your markdown:

```html
<div class="conditional-content" data-show-when="internal">
This content only shows when accessing the manual with ?internal=true
</div>
```

## URL Parameters

Access different views by adding parameters to the URL:

- `?internal=true` - Show internal/debug information
- `?technician=true` - Show technician-specific content
- `?operator=true` - Show operator-specific content
- `?customer=true` - Show customer-facing content
- `?controls=true` - Show interactive toggle controls

Example: `https://yoursite.com/manual/?technician=true&controls=true`

## Basic Usage

### Show Content with Parameter

```html
<div class="conditional-content" data-show-when="internal">
⚠️ Internal Note: This component requires special handling during assembly.
</div>
```

### Hide Content with Parameter

```html
<div class="conditional-content" data-hide-when="customer">
Service Code: ABC-123-XYZ
</div>
```

### Multiple Parameters

```html
<div class="conditional-content" data-show-for="technician,operator">
This shows for both technicians and operators
</div>
```

## Role-Based Content

Use the `data-role` attribute for cleaner role-based visibility:

```html
<div data-role="technician">
## Technician Service Instructions
1. Remove panel using security key
2. Access internal components...
</div>

<div data-role="operator">
## Daily Operator Tasks
1. Check inventory levels
2. Clean external surfaces...
</div>
```

## Predefined Classes

For common use cases, use these convenience classes:

```html
<div class="internal-only">
Debug information here...
</div>

<div class="technician-only">
Service instructions here...
</div>

<div class="operator-only">
Daily operation procedures...
</div>

<div class="customer-only">
User-friendly instructions...
</div>
```

## Styled Content Blocks

### Internal Notes

```html
<div class="internal-note">
The firmware update process requires admin credentials stored in the service manual.
</div>
```

### Technician Warnings

```html
<div class="technician-warning conditional-content" data-show-when="technician">
⚡ High Voltage: Disconnect power before servicing internal components.
</div>
```

### Technician Tips

```html
<div class="technician-tip conditional-content" data-show-when="technician">
💡 Pro Tip: Use compressed air to clean sensors for optimal performance.
</div>
```

## Advanced Features

### Combining Conditions

```html
<!-- Show only for internal technicians -->
<div class="conditional-content" data-show-when="internal" data-role="technician">
Factory calibration settings...
</div>
```

### No Print Content

```html
<div class="conditional-content no-print" data-show-when="internal">
This won't appear in PDF exports
</div>
```

### JavaScript API

```javascript
// Programmatically show/hide elements
ConditionalContent.showElement(element);
ConditionalContent.hideElement(element);

// Get current parameters
const params = ConditionalContent.getParams();

// Refresh conditional content
ConditionalContent.refresh();
```

## Best Practices

1. **Default to Public**: Always ensure critical safety information is visible by default
2. **Test All Views**: Check how content appears with different parameters
3. **Use Semantic Names**: Choose clear parameter names that indicate the audience
4. **Document Parameters**: List available parameters in your manual's README
5. **Progressive Enhancement**: Content should be usable even if JavaScript fails

## Examples in Context

### Service Manual Section

```markdown
# Maintenance Procedures

## Regular Cleaning

Follow these steps for daily cleaning:

1. Wipe external surfaces with damp cloth
2. Check and empty waste containers

<div class="conditional-content" data-show-when="technician">

## Deep Cleaning (Technician Only)

1. Power down the system
2. Remove access panels
3. Clean internal components with approved solutions
4. Inspect and lubricate moving parts

</div>
```

### Troubleshooting Guide

```markdown
## Error Code E01

**Customer View**: Please contact support at support@sweetrobo.com

<div class="conditional-content" data-show-when="operator">
**Operator Fix**: 
1. Check paper supply
2. Clear any jams
3. Restart the system
</div>

<div class="conditional-content" data-show-when="technician">
**Technician Details**:
- Sensor malfunction in module A3
- Check connections on board J4
- Diagnostic code: 0x3F2A
</div>
```

## URL Examples

- Customer manual: `https://manuals.sweetrobo.com/robo-ice-cream/`
- Operator manual: `https://manuals.sweetrobo.com/robo-ice-cream/?operator=true`
- Service manual: `https://manuals.sweetrobo.com/robo-ice-cream/?technician=true`
- Internal docs: `https://manuals.sweetrobo.com/robo-ice-cream/?internal=true&controls=true`

## Security Note

This system provides content filtering via client-side JavaScript. It should NOT be used for:
- Truly sensitive information
- Security-critical content
- Legal compliance filtering

For secure content, use server-side authentication and separate manual versions.