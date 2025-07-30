# Robo Ice Cream Operation Information Compilation

This document compiles all operation-related information from the Draft resources folder, including source files, conflicting information, and measurement conversions.

## Table of Contents
1. [Customer Interface](#customer-interface)
2. [Operator Interface Access](#operator-interface-access)
3. [Management Screen Overview](#management-screen-overview)
4. [Parameter Settings](#parameter-settings)
5. [Stock Settings](#stock-settings)
6. [Device Testing](#device-testing)
7. [Opening Hours](#opening-hours)
8. [System Settings](#system-settings)
9. [Shopping Settings](#shopping-settings)
10. [Device Settings](#device-settings)
11. [Conflicting Information](#conflicting-information)
12. [Missing/Incomplete Sections](#missingincomplete-sections)

---

## Customer Interface

### General Description
**Source: `/18 Operation/1 Customer Interface/1 Customer Interface.md`**
- Ice Cream equipped with intuitive touchscreen interface
- Serves both customers making purchases and operators managing settings

**Source: `/18 Operation/1 Customer Interface/1 Customer Interface Making a Purchase.md`**
- Customers greeted with interactive screen for easy candy selection and payment
- **Note:** Says "candy selection" but this is the ice cream machine

### Customer Interface Details
**Note:** The customer interface section files (2-5 Untitled Document.md) are empty, indicating incomplete documentation

---

## Operator Interface Access

### Login Process
**Multiple Sources with Variations:**

**Source: `/18 Operation/2 Operator Interface/1 Initiating Login.md`**
- Tap screen in **top right corner 6+ times**
- Password input box appears
- Use on-screen keypad to enter password
- Default password: '123456'
- Tap 'Enter' to proceed
- ⚠️ Security warning to change default password

**Source: `/13 Section 8 Operator Interface & Backend Settings/1 8. Operator Interface & Backend Settings.md`**
- Tap and hold **top-right corner** for **3-5 seconds**
- Enter default password: 123456
- Press "Confirm"
- Should change password in System Settings

**Conflict:** Different access methods (6+ taps vs 3-5 second hold)

---

## Management Screen Overview

### Main Management Interface
**Source: `/13 Section 8 Operator Interface & Backend Settings/1 8. Operator Interface & Backend Settings.md`**

The management screen displays:
- Device and model information
- Network information
- Version numbers

Bottom buttons provide access to:
| Section | Purpose |
|---------|---------|
| Parameter Settings | Control temperature, timing, and dispense parameters |
| Stock Settings | Monitor and update inventory for cups, mix, syrups, and toppings |
| Device Testing | Manually test components and perform cleaning functions |
| Opening Hours | Schedule vending availability based on business hours |
| System Settings | Configure system behavior (volume, voice, network, etc.) |
| Shopping Settings | Configure payment methods, timeout behavior, and alerts |

**Source: `/18 Operation/2 Operator Interface/2 Operator Interface Managing the Ice Cream.md`**
- Note: File indicates content was copied from Candy Monster and needs updating

---

## Parameter Settings

**Source: `/13 Section 8 Operator Interface & Backend Settings/1 8. Operator Interface & Backend Settings.md`**

### Main Parameters
| Parameter | Default | Description |
|-----------|---------|-------------|
| L/R Gear Position | 4 | Controls ice cream firmness |
| L/M/R Discharge Time | 1.3s (1300ms) | Time to dispense ice cream |
| L/R Pre-cooling Temp | 4°C (39.2°F) | Maintains hopper temperature |
| L/R Discharge Threshold (%) | 70% | Minimum mix % required to allow dispensing |
| Cups Allowed After Warning | 20 | Number of cups machine allows after low warning |
| Low Voltage Alarm | 195V | Trigger voltage for under-voltage alarm |
| High Voltage Alarm | 255V | Trigger voltage for over-voltage alarm |

### Syrup and Topping Timers
| Function | Default | Description |
|----------|---------|-------------|
| Syrup Dispense Time | 1500ms (1.5s) | Time per syrup |
| Sprinkle Time | 2000ms (2s) | Time per dry topping |

### UV Lamp Settings
| Setting | Default | Description |
|---------|---------|-------------|
| UV Enabled (Open) | OFF | Turns UV light on/off |
| Start Time | 00:00 | Time of day UV sanitizing should begin |
| Duration | 30 min | How long the UV lamp stays on |

### Cup Holder Position Correction
- Button to reset cup holder to initial position

---

## Stock Settings

**Source: `/13 Section 8 Operator Interface & Backend Settings/1 8. Operator Interface & Backend Settings.md`**

Allows updating inventory counts and clearing inactive items:
- **Cup Count** - Manually update remaining cups
- **Ice Cream Mix (Left/Right)** - Status: Adequate / Low / Empty
- **Syrups 1-3** - Update or clear individual syrup stock levels
- **Toppings 1-3** - Update or clear individual dry topping stock levels

✅ Use "Fill Up" to mark item as fully restocked
⚠️ Use "Clean Up" to clear stock status and remove option from customer selection

---

## Device Testing

**Source: `/13 Section 8 Operator Interface & Backend Settings/1 8. Operator Interface & Backend Settings.md`**

⚠️ **Warning:** Do not modify during normal operation. Tools bypass normal safety conditions.

### Cup Holder Controls
- **Reset Cup Holder**: Resets cup dropper to starting position
- **Manually Drop Cup (Cup Out)**: Dispenses one cup to verify alignment

### Cooling System Controls
- **Cooling (Left/Right)**: Activates cooling compressor for selected hopper
- **Thaw Fresh (Left/Right)**: Warms freezing chamber for cleaning
- **Keep Fresh (Left/Right)**: Cycles gentle cooling to maintain freshness

### Ice Cream Dispensing
- **Manual Discharge (L/M/R)**: Opens chamber to drain liquid (press CLOSE to stop)
- **Auto Discharge**: Opens chamber with automatic close based on PARAM SETTINGS
- **Close (Left/Mid/Right)**: Closes selected dispenser

### Collection Door Control
- **Door Lock/Unlock**: Manually controls customer collection door lock
- **Door Raise/Lower**: Controls physical door movement, overriding sensor

### Sanitation System
- **UV Lamp ON/OFF**: Manually activates/deactivates UV disinfection lamp

### Syrup Dispensers
- **Test Syrup 1/2/3**: Dispenses small sample to test flow

### Dry Topping Dispensers
- **Test Topping 1/2/3**: Dispenses small amount to verify output

---

## Opening Hours

**Source: `/13 Section 8 Operator Interface & Backend Settings/1 8. Operator Interface & Backend Settings.md`**

- Set daily open/close times (24-hour format)
- Machine powers down automatically based on schedule
- Does NOT override hardware timer (see Section X)
- Outside set hours, machine will not accept orders

---

## System Settings

**Source: `/13 Section 8 Operator Interface & Backend Settings/1 8. Operator Interface & Backend Settings.md`**

| Setting | Description |
|---------|-------------|
| Volume Control | Adjust audio volume during normal use |
| Time-Based Volume | Set different volumes at different hours |
| Voice Prompts | Enable/disable promotional voice guidance |
| Weak Network Mode | Allows machine to function without stable internet |
| Error Log Viewer | Displays history of abnormal interruptions or crashes |
| Exit Button | Close the program |
| Repair Button | Clear cache and restart the program |
| Restart Button | Restart entire machine |

---

## Shopping Settings

**Source: `/13 Section 8 Operator Interface & Backend Settings/1 8. Operator Interface & Backend Settings.md`**

### Payment Methods
Enable/disable:
- Bill acceptor
- Coin acceptor
- VPOS - Credit card reader (e.g., Nayax)

### Change Settings
| Name | Info |
|------|------|
| Open | Disable/Enable the Coin Dispenser |
| Coin Value | How much is each coin worth? (e.g., US $0.25 per quarter) |
| Inventory Quantity | How many coins are in the dispenser? |
| Number of Alerts | How many coins should be left before giving alarm |
| Change Limit | Max amount of coins to dispense at once |
| Change Test/Testing Amount | Set amount of coins to dispense as test (PLAY/STOP) |

### Timeout Settings
- **Shopping Time**: Time of inactivity before returning to ad screen (non-payment screens)
- **Payment Time**: Time of inactivity before returning to ad screen (payment screen)
- **Show Balance - Balance Display**: Show/hide remaining change to customer

---

## Device Settings

**Source: `/18 Operation/2 Operator Interface/3 Device Settings/3 Device Settings.md`**

### Navigation
1. **Back Arrow**: Top left - returns to previous menu
2. **Exit App to Windows**: Top right - closes application (technicians only)

### Machine Setup
- **Serial Number**: Unique factory serial (modify only with support)
- **Unique Code**: Another machine identifier (modify only with support)
- **Machine Name**: View/edit custom machine name
- **Currency**: Select operational currency (e.g., USD)
- **Language**: Select display language (e.g., English)
- **ICT COM PORT**: COM port for cash handling device
- **MDB COM PORT**: COM port for MDB peripherals
- **I/O COM PORT**: COM port for main Input/Output board
- **Refresh COMs**: Rescan available COM ports

### Controls
- **System Volume**: Slider for overall audio volume
- **Mute**: Checkbox to mute/unmute all sounds
- **Inactivity Timeout (seconds)**: Set wait time before reset (e.g., 30 seconds)

---

## Conflicting Information

### 1. Backend Access Method
- **One source**: Tap top right corner 6+ times
- **Another source**: Hold top-right corner for 3-5 seconds
- **Resolution needed**: Verify correct access method

### 2. Customer Interface Content
- One file mentions "candy selection" instead of ice cream
- Indicates some content may be copied from Candy Monster manual

### 3. Discharge Time Format
- Listed as "1.3s" in table but time values shown in milliseconds elsewhere
- Should clarify if 1.3s = 1300ms

---

## Missing/Incomplete Sections

The following sections exist but contain only placeholders or minimal content:
1. **Statistics** (`/18 Operation/2 Operator Interface/4 Statistics.md`) - Only contains "..."
2. **Device Status** (`/18 Operation/2 Operator Interface/5 Device Status.md`) - Only contains "..."
3. **Inventory Management** (`/18 Operation/2 Operator Interface/6 Inventory Management.md`) - Only contains "..."
4. **Test Functions** (`/18 Operation/2 Operator Interface/7 Test Functions.md`) - Only contains "..."
5. **Customer Interface files 2-5** - All empty "Untitled Document.md" files

---

## Source File References

All information compiled from `/Robo Ice Cream/resources/Draft/` folder:

1. `/18 Operation/18 Operation.md`
2. `/18 Operation/1 Customer Interface/1 Customer Interface.md`
3. `/18 Operation/1 Customer Interface/1 Customer Interface Making a Purchase.md`
4. `/18 Operation/2 Operator Interface/1 Initiating Login.md`
5. `/18 Operation/2 Operator Interface/2 Operator Interface.md`
6. `/18 Operation/2 Operator Interface/2 Operator Interface Managing the Ice Cream.md`
7. `/18 Operation/2 Operator Interface/3 Device Settings/3 Device Settings.md`
8. `/18 Operation/2 Operator Interface/4 Statistics.md`
9. `/18 Operation/2 Operator Interface/5 Device Status.md`
10. `/18 Operation/2 Operator Interface/6 Inventory Management.md`
11. `/18 Operation/2 Operator Interface/7 Test Functions.md`
12. `/13 Section 8 Operator Interface & Backend Settings/1 8. Operator Interface & Backend Settings.md`

---

## Notes for Manual Creation

1. **Customer Interface**: Needs complete documentation - current files are mostly empty
2. **Backend Access**: Need to verify correct method (taps vs hold)
3. **Temperature Settings**: All temperatures given in Celsius, may need Fahrenheit conversions
4. **Incomplete Sections**: Statistics, Device Status, Inventory Management, and Test Functions need content
5. **Hardware Timer**: Referenced but no configuration details found in operation sections
6. **Error Messages**: No documentation found for common errors or troubleshooting during operation