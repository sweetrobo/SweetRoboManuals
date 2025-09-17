#!/usr/bin/env node

/**
 * Post-process script to fix print CSS loading in mdBook builds
 *
 * This script modifies all HTML files in the build directories to add
 * media="print" attribute to the custom-print.css link, ensuring it
 * only loads during print mode and has higher specificity.
 */

const fs = require("fs");
const path = require("path");

// Build directories to process
const buildDirs = [
  "build/robo-ice-cream",
  "build/candy-monster",
  "build/pop-cart",
];

function processHtmlFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");

    // Check if this file has the custom-print.css link
    if (content.includes("shared/css/custom-print.css")) {
      console.log(`Processing: ${filePath}`);

      // Replace the custom-print.css link to add media="print" attribute
      const originalPattern =
        /<link rel="stylesheet" href="shared\/css\/custom-print\.css">/g;
      const replacement =
        '<link rel="stylesheet" href="shared/css/custom-print.css" media="print">';

      if (originalPattern.test(content)) {
        content = content.replace(originalPattern, replacement);
        fs.writeFileSync(filePath, content, "utf8");
        console.log(`✓ Updated: ${filePath}`);
      }
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.log(`Directory not found: ${dirPath}`);
    return;
  }

  console.log(`\nProcessing directory: ${dirPath}`);

  function walkDirectory(currentPath) {
    const items = fs.readdirSync(currentPath);

    for (const item of items) {
      const itemPath = path.join(currentPath, item);
      const stat = fs.statSync(itemPath);

      if (stat.isDirectory()) {
        walkDirectory(itemPath);
      } else if (stat.isFile() && item.endsWith(".html")) {
        processHtmlFile(itemPath);
      }
    }
  }

  walkDirectory(dirPath);
}

function main() {
  console.log("🔧 Fixing print CSS loading in mdBook builds...");

  let processedAny = false;

  for (const buildDir of buildDirs) {
    const fullPath = path.resolve(buildDir);
    if (fs.existsSync(fullPath)) {
      processDirectory(fullPath);
      processedAny = true;
    } else {
      console.log(`⚠️  Build directory not found: ${fullPath}`);
    }
  }

  if (processedAny) {
    console.log("\n✅ Print CSS fix completed!");
    console.log(
      'Custom print styles now load with media="print" for better specificity.',
    );
  } else {
    console.log("\n❌ No build directories found. Run mdbook build first.");
    process.exit(1);
  }
}

// Run the script
main();
