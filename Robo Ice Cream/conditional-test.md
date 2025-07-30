# Conditional Content Test

This page tests the conditional content functionality.

## Always Visible Content

This paragraph is always visible.

<div class="conditional-content" data-show-when="dev">

## Developer Content (dev=true)

This content only shows when `?dev=true` is in the URL.

</div>

<div class="conditional-content" data-show-when="technician">

## Technician Content (technician=true)

This content only shows when `?technician=true` is in the URL.

</div>

<div class="conditional-content" data-hide-when="customer">

## Non-Customer Content

This content is hidden when `?customer=true` is in the URL.

</div>

## Test Links

Try these URLs to test:
- [Normal View](./)
- [Developer View](./?dev=true)
- [Technician View](./?technician=true)
- [With Controls](./?dev=true&controls=true)