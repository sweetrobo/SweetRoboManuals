# Troubleshooting

This section helps diagnose and resolve common issues with the Pop Cart. For problems not covered here, see contact information at the end of this section.

**IMPORTANT**

Before troubleshooting, verify the [Supply Checklist](operation.html#supply-checklist) is complete and the machine is powered on and properly connected. Many issues are resolved by checking these basics first.

***

## Quick Diagnostic Checklist

When experiencing issues, check these items first:

* [ ] Machine is plugged in and power is ON
* [ ] Circuit breaker has not tripped
* [ ] All service doors are properly closed
* [ ] **Supply levels adequate** - see [Supply Checklist](operation.md#supply-checklist)
* [ ] No obstructions in dispensing path
* [ ] Touchscreen is responsive
* [ ] No error messages displayed

***

## Error Messages

The Pop Cart displays error messages when it detects issues requiring attention.

### Dispenser Jam Error

![Dispenser Jammed Error Screen](../.gitbook/assets/error-screen-dispenser-jammed.webp)

_Error message indicating popcorn dispenser 2/B is jammed_

**Error**: "Popcorn Dispenser 2/B is jammed"

**Cause**: Popcorn or debris blocking dispensing mechanism in cylinder B

**Solution:**

Press OK to acknowledge error (do not attempt to clear while system is active)Power off machine and wait 30 minutes for components to coolOpen service access door using provided keyLocate cylinder B dispenser and visually inspect for blockageCarefully remove any visible popcorn, kernels, or debris obstructing the pathVerify dispensing mechanism moves freely (rotate manually if accessible)Close service door and power machine back onRun test cycle through operator menu to verify jam is cleared (see [Testing & Diagnostics](operation.html#testing--diagnostics))

**CAUTION**: Do not force stuck mechanisms. If blockage cannot be easily removed, or if error persists after clearing, see "When to Contact Support" section below.

### Common Error Codes

**ERR-001: Temperature Sensor Fault**

Temperature sensor not reading correctly. Run diagnostics to identify faulty sensor. May require sensor cleaning or replacement. Contact support if issue persists.

**ERR-002: Heating Element Failure**

Heating element not reaching proper temperature. Check power connections and run heating diagnostic. Element may need replacement (\~12-18 month lifespan). Contact support for service.

**ERR-003: Cup Detection Error**

Machine cannot detect cup presence. Verify cup is properly positioned and sensor area is clean. Remove and reload cup. See "Cup Detection Errors" section below for detailed troubleshooting.

**ERR-004: Payment System Fault**

Payment processing failure. Restart payment system through [Admin Interface](operation.html#admin-interface). Clean card reader. Verify network connection. Contact payment processor if unresolved.

**ERR-005: Kernel Hopper Empty**

Kernel hopper is completely empty and cannot dispense. Check kernel levels through the viewing window (transparent hopper tubes visible from outside) and refill both kernel hoppers using [Supply Checklist](operation.md#supply-checklist). This error indicates a hopper is fully depleted.

**ERR-006: Seasoning Packet Dispenser Fault**

Seasoning packet dispenser jammed or empty. Check dispenser lanes are loaded with Sweet Robo seasoning packets. Inspect dispenser opening for jammed packets. Run dispenser test through [Admin Interface](operation.html#admin-interface).

**ERR-007: Door Interlock Open**

Service door is open or interlock switch malfunctioning. Ensure all doors are fully closed and latched. If error persists with doors closed, interlock switch may need adjustment or replacement.

**ERR-008: Network Connection Lost**

WiFi or ethernet connection interrupted. Check network settings in [Admin Interface](operation.html#admin-interface). Machine will continue operating without network but backend sync will be disabled. See [Setup](setup.html) for network configuration.

***

## Common Issues and Solutions

### Power and Electrical

#### Machine Won't Power On

**Symptoms**: No lights, screen dark, no response

**Possible Causes**:

* Power cord unplugged or loose
* Circuit breaker tripped
* Electrical outlet not working
* Internal fuse blown

**Solutions**:

1. Verify power cord is securely plugged in
2. Check circuit breaker and reset if tripped
3. Test outlet with another device
4. Contact electrician if outlet is faulty
5. Contact Sweet Robo if internal fuse issue suspected

#### Intermittent Power Loss

**Symptoms**: Machine randomly shuts off or reboots

**Possible Causes**:

* Loose power connection
* Overloaded circuit
* Voltage fluctuations
* Internal electrical fault

**Solutions**:

1. Ensure power plug is fully seated
2. Verify circuit is not shared with high-power equipment
3. Have electrician test voltage stability
4. Contact Sweet Robo for internal diagnostics

### Touchscreen Issues

#### Screen Not Responding

**Symptoms**: Touch inputs ignored, screen frozen

**Possible Causes**:

* Software freeze
* Touchscreen calibration needed
* Hardware malfunction

**Solutions**:

1. Perform soft reset: power off, wait 30 seconds, power on
2. Access operator menu and run touchscreen calibration
3. Clean screen with microfiber cloth (dirt can affect sensitivity)
4. If persistent, contact Sweet Robo for service

#### Display Flickering or Distorted

**Symptoms**: Screen flashes, colors wrong, lines visible

**Possible Causes**:

* Loose display cable
* Graphics hardware issue
* Power supply problem

**Solutions**:

1. Power cycle machine
2. Check for any loose connections (if accessible)
3. Contact Sweet Robo for hardware repair

### Popping and Dispensing

#### No Popcorn Popping

**Symptoms**: Machine accepts payment but no popcorn produced

**Possible Causes**:

* Empty kernel hopper
* Heating element failure
* Kernel feed blockage
* Temperature sensor fault

**Solutions**:

1. Verify kernel hopper has adequate supply (check through inspection window)
2. Check for error codes related to heating or temperature
3. Run diagnostic test through operator menu
4. Inspect kernel feed path for blockages or jams
5. Contact Sweet Robo if heating elements need replacement

#### Insufficient Popping / Many Unpopped Kernels

**Symptoms**: Lots of unpopped kernels in finished product

**Possible Causes**:

* Old or expired kernels
* Using non-Sweet Robo branded kernels
* Incorrect kernel drop hole sizing
* Incorrect popping temperature
* Heating element degraded

**Solutions**:

1. Check kernel expiration date and freshness
2. Verify you are using Sweet Robo branded kernels only
3. Use the provided kernel drop hole sizing gauge to verify both tubes A and B have correct drop hole sizing (see [Setup Guide](setup.html#install-kernel-and-cup-holder-tubes))
4. Run temperature calibration through operator menu
5. Contact Sweet Robo if heating elements need inspection or if drop hole adjustment is required

#### Popcorn Burns or Smokes

**Symptoms**: Burnt smell, dark popcorn, smoke visible

**Possible Causes**:

* Temperature set too high
* Cycle time too long
* Sensor malfunction

**Solutions**:

1. Immediately stop operation and power off
2. Allow machine to cool completely
3. Access operator menu and reduce temperature settings
4. Run diagnostic to check temperature sensors
5. Contact Sweet Robo if issue persists

#### Dispensing Jams Frequently

**Symptoms**: Popcorn gets stuck, won't dispense smoothly

**Possible Causes**:

* Buildup in chute or cylinder
* Mechanical wear on dispensing mechanism
* Overfilling portions
* Moisture in system

**Solutions**:

1. Perform thorough cleaning of dispensing chute and cylinders
2. Check portion size calibration (may be dispensing too much)
3. Inspect for worn or damaged parts in dispensing mechanism
4. Ensure proper ambient humidity (not too high)
5. Contact Sweet Robo for parts replacement if needed

### Seasoning Packet Toppings

#### Seasoning Packets Not Dispensing

**Symptoms**: Customer selects topping but packet does not drop

**Possible Causes**:

* Empty dispenser lane
* Packet jammed in dispenser
* Packets not loaded correctly (should be folded and vertical)
* Mechanical failure
* Non-Sweet Robo packets causing jams

**Solutions**:

1. Check dispenser lane has Sweet Robo seasoning packets loaded
2. Verify packets are folded at cut line and inserted vertically
3. Inspect dispenser opening for jammed packets
4. Run dispenser test through operator menu to clear jam
5. Verify topping is enabled in system inventory settings
6. Contact Sweet Robo if mechanical repair needed

#### Multiple Packets Dispensing

**Symptoms**: More than one packet drops per selection

**Possible Causes**:

* Packets not loaded correctly
* Dispenser mechanism needs adjustment
* Wrong packet size (non-Sweet Robo brand)

**Solutions**:

1. Remove packets and reload properly (fold-first, vertical orientation)
2. Verify using only Sweet Robo branded seasoning packets
3. Run dispenser test and observe packet drop mechanism
4. Contact Sweet Robo if dispenser needs mechanical adjustment

### Payment System

#### Card Reader Not Working

**Symptoms**: Cards declined, reader unresponsive, errors

**Possible Causes**:

* Reader needs cleaning
* Network connection issue
* Reader hardware malfunction
* Payment processor issue

**Solutions**:

1. Clean card reader slot with approved cleaning card
2. Verify network connection is active
3. Restart payment system through operator menu
4. Test with different card (ensure it's not card-specific issue)
5. Contact payment processor support
6. Contact Sweet Robo for hardware replacement if needed

#### Cash Acceptor Rejects Bills

**Symptoms**: Bills returned, not accepted

**Possible Causes**:

* Bill acceptor needs cleaning
* Bills damaged or counterfeit
* Cash box full
* Acceptor calibration issue

**Solutions**:

1. Clean bill acceptor per manufacturer instructions
2. Empty cash box if full
3. Try crisp, undamaged bills
4. Run cash system diagnostic
5. Contact Sweet Robo for calibration or repair

### Sensor Issues

#### Cup Detection Errors

**Symptoms**: Machine says no cup when cup is present

**Possible Causes**:

* Cup not properly positioned
* Sensor blocked or dirty
* Wrong cup type or size
* Sensor failure

**Solutions**:

1. Ensure cup is fully inserted in dispensing slot
2. Clean cup detection sensor
3. Verify using approved cup type and size
4. Test sensor in operator diagnostic mode
5. Contact Sweet Robo if sensor needs replacement

***

## Maintenance-Related Problems

### Performance Degradation

If machine performance gradually declines:

* Review maintenance log to ensure schedule is followed
* Perform deep cleaning of all components
* Check for worn parts requiring replacement
* Verify consumable quality (fresh Sweet Robo branded kernels)
* Run full system diagnostic through operator menu

### Unusual Noises

#### Grinding or Scraping

**Possible Causes**: Worn bearings, foreign object, mechanical binding

**Action**: Stop use immediately, inspect mechanism, remove debris, lubricate as needed, replace worn parts

#### Clicking or Rattling

**Possible Causes**: Loose component, worn motor mount, loose fastener

**Action**: Inspect for loose parts, tighten fasteners, verify all components properly secured

#### Buzzing or Humming

**Possible Causes**: Electrical issue, failing motor, loose electrical connection

**Action**: Check electrical connections, run diagnostic, contact Sweet Robo if electrical problem

#### Excessive Fan Noise

**Possible Causes**: Dirty fan, failing bearing, blocked airflow

**Action**: Clean fan and vents, verify proper ventilation clearance, replace fan if bearing failing

***

## Diagnostic Mode

Access advanced diagnostics through the operator menu:

Enter operator menu (see [Admin Interface](operation.html#admin-interface) for access instructions)Navigate to "System Diagnostics" or "Device Testing"Select component to test (heating, dispensing, sensors, etc.)Run test and observe resultsDocument any failures or error codes

**Available Diagnostic Tests:**

* **Heating Elements**: Test heating cycle and temperature sensors
* **Dispensing Mechanism**: Verify smooth operation and alignment
* **Cup Detection**: Test cup position sensors
* **Seasoning Packet Dispensers**: Individual packet dispenser lane tests
* **Payment System**: Card reader and cash acceptor tests
* **Network**: Connectivity and remote management tests
* **Sensors**: Temperature, position, and safety sensors

**Error Code Logging**

The system automatically logs all error codes with timestamps. Access error history through operator menu > System Diagnostics > Error Log to review recent issues and patterns.

***

## When to Contact Support

Contact Sweet Robo support immediately if:

* **Safety concerns**: Smoke, sparks, burning smell, electrical shock risk
* **Repeated failures**: Same error occurs multiple times despite troubleshooting
* **Hardware damage**: Broken components, cracked displays, physical damage
* **Payment issues**: Cannot resolve payment system problems
* **Software errors**: System won't boot, severe software malfunction
* **Professional service needed**: Component replacement, calibration beyond operator capability

**IMPORTANT - Safety First**

Never attempt repairs beyond your skill level. Some repairs require certified technicians to maintain safety and warranty coverage. When in doubt, contact support (details below).

***

## Support Contact Information

**Sweet Robo Technical Support**

For troubleshooting assistance, see complete contact information including phone, email, and business hours: [Company Information](shared/content/company-info.md)

**When Contacting Support, Have Ready:**

* Machine serial number (located on data plate)
* Error codes and messages (take photos if possible)
* Description of problem and when it started
* Recent maintenance performed
* Software version (found in operator menu)

***

## Preventive Troubleshooting

Avoid problems before they occur:

✅ **Follow Maintenance Schedule** - Regular cleaning prevents 90% of issues

✅ **Use Quality Supplies** - Sweet Robo branded kernels and seasoning packets ensure reliable operation

✅ **Monitor Performance** - Use remote management to track trends and catch issues early

✅ **Train Staff** - Ensure multiple people understand basic troubleshooting

✅ **Document Issues** - Keep log of problems and solutions for pattern identification

✅ **Respond Quickly** - Address small issues before they become major problems

***

## Next Steps

* [**Maintenance**](maintenance.md) - Return to maintenance procedures
* [**Parts & Service**](parts-service.md) - Component identification and replacement
* [**Operation Guide**](operation.md) - Review proper operation procedures

For technical support, contact Sweet Robo: [Company Information](shared/content/company-info.md)
