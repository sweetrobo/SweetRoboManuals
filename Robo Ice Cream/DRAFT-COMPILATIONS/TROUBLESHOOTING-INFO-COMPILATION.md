# Robo Ice Cream Troubleshooting Information Compilation

This document compiles all troubleshooting-related information from the Draft resources folder, including source files, error codes, diagnostic procedures, and support information.

## Table of Contents
1. [Common Issues & Solutions](#common-issues--solutions)
2. [Error Codes & Alarms](#error-codes--alarms)
3. [Diagnostic Tools & Testing](#diagnostic-tools--testing)
4. [Emergency Procedures](#emergency-procedures)
5. [Power & Electrical Issues](#power--electrical-issues)
6. [Temperature & Cooling Issues](#temperature--cooling-issues)
7. [Mechanical Issues](#mechanical-issues)
8. [Software & System Issues](#software--system-issues)
9. [When to Contact Support](#when-to-contact-support)
10. [Support Contact Information](#support-contact-information)
11. [Preventive Measures](#preventive-measures)
12. [Conflicting Information](#conflicting-information)

---

## Common Issues & Solutions

### Main Troubleshooting Table
**Source: `/16 Section 11 Troubleshooting/1 11. Troubleshooting.md`**

| Issue | Possible Cause | Action Steps |
|-------|----------------|--------------|
| Machine does not power on | Breaker off or timer is set incorrectly | Check breaker is ON and hardware timer is set properly |
| Screen is blank but power is on | Internal PC not booted | Open service panel and press PC power button. If this keeps happening, contact Sweet Robo Support |
| Ice cream not dispensing | Hopper is empty or mix is too cold | Check hopper level and run thaw cycle |
| Cup not dropping | Cup tube is empty or jammed | Refill cup tubes, run test drop in backend |
| Dispensing door does not open | Sensor blocked or door jammed | Clear obstructions, restart door motor via backend |
| Topping not added | Empty container or blocked dispenser | Refill and clean topping container, test via backend |
| Syrup not dispensing | Tubing clogged or bag empty | Clean tubing, replace syrup bag, run test |
| Machine freezing or unresponsive | Overloaded system or background process stuck | Perform full restart via backend, then breaker |
| UV lamp not turning on | Burned-out bulb or wiring issue | Contact Sweet Robo Support to replace lamp |

### Additional Issues from Initial Power-On
**Source: `/05 Getting Started/7 Initial Power-On Sequence.md`**
- If machine does not power on or error messages appear during initial power-on:
  - Immediately turn OFF all power switches
  - Unplug the machine
  - Contact Sweet Robo customer support

### Installation-Related Issues
**Source: `/19 Maintenance/2 Installation Precautions.md`**
- Unusual burning smells, smoke, or fire: Immediately unplug machine and contact support
- Machine malfunction: Provide photos of front and machine code for efficient troubleshooting

---

## Error Codes & Alarms

### System Alarms
**Source: `/13 Section 8 Operator Interface & Backend Settings/1 8. Operator Interface & Backend Settings.md`**

| Alarm Type | Trigger Value | Description |
|------------|---------------|-------------|
| Low Voltage Alarm | 195V | Triggers when voltage drops below safe operating level |
| High Voltage Alarm | 255V | Triggers when voltage exceeds safe operating level |
| Low Mix Warning | <70% | Warns when hopper mix level drops below threshold |
| Coin Dispenser Alert | Variable | Alerts when coins drop below set quantity |

### Error Log System
**Source: `/13 Section 8 Operator Interface & Backend Settings/1 8. Operator Interface & Backend Settings.md`**
- **Error Log Viewer**: Displays history of abnormal interruptions or crashes
- Located in System Settings menu
- Records all system errors for technician review

### Error Code Handling
**Source: `/16 Section 11 Troubleshooting/1 11. Troubleshooting.md`**
When error codes appear:
1. Record the **exact code and description** shown
2. Attempt a **soft reset** (power from backend only)
3. If unresolved, contact support and provide the full error log

---

## Diagnostic Tools & Testing

### Backend Testing Functions
**Source: `/13 Section 8 Operator Interface & Backend Settings/1 8. Operator Interface & Backend Settings.md`**

**Cup Holder Diagnostics:**
- **Reset Cup Holder**: Returns mechanism to starting position
- **Manual Drop Cup**: Tests cup dispensing
- Use when troubleshooting cup jam errors

**Cooling System Tests:**
- **Cooling (Left/Right)**: Tests compressor activation
- **Thaw Fresh**: Tests warming function
- **Keep Fresh**: Tests gentle cooling cycles

**Dispensing Tests:**
- **Manual/Auto Discharge**: Tests ice cream flow
- **Test Syrup 1/2/3**: Verifies syrup dispensing
- **Test Topping 1/2/3**: Verifies topping dispensing

**Door Tests:**
- **Door Lock/Unlock**: Tests locking mechanism
- **Door Raise/Lower**: Tests motor control

**UV System Test:**
- **UV Lamp ON/OFF**: Verifies UV lamp functionality

### Sensor Testing
**Source: `/14 Section 9 Cleaning & Maintenance/1 9. Cleaning & Maintenance.md`**
Weekly sensor test procedure:
- Insert cup manually; confirm door stays open while detected
- Remove cup; ensure door auto-closes

---

## Emergency Procedures

### Immediate Action Guidelines
**Source: `/16 Section 11 Troubleshooting/1 11. Troubleshooting.md`**
- 🔌 **Always power down the machine** using backend shutdown button and breaker before inspecting
- 📋 **Record the issue** and any unusual behavior or error codes

### Emergency Stop Procedures
**Source: `/04 Safety/3 Operational Safety.md`**
- Familiarize yourself with main power switch location
- If observing abnormalities, unusual noises, smoke, or overheating:
  1. Immediately turn off machine
  2. Unplug from power source
  3. Contact customer support

### Fire/Smoke Emergency
**Source: `/19 Maintenance/2 Installation Precautions.md`**
- In event of burning smells, smoke, or fire:
  1. Immediately unplug machine
  2. Contact support team or qualified maintenance

---

## Power & Electrical Issues

### Power Connection Problems
**Source: `/16 Section 11 Troubleshooting/1 11. Troubleshooting.md`**
- **Machine not powering on**: Check breaker and hardware timer settings
- **Screen blank but power on**: Internal PC not booted - press PC power button

### Voltage Issues
**Source: `/13 Section 8 Operator Interface & Backend Settings/1 8. Operator Interface & Backend Settings.md`**
- Low voltage alarm triggers at 195V
- High voltage alarm triggers at 255V
- Machine may shut down automatically to prevent damage

### Power Requirements Verification
**Source: `/19 Maintenance/2 Installation Precautions.md`**
- Verify power supply specifications compatible before connecting
- Ensure stable, grounded three-hole socket (220V mains)
- Grounding resistance should be less than 4Ω
- Poor connections can negatively impact performance

---

## Temperature & Cooling Issues

### Ice Cream Not Dispensing
**Source: `/16 Section 11 Troubleshooting/1 11. Troubleshooting.md`**
- Check if hopper is empty
- Mix may be too cold - run thaw cycle
- Verify cooling system is functioning

### Temperature Safety Triggers
**Source: `/15 Section 10 Safety & Compliance/1 10. Safety & Compliance.md`**
- If hopper temperature exceeds 41°F (5°C):
  - Dispensing blocked automatically
  - Mix considered expired
  - Must replace and sanitize before resuming

### Cooling System Diagnostics
**Source: `/13 Section 8 Operator Interface & Backend Settings/1 8. Operator Interface & Backend Settings.md`**
- Use Cooling test function to verify compressor
- Check pre-cooling temperature settings (default 4°C/39.2°F)
- Verify refrigeration system is maintaining proper temperature

---

## Mechanical Issues

### Cup Dispensing Problems
**Source: `/16 Section 11 Troubleshooting/1 11. Troubleshooting.md`**
- **Cup not dropping**: 
  - Check if tube empty or jammed
  - Refill tubes
  - Run test drop in backend
  - Use Reset Cup Holder function if needed

### Door Mechanism Issues
**Source: `/16 Section 11 Troubleshooting/1 11. Troubleshooting.md`**
- **Door not opening**:
  - Check for sensor blockage
  - Clear obstructions
  - Restart door motor via backend
  - Test with Door Raise/Lower function

### Topping/Syrup Dispensing Issues
**Source: `/16 Section 11 Troubleshooting/1 11. Troubleshooting.md`**
- **Topping not dispensing**: Check container levels, clean dispenser
- **Syrup not dispensing**: Check for clogs, replace bag, run test
- Use backend test functions to diagnose

**Source: `/13 Section 8 Operator Interface & Backend Settings/1 8. Operator Interface & Backend Settings.md`**
- Run test functions after connecting new syrup bags
- Test after experiencing flavor dispensing errors

---

## Software & System Issues

### System Freezing/Unresponsive
**Source: `/16 Section 11 Troubleshooting/1 11. Troubleshooting.md`**
- Cause: Overloaded system or background process stuck
- Solution: 
  1. Perform full restart via backend
  2. Then use breaker if needed

### Backend System Controls
**Source: `/13 Section 8 Operator Interface & Backend Settings/1 8. Operator Interface & Backend Settings.md`**
- **Exit Button**: Close the program
- **Repair Button**: Clear cache and restart program
- **Restart Button**: Restart entire machine

### Network Issues
**Source: `/13 Section 8 Operator Interface & Backend Settings/1 8. Operator Interface & Backend Settings.md`**
- **Weak Network Mode**: Enable to allow operation without stable internet
- Check network settings in Device Settings menu

---

## When to Contact Support

### Criteria for Support Contact
**Source: `/16 Section 11 Troubleshooting/1 11. Troubleshooting.md`**
Contact support when:
- You suspect internal electrical failure or broken hardware
- Error codes persist after rebooting
- Sensors, motors, or dispensers are not responding
- Machine behaves erratically or inconsistently
- You've attempted above steps without resolution

### Required Information
**Source: `/16 Section 11 Troubleshooting/1 11. Troubleshooting.md`**
Always include:
- Machine **model**
- **Serial number**
- **Brief description** of the issue

**Source: `/19 Maintenance/2 Installation Precautions.md`**
- If machine malfunctions, provide:
  - Photos of the front
  - Machine code
  - This helps with efficient part identification

---

## Support Contact Information

### Primary Support Channels
**Multiple Sources Confirm:**

**Source: `/16 Section 11 Troubleshooting/1 11. Troubleshooting.md`**
- Sweet Robo Support Email: support@sweetrobo.com
- Sweet Robo Support Phone: +1-844-793-3872

**Source: `/20 Customer Support.md`**
- 24/7 assistance available
- Customer Support Email: support@sweetrobo.com
- Customer Support Phone: +1-844-793-3872

**Source: `/04 Safety/6 Emergency Contact.md`**
- For doubts, concerns, emergencies, or servicing
- Customer Support Phone: +1-844-793-3872
- Customer Support Email: support@sweetrobo.com

---

## Preventive Measures

### Installation Precautions
**Source: `/19 Maintenance/2 Installation Precautions.md`**
To prevent issues:
1. Transport upright, wait 2 hours before powering
2. Ensure level surface (max 5% inclination)
3. Protect from moisture and rain
4. Maintain proper clearances (40cm rear, 20cm sides)
5. Keep ventilation grid unobstructed
6. Use proper grounding and electrical connections

### Regular Maintenance
**Source: `/14 Section 9 Cleaning & Maintenance/1 9. Cleaning & Maintenance.md`**
- Follow daily, 3-day, and weekly cleaning schedules
- Test sensors weekly
- Check UV lamp functionality
- Maintain cleaning logs

### Safety Compliance
**Source: `/15 Section 10 Safety & Compliance/1 10. Safety & Compliance.md`**
- Monitor temperature sensors regularly
- Ensure auto shut-off systems functioning
- Keep documentation for inspections

---

## Conflicting Information

### 1. Minimal Troubleshooting Content
- `/19 Maintenance/3 Troubleshooting.md` contains only: "Note: If you encounter problems not addressed in this manual, please reach out to technical support for assistance."
- Main troubleshooting content is in Section 11, not in Maintenance folder

### 2. Support Availability
- One source says "24/7 assistance"
- No other sources confirm 24/7 availability
- Should verify actual support hours

### 3. Error Code Details
- References to error codes but no comprehensive list provided
- Error Log Viewer mentioned but no examples of actual codes

### 4. PC Power Button Location
- Mentions "open service panel and press PC power button"
- No detail on which panel or exact location

---

## Source File References

All information compiled from `/Robo Ice Cream/resources/Draft/` folder:

1. `/16 Section 11 Troubleshooting/1 11. Troubleshooting.md`
2. `/19 Maintenance/3 Troubleshooting.md`
3. `/19 Maintenance/2 Installation Precautions.md`
4. `/13 Section 8 Operator Interface & Backend Settings/1 8. Operator Interface & Backend Settings.md`
5. `/14 Section 9 Cleaning & Maintenance/1 9. Cleaning & Maintenance.md`
6. `/15 Section 10 Safety & Compliance/1 10. Safety & Compliance.md`
7. `/20 Customer Support.md`
8. `/04 Safety/3 Operational Safety.md`
9. `/04 Safety/6 Emergency Contact.md`
10. `/05 Getting Started/7 Initial Power-On Sequence.md`

---

## Notes for Manual Creation

1. **Error Code List**: Need comprehensive list of all possible error codes
2. **PC Location**: Need clear diagram/photo showing PC power button location
3. **Support Hours**: Verify if truly 24/7 or specific hours
4. **Diagnostic Flowcharts**: Would benefit from visual troubleshooting guides
5. **Common Issues**: Could expand based on actual field experience
6. **Video Links**: Consider adding QR codes for troubleshooting videos