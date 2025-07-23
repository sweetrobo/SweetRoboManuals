# Link Guidelines for PDF Compatibility

## Internal Links Within Same Manual

Use relative paths without the domain:
```markdown
<!-- Good - works in PDF -->
[See Safety Procedures](./safety.md)
[Emergency Shutdown](./safety.md#emergency-shutdown)

<!-- Bad - breaks in PDF -->
[See Safety](http://localhost:3000/safety.html)
```

## Links to Other Manuals

Use relative paths from repository root:
```markdown
<!-- From Candy Monster to Robo Ice Cream -->
[See Robo Ice Cream Manual](../Robo%20Ice%20Cream/README.md)
```

## Links to Shared Resources

```markdown
<!-- Link to shared company info -->
[Company Information](../shared/company-info.md)
```

## Images and Assets

Always use relative paths:
```markdown
<!-- Good -->
![Control Panel](./assets/control-panel.png)

<!-- Bad -->
![Control Panel](http://localhost:3000/assets/control-panel.png)
```

## Anchor Links (Same Page)

```markdown
<!-- Link to section on same page -->
[See Configuration](#configuration)
```

## PDF Generation Notes

1. mdBook's print feature (`print.html`) automatically converts links
2. When using browser print-to-PDF, relative links are preserved
3. For dedicated PDF generation tools, test link behavior

## Testing Links

Before finalizing:
1. Test in HTML preview: `./build-manuals.sh serve "Machine Name"`
2. Test PDF generation: Use print icon in mdBook interface
3. Verify all internal links work in the PDF