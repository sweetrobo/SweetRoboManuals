# Operation Guide

The Robo Ice Cream F2 features **dual hoppers** enabling customers to enjoy two distinct flavors simultaneously or create exciting swirl combinations. This guide covers customer operation, operator management, and the unique dual-flavor capabilities of the F2 system.

## F2 Dual-Flavor System Overview

<div class="feature-grid">

<div class="feature-item">

#### Left Hopper
Primary flavor (chocolate, vanilla, etc.) with independent temperature control.

</div>

<div class="feature-item">

#### Right Hopper
Secondary flavor (strawberry, mint, etc.) with independent temperature control.

</div>

<div class="feature-item">

#### Swirl Mode
Combines both flavors for unique taste experiences with precision timing.

</div>

<div class="feature-item">

#### Temperature Control
Each hopper maintains optimal serving temperature independently.

</div>

</div>

## Daily Startup Procedure

<div class="numbered-steps">

<div>
<div class="step-header">Check Machine Status</div>
• Verify power is on<br>
• Check <strong>L: and R:</strong> temperature displays (should show 100% when ready)<br>
• Ensure both hoppers are at serving temperature<br>
• Verify all doors are closed properly
</div>

<div>
<div class="step-header">Verify Dual-Hopper Supplies</div>
• Check ice cream mix levels in <strong>both hoppers</strong> (minimum 2L per hopper)<br>
• Ensure different flavors are properly loaded in Left and Right hoppers<br>
• Check cup inventory in all 4 tubes<br>
• Verify syrup levels for flavor enhancement<br>
• Check topping levels for complete customization
</div>

<div>
<div class="step-header">Backend Access and System Check</div>
• Tap and hold top-right corner for 3-5 seconds<br>
• Enter password: 123456<br>
• Check system status for both hoppers<br>
• Verify no alerts for either Left or Right systems
</div>

</div>

## Customer Operation - F2 Dual-Flavor Experience

The F2 provides customers with exciting flavor options through its dual-hopper system:

### Flavor Selection Process

<div class="numbered-steps">

<div>
<div class="step-header">Primary Selection Screen</div>
Customer approaches the intuitive touchscreen interface. Machine displays available flavor combinations:<br>
• <strong>Left Flavor Only</strong>: Single flavor from left hopper<br>
• <strong>Right Flavor Only</strong>: Single flavor from right hopper<br>
• <strong>Swirl Combination</strong>: Both flavors blended together
</div>

<div>
<div class="step-header">Enhanced Customization</div>
• Customer selects preferred size<br>
• Choose from multiple syrup options (1-3 available)<br>
• Add dry toppings for additional texture (1-3 available)<br>
• Preview final product combination
</div>

<div>
<div class="step-header">Payment and Dispensing</div>
Customer completes payment via cash, coin, or card. F2 automatically executes the dual-flavor process:<br>
• Drops cup into position<br>
• Dispenses ice cream from selected hopper(s)<br>
• <strong>Swirl Mode</strong>: Alternates between left and right hoppers<br>
• Adds selected syrups in sequence<br>
• Applies chosen toppings<br>
• Opens collection door for pickup
</div>

</div>

## Operator Interface and Backend Management

### Accessing Backend Settings

To access the comprehensive operator interface:

<div class="numbered-steps">

<div>
<div class="step-header">Initiating Login</div>
• Tap the screen in the <strong>top right corner 6+ times</strong><br>
• Enter operator password when prompted<br>
• Default password: '123456' (should be changed for security)
</div>

</div>

<div class="side-by-side-images">
<img src="./assets/operation/backend-access-position.webp" alt="Backend Access Position" />
<img src="./assets/operation/password-input-screen.webp" alt="Password Input Screen" />
</div>
<p style="text-align: center; font-style: italic; margin-top: -10px;">Left: Tap and hold top-right corner | Right: Enter default password 123456</p>

<div class="warning-box">

**SECURITY WARNING:** For security reasons, change the default password under Device Settings

</div>

### Management Interface Overview

<img src="./assets/operation/management-interface.webp" alt="Management Interface" class="operation-screenshot" />
*Main management screen showing device information and system controls*

The management screen provides access to six key sections:

<div class="specs-table">

<div class="spec-row">
<div class="spec-label">Parameter Settings</div>
<div class="spec-value">Control temperature, timing, and dual-hopper dispense parameters</div>
</div>

<div class="spec-row">
<div class="spec-label">Stock Settings</div>
<div class="spec-value">Monitor and update inventory for both hoppers, cups, syrups, and toppings</div>
</div>

<div class="spec-row">
<div class="spec-label">Device Testing</div>
<div class="spec-value">Manually test components and perform cleaning functions</div>
</div>

<div class="spec-row">
<div class="spec-label">Opening Hours</div>
<div class="spec-value">Schedule vending availability based on business hours</div>
</div>

<div class="spec-row">
<div class="spec-label">System Settings</div>
<div class="spec-value">Configure system behavior (volume, voice, network, etc.)</div>
</div>

<div class="spec-row">
<div class="spec-label">Shopping Settings</div>
<div class="spec-value">Configure payment methods, timeout behavior, and alerts</div>
</div>

</div>

### Parameter Settings - F2 Dual-Hopper Controls

Critical settings for optimal F2 operation:

<div class="info-box">

**Hopper-Specific Parameters:**

| **Parameter** | **Default** | **Description** |
|:-----:|:-----:|:-----:|
| L/R Gear Position | 4 | Controls ice cream firmness for each hopper |
| L/R Discharge Time | 1.3s | Individual dispense timing per hopper |
| L/R Pre-cooling Temp | 4°C | Maintains optimal temperature per hopper |
| L/R Discharge Threshold (%) | 70% | Minimum mix % required per hopper |

</div>

<div class="info-box">

**Dual-Flavor Timing:**

| **Function** | **Default** | **Description** |
|:-----:|:-----:|:-----:|
| Swirl Alternation Time | 500ms | Time between hopper switches in swirl mode |
| Syrup Dispense Time | 1500ms | Time per syrup application |
| Sprinkle Time | 2000ms | Time per dry topping |

</div>

### Stock Settings - Dual-Hopper Management

<div class="info-box">

Monitor and manage inventory for both hoppers independently:

- **Cup Count**: Manually update remaining cups across all 4 tubes
- **Ice Cream Mix (Left)**: Status: Adequate / Low / Empty for left hopper
- **Ice Cream Mix (Right)**: Status: Adequate / Low / Empty for right hopper  
- **Syrups 1–3**: Update or clear individual syrup stock levels
- **Toppings 1–3**: Update or clear individual dry topping stock levels

</div>

<div class="important-box">

**Important:** Use "Fill Up" to mark an item as fully restocked<br>
Use "Clean Up" to clear stock status and remove from customer selection

</div>

### Device Testing - Component Control

The F2 provides comprehensive testing capabilities for dual-hopper operation:

<div class="feature-grid">

<div class="feature-item">

#### Cooling System Controls
• **Cooling (Left / Right)**: Activates cooling compressor for selected hopper<br>
• **Thaw Fresh (Left / Right)**: Warms freezing chamber for cleaning<br>
• **Keep Fresh (Left / Right)**: Maintains mix freshness without freezing

</div>

<div class="feature-item">

#### Ice Cream Dispensing
• **Manual Discharge (L / M / R)**: Manual control for Left, Middle (swirl), or Right<br>
• **Auto Discharge**: Automatic dispensing with preset timing<br>
• **Close Controls**: Individual close functions per dispenser

</div>

<div class="feature-item">

#### Additional Testing
• **Cup Holder**: Reset and manual cup drop functions<br>
• **Syrup Testing**: Test individual syrup lines (1-3)<br>
• **Topping Testing**: Test individual topping dispensers (1-3)

</div>

<div class="feature-item">

#### System Controls
• **UV Sanitizer**: Manual UV lamp control<br>
• **Door Controls**: Lock/unlock and raise/lower collection door<br>
• **System Reset**: Full system restart options

</div>

</div>

## Ice Cream Mix Preparation - F2 Dual-Hopper System

### Preparing Powder-Based Mix

For optimal F2 operation, prepare mix for each hopper independently:

<div class="info-box">

**Required Tools:**
- Mixing bucket (at least 5L capacity)
- Food-safe electric mixer or whisk
- Clean stirring rod
- Fresh drinking-grade water

</div>

<img src="./assets/maintenance/mixing-bucket.webp" alt="Mixing Equipment" />
<p style="text-align: center; font-style: italic; margin-top: -10px;">Required tools for preparing ice cream mix</p>

<div class="step-header">Preparation Instructions:</div>

<div class="numbered-steps">

<div>
<strong>Prepare Water Base</strong><br>
• Pour <strong>4 liters of fresh water</strong> into clean mixing bucket<br>
• Ensure bucket is sanitized and dry before use
</div>

<div>
<strong>Add Ice Cream Powder</strong><br>
• Slowly pour <strong>one full 1.5 kg bag</strong> of powder into water<br>
• Allow brief settling time for initial dissolution
</div>

<div>
<strong>Mix Thoroughly</strong><br>
• Use mixer to stir solution for <strong>2–3 minutes</strong><br>
• Ensure slurry is smooth and clump-free<br>
• Avoid over-mixing to prevent excess foaming
</div>

<div>
<strong>Transfer to Hopper</strong><br>
• Slowly pour mixed slurry into designated hopper (Left or Right)<br>
• Avoid splashing or overfilling<br>
• Keep hopper lids closed after refilling
</div>

<div>
<strong>Quality Check</strong><br>
• Light foam layer above liquid is normal<br>
• Gently stir with clean rod if excess foam develops<br>
• Verify proper consistency before operation
</div>

</div>

<div class="side-by-side-images">
<img src="./assets/maintenance/mix-preparation-step-1.webp" alt="Adding Powder" />
<img src="./assets/maintenance/mix-preparation-step-2.webp" alt="Mixing Process" />
</div>
<p style="text-align: center; font-style: italic; margin-top: -10px;">Left: Adding powder to water | Right: Proper mixing technique</p>

<img src="./assets/maintenance/mix-preparation-step-3.webp" alt="Hopper Transfer" />
<p style="text-align: center; font-style: italic; margin-top: -10px;">Transferring prepared mix to hopper</p>

### F2 Dual-Hopper Fill Guidelines

<div class="info-box">

**Initial Setup:**
- For new startups or after full cleaning, add **at least 2 full bags per hopper** (6 kg total powder to 16 L water)
- This ensures both hoppers are properly primed for dual-flavor operation

</div>

<div class="info-box">

**Ongoing Refills:**
- Maintain minimum 2L in each hopper for consistent operation
- Stir remaining mix before refilling to prevent settling
- Alternate hopper refills to maintain continuous dual-flavor availability

</div>

<div class="important-box">

**Flavor Management:**
- Use different flavors in each hopper for maximum customer choice
- Popular combinations: Vanilla (Left) + Chocolate (Right)
- Consider seasonal flavors: Vanilla (Left) + Strawberry (Right)

</div>

<div class="warning-box">

**WARNING:** Always sanitize all equipment between flavor changes to prevent cross-contamination

</div>

## Temperature Monitoring - Dual-Hopper System

<div class="info-box">

The F2's dual display system shows individual hopper status:

- **L: 100%** = Left hopper at optimal serving temperature
- **R: 100%** = Right hopper at optimal serving temperature  
- **Lower percentages** = Cooling in progress for that hopper
- **Alert conditions** = Temperature issues requiring attention

</div>

<div class="important-box">

Both hoppers must reach 100% for full dual-flavor operation. Single-hopper operation possible if one hopper is offline.

</div>

## Managing Dual Flavors During Operation

### Flavor Rotation Strategy

To maximize customer satisfaction and manage inventory:

<div class="feature-grid">

<div class="feature-item">

#### Popular Combinations
• Vanilla + Chocolate (classic appeal)<br>
• Vanilla + Strawberry (fruit combination)<br>
• Chocolate + Mint (premium experience)

</div>

<div class="feature-item">

#### Seasonal Considerations
• Summer: Light flavors (vanilla, strawberry)<br>
• Winter: Rich flavors (chocolate, caramel)<br>
• Holidays: Themed combinations

</div>

<div class="feature-item">

#### Inventory Management
• Monitor consumption rates per hopper<br>
• Adjust mix preparation based on customer preferences<br>
• Track swirl vs. single-flavor selections

</div>

<div class="feature-item">

#### Customer Analytics
• Track most popular flavor combinations<br>
• Identify peak usage times per flavor<br>
• Optimize mix preparation schedules

</div>

</div>

### Refilling During Operation

<div class="step-header">Ice Cream Mix - Dual-Hopper Process:</div>

<div class="numbered-steps">

<div>
Check which hopper requires refilling (L: or R: display)
</div>

<div>
Prepare mix according to instructions above
</div>

<div>
Open specific hopper lid carefully
</div>

<div>
Add prepared mix without disturbing other hopper
</div>

<div>
Verify minimum 2L level maintained in both hoppers
</div>

<div>
Close lid securely and verify temperature recovery
</div>

</div>

<div class="caution-box">

**Coordinated Refilling:**
- Plan refills during low-traffic periods
- Never refill both hoppers simultaneously
- Maintain at least one hopper operational during refills

</div>

<img src="./assets/operation/serving-cups.webp" alt="Serving Cups" class="operation-screenshot" />
*Orange Sweet Robo branded ice cream serving cups used by the F2 machine*

### Syrups & Toppings for F2

<div class="info-box">

The F2's enhanced customization options include:
- **3 Syrup Options**: Chocolate, strawberry, caramel (typical)
- **3 Topping Options**: Sprinkles, nuts, chocolate chips (typical)
- **Flavor Pairing**: Certain syrups complement specific hopper flavors

</div>

<div class="important-box">

Replace syrup bags and refill topping containers as needed, using only approved products that complement the dual-flavor system.

</div>

## Settings and Configuration

![Device Settings Interface](assets/operation/device-settings.webp)

<div class="feature-grid">

<div class="feature-item">

#### Opening Hours Management
• Set daily operational hours (24-hour format)<br>
• Machine automatically powers down outside scheduled hours<br>
• Coordinate with dual-hopper cooling cycles for energy efficiency

</div>

<div class="feature-item">

#### System Settings
• **Volume Control**: Adjust for different time periods<br>
• **Voice Prompts**: Enable promotional guidance for dual-flavor options<br>
• **Network Configuration**: Maintain connection for sales reporting<br>
• **Error Logging**: Monitor dual-hopper system performance

</div>

<div class="feature-item">

#### Shopping Settings
Configure customer experience for dual-flavor purchasing:<br>
• **Payment Methods**: Enable cash, coin, and card acceptance<br>
• **Timeout Settings**: Manage customer interaction time<br>
• **Change Management**: Configure coin dispenser operation

</div>

<div class="feature-item">

#### Advanced Configuration
• **Language Selection**: Multiple language support<br>
• **Currency Settings**: Local currency configuration<br>
• **Receipt Options**: Digital or printed receipts<br>
• **Promotional Settings**: Special offers and discounts

</div>

</div>

## Daily Shutdown - F2 Protocol

<div class="numbered-steps">

<div>
<div class="step-header">Record Sales Data</div>
• Note final sales figures for both flavors<br>
• Track swirl vs. single-flavor preferences<br>
• Monitor individual hopper performance
</div>

<div>
<div class="step-header">Inventory Assessment</div>
• Check and record mix levels in both hoppers<br>
• Note consumption rates per flavor<br>
• Plan next day's flavor selection
</div>

<div>
<div class="step-header">System Maintenance</div>
• Wipe down exterior surfaces<br>
• Ensure both hopper lids are secured<br>
• Verify collection door is properly closed
</div>

<div>
<div class="step-header">Overnight Operation</div>
• Leave power on for temperature maintenance<br>
• Both hoppers maintain optimal overnight cooling<br>
• UV sanitizer continues automated cycles
</div>

</div>

## Important F2 Operating Notes

<div class="warning-box">

### Dual-Hopper Best Practices
- **Never turn off hopper switches** during operation
- **Maintain minimum 2L mix** in each hopper independently  
- **Monitor both L: and R: temperatures** continuously
- **Plan flavor combinations** based on customer preferences

</div>

<div class="caution-box">

### Safety Considerations
- **Independent cooling systems** allow single-hopper operation if needed
- **Automatic cleaning cycles** maintain hygiene in both hoppers
- **UV sanitizer** activates between all servings regardless of flavor selection
- **Temperature alarms** alert operators to hopper-specific issues

</div>

<div class="info-box">

### Quality Assurance
- **Monitor expiration dates** on mix for both hoppers
- **Track flavor popularity** to optimize inventory
- **Regular taste testing** ensures quality from both hoppers
- **Customer feedback** helps refine dual-flavor offerings

</div>

<div class="important-box">

The F2's dual-hopper system represents the pinnacle of automated ice cream vending, providing customers with unprecedented flavor variety while maintaining the reliability and ease of operation that Sweet Robo is known for.

</div>