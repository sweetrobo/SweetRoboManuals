# Robo Ice Cream Maintenance Information Compilation

This document compiles all maintenance-related information from the Draft resources folder, including source files, conflicting information, and measurement conversions.

## Table of Contents
1. [General Maintenance Guidelines](#general-maintenance-guidelines)
2. [Food Safety Requirements](#food-safety-requirements)
3. [Cleaning Procedures](#cleaning-procedures)
4. [Physical Maintenance](#physical-maintenance)
5. [Electrical Safety](#electrical-safety)
6. [Troubleshooting](#troubleshooting)
7. [Approved Cleaning Products](#approved-cleaning-products)
8. [Safety Compliance](#safety-compliance)
9. [Conflicting Information](#conflicting-information)
10. [Source File References](#source-file-references)

---

## General Maintenance Guidelines

### Basic Principles
**Source: `/19 Maintenance/1 Maintenance.md`**
1. Regular cleaning helps prevent failures and extends machine lifespan
2. Use only clean water to clean machine
3. Avoid concentrated cleaning products (may corrode paint/cause discoloration)
4. When cleaning electronic components, do not use wet cloth (prevents water damage/short circuits)

<!-- LIGHTWING TODO: Add info not to use chemicals that are not food grade when cleaning components that come in contact with food, see further down this file. read the full file as parts are interlinked (not just related to this) -->

### Food Safety Overview
**Source: `/14 Section 9 Cleaning & Maintenance/1 9. Cleaning & Maintenance.md`**
- Critical for food safety, functionality, and health regulations compliance
- Only trained staff should perform internal cleaning
- Always shut off ice cream systems using Main I/O switch before cleaning
- Never leave mix in hoppers longer than 3 days
- Cleaning logs must be maintained at all times

<!-- LIGHTWING TODO: Combine both, unless they go in seperate sections... -->

---

## Food Safety Requirements

### Ice Cream Mix Management
**Multiple Sources:**

**Source: `/14 Section 9 Cleaning & Maintenance/1 9. Cleaning & Maintenance.md`**
- Mix must be discarded after **3 days** in hopper
- Hopper temperature sensors prevent dispensing if internal temp exceeds **41°F (5°C / 5°C)**
- When temperature exceeded, mix is considered spoiled
- Clean and sanitize hoppers before refilling
- Do not operate with empty hopper
<!-- LIGHTWING NOTE: Dont show 5c/5c, its the same number, this is in complience with NAMA (might need to double check this, but should be correct) -->


**Source: `/15 Section 10 Safety & Compliance/1 10. Safety & Compliance.md`**
- Temperature monitoring: ±1°F (±0.5°C) accuracy
- If hopper exceeds 41°F (5°C):
  - Blocks all dispensing
  - Flags product as expired
  - Displays safety notice to operator
<!-- LIGHTWING TODO: this has more info and cleanere listing -->
<!-- LIGHTWING TODO: Combine both -->


### General Food Safety Notes
**Source: `/14 Section 9 Cleaning & Maintenance/1 9. Cleaning & Maintenance.md`**
- All cleaning agents must be food-safe and approved for food equipment
- Use warm water, neutral detergents, food-grade sanitizers
- Avoid harsh/corrosive chemicals
- Never allow expired mix to remain
- Use separate tools for food-contact areas and waste zones (avoid cross-contamination)
<!-- LIGHTWING TODO: Combine all 3, unless they go in seperate sections... -->
 
---

## Cleaning Procedures

### Cleaning Schedule Summary

#### Daily Tasks
**Source: `/14 Section 9 Cleaning & Maintenance/1 9. Cleaning & Maintenance.md`**
- ✅ Check expiration dates on ice cream mix
- ✅ Wipe down external machine surfaces
- ✅ Inspect cup and topping dispensers for debris/blockages
- ✅ Sanitize touchscreen and customer contact points

#### Every 3 Days
**Source: `/14 Section 9 Cleaning & Maintenance/1 9. Cleaning & Maintenance.md`**
- ✅ Discard ice cream mix stored >3 days
- ✅ Fully clean and sanitize hoppers
- ✅ Run cleaning/flushing cycle through dispensing system

#### Weekly Tasks
**Source: `/14 Section 9 Cleaning & Maintenance/1 9. Cleaning & Maintenance.md`**
- ✅ Clean syrup containers and tubing
- ✅ Clean topping containers thoroughly
- ✅ Inspect all food-contact parts for wear/residue/buildup
- ✅ Empty and sanitize drip and waste collection area
<!-- LIGHTWING NOTE: these are all part of the cleaning scheduale, each one is needed for saftey etc. make sure its clear the cleaning scheduale and what was done is docummented, maybe provide a checklist and example spreadsheet to print for this... (a csv file and a example table, since this will be downloaded, it should not be visible when printing, instead, show text to use the online manual in order to print this, or go to the url ... to download) -->

### 3-Day Cleaning Procedure (Detailed)
**Source: `/14 Section 9 Cleaning & Maintenance/1 9. Cleaning & Maintenance.md`**

1. **Power Down**
   - Turn off Main I/O Power Switch
   - Leave Breaker ON if backend access needed

2. **Empty the Hoppers**
   - Manually drain mix
   - Run Thaw Fresh + Manual Discharge to flush residues

3. **Flush With Water**
   - Fill hopper(s) with warm water
   - Run Auto Discharge multiple times until water runs clear

4. **Sanitize Hoppers**
   - Add food-safe sanitizer to each hopper
   - Run for 1-2 cycles, then drain

5. **Clean Dispensing Nozzles**
   - Wipe all ice cream, syrup, topping nozzles with sanitized cloth
   - Use included brushes for narrow points

6. **UV Zone & Door Area**
   - Wipe down dispensing door and UV zone with soft cloth
   - Avoid alcohol or abrasives

7. **Surface Cleaning**
   - Wipe down touchscreen, frame, outer panels
<!-- LIGHTWING TODO: Add photos, put placeholders for now unless we have these photos in the database json file for each step, put the text on the left and image on the right (split), while keeping the numbering... -->

### Weekly Maintenance Procedures
**Source: `/14 Section 9 Cleaning & Maintenance/1 9. Cleaning & Maintenance.md`**

1. **Flush Syrup Lines**
   - Disconnect syrup bags
   - Flush lines with warm water using Test Syrup 1-3

2. **Clean Topping Hoppers**
   - Remove, empty, wash with mild soap and warm water
   - Dry fully before reinstalling

3. **Sensor Test**
   - Insert cup manually; confirm door stays open while detected
   - Remove cup; ensure door auto-closes

4. **Cup Dropper Test**
   - Run Manual Drop Cup from backend
   - Check for jams or misalignment

5. **Inspect UV Lamp**
   - Use backend to activate UV lamp
   - Replace if not lighting
<!-- LIGHTWING TODO: Add photos, put placeholders for now unless we have these photos in the database json file for each step, put the text on the left and image on the right (split), while keeping the numbering... -->
### Syrup and Topping Maintenance
**Source: `/14 Section 9 Cleaning & Maintenance/1 9. Cleaning & Maintenance.md`**

**Syrup Containers:**
- Clean weekly using warm water and food-safe sanitizer
- Disconnect and flush tubing to avoid clogs/sugar buildup
- Inspect nozzles for stickiness/discoloration

**Topping Containers:**
- Clean once a week to prevent clumping, cross-contamination, pest risk
- Remove dry contents, wipe internal walls, sanitize surfaces
- Capacity: 270g per hopper (from hardware specs)
<!-- LIGHTWING TODO: add this info to the checklist that matches... ask me about the checlist before finalizing it. i think we should have 1 file including task type, date done, a column to say every how many days it needs to be done, and empty columns to fill who did it, what date, what time etc. and to fill out when is the next time this needs to be done (not sure about this last one) -->
---

## Physical Maintenance

### Machine Appearance
**Multiple Sources with Similar Instructions:**

**Source: `/19 Maintenance/1 Maintenance.md`**
- Wipe dust with dry cloth
- If dirty, clean with damp cloth using warm water or neutral detergent
- Recommended to clean each time you refill

**Source: `/15 Section 10 Safety & Compliance/1 10. Safety & Compliance.md`**
- Wipe-down: Every 3 days
- Deep cleaning: Every 7-10 days

### Machine Components
**Source: `/19 Maintenance/1 Maintenance.md`**

**Candy Container Maintenance:**
- Note: References "candy" but this is ice cream machine
- Ensure refrigerator is on, especially in hot/humid environments
- Excessive heat can cause melting and operational problems
<!-- LIGHTWING CONFLICT: dont show anything taken from the candy monster, this is the ice cream machine manual... -->

**Automatic Door Maintenance:**
- Power must be turned off before maintenance
- If testing with power on, use extreme caution
- Risk of pinching from moving parts

**Machine Wheels:**
- Not designed for long-distance pushing
- Wheels may become damaged
- Special lifting equipment required for wheel replacement
- Do NOT tilt or turn machine on side (causes serious damage)
<!-- LIGHTWING TODO: emphises on these points in multiple places these are mentioned along the manual... -->
---

## Electrical Safety

### Maintenance Safety Guidelines
**Multiple Sources:**

**Source: `/19 Maintenance/1 Maintenance.md`**
- Ensure all power sources completely disconnected before maintenance <!-- LIGHTWING CONFLICT: not true, as this machine might need power for maintenece such as flushing ice cream through the hopper etc. only turn off power to components that are not needed or if working on electrical related maintenece etc. -->
- Only personnel with basic electrical knowledge should maintain
- Never unplug while powered on <!-- LIGHTWING NOTE: this doesnt provide enough info of what to do, unlike the next source which tell you more -->
- Always use Breaker Switch to safely shut down before disconnecting
- Inform Sweet Robo technician of issues and planned maintenance
- Unauthorized modifications may void warranty

**Source: `/15 Section 10 Safety & Compliance/1 10. Safety & Compliance.md`**
- Use backend software shutdown button to power down internal PC first
- Disconnect all power sources before maintenance
- Only appropriate electrical knowledge personnel should service
- Use Breaker Switch to safely isolate system

**Source: `/04 Safety/4 Cleaning and Maintenance Safety.md`**
- ALWAYS disconnect from outlet before cleaning/maintenance <!-- LIGHTWING NOTE: again, this is good instruction, but not always true, it depends on which maintenece is done. we need to find where in the manual the maintence requeires power and where dit does not -->
- Allow warm components to cool down first <!-- LIGHTWING NOTE: this is a fridge, the only warm components generally would be IO boards, and maybe some moving parts if they are moving and frinction heated. otherwise, things are ok to touch. the IO board should not be touched without contacting support and without electrical safty first -->
- Wear protective gear if recommended <!-- LIGHTWING QUESTION: what does it mean if recommended? this seems strange -->
- Avoid loose clothing/jewelry/hair near moving parts
- Be mindful of ESD when near electronics <!-- LIGHTWING NOTE: explain ESD to non technical people, in short, not a long explnation... -->
- Consider ESD wrist strap for internal electronics
<!-- LIGHTWING DECISION: combine the info together with my notes and comments and info taken into account -->
---

## Troubleshooting

### Common Issues & Solutions
**Source: `/16 Section 11 Troubleshooting/1 11. Troubleshooting.md`**

| Issue | Possible Cause | Action Steps |
|-------|----------------|--------------|
| Machine does not power on | Breaker off or timer set incorrectly | Check breaker is ON and hardware timer set properly |
| Screen blank but power on | Internal PC not booted | Open service panel, press PC power button. Contact support if recurring |
| Ice cream not dispensing | Hopper empty or mix too cold | Check hopper level and run thaw cycle |
| Cup not dropping | Cup tube empty or jammed | Refill cup tubes, run test drop in backend |
| Dispensing door not open | Sensor blocked or door jammed | Clear obstructions, restart door motor via backend |
| Topping not added | Empty container or blocked dispenser | Refill and clean topping container, test via backend |
| Syrup not dispensing | Tubing clogged or bag empty | Clean tubing, replace syrup bag, run test |
| Machine freezing/unresponsive | Overloaded system or process stuck | Perform full restart via backend, then breaker |
| UV lamp not turning on | Burned-out bulb or wiring issue | Contact Sweet Robo Support to replace lamp |

<!-- LIGHTWING DECISION: we dont want to mention the timer so much, its removed from future production -->
<!-- LIGHTWING NOTE: we dont use "sryup bags" its a syrup container, might be empty or pipes blocked -->
<!-- LIGHTWING NOTE: if machine ui is not responsive, try a full machine power cycle, if continues or repeats contact support -->
<!-- LIGHTWING DECISION: dont mention the UV light -->

### Error Codes
**Source: `/16 Section 11 Troubleshooting/1 11. Troubleshooting.md`**
1. Record exact code and description
2. Attempt soft reset (power from backend only)
3. If unresolved, contact support with full error log

### When to Contact Support
**Source: `/16 Section 11 Troubleshooting/1 11. Troubleshooting.md`**
- Suspected internal electrical failure or broken hardware
- Error codes persist after rebooting
- Sensors, motors, dispensers not responding
- Erratic or inconsistent behavior
- Above steps unsuccessful

Always include: model, serial number, brief issue description
- Email: support@sweetrobo.com
- Phone: +1-844-793-3872

---

## Approved Cleaning Products

### Safe to Use
**Source: `/15 Section 10 Safety & Compliance/1 10. Safety & Compliance.md`**
✅ Approved:
- Warm water with neutral detergent
- Mild dish soap (e.g., Dawn)
- Food-safe sanitizer (certified quaternary ammonium-based for food contact)
- 70% isopropyl alcohol (touchscreen and outer surfaces)

### Do Not Use
**Multiple Sources:**

**Source: `/15 Section 10 Safety & Compliance/1 10. Safety & Compliance.md`**
❌ Prohibited:
- Paint thinner
- Volatile oils
- Bleach or alkaline cleaners
- Abrasive powders or scouring pads
- Acetone or solvent-based chemicals

**Source: `/19 Maintenance/1 Maintenance.md`**
- Thinner, volatile oil, solvents
- Strong alkaline detergents
- Other chemicals that corrode/crack paint and plastic

**Source: `/04 Safety/4 Cleaning and Maintenance Safety.md`**
- Only use manufacturer-recommended agents
- No abrasive cleaners, solvents, harsh chemicals
- Boiling water only where appropriate (per instructions)
<!-- LIGHTWING TODO: Combine all, keeping the style of the first source -->

---

## Safety Compliance

### UV Sanitation System
**Source: `/15 Section 10 Safety & Compliance/1 10. Safety & Compliance.md`**
- UV-C light integrated in dispensing area
- Avoid direct eye exposure during manual tests
- Activates only when door closed
- Supplement to manual cleaning, not replacement
<!-- LIGHTWING TODO: remove all mentiones of the UV light, its removed from future production, check otehr files as well to make sure its not mentioend, same for the timer  -->

### Auto Shut-Off Behavior
**Source: `/15 Section 10 Safety & Compliance/1 10. Safety & Compliance.md`**
Built-in safety triggers:
- Hopper temperature sensors (>41°F/5°C triggers)
- Internal temperature sensors
- Dispenser malfunctions
- Hardware stalls/failure conditions

When triggered:
- Dispensing, cooling, motor systems shut down
- Touchscreen may remain powered for diagnosis
- Event logs stored for technician review
<!-- LIGHTWING TODO: this "SHUT-OFF" is not exactly a shutoff, it does block the machine from dispensing, it does not turn off the cooling (that will only result in spoilage which we dont want), it will show an error and not allow to dispense -->

### Regulatory Compliance
**Source: `/15 Section 10 Safety & Compliance/1 10. Safety & Compliance.md`**
NAMA and food safety requirements:
- Keep written log of every cleaning, topping refill, hopper refill
- Documentation readily available for inspection
- Contact Sweet Robo for certification documents

### Cold-Holding System (NAMA Compliance)
**Source: `/15 Section 10 Safety & Compliance/1 10. Safety & Compliance.md`**
- Cooling Type: Direct-contact evaporator plate
- Refrigerant: R290 (Eco-friendly, food equipment compliant)
- Insulation: High-density polyurethane foam
- Rated Cooling Output:
  - F1: ~350W
  - F2: ~500W combined
<!-- LIGHTWING TODO: this is a customer facing manual, keep it this way, dont mention specific complience info, only saftey info the user needs to know for machine operation... not any NAMA specific info -->
<!-- LIGHTWING TODO: the fact about the refrigerant means there is a fridge, which should be obvious, but we need to add that bcz there is a fridge, this machine MUST stay upright -->

### Cleaning Logs
**Source: `/14 Section 9 Cleaning & Maintenance/1 9. Cleaning & Maintenance.md`**
Must maintain visible cleaning log onsite with:
- Task performed
- Date/time
- Operator initials
- Supports regulatory compliance and tracks due dates
<!-- LIGHTWING TODO: see my above notes for this, and combine the info, showing the info twice is fine if its not a pure duplicate, maybe the area above can link to this area (and in pdf it should point to where to look further along the file) -->

---

## Conflicting Information

### 1. Candy vs Ice Cream References
- `/19 Maintenance/1 Maintenance.md` mentions "candy container maintenance"
- This appears to be content from Candy Monster manual
- All other sources correctly reference ice cream

### 2. Cleaning Frequency Recommendations
- One source: Wipe-down every 3 days, deep clean every 7-10 days
- Another source: Clean each time you refill
- Resolution: Follow more stringent schedule for food safety

### 3. Power Down Procedures
- Some sources mention backend shutdown button first
- Others only mention breaker switch
- Best practice: Use backend shutdown, then breaker

### 4. Temperature Threshold Format
- Listed as "41°F (5°C / 5°C)" with duplicate Celsius
- Should be: 41°F (5°C)

---

## Source File References

All information compiled from `/Robo Ice Cream/resources/Draft/` folder:

1. `/14 Section 9 Cleaning & Maintenance/1 9. Cleaning & Maintenance.md`
2. `/19 Maintenance/1 Maintenance.md`
3. `/19 Maintenance/3 Troubleshooting.md`
4. `/16 Section 11 Troubleshooting/1 11. Troubleshooting.md`
5. `/04 Safety/4 Cleaning and Maintenance Safety.md`
6. `/04 Safety/5 Servicing and Repairs.md`
7. `/15 Section 10 Safety & Compliance/1 10. Safety & Compliance.md`

---

## Notes for Manual Creation

1. **Candy References**: Remove all references to candy and ensure ice cream terminology
2. **Cleaning Schedule**: Create clear daily/3-day/weekly schedule table
3. **Temperature Monitoring**: Emphasize 41°F (5°C) threshold throughout
4. **Safety Procedures**: Consolidate power-down procedures (backend first, then breaker)
5. **Logging Requirements**: Create sample log template for operators
6. **Contact Information**: Verify Sweet Robo support details are current