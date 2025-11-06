# CSS Refactoring Test Page

This page tests all the refactored CSS classes.

---

## Image Size Tests

### Default Image (50vh)
<img src="./assets/overview/machine_full_view_front.webp" alt="Default sizing test" />
*Default: No class, should be 50vh max*

### img-small (30vh)
<img src="./assets/overview/machine_full_view_front.webp" class="img-small" alt="Small image test" />
*Small: 30vh max, 300px wide*

### img-medium (50vh)
<img src="./assets/overview/machine_full_view_front.webp" class="img-medium" alt="Medium image test" />
*Medium: 50vh max, 500px wide*

### img-large (70vh)
<img src="./assets/overview/machine_full_view_front.webp" class="img-large" alt="Large image test" />
*Large: 70vh max, 700px wide*

### img-xl (90vh)
<img src="./assets/overview/machine_full_view_front.webp" class="img-xl" alt="Extra large image test" />
*Extra Large: 90vh max, 900px wide*

---

## Semantic Alias Tests

### img-ui-screenshot
<img src="./assets/operation/admin_management_system_overview.webp" class="img-ui-screenshot" alt="UI screenshot test" />
*UI Screenshot: 80vh max, 600px wide*

### img-diagram
<img src="./assets/overview/dual-popcorn-dispensers-interior.webp" class="img-diagram" alt="Diagram test" />
*Diagram: 70vh max, 700px wide*

### img-detail-photo
<img src="./assets/overview/dispensing_window_internal_mechanism.webp" class="img-detail-photo" alt="Detail photo test" />
*Detail Photo: 40vh max, 400px wide*

### img-icon
<img src="./assets/images/header/sweetrobo-logo.webp" class="img-icon" alt="Icon test" />
*Icon: 20vh max, 150px wide*

---

## Layout Tests

### Side-by-Side Images
<div class="side-by-side-images">
<img src="./assets/overview/overview_interior_full_view_side.webp" alt="Side view" />
<img src="./assets/overview/overview_interior_full_view_angle.webp" alt="Angle view" />
</div>
*Side-by-side layout test*

### Three-Column Images
<div class="three-column-images">
<img src="./assets/setup/machine_wrapped_labeled_shipping.webp" alt="Labeled" />
<img src="./assets/setup/machine_wrapped_full_coverage.webp" alt="Wrapped" />
<img src="./assets/setup/machine_wrapped_bubble_protection.webp" alt="Protected" />
</div>
*Three-column layout test*

---

## Conditional Visibility Tests

### Pending Content
<div class="pending">
This is pending content that needs review. It should show an orange warning banner with "⚠️ PENDING REVIEW".
</div>

### Dev-Only Content
<div class="dev-only">
This is dev-only content. It should be hidden unless ?dev=true is in the URL.
</div>

---

## Component Tests

### Info Box
<div class="info-box">

This is an info box (blue background). Used for helpful information.

</div>

### Important Box
<div class="important-box">

**IMPORTANT:** This is an important box (purple background).

</div>

### Warning Box
<div class="warning-box">

**WARNING:** This is a warning box (pink/red background).

</div>

### Caution Box
<div class="caution-box">

**CAUTION:** This is a caution box (yellow background).

</div>

---

## Deprecated Class Tests

These should still work but will be removed in v2.0:

### setup-image (deprecated)
<img src="./assets/setup/setup_packaging_bubble_wrap_roll.webp" class="setup-image" alt="Setup image test" />
*Deprecated .setup-image class*

### operation-screenshot (deprecated)
<img src="./assets/operation/admin_device_tasks_with_labels.webp" class="operation-screenshot" alt="Screenshot test" />
*Deprecated .operation-screenshot class*

---

## Test Results

**To verify:**
1. ✅ All images display correctly
2. ✅ Size differences are visible (small < medium < large < xl)
3. ✅ Semantic aliases work (ui-screenshot, diagram, detail-photo, icon)
4. ✅ Layout containers work (side-by-side, three-column)
5. ✅ Pending box shows orange warning banner
6. ✅ Dev-only content is hidden by default
7. ✅ Callout boxes have correct colors
8. ✅ Deprecated classes still work

**Print testing:**
- Open print preview (Cmd/Ctrl + P)
- Verify images scale appropriately for print
- Verify pending banner is hidden in print
- Verify dimensions match expected percentages

**Dev mode testing:**
- Add `?dev=true` to URL
- Verify dev-only content becomes visible
