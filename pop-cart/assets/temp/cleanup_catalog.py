#!/usr/bin/env python3
"""
Script to clean up the Pop Cart image catalog by:
1. Removing ice cream machine images
2. Fixing chocolate chips -> blue popcorn kernels references
3. Updating filenames to match actual files
"""
import json
from datetime import datetime

# Load catalog
with open('image-catalog.json', 'r') as f:
    catalog = json.load(f)

# Ice cream machine images to remove (based on content analysis)
ICE_CREAM_ORIGINALS = [
    'Robo Ice Cream - 40.png',  # Mini Reeses Pieces, Snickerdoodle Syrup
    'Robo Ice Cream - 39.png',  # Topping selection with ice cream toppings
    'Robo Ice Cream - Software loading page.png',  # "Robo Ice Cream Machine is loading"
    'Robo Ice Cream - 30.png',  # Device testing with jam dispensers (ice cream specific)
    'Robo Ice Cream - 32.png',  # Rainbow Sprinkles editing
    'Robo Ice Cream - 43.png',  # Robot chefs working on ice cream
    'Robo Ice Cream - 44.png',  # "Installing Cremay Core Module"
]

# Chocolate chips images that need renaming (already renamed in filesystem)
CHOCOLATE_TO_KERNELS = {
    'photo_8_2025-10-22_17-06-26.jpg': {
        'old_filename': 'chocolate_chips_dispensing_demo_step1.webp',
        'new_filename': 'kernels_dispensing_demo_step1.webp',
        'old_desc': 'chocolate chips',
        'new_desc': 'blue popcorn kernels',
        'old_tags': ['chocolate-chips'],
        'new_tags': ['blue-popcorn-kernels', 'kernels']
    },
    'photo_9_2025-10-22_17-06-26.jpg': {
        'old_filename': 'chocolate_chips_dispensing_demo_step2.webp',
        'new_filename': 'kernels_dispensing_demo_step2.webp',
        'old_desc': 'chocolate chips',
        'new_desc': 'blue popcorn kernels',
        'old_tags': ['chocolate-chips'],
        'new_tags': ['blue-popcorn-kernels', 'kernels']
    },
    'photo_10_2025-10-22_17-06-26.jpg': {
        'old_filename': 'chocolate_chips_cup_ready_to_pour.webp',
        'new_filename': 'kernels_ready_to_pour.webp',
        'old_desc': 'chocolate chips',
        'new_desc': 'blue popcorn kernels',
        'old_tags': ['chocolate-chips'],
        'new_tags': ['blue-popcorn-kernels', 'kernels']
    }
}

print("Starting catalog cleanup...")
print("="*60)

# Remove ice cream machine images
original_count = len(catalog['images'])
catalog['images'] = [img for img in catalog['images']
                     if img['original_filename'] not in ICE_CREAM_ORIGINALS]
removed_count = original_count - len(catalog['images'])
print(f"✓ Removed {removed_count} ice cream machine images")

# Update chocolate chips -> blue popcorn kernels
updated_count = 0
for img in catalog['images']:
    if img['original_filename'] in CHOCOLATE_TO_KERNELS:
        updates = CHOCOLATE_TO_KERNELS[img['original_filename']]

        # Update filename
        img['suggested_filename'] = updates['new_filename']
        img['final_location'] = img['final_location'].replace(
            updates['old_filename'],
            updates['new_filename']
        )

        # Update description
        img['description'] = img['description'].replace(
            updates['old_desc'],
            updates['new_desc']
        )

        # Update tags
        img['tags'] = [tag for tag in img['tags'] if tag not in updates['old_tags']]
        img['tags'].extend(updates['new_tags'])

        # Update notes
        if 'notes' in img:
            img['notes'] = img['notes'].replace(
                updates['old_desc'],
                updates['new_desc']
            )

        updated_count += 1
        print(f"✓ Updated: {img['original_filename']}")

print(f"✓ Fixed {updated_count} chocolate chips -> blue popcorn kernels references")

# Update statistics
catalog['statistics']['total_images'] = len(catalog['images'])

# Recalculate category counts
category_counts = {}
for img in catalog['images']:
    cat = img['suggested_category']
    category_counts[cat] = category_counts.get(cat, 0) + 1
catalog['statistics']['by_category'] = category_counts

# Recalculate content type counts
content_type_counts = {}
for img in catalog['images']:
    ct = img['content_type']
    content_type_counts[ct] = content_type_counts.get(ct, 0) + 1
catalog['statistics']['by_content_type'] = content_type_counts

# Update metadata
catalog['last_updated'] = datetime.utcnow().isoformat() + 'Z'

# Save updated catalog
with open('image-catalog.json', 'w') as f:
    json.dump(catalog, f, indent=2)

print("="*60)
print("Catalog cleanup complete!")
print(f"Total images now: {catalog['statistics']['total_images']}")
print(f"Removed ice cream images: {removed_count}")
print(f"Fixed chocolate->kernel references: {updated_count}")
print("="*60)
