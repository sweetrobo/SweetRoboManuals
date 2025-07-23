#!/bin/bash

# Comprehensive content migration script for Candy Monster manual

DRAFT_DIR="resources/Draft/Draft"

echo "Starting comprehensive content migration..."

# Helper function to copy content with updated image references
migrate_file() {
    local src="$1"
    local dest="$2"
    local title="$3"
    
    if [ -f "$src" ]; then
        echo "Migrating: $(basename "$src") → $(basename "$dest")"
        
        # Ensure destination directory exists
        mkdir -p "$(dirname "$dest")"
        
        # Copy and process content
        if [ -n "$title" ]; then
            echo -e "$title\n" > "$dest"
            cat "$src" >> "$dest"
        else
            cp "$src" "$dest"
        fi
        
        # Update image references using Python script
        python3 ../shared/scripts/migrate-content.py "$(pwd)" --single-file "$dest"
    else
        echo "Warning: Source file not found: $src"
    fi
}

# Introduction section
migrate_file "$DRAFT_DIR/03 Intro/1 Introduction.md/1 Introduction.md" "introduction/introduction.md" "# Introduction"
migrate_file "$DRAFT_DIR/03 Intro/2 Importance of the Manual.md/2 Importance of the Manual.md" "introduction/importance-of-manual.md" "# Importance of the Manual"

# Safety section
migrate_file "$DRAFT_DIR/04 Safety/04 Safety.md" "safety/safety.md" "# Safety Guidelines"
migrate_file "$DRAFT_DIR/04 Safety/1 Symbols in This Manual.md" "safety/symbols.md" "# Symbols in This Manual"
migrate_file "$DRAFT_DIR/04 Safety/2 1. General Safety.md" "safety/general-safety.md" "# General Safety"
migrate_file "$DRAFT_DIR/04 Safety/3 2. Electrical Safety.md" "safety/electrical-safety.md" "# Electrical Safety"
migrate_file "$DRAFT_DIR/04 Safety/4 3. Operational Safety.md" "safety/operational-safety.md" "# Operational Safety"
migrate_file "$DRAFT_DIR/04 Safety/5 4. Cleaning and Maintenance Safety.md" "safety/cleaning-maintenance-safety.md" "# Cleaning and Maintenance Safety"
migrate_file "$DRAFT_DIR/04 Safety/6 5. Servicing and Repairs.md" "safety/servicing-repairs.md" "# Servicing and Repairs"
migrate_file "$DRAFT_DIR/04 Safety/7 6. Emergency Contact.md/7 6. Emergency Contact.md" "safety/emergency-contact.md" "# Emergency Contact"

# Getting Started section
migrate_file "$DRAFT_DIR/05 Getting Started/05 Getting Started.md" "getting-started/overview.md" "# Getting Started Overview"
migrate_file "$DRAFT_DIR/05 Getting Started/1 Product Overview and Specifications.md" "getting-started/product-overview.md" "# Product Overview and Specifications"
migrate_file "$DRAFT_DIR/05 Getting Started/2 Technical Specifications.md" "getting-started/technical-specifications.md" "# Technical Specifications"
migrate_file "$DRAFT_DIR/05 Getting Started/3 Machine Components Overview/3 Machine Components Overview.md/3 Machine Components Overview.md" "getting-started/components-overview.md" "# Machine Components Overview"

# Components subsection
migrate_file "$DRAFT_DIR/05 Getting Started/3 Machine Components Overview/1 Candy Monster Internal Service Components.md/1 Candy Monster Internal Service Components.md" "getting-started/components/internal-service-components.md" "# Internal Service Components"
migrate_file "$DRAFT_DIR/05 Getting Started/3 Machine Components Overview/2 The PC.md/2 The PC.md" "getting-started/components/the-pc.md" "# The PC"
migrate_file "$DRAFT_DIR/05 Getting Started/3 Machine Components Overview/3 Candy Monster Right-side-door Internal View.md/3 Candy Monster Right-side-door Internal View.md" "getting-started/components/right-side-door.md" "# Right-side-door Internal View"
migrate_file "$DRAFT_DIR/05 Getting Started/3 Machine Components Overview/4 Candy Bays and Climate Control.md/4 Candy Bays and Climate Control.md" "getting-started/components/candy-bays-climate.md" "# Candy Bays and Climate Control"
migrate_file "$DRAFT_DIR/05 Getting Started/3 Machine Components Overview/5 Touch Screen Monitor Connections.md/5 Touch Screen Monitor Connections.md" "getting-started/components/touch-screen-connections.md" "# Touch Screen Monitor Connections"
migrate_file "$DRAFT_DIR/05 Getting Started/3 Machine Components Overview/6 Key Operational Sensors.md/6 Key Operational Sensors.md" "getting-started/components/operational-sensors.md" "# Key Operational Sensors"

# Setup section
migrate_file "$DRAFT_DIR/05 Getting Started/4 Unpacking and Installation.md/4 Unpacking and Installation.md" "getting-started/unpacking-installation.md" "# Unpacking and Installation"
migrate_file "$DRAFT_DIR/05 Getting Started/5 Step-by-Step Physical Setup.md/5 Step-by-Step Physical Setup.md" "getting-started/physical-setup.md" "# Step-by-Step Physical Setup"
migrate_file "$DRAFT_DIR/05 Getting Started/6 Initial Power-On Sequence.md/6 Initial Power-On Sequence.md" "getting-started/power-on-sequence.md" "# Initial Power-On Sequence"

# Operation section
migrate_file "$DRAFT_DIR/06 Operation/06 Operation.md" "operation/overview.md" "# Operation Overview"

# Customer Interface
migrate_file "$DRAFT_DIR/06 Operation/1 Customer Interface/1 Customer Interface.md" "operation/customer-interface/overview.md" "# Customer Interface Overview"
migrate_file "$DRAFT_DIR/06 Operation/1 Customer Interface/1 Customer Interface Making a Purchase.md/1 Customer Interface Making a Purchase.md" "operation/customer-interface/making-purchase.md" "# Making a Purchase"
migrate_file "$DRAFT_DIR/06 Operation/1 Customer Interface/2 Choosing Candies.md/2 Choosing Candies.md" "operation/customer-interface/choosing-candies.md" "# Choosing Candies"
migrate_file "$DRAFT_DIR/06 Operation/1 Customer Interface/3 Selecting Payment Method.md/3 Selecting Payment Method.md" "operation/customer-interface/payment-method.md" "# Selecting Payment Method"
migrate_file "$DRAFT_DIR/06 Operation/1 Customer Interface/4 Completing Payment (Example Cash Payment.md/4 Completing Payment (Example Cash Payment.md" "operation/customer-interface/completing-payment.md" "# Completing Payment"
migrate_file "$DRAFT_DIR/06 Operation/1 Customer Interface/5 Dispensing Candy.md" "operation/customer-interface/dispensing-candy.md" "# Dispensing Candy"

# Operator Interface
migrate_file "$DRAFT_DIR/06 Operation/2 Operator Interface/2 Operator Interface.md" "operation/operator-interface/overview.md" "# Operator Interface Overview"
migrate_file "$DRAFT_DIR/06 Operation/2 Operator Interface/1 Initiating Login.md/1 Initiating Login.md" "operation/operator-interface/login.md" "# Initiating Login"
migrate_file "$DRAFT_DIR/06 Operation/2 Operator Interface/2 Operator Interface Managing the Candy Monster.md/2 Operator Interface Managing the Candy Monster.md" "operation/operator-interface/management.md" "# Managing the Candy Monster"
migrate_file "$DRAFT_DIR/06 Operation/2 Operator Interface/3 Device Settings/3 Device Settings.md/3 Device Settings.md" "operation/operator-interface/device-settings.md" "# Device Settings"
migrate_file "$DRAFT_DIR/06 Operation/2 Operator Interface/3 Device Settings/1 (5) Update Manage software updates and operator password. .md" "operation/operator-interface/settings/updates.md" "# Software Updates and Password"
migrate_file "$DRAFT_DIR/06 Operation/2 Operator Interface/3 Device Settings/2 (6) Payment Methods Enabledisable payment types and configure pulse values..md" "operation/operator-interface/settings/payment-config.md" "# Payment Methods Configuration"
migrate_file "$DRAFT_DIR/06 Operation/2 Operator Interface/4 Statistics.md/4 Statistics.md" "operation/operator-interface/statistics.md" "# Statistics"
migrate_file "$DRAFT_DIR/06 Operation/2 Operator Interface/5 Device Status.md/5 Device Status.md" "operation/operator-interface/device-status.md" "# Device Status"
migrate_file "$DRAFT_DIR/06 Operation/2 Operator Interface/6 Inventory Management.md/6 Inventory Management.md" "operation/operator-interface/inventory.md" "# Inventory Management"
migrate_file "$DRAFT_DIR/06 Operation/2 Operator Interface/7 Test Functions.md/7 Test Functions.md" "operation/operator-interface/test-functions.md" "# Test Functions"

# Maintenance section
migrate_file "$DRAFT_DIR/07 Maintenance/1 Maintenance.md" "maintenance/maintenance.md" "# Maintenance"
migrate_file "$DRAFT_DIR/07 Maintenance/2 Installation Precautions.md" "maintenance/installation-precautions.md" "# Installation Precautions"
migrate_file "$DRAFT_DIR/07 Maintenance/3 Troubleshooting.md" "maintenance/troubleshooting-guide.md" "# Troubleshooting Guide"

# Support section
migrate_file "$DRAFT_DIR/09 Customer Support.md" "support/customer-support.md" "# Customer Support"

# Legal section
migrate_file "$DRAFT_DIR/10 Legal and Warranty Information.md" "legal/warranty.md" "# Legal and Warranty Information"

# Feedback section
migrate_file "$DRAFT_DIR/11 Online Manual & Feedback.md/11 Online Manual & Feedback.md" "feedback/online-manual.md" "# Online Manual & Feedback"

echo -e "\nContent migration complete!"
echo "Next steps:"
echo "1. Review migrated content for accuracy"
echo "2. Test mdBook build"
echo "3. Fix any broken links or formatting issues"