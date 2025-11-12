# Operation Guide

This section covers daily operations, customer service procedures, and operator controls for the Pop Cart popcorn vending machine.

<hr class="section-divider">

## Daily Startup Procedure

Perform these steps at the beginning of each operating day:

<div class="numbered-steps">

<div>
<div>
**Verify Supply Levels**<br>
Complete the [Supply Checklist](#supply-checklist) below: kernel hoppers, seasonings, and cups
</div>
</div>

<div>
<div>
**Inspect Machine Condition**<br>
• Visually inspect exterior for damage or tampering<br>
• Verify dispensing window is clean and clear<br>
• Check for any error messages on screen<br>
• Ensure no obstructions in customer access area
</div>
</div>

<div>
<div>
**Power On System**<br>
• Turn on main power if switched off overnight<br>
• Allow 30-60 seconds for system boot<br>
• Verify touchscreen displays welcome screen<br>
• Check that all LEDs indicate normal operation
</div>
</div>

<div>
<div>
**Perform Test Cycle (Optional)**<br>
Run a test transaction to verify proper operation (see Testing & Diagnostics section)
</div>
</div>

</div>

<hr class="section-divider">

## Supply Checklist

Use this checklist for daily startup, restocking, and troubleshooting supply-related issues.

<div class="specs-table">

<div class="spec-row">
<div class="spec-label">Kernel Hoppers (both cylinders)</div>
<div class="spec-value">
✓ Minimum level: 1 kg per hopper (≈33% full)<br>
✓ Maximum capacity: 3 kg per hopper<br>
✓ Refill when below 25% to ensure continuous operation
</div>
</div>

<div class="spec-row">
<div class="spec-label">Seasoning Dispensers (5 lanes)</div>
<div class="spec-value">
✓ Verify all active lanes are adequately stocked<br>
✓ Check dispenser openings are clear and unclogged<br>
✓ Confirm seasonings match inventory configuration
</div>
</div>

<div class="spec-row">
<div class="spec-label">Cup Supply</div>
<div class="spec-value">
✓ Minimum: 20 cups for short operation periods<br>
✓ Recommended: 50+ cups for full day operation<br>
✓ Ensure cups are correctly oriented in dispenser
</div>
</div>

<div class="spec-row">
<div class="spec-label">Visual Inspection</div>
<div class="spec-value">
✓ Check fill levels visually through transparent hopper windows<br>
✓ Look for blockages or bridging in hoppers<br>
✓ Verify seasonings are properly loaded in dispenser lanes
</div>
</div>

</div>

<div class="info-box">

**Quick Reference**: For detailed restocking procedures, see [Supply Restocking](maintenance.md#supply-restocking) in the Maintenance section.

</div>

<hr class="section-divider">

## Customer Operation Flow

The Pop Cart provides an intuitive touchscreen interface guiding customers through the purchasing process. Understanding this flow helps operators assist customers and troubleshoot issues.

### Step 1: Popcorn Selection

<img src="./assets/operation/customer_popcorn_flavor_selection.webp" alt="Popcorn Selection Screen" />

Customers select their preferred popcorn variety. Available options are configurable and may vary. Pricing displays next to each option and can be configured through the admin Inventory section.

### Step 2: Topping Selection

<img src="./assets/operation/customer_topping_flavor_selection.webp" alt="Topping Selection Screen with Flavor Options" />

Customers choose up to 2 flavor toppings from 5 available lanes. Available topping options may vary (e.g., Butter, Chipotle, Garlic, Jalapeño, Truffle). Pricing and availability are configured in the admin Inventory section and require physical seasoning stock.

### Step 3: Payment

<img src="./assets/operation/customer_payment_order_summary.webp" alt="Payment Screen with Order Summary" />

The payment screen shows the complete order summary with itemized selections and total. Customers pay via credit card, cash, or loyalty credits (if available/installed). Payment must complete successfully before production begins; failed payments allow retry.

### Step 4: Production & Dispensing

<img src="./assets/operation/popcorn_cup_dispensing_position.webp" alt="Branded Cup in Dispensing Position" />

After payment, the machine begins the automated production cycle (~90-120 seconds):
1. Cup drops into holder
2. Kernels drop into air oven
3. Oven heats and pops the kernels
4. Blower pushes popcorn down the chute into the cup
5. Door opens
6. Seasoning toppings drop onto the side (customer manually applies desired amount)

<div class="caution-box">

**CAUTION**: Popcorn and internal components may be hot during production.

</div>

**Customer Assistance:**
- Back button allows customers to change selections before payment
- Screen timeout resets to welcome after 60 seconds of inactivity

<hr class="section-divider">

## Admin Interface

<img src="./assets/operation/admin_login_password_entry.webp" alt="Admin Login Screen" />

Access the admin interface by tapping 3-5 times in the top left corner of the screen, then entering your operator PIN. All management functions are performed locally on the touchscreen.

### Management Dashboard

<img src="./assets/operation/admin_manage_dashboard_four_tiles.webp" alt="Admin Management Dashboard" />

The dashboard provides access to **Device** (WiFi, payment methods, popcorn parameters), **Testing** (diagnostics, sensors, dispensers), **Statistics** (sales, revenue, reports), and **Inventory** (stock, pricing).

**Key Configuration Screens:**

<img src="./assets/operation/admin_device_settings_wifi_payment.webp" alt="Device Settings Screen" />

- **Device Settings**: WiFi, payment methods, device ID, system settings
- **Popcorn Parameters**: Temperature, speed, and timing controls for both chambers

### Inventory & Pricing

<div class="side-by-side-images">
<img src="./assets/operation/admin_inventory_popcorn_cup_count.webp" alt="Inventory - Popcorn and Cups" />
<img src="./assets/operation/admin_inventory_seasonings_list.webp" alt="Inventory - Seasonings" />
</div>

Manage stock levels, configure pricing, and assign seasonings to the 5 dispenser lanes. Track cup count, popcorn varieties, and seasoning quantities. All pricing changes take effect immediately on the customer interface.

### Statistics & Sales

<img src="./assets/operation/admin_statistics_sales_dashboard.webp" alt="Statistics Dashboard" />

View sales count, total income, and transaction history. Backend syncing (requires WiFi connection) enables remote monitoring and data export through the Sweet Robo tracking system.

<div class="important-box">

**IMPORTANT**

Keep operator PIN codes secure and confidential. Unauthorized access to operator settings can disrupt machine operation or compromise payment security.

</div>

<hr class="section-divider">

## Testing & Diagnostics

<div class="side-by-side-images">
<img src="./assets/operation/admin_testing_controls_temperature.webp" alt="Testing Controls - Temperature and Sensors" />
<img src="./assets/operation/admin_testing_cargo_lane_controls.webp" alt="Testing Controls - Cargo Lanes" />
</div>

Access Testing from the management dashboard to run diagnostics without charging customers. Test sensors, temperature, chamber speed, and all 5 seasoning dispensers individually. Run hopper cleaning cycles and clear jams.

**Test Schedule:** Daily (quick dispense test), Weekly (complete popping cycle), Monthly (full system diagnostic)

<hr class="section-divider">

## Daily Operations

**Startup:** Complete [Supply Checklist](#supply-checklist), check for errors, run test cycle.

**Customer Assistance:** Process takes 90-120 seconds. Back button allows selection changes before payment. For errors or issues, see [Troubleshooting](troubleshooting.md).

**End of Day:** Run sales report, empty cash box (if applicable), verify [Supply Checklist](#supply-checklist), basic cleaning (see [Maintenance](maintenance.md)), secure machine.

**Best Practices:** Keep supplies stocked for peak hours, clean surfaces regularly, run diagnostics daily, use sales data to optimize inventory.

---

For support, see [Company Information](../shared/content/company-info.md) | Learn more: [Maintenance](maintenance.md) · [Troubleshooting](troubleshooting.md) · [Parts & Service](parts-service.md)
