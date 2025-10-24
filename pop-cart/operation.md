# Operation Guide

This section covers daily operations, customer service procedures, and operator controls for the Pop Cart popcorn vending machine.

<hr class="section-divider">

## Daily Startup Procedure

Perform these steps at the beginning of each operating day:

<div class="numbered-steps">

<div>
<div>
**Verify Supply Levels**<br>
• Check kernel hopper is adequately filled<br>
• Confirm seasoning dispensers are stocked<br>
• Verify cup supply is sufficient<br>
• Check oil/butter reservoir level
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
**Perform Test Cycle**<br>
• Run one test transaction (see Test Mode below)<br>
• Verify popping mechanism operates correctly<br>
• Confirm dispensing works properly<br>
• Test payment processing if possible
</div>
</div>

<div>
<div>
**Enable Customer Access**<br>
• Unlock any overnight security features<br>
• Post operating hours if applicable<br>
• Ensure area lighting is adequate<br>
• Mark machine as "In Service"
</div>
</div>

</div>

<hr class="section-divider">

## Customer Operation Flow

The Pop Cart provides an intuitive touchscreen interface guiding customers through the purchasing process. Understanding this flow helps operators assist customers and troubleshoot issues.

### Step 1: Popcorn Selection

<img src="./assets/operation/operation_popcorn_selection_clean_view.webp" alt="Popcorn Selection Screen" />
*Customer selects their preferred popcorn variety*

The customer journey begins with popcorn selection:

**Available Options:**
- **Blue Burst**: Premium blue popcorn variety with slightly sweeter flavor
- **Sunny Crunch**: Classic yellow popcorn with traditional taste

<div class="side-by-side-images">
<img src="./assets/operation/operation_popcorn_selection_finger_pointing.webp" alt="Customer Selecting Popcorn" />
<img src="./assets/operation/operation_popcorn_selection_sunny_crunch.webp" alt="Sunny Crunch Selected" />
</div>

*Customer interaction: selecting Sunny Crunch popcorn variety*

**Customer Actions:**
1. Tap desired popcorn variety on the touchscreen
2. Selection highlights to confirm choice
3. Tap "Continue" button to proceed to toppings

<div class="info-box">

Pricing displays next to each popcorn option. The system can be configured for different pricing tiers based on size or variety through the operator menu.

</div>

### Step 2: Topping Selection

<img src="./assets/operation/ui_topping_selection_five_flavors.webp" alt="Topping Selection Screen with Five Flavors" />
*Customer can choose up to 2 flavor toppings*

After selecting popcorn, customers add flavor toppings:

**Available Toppings:**
- **Butter** - Classic butter flavor ($1)
- **Chipotle** - Smoky spice ($2)
- **Garlic** - Savory garlic seasoning ($1)
- **Jalapeño** - Spicy pepper kick ($2)
- **Truffle** - Gourmet truffle essence ($1)

<div class="side-by-side-images">
<img src="./assets/operation/operation_topping_selection_two_flavors.webp" alt="Select Up To 2 Flavors" />
<img src="./assets/operation/ui_topping_selection_jalapeno_selected.webp" alt="Jalapeño Topping Selected" />
</div>

*Topping selection interface and selection confirmation*

**Selection Rules:**
- Customers can select up to 2 different toppings
- Each topping has individual pricing
- Selections are highlighted when chosen
- Tap selected topping again to deselect

<div class="info-box">

Topping prices and availability can be configured in the operator menu. Seasonings must be physically stocked for options to remain active.

</div>

### Step 3: Payment

<img src="./assets/operation/ui_payment_screen_card_cash.webp" alt="Payment Method Selection" />
*Customer chooses payment method after reviewing order*

The payment screen displays the complete order summary:

**Payment Options:**
- **Credit Card**: Contactless or chip reader
- **Cash**: Bills and coins (if cash system installed)
- **Loyalty Credits**: Applied automatically if account detected

<img src="./assets/operation/ui_payment_screen_credits_applied.webp" alt="Payment Screen with Loyalty Credits Applied" />
*Loyalty credits automatically reduce the total amount due*

<div class="numbered-steps">

<div>
<div>
System displays itemized order with total amount
</div>
</div>

<div>
<div>
Loyalty credits automatically apply if customer has account
</div>
</div>

<div>
<div>
Customer selects payment method
</div>
</div>

<div>
<div>
System processes payment securely
</div>
</div>

<div>
<div>
Upon successful payment, popcorn production begins
</div>
</div>

</div>

<img src="./assets/operation/payment-screen-order-summary.webp" alt="Complete Order Summary Before Payment" />
*Detailed order summary showing popcorn selection and toppings*

<div class="warning-box">

**Payment Processing**: If payment fails, the order is cancelled and the customer must restart. No product is dispensed until payment is confirmed successful.

</div>

### Step 4: Production & Dispensing

Once payment is confirmed, the Pop Cart begins fresh popcorn production:

<div class="numbered-steps">

<div>
<div>
**Heating Cycle**<br>
Heating elements warm to optimal popping temperature
</div>
</div>

<div>
<div>
**Kernel & Oil Release**<br>
Precise amounts of kernels and oil dispense into popping chamber
</div>
</div>

<div>
<div>
**Popping Process**<br>
Kernels pop fresh while customer waits (approximately 90-120 seconds)
</div>
</div>

<div>
<div>
**Seasoning Application**<br>
Selected toppings automatically dispense onto fresh popcorn
</div>
</div>

<div>
<div>
**Cup Positioning**<br>
System signals customer to place cup in dispensing window
</div>
</div>

<div>
<div>
**Dispensing**<br>
Fresh, seasoned popcorn fills the cup automatically
</div>
</div>

</div>

<img src="./assets/operation/popcorn_cup_dispensing_position.webp" alt="Branded Cup in Dispensing Position" />
*Customer places branded cup in dispensing slot for filling*

**Cup Positioning:**
- Customer places cup in stainless steel dispensing slot
- Sensors detect proper cup placement
- System dispenses measured portion into cup
- Customer retrieves filled cup from window

<div class="caution-box">

**CAUTION**: Customers should not reach into the dispensing window until the cycle is complete. Popcorn and internal components may be hot during production.

</div>

### Step 5: Order Completion

<img src="./assets/operation/operation_completion_enjoy_meal.webp" alt="Order Complete - Enjoy Your Meal Screen" />
*Completion screen with thank you message*

After successful dispensing:

1. **Completion Message**: "Enjoy your meal!" displays with branding
2. **Receipt** (if configured): Printed or emailed receipt provided
3. **Screen Reset**: System returns to welcome screen for next customer
4. **Cleaning Cycle**: Internal cleaning sequence may run between orders

<hr class="section-divider">

## Topping Addition Demonstration

For customers adding additional toppings manually (chocolate chips, candies, or other mix-ins):

<div class="numbered-steps-with-images">

<div class="step-with-image">
<div class="step-content">
<h3>Position Topping Cup</h3>
Hold topping cup (chocolate chips, candy pieces, etc.) above the dispensing chamber opening.
</div>
<div class="step-image">
<img src="./assets/operation/chocolate_chips_cup_ready_to_pour.webp" alt="Chocolate Chips Cup Ready" />
</div>
</div>

<div class="step-with-image">
<div class="step-content">
<h3>Begin Pouring</h3>
Slowly pour toppings into the chamber while popcorn is dispensing or after dispensing is complete.
</div>
<div class="step-image">
<img src="./assets/operation/chocolate_chips_dispensing_demo_step2.webp" alt="Pouring Chocolate Chips" />
</div>
</div>

<div class="step-with-image">
<div class="step-content">
<h3>Mix with Popcorn</h3>
Toppings will mix with popcorn as they fall through the chamber into the cup below.
</div>
<div class="step-image">
<img src="./assets/operation/chocolate_chips_dispensing_demo_step1.webp" alt="Chocolate Chips Over Chamber" />
</div>
</div>

</div>

<div class="info-box">

Manual topping additions (like chocolate chips) can be offered as premium add-ons. Configure the system to allow extended dispensing window access time for these customizations.

</div>

<hr class="section-divider">

## User Interface Navigation

<img src="./assets/operation/touchscreen_back_button_interface.webp" alt="Touchscreen Back Button" />
*Navigation controls including Back button for correcting selections*

**Customer Navigation:**
- **Back Button**: Returns to previous screen to change selections
- **Continue Button**: Advances to next step in ordering process
- **Tab Navigation**: Visual indicators show current step (Popcorn → Topping → Payment)
- **Timeout**: Screen resets to welcome if inactive for 60 seconds

**Interface Features:**
- Vintage carnival-themed graphics maintain Pop Cart aesthetic
- Large touch targets for easy selection
- Clear visual feedback for all interactions
- Progress indicators show order flow position

<hr class="section-divider">

## Operator Menu Access

Operators can access advanced settings and diagnostics through a protected menu:

### Accessing Operator Mode

<div class="numbered-steps">

<div>
<div>
From the welcome screen, tap the Sweet Robo logo in the corner (hold for 3 seconds)
</div>
</div>

<div>
<div>
Enter operator PIN code when prompted (default: check machine documentation or contact support)
</div>
</div>

<div>
<div>
Operator menu displays with configuration and diagnostic options
</div>
</div>

</div>

### Operator Menu Options

<div class="feature-grid grid-2">

<div class="feature-item">

#### Pricing Configuration
Set individual prices for popcorn varieties, toppings, and size options. Configure loyalty credit values and promotional pricing.

</div>

<div class="feature-item">

#### Inventory Tracking
View current levels of kernels, seasonings, cups, and other consumables. Set low-level alerts.

</div>

<div class="feature-item">

#### Sales Reports
Access transaction history, sales totals, and revenue reports. Export data for accounting purposes.

</div>

<div class="feature-item">

#### System Diagnostics
Run component tests, view error logs, check sensor status, and perform calibration procedures.

</div>

<div class="feature-item">

#### Network Settings
Configure Wi-Fi or Ethernet connections, remote management access, and system update settings.

</div>

<div class="feature-item">

#### User Management
Add/remove operator accounts, change PIN codes, set permission levels for different users.

</div>

</div>

<div class="important-box">

**IMPORTANT**

Keep operator PIN codes secure and confidential. Unauthorized access to operator settings can disrupt machine operation or compromise payment security.

</div>

<hr class="section-divider">

## Test Mode

Operators can run test cycles without charging customers:

<div class="numbered-steps">

<div>
<div>
Enter Operator Menu (see above)
</div>
</div>

<div>
<div>
Select "Test Mode" or "Device Testing"
</div>
</div>

<div>
<div>
Choose component to test (popping cycle, dispenser, payment, etc.)
</div>
</div>

<div>
<div>
System runs test without customer payment required
</div>
</div>

<div>
<div>
Observe results and verify proper operation
</div>
</div>

<div>
<div>
Exit Test Mode to return to normal customer operation
</div>
</div>

</div>

**Recommended Test Schedule:**
- **Daily**: Quick dispense test at startup
- **Weekly**: Complete popping cycle test
- **Monthly**: Full system diagnostic including all components

<hr class="section-divider">

## Assisting Customers

### Common Customer Questions

**"How long does it take?"**
- Fresh popcorn takes approximately 90-120 seconds from payment to dispensing
- Customers can watch the popping process through the dispensing window

**"Can I get no toppings?"**
- Yes, customers can skip the topping screen by pressing Continue without selecting

**"What if I selected the wrong thing?"**
- Use the Back button before payment to return and change selections
- After payment, refunds must be processed through operator menu

**"The machine says error - what do I do?"**
- Note the error message displayed
- Contact operator/staff for assistance
- Refer to [Troubleshooting](troubleshooting.md) section

### Handling Issues During Service

<div class="feature-grid grid-2">

<div class="feature-item">

#### Payment Declined
Inform customer their payment was not accepted. Suggest trying different card or cash payment. Order will not proceed without successful payment.

</div>

<div class="feature-item">

#### Dispenser Jam
If popcorn does not dispense properly, enter operator mode and run dispenser diagnostic. May require manual clearing (see Troubleshooting).

</div>

<div class="feature-item">

#### Out of Supply
If kernel, seasoning, or cup supply is depleted, system alerts operator. Temporarily disable affected options until restocked.

</div>

<div class="feature-item">

#### Screen Unresponsive
If touchscreen becomes unresponsive, perform soft reset through power cycle. May indicate calibration needed.

</div>

</div>

<hr class="section-divider">

## End of Day Procedures

At the close of operations each day:

<div class="numbered-steps">

<div>
<div>
**Run Sales Report**<br>
Access operator menu and generate end-of-day sales report. Record transactions and revenue.
</div>
</div>

<div>
<div>
**Empty Cash Box** (if applicable)<br>
Remove and secure cash from payment system following your facility's cash handling procedures.
</div>
</div>

<div>
<div>
**Check Supply Levels**<br>
Note which consumables need restocking for next operating day. Order supplies as needed.
</div>
</div>

<div>
<div>
**Perform Basic Cleaning**<br>
Wipe down touchscreen and exterior surfaces. Clean dispensing window. See Maintenance section for details.
</div>
</div>

<div>
<div>
**Enable Overnight Mode** (optional)<br>
Some operators power down machines overnight or enable energy-saving mode through operator settings.
</div>
</div>

<div>
<div>
**Secure Machine**<br>
Lock service doors, enable security features if available, and secure the area.
</div>
</div>

</div>

<hr class="section-divider">

## Best Practices

### Maximizing Customer Satisfaction

- **Keep it stocked**: Never run out of popular items during peak hours
- **Stay clean**: Wipe exterior surfaces multiple times per day
- **Test regularly**: Catch and fix small issues before they affect customers
- **Monitor remotely**: Use remote management to track performance in real-time
- **Respond quickly**: Address error alerts promptly to minimize downtime

### Optimizing Performance

- **Track popular items**: Use sales data to stock appropriate ratios of varieties and toppings
- **Peak hour prep**: Ensure full supply levels before busy periods
- **Temperature management**: Maintain proper ambient temperature for consistent popping
- **Regular maintenance**: Follow preventive maintenance schedule (see Maintenance section)
- **Staff training**: Ensure multiple staff members understand operation and basic troubleshooting

<hr class="section-divider">

## Next Steps

- **[Maintenance](maintenance.md)** - Learn cleaning procedures and supply restocking
- **[Troubleshooting](troubleshooting.md)** - Diagnose and resolve common issues
- **[Parts & Service](parts-service.md)** - Component identification and service contacts

For operational support questions, contact Sweet Robo: [Company Information](../shared/company-info.md)
