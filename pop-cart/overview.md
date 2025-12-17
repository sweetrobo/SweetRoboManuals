# Overview

![Pop Cart Popcorn Vending Machine - Full Front View](../.gitbook/assets/machine_full_view_front.webp)

_Pop Cart - Vintage carnival-style automated popcorn vending machine_

## About the Pop Cart

The Pop Cart is Sweet Robo's automated popcorn vending machine that combines nostalgic carnival aesthetics with modern automated technology. Designed to produce fresh, hot popcorn on demand, the Pop Cart delivers a delightful customer experience while maintaining reliable, hands-off operation for venue operators.

This manual provides comprehensive information for operators, maintenance personnel, and technicians to ensure optimal performance and longevity of your Pop Cart system.

***

## Machine Purpose

The Pop Cart produces fresh popcorn on-demand using fully automated popping, flavoring, and dispensing systems. Customers interact with an intuitive touchscreen interface to select their preferred popcorn variety and toppings, make payment, and receive freshly popped popcorn in branded containers.

### Ideal Venues

* Movie theaters and entertainment centers
* Shopping malls and retail spaces
* Amusement parks and recreational facilities
* Office buildings and corporate campuses
* Educational institutions
* Transportation hubs

***

## Key Features

**Fresh Popping System**

Advanced dual hopper, single popper mechanism creates fresh popcorn on demand with optimal kernel-to-pop ratios and consistent quality batch after batch.

**Multiple Flavor Options**

Support for various seasoning dispensers allowing diverse flavor combinations including butter, garlic, chipotle, jalapeño, and truffle options.

**Touchscreen Interface**

Intuitive customer-facing touchscreen interface with vintage carnival theming guides users through popcorn selection, topping choices, and payment processing.

**Automated Dispensing**

Precise portion control and automated dispensing ensure consistent servings and minimize waste while maximizing profitability.

**Payment Flexibility**

Integrated payment system supports multiple payment methods for seamless customer transactions (see Technical Specifications).

**Vintage Aesthetic**

Eye-catching carnival cart design with red and white striped awning, decorative wheels, and nostalgic styling attracts customers and enhances venue ambiance.

***

## Technical Specifications

Machine NamePop CartMachine TypeAutomated Popcorn Vending MachineManufacturerSweet RoboDimensions (W×D×H)94.7 × 65.4 × 209.7 cm with sign (37.3 × 25.7 × 82.6 in)\
94.7 × 65.4 × 172 cm without sign (37.3 × 25.7 × 67.7 in)Net Weight140 kg (approx. 309 lbs)Power Voltage110V AC (US variant) or 220V AC (International variant)Power Consumption800-2200W (20A @ 110V, 10A @ 220V)Popcorn CapacityDual cylinder system (\~3 kg per tube, 60-70 servings each)Kernel Storage6 kg total capacity (3 kg per cylinder)Seasoning Options5 flavor lanes (customizable selection)User InterfaceTouchscreen display with customer-facing operationPayment MethodsCredit/Debit Card, Cash, Loyalty CreditsOperating EnvironmentIndoor use, 15-30°C (59-86°F), humidity 20-80% **non-condensing** (no surface condensation)

**Important**: The Pop Cart requires climate-controlled indoor environments with **non-condensing humidity** - meaning no moisture should condense on machine surfaces. This protects electronics, preserves food products, and prevents corrosion. Consult the [Setup section](setup.html#site-requirements) for complete site requirements and detailed humidity specifications.

***

## System Components

### External Features

The Pop Cart features a distinctive vintage carnival cart aesthetic designed to attract customers and complement entertainment venues. The red and white striped canopy, decorative yellow wheels, and classic popcorn branding create an inviting presence.

![Pop Cart Dispensing Window with Internal Heating Elements](../.gitbook/assets/dispensing_window_internal_mechanism.webp)

_Front dispensing window showing internal popping chamber with heating elements_

**Customer Interaction Points:**

* **Touchscreen Display**: Primary customer interface for selections and payment
* **Dispensing Window**: Collection point for finished popcorn containers
* **Topping/Seasoning Collection Window**: Pick-up point for dispensed seasoning packets
* **Security Lock**: Keyed access for operator maintenance and restocking

### Internal Component Layout

![Pop Cart Control Board Assembly with Connectors and Wiring](../.gitbook/assets/electronics_control_board_assembly.webp) ![Cup Holding and Positioning Mechanism - Top-Down View](../.gitbook/assets/kernel_hopper_opening_assembly.webp) ![Stainless Steel Dispensing Chamber Interior Detail](../.gitbook/assets/dispensing_chamber_interior_detail.webp)

_Left: Control board assembly (upper level). Center: Cup holding and positioning mechanism. Right: Dispensing chamber mechanism (lower level)_

The Pop Cart interior is organized into distinct functional zones for efficient operation and maintenance:

**Upper Level - Storage & Supply**

* Dual kernel hoppers with top-loading access (Tubes A & B)
* Seasoning packet dispensers (5 positions) - spring-loaded rows that rotate to push packets out
* Packet dispenser IO board (located at front right bottom, visible in images above)
* Transparent hopper design allows visual supply level monitoring

**Middle Level - Production**

* Cup holder/positioning mechanism
* Single popping chamber (oven) with dual hopper feed system
* Heating element arrays
* Temperature monitoring

**Lower Level - Dispensing & Collection**

* Fan blower for air circulation
* Drop chute where popcorn falls into positioned cup
* Electronics protected behind metal shrouds for safety
* Stray popcorn collector
* Service access panels

![Dual Popcorn Dispensing Cylinders Labeled A and B](../.gitbook/assets/dual-popcorn-dispensers-interior.webp)

_Dual popcorn dispensing cylinders labeled A and B_

### Dual Dispensing System

The Pop Cart features two independent popcorn cylinders (A and B) providing operational flexibility:

* **Independent Operation**: Each cylinder operates separately for reliability and continuous service
* **Storage Capacity**: 3 kg per cylinder (6 kg total)
* **Transparent Design**: Visible kernel display

***

## Machine Architecture

### 1. Production System

The Pop Cart's production system handles the complete popping process from kernel storage through finished product:

* **Heat Management**: Controlled heating elements maintain ideal popping temperatures
* **Quality Monitoring**: Temperature sensors and precisely timed cooking cycles ensure consistent results

### 2. Dispensing Mechanism

Once popping is complete, the automated dispensing system delivers popcorn to customers:

* **Air-Driven Movement**: Hot air and popping action propel popcorn downward into the chute that goes to the cup
* **Portion Control**: Controlled at the kernel holder level - the drop hole opening size determines the portion amount
* **Cup Positioning**: Sensors detect proper cup placement before dispensing
* **Chute Design**: Stainless steel chute with internally curved edges for easy cleaning and smooth popcorn flow into cups

### 3. Control System

An integrated electronic control system manages all machine functions:

* **Customer Interface**: Android-based touchscreen for intuitive operation
* **Payment Processing**: Secure transaction handling
* **Error Detection**: Real-time monitoring and diagnostic alerts
* **Remote Management**: Optional network connectivity for remote monitoring

### 4. Safety Systems

Multiple safety features protect customers, operators, and the machine:

* **Temperature Limits**: Automatic shutdown prevents overheating
* **Door Interlocks**: Safety switches disable operation when doors open
* **Power Isolation**: Main power switch and power cord for complete shutdown
* **Component Protection**: Thermal and electrical protection circuits

***

## Next Steps

Now that you understand the Pop Cart's capabilities and components, proceed to:

* [**Setup & Installation**](setup.md) - Learn how to unpack, position, and configure your Pop Cart
* [**Operation Guide**](operation.md) - Master daily operations and customer service procedures
* [**Maintenance**](maintenance.md) - Establish cleaning schedules and preventive maintenance routines

For immediate assistance or technical support, see [Company Information](shared/content/company-info.md).
