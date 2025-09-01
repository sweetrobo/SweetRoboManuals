# Troubleshooting

This section provides step-by-step guidance for identifying and resolving common issues with your Robo Ice Cream F2 machine. For any unresolved problems, please contact Sweet Robo Support.

---

## Immediate Action Guidelines

<div class="warning-box">

**Safety First**

- **Always power down the machine** using the backend shutdown button and breaker before inspecting internal components.
- **Record the issue** and any unusual behavior or error codes to assist with support or warranty claims.

</div>

---

## Common Issues & Solutions

<div class="info-box">

| **Issue** | **Possible Cause** | **Action Steps** |
| :-----: | :-----: | :-----: |
| Machine does not power on | Breaker off or timer is set incorrectly | Check breaker is ON and hardware timer is set properly |
| Screen is blank but power is on | Internal PC not booted | Open service panel and press PC power button. If this keeps happening, contact Sweet Robo Support. |
| Ice cream not dispensing | Hopper is empty or mix is too cold | Check hopper level and run thaw cycle |
| "Mix Needs Replacement" alert | Mix temperature exceeded 5°C (41°F) | Replace mix immediately, allow new mix to cool below 5°C before serving |
| Machine won't dispense despite mix present | Temperature sensor detected unsafe mix temp | Check hopper temperature, replace mix if above 5°C |
| Cup not dropping | Cup tube is empty or jammed | Refill cup tubes, run test drop in backend |
| Dispensing door does not open | Sensor blocked or door jammed | Clear obstructions, restart door motor via backend |
| Topping not added | Empty container or blocked dispenser | Refill and clean topping container, test via backend |
| Syrup not dispensing | Tubing clogged or bag empty | Clean tubing, replace syrup bag, run test |
| Machine freezing or unresponsive | Overloaded system or background process stuck | Perform full restart via backend, then breaker |
| UV lamp not turning on | Burned-out bulb or wiring issue | Contact Sweet Robo Support to replace lamp |

</div>

### Machine Won't Make Ice Cream After Power On

<div class="caution-box">

**Symptom:** Machine is on but not producing ice cream

**Cause:** Machine needs time to reach operating temperature

</div>

<div class="numbered-steps">

<div>
After turning on power and refrigeration switch, wait 5-10 minutes
</div>

<div>
Check temperature status on screen (L: 100% or R: 100% indicates ready)
</div>

<div>
Machine will only dispense once internal temperature is cold enough
</div>

</div>

### Core Board Error

<div class="warning-box">

**Symptom:** "Core board error" message on screen, loud grinding noise

**Cause:** Hopper turned on without liquid, causing metal-on-metal contact

</div>

<div class="step-header">Solution:</div>

<div class="numbered-steps">

<div>
**Immediately turn off the machine**
</div>

<div>
Fill each hopper with at least 2 liters of prepared mix (3L water + 1 gelato mix packet)
</div>

<div>
Turn on the hopper switch (located on bottom of hopper)
</div>

<div>
Turn on the machine
</div>

<div>
Error should clear once liquid is detected
</div>

</div>

<div class="important-box">

**Prevention:** Always fill hoppers before turning on machine

</div>

### Mix Temperature Alert - "Mix Needs Replacement"

<div class="warning-box">

**Symptom:** Display shows "Mix Needs Replacement" and machine won't dispense

**Cause:** Hopper temperature sensor detected mix temperature above 5°C (41°F)

</div>

<div class="step-header">Immediate Actions:</div>

<div class="numbered-steps">

<div>
Stop operation immediately - do NOT attempt to override
</div>

<div>
Check which hopper(s) are affected (L: or R: display)
</div>

<div>
Dispose of affected mix following food safety guidelines
</div>

<div>
Clean and sanitize the affected hopper
</div>

<div>
Refill with fresh, properly chilled mix
</div>

<div>
Allow mix to cool below 5°C before resuming operation
</div>

<div>
Monitor temperature display until it shows normal operation
</div>

</div>

<div class="important-box">

**Prevention:** 
- Monitor hopper temperatures regularly during operation
- Ensure refrigeration system is functioning properly
- Never leave mix at room temperature
- Check door seals for proper closure
- Verify ventilation is adequate around the machine

</div>

### Cup Dispenser Issues

<div class="info-box">

**Symptom:** Cup doesn't drop when customer orders

</div>

<div class="step-header">Solution:</div>

<div class="numbered-steps">

<div>
Access backend (tap and hold top-right corner for 3-5 seconds)
</div>

<div>
Enter password: 123456
</div>

<div>
Navigate to Device Testing
</div>

<div>
Try these functions:<br>
• "Cup Out" - dispenses one cup<br>
• "Reset Cup Holder" - realigns the system
</div>

<div>
Check that cups are:<br>
• Loaded correctly in tubes<br>
• Properly aligned<br>
• Not jammed or stuck together
</div>

</div>

### Syrup Not Dispensing

<div class="info-box">

**Symptom:** Syrup pumps activate but no syrup comes out

</div>

<div class="step-header">Solution:</div>

<div class="numbered-steps">

<div>
Access backend settings
</div>

<div>
Go to Stock Settings menu
</div>

<div>
Verify stock levels are set correctly
</div>

<div>
Navigate to Parameter Settings
</div>

<div>
Find Syrup 1, 2, 3 options
</div>

<div>
Place a cup under syrup tip
</div>

<div>
Press play/test for each syrup
</div>

<div>
Run multiple times until syrup flows (air bubbles may need clearing)
</div>

</div>

<div class="info-box">

**Alternative test:**
- Go to Device Testing → Jams/Sprinkles Test
- Test each syrup dispenser manually

</div>

### Toppings Not Dispensing

<div class="info-box">

**Symptom:** Topping dispensers activate but nothing comes out

</div>

<div class="numbered-steps">

<div>
Check Stock Settings for correct levels
</div>

<div>
Ensure using only dry, solid toppings (no chunks or thick sauces)
</div>

<div>
Test via Device Testing → Jams/Sprinkles Test
</div>

<div>
Check for clogs in dispenser mechanism
</div>

</div>

### Temperature Display Questions

<div class="info-box">

**What "L: 100%" or "R: 100%" means:**
- L = Left hopper temperature status
- R = Right hopper temperature status
- 100% = Hopper at correct serving temperature
- Lower percentages = Still cooling down

</div>

### Machine Not Accepting Payment

<div class="step-header">Nayax Reader Issues:</div>

<div class="numbered-steps">

<div>
Ensure Nayax is properly installed behind cash box
</div>

<div>
Check COM2 connection to machine
</div>

<div>
Verify marshal cover is in place
</div>

<div>
Complete Nayax registration if not done
</div>

<div>
Contact Nayax support if error persists
</div>

</div>

### WiFi Connection Problems

<div class="step-header">Solution:</div>

<div class="numbered-steps">

<div>
Access backend settings
</div>

<div>
Go to System Settings
</div>

<div>
Look at bottom right corner (buttons may be hard to see)
</div>

<div>
Press "Exit App" to access Android settings
</div>

<div>
Connect to WiFi through Android WiFi settings
</div>

<div>
Return to the app
</div>

</div>

### Mix Not Freezing Properly

<div class="caution-box">

**Possible Causes:**
- Insufficient mix in hopper (needs minimum 2L)
- Cooling not activated in settings
- Mix ratio incorrect (should be 3L water to 1 packet)

</div>

<div class="step-header">Solution:</div>

<div class="numbered-steps">

<div>
Verify at least 2L of mix in each hopper
</div>

<div>
Access Parameter Settings
</div>

<div>
Find ice cream options: "Clean", "Cool", "Thaw"
</div>

<div>
Select "Cooling" option
</div>

<div>
Allow 5-10 minutes for proper cooling
</div>

</div>

### Emergency Shutdown

<div class="warning-box">

<div class="step-header">Proper shutdown procedure:</div>

<div class="numbered-steps">

<div>
Switch off main power to ice cream machine
</div>

<div>
Use breaker switch to cut power
</div>

<div>
**Never unplug machine while running**
</div>

</div>

</div>

---

## Error Codes

<div class="info-box">

The F2 system displays specific error codes for various conditions. Below are common error codes and their resolutions:

</div>

### System Error Codes

| **Error Code** | **Description** | **Cause** | **Resolution** |
|----------------|-----------------|-----------|----------------|
| **Core Board Error** | Grinding noise with error display | No mix in hoppers or hopper switches not activated | 1. Turn OFF immediately<br>2. Verify both hoppers have mix<br>3. Check hopper switches are pressed<br>4. Restart machine |
| **Low Voltage Alarm** | Voltage below 195V detected | Inadequate power supply | 1. Check building power supply<br>2. Verify breaker rating (20A minimum)<br>3. Contact electrician if persistent |
| **High Voltage Alarm** | Voltage above 255V detected | Excessive voltage supply | 1. Disconnect power immediately<br>2. Contact electrician<br>3. Do not operate until resolved |
| **Mix Needs Replacement** | Temperature above 41°F (5°C) | Mix temperature exceeded safe limit | 1. Discard affected mix<br>2. Clean and sanitize hopper<br>3. Refill with fresh mix<br>4. Wait for cooling below 5°C |
| **Temperature Sensor Error** | Sensor reading failure | Faulty temperature sensor | 1. Check sensor connections<br>2. Clean sensor area<br>3. Contact support if persistent |
| **Door Sensor Error** | Door not responding | Blocked or misaligned sensor | 1. Clear any obstructions<br>2. Check door alignment<br>3. Test manual door operation in backend |
| **Cup Tube Empty** | No cups in active tube | Cup supply depleted | 1. Refill cup tubes<br>2. Run manual drop test<br>3. Verify auto-switching to next tube |

### Backend Error Log Access

<div class="numbered-steps">

<div>
<div>
<h3>Access Error History</h3>
Navigate to backend → System Settings → Error Log Viewer
</div>
</div>

<div>
<div>
<h3>Record Error Details</h3>
Note the error code, timestamp, and frequency
</div>
</div>

<div>
<div>
<h3>Clear Non-Critical Errors</h3>
Use "Repair" button to clear cache and restart program if needed
</div>
</div>

<div>
<div>
<h3>Export for Support</h3>
If errors persist, export log for Sweet Robo support team
</div>
</div>

</div>

---

## When to Contact Support

<div class="important-box">

Contact Sweet Robo Support if you experience any of the following:

- You suspect internal electrical failure or broken hardware
- Error codes persist after rebooting
- Sensors, motors, or dispensers are not responding
- The machine behaves erratically or inconsistently
- You've attempted the above troubleshooting steps without resolution
- Unusual noises continue after filling hoppers
- Refrigeration system not cooling after 30 minutes
- Physical damage to components

</div>

<div class="info-box">

Always include the machine **model** (F2), **serial number**, and a **brief description** of the issue when contacting support.

</div>

---

## Support Contact Information

<div class="info-box">

We provide 24/7 assistance with any technical issues you may be experiencing. Our team is available to provide you with the support you need to ensure a smooth and seamless product experience.

If you're experiencing any difficulties or have questions about our product, please don't hesitate to reach out. We're here to help and will do our best to resolve your issue as quickly as possible.

</div>

<div class="feature-grid">

<div class="feature-item">

#### Sweet Robo Customer Support
• **Email:** [support@sweetrobo.com](mailto:support@sweetrobo.com)<br>
• **Phone:** +1-844-793-3872<br>
• **Hours:** 24/7 support available

</div>

<div class="feature-item">

#### Have your machine information ready
• Machine model: F2<br>
• Serial number (found in backend settings)<br>
• Software version<br>
• Description of the issue

</div>

</div>

---

## Online Resources and Feedback

### Updated Manual Access

<div class="info-box">

To view the most up-to-date version of this manual, please scan the QR code below:

<img src="assets/troubleshooting/qr-code-manual.webp" alt="QR Code for Online Manual" />

Or manually visit the link:
https://sweetrobo.com/manuals/ice-cream

</div>

### Feedback and Manual Improvements

<div class="important-box">

If you notice any typos or think this manual could benefit from additional information, please reach out and let us know. Your feedback helps us improve the documentation for all users.

**Contact for Manual Feedback:**
- Email: [support@sweetrobo.com](mailto:support@sweetrobo.com)
- Subject line: "Manual Feedback - F2 Troubleshooting"

</div>

---

## Error Prevention Tips

<div class="important-box">

<div class="numbered-steps">

<div>
**Always fill hoppers before starting** - Prevents core board error
</div>

<div>
**Use correct mix ratio** - 3L water to 1 gelato packet
</div>

<div>
**Maintain minimum levels** - At least 2L per hopper
</div>

<div>
**Follow cleaning schedule** - Prevents clogs and contamination
</div>

<div>
**Check expiration dates** - Both on packets and in system
</div>

<div>
**Regular testing** - Use Device Testing weekly to ensure all systems work
</div>

<div>
**Proper shutdown procedures** - Use backend shutdown and breaker switch
</div>

<div>
**Record issues** - Keep a log of any problems for warranty claims
</div>

</div>

</div>

---

*Written by Meir Knapp © Sweet Robo 2025*