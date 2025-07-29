# Robo Ice Cream F2 Overview

## Welcome to Robo Ice Cream

Congratulations on your new Robo Ice Cream F2 automated vending machine! This state-of-the-art machine is designed to provide a fun and engaging experience for customers while offering a reliable and efficient vending solution for your business. With its user-friendly touchscreen interface, the Robo Ice Cream F2 is sure to be a hit.

This manual will guide you through the setup, operation, and maintenance of your Robo Ice Cream F2. Please read it thoroughly to ensure safe and optimal performance.

### Why This Manual Matters

<div class="info-box">

Reading this manual before operating your machine is crucial for:

- **Safety**: Understanding proper handling procedures and safety precautions to prevent accidents
- **Proper Usage**: Detailed instructions for setup, operation, maintenance, and troubleshooting
- **Optimal Performance**: Getting the most out of your machine's capabilities and features
- **Avoiding Damage**: Preventing costly repairs through proper maintenance and care
- **Warranty Protection**: Following manufacturer guidelines to maintain warranty coverage
- **Troubleshooting**: Self-diagnosing and resolving common issues without technical support

</div>

<img src="./assets/overview/machines-overview.webp" alt="Robo Ice Cream F2 Machine" />

## System Overview

### What Is the Robo Ice Cream F2?

The Sweet Robo - **Robo Ice Cream Machine F2** is a fully automated soft-serve vending system designed for unmanned operation in retail environments. It handles everything from order selection and payment to cup dispensing, flavor mixing, and serving — all while maintaining food safety and hygiene standards.

Sweet Robo machines combine **refrigeration**, **mechanical robotics**, and **touchscreen controls** into a compact, user-friendly unit that requires minimal daily oversight.

The F2 model features **2 ice cream hoppers** allowing customers to choose between:
- First Flavor
- Second Flavor  
- Mixed Swirl (combination of both flavors)

### Key Features

<div class="feature-grid">

<div class="feature-item">

#### Simple-Touch Operation
User-friendly interface with intuitive controls. With just a single touch, users can initiate the soft serve making process, eliminating the need for complex manual adjustments.

</div>

<div class="feature-item">

#### Easy Cleaning
Detachable parts designed for easy cleaning and maintenance. This feature ensures that the machine can be kept in optimal working condition with minimal effort.

</div>

<div class="feature-item">

#### Safety Features
Automatic door window with hand sensor. The Robo Ice Cream prioritizes user safety with comprehensive protection systems.

</div>

<div class="feature-item">

#### Food Safety
Automatic pasteurization settings to ensure no bacteria is present. The Robo Ice Cream includes settings for automatically pasteurizing ice cream mix.

</div>

<div class="feature-item">

#### Dual Flavor System
Two 12L hoppers for serving two distinct flavors plus swirl combination - the key differentiator of the F2 model.

</div>

<div class="feature-item">

#### UV Sanitization
Built-in UV lamp for automatic nozzle sanitization between servings.

</div>

<div class="feature-item">

#### Large Capacity
Holds 200 cups (4 tubes × 50 cups each) compared to F1's 100 cups.

</div>

</div>


### What It Does

- Dispenses soft-serve ice cream from liquid mix
- Handles cup selection, filling, syrup, and topping application
- Accepts multiple payment methods (bills, coins, card terminals)
- Provides audio/video feedback for customers
- Maintains optimal food-safe temperatures via built-in sensors
- Includes UV sanitation and system diagnostics
- Operates unattended with scheduled hours and stock tracking

### Use Cases

- Indoor shopping malls
- School campuses
- Airports and transportation hubs
- Movie theaters and event venues
- Gyms and recreational centers
- Micro markets and break rooms

### System Design Philosophy

Sweet Robo machines are engineered for:
- **Hygienic food handling** (NSF-style contact zones)
- **Efficient unattended service**
- **Consistent operator experience** between models
- **Expandable components** (coin dispenser, flavor count, etc.)
- **Self-diagnosing behavior** for common faults

## Technical Specifications

### Electrical & Power Requirements
- **Power Supply**: 220V
- **Rated Current**: 13A @ 220V
- **Max Power Consumption**: 2,860W

<div class="warning-box">

**Important**: F2 requires a 220V power supply. It is not directly compatible with 110V circuits, but can be connected using a properly rated transformer and a dedicated power line capable of supporting the required amperage.

</div>

### Physical Specifications
- **Width**: 87 cm (34.3 in)
- **Depth**: 120 cm (47.2 in)
- **Height**: 245 cm (96.5 in)
- **Weight (Empty)**: 380 kg
- **Operational Temperature Range**: 10°C – 35°C (50°F – 95°F)
- **Relative Humidity Tolerance**: < 80% RH (non-condensing)

### Capacity
- **Ice Cream Hoppers**: 2 × 12L (dual flavor capability)
- **Minimum Mix per Hopper**: 2L
- **Cup Storage**: 200 cups (50 × 4 holders)
- **Syrup Dispensers**: 3 (liquid syrups only)
- **Topping Dispensers**: 3 × 270g each (dry toppings only)

### Core System Modules

Each F2 machine includes the following subsystems:

| Subsystem | Purpose |
|-----------|----------|
| Ice Cream Hoppers (2) | Holds chilled mix and feeds it into freezing chamber - F2 has dual hoppers for two flavors |
| Dispensing System | Delivers ice cream to cup with topping and syrup options using rotary auger for mix churn and extrusion |
| Payment System | Accepts coins, bills, and card payments through multiple integrated payment methods |
| Operator Backend | Settings panel for timing, stock, hours, and testing with secured access |
| Refrigeration System | Maintains safe holding and freezing temperatures with compressor-based cooling |
| UV Sanitizer | Disinfects the dispensing nozzle area regularly using built-in UV lamp |
| Audio/Visual Output | Plays videos and provides status feedback through integrated touchscreen and speakers |
| Safety Controls | Prevents operation if doors open or errors occur - includes automatic door mechanisms |
| Cup Dispenser | 4-tube, 50 cups per tube, motorized drop with sensor alignment (200 total capacity) |
| Blue Robo Delivery Bot | Automated system that gathers ingredients, prepares treats, and serves ice cream |

## Hardware Components

### External Components (Customer-Facing)

<img src="./assets/overview/external-components.webp" alt="External Components Overview" />
*External view of Robo Ice Cream F2 showing customer interface components*

These components are designed for direct use by customers, including children, without needing assistance or supervision:

| Component | Description |
|-----------|-------------|
| Touchscreen | Customer interface for selecting flavors, toppings, and completing payment |
| Cup Dispenser | Dispenses one cup per order using sensor-guided motor control |
| Collection Door | Opens only when the soft serve is ready. Equipped with sensors to detect cup presence. Remains open while the cup is inside and automatically closes once the cup is removed |
| Speaker | Plays audio feedback and video content during the ordering and vending process |
| LED Signage | Displays advertisements, preparation animations, and system messages |

### Internal Components (F2 Dual-Hopper System)

<img src="./assets/overview/internal-components.webp" alt="Internal Components Overview" />
*Internal view of the Robo Ice Cream F2 showing dual ice cream hoppers and internal systems*

#### Power and Control Systems

| Component | Description |
|-----------|-------------|
| Timer | Hardware timer that controls power to the entire machine. Operates independently of software and cuts all power when activated |
| Breaker/Power Switch | Primary power cutoff that completely disconnects the machine from power |
| Main I/O Power Switch | Controls power to internal refrigeration system and ice cream dispensing mechanism while leaving touchscreen active |

#### F2 Dual-Flavor System

| Component | F2 Specifications |
|-----------|------------------|
| Ice Cream Hoppers | **2 hoppers** (Left & Right) - 2L minimum, 12L maximum capacity each |
| Cup Holder/Dispenser | **4 cup tubes total**, **50 cups per tube** = **200 cups total capacity** |
| Syrup Holders | **3 types** of liquid syrup (chocolate, strawberry, caramel, etc.) |
| Dry Topping Containers | **3 types** of solid toppings, **270g per hopper** (sprinkles, crushed cookies, chopped nuts) |

#### Processing Components

| Component | Description |
|-----------|-------------|
| Blue Robo Delivery Bot | Automated delivery system that gathers all ingredients, prepares treats, and serves delicious ice cream |
| Topping Dispenser | Dispenses dry toppings directly onto ice cream as the final step before serving |
| UV Sanitizer | Built-in ultraviolet light that sterilizes the dispense area between servings |
| Syrup Dispenser | Draws liquid syrup from holders and applies it to ice cream per customer selection |
| Ice Cream Dispenser | Where Blue Robo collects freshly dispensed ice cream synchronized with temperature and mix level sensors |

## Installation Requirements

### Space Requirements
- Minimum clearance: 30cm on all sides
- Door swing clearance: 120cm front
- Level, stable surface required
- Indoor installation recommended

### Electrical Requirements
- Dedicated 220V circuit
- 20A circuit breaker minimum
- Proper grounding required
- Surge protection recommended

### Environmental Requirements
- Temperature: 10°C – 35°C (50°F – 95°F)
- Humidity: < 80% RH
- Protected from direct sunlight
- Adequate ventilation

## What's Included

- Robo Ice Cream F2 main unit
- 4 LED light panels (optional installation)
- Power cord
- Operation manual (this document)
- Initial startup supplies:
  - Sample ice cream mix packets
  - Cleaning supplies
  - 200 cups

## F2 vs F1 Model Comparison

The core system is the same between both models, with key differences in hopper quantity, flavor control, and capacity.

| Feature | F1 | F2 |
|---------|----|----|
| Ice Cream Flavors | 1 Flavor | 2 Flavors + Mixed Swirl (3rd Option) |
| Ice Cream Hoppers | 1 Hopper | 2 Hoppers (Left and Right) |
| Customer Flavor Options | Single option only | First Flavor / Second Flavor / Mixed |
| Cup Storage | 100 cups (100 × 1 holders) | 200 cups (50 × 4 holders) |
| Width | 83 cm (32.7 in) | 87 cm (34.3 in) |
| Depth | 102 cm (40.2 in) | 120 cm (47.2 in) |
| Weight (Empty) | 350 kg | 380 kg |
| Power Requirement | Various | 220V only |
| Use Case Focus | Single-flavor product launches | High-traffic or variety-based operations |

**Note:** All other systems (cup dispenser, backend UI, payment, topping/syrup functionality) are **identical** unless otherwise stated.

## Important Safety Notes

<div class="warning-box">

**Power Requirements**: F2 requires a 220V power supply and is **not directly compatible with 110V circuits**. Can be connected using a properly rated transformer and a dedicated power line capable of supporting the required amperage.

</div>

<div class="warning-box">

**Grounding**: Machines must be connected to a grounded outlet. Do not share power with other equipment.

</div>

<div class="caution-box">

**Mix Management**: Never run the machine with empty hoppers. Always check mix level before startup to prevent spoilage or bacterial growth.

</div>

<div class="caution-box">

**Maintenance Access**: Internal components are accessed by trained staff via secured cabinet panels and should never be exposed to untrained users.

</div>