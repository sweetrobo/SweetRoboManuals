#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');

// Parse command line arguments
const args = process.argv.slice(2);
const customMode = args.includes('--custom') || args.includes('-c');
const addMode = args.includes('--add') || args.includes('-a');

// Helper function to parse custom QR code from command line
function parseCustomQRCode() {
  const urlIndex = args.findIndex(arg => arg === '--url' || arg === '-u');
  const idIndex = args.findIndex(arg => arg === '--id' || arg === '-i');
  const descIndex = args.findIndex(arg => arg === '--desc' || arg === '-d');
  const categoryIndex = args.findIndex(arg => arg === '--category' || arg === '-cat');
  const manualsIndex = args.findIndex(arg => arg === '--manuals' || arg === '-m');
  
  if (urlIndex === -1 || !args[urlIndex + 1]) {
    console.error('Error: --url parameter is required');
    console.log('\nUsage:');
    console.log('  node generate-qr-codes.js --custom --url <URL> --id <ID> --desc <DESCRIPTION> [--category <CATEGORY>] [--manuals <MANUAL1,MANUAL2>]');
    console.log('\nExample:');
    console.log('  node generate-qr-codes.js --custom --url "https://example.com" --id "example-qr" --desc "Example QR Code" --category "custom" --manuals "robo-ice-cream,candy-monster"');
    console.log('\nOr to add to existing QR codes:');
    console.log('  node generate-qr-codes.js --add --url "https://example.com" --id "example-qr" --desc "Example QR Code"');
    process.exit(1);
  }
  
  const url = args[urlIndex + 1];
  const id = idIndex !== -1 && args[idIndex + 1] ? args[idIndex + 1] : url.replace(/[^a-z0-9]/gi, '-').toLowerCase().substring(0, 30);
  const description = descIndex !== -1 && args[descIndex + 1] ? args[descIndex + 1] : 'Custom QR Code';
  const category = categoryIndex !== -1 && args[categoryIndex + 1] ? args[categoryIndex + 1] : 'custom';
  const manuals = manualsIndex !== -1 && args[manualsIndex + 1] ? args[manualsIndex + 1].split(',') : ['all'];
  
  return {
    id,
    url,
    description,
    category,
    manuals
  };
}

// Define the QR codes to generate
const qrCodes = [
  // Manual Access
  {
    id: 'manual-robo-ice-cream',
    url: 'https://manuals.sweetrobo.com/robo-ice-cream/',
    description: 'Robo Ice Cream F2 Online Manual',
    category: 'manual',
    manuals: ['robo-ice-cream']
  },
  {
    id: 'manual-candy-monster',
    url: 'https://manuals.sweetrobo.com/candy-monster/',
    description: 'Candy Monster Online Manual',
    category: 'manual',
    manuals: ['candy-monster']
  },
  {
    id: 'manual-pop-cart',
    url: 'https://manuals.sweetrobo.com/pop-cart/',
    description: 'Pop Cart Online Manual',
    category: 'manual',
    manuals: ['pop-cart']
  },
  
  // Support Links
  {
    id: 'support-general',
    url: 'https://sweetrobo.com/support',
    description: 'Sweet Robo Customer Support',
    category: 'support',
    manuals: ['robo-ice-cream', 'candy-monster', 'pop-cart']
  },
  {
    id: 'support-phone',
    url: 'tel:+1-555-SWEET-01',
    description: 'Call Support: +1-555-SWEET-01',
    category: 'support',
    manuals: ['robo-ice-cream', 'candy-monster', 'pop-cart']
  },
  {
    id: 'support-email',
    url: 'mailto:support@sweetrobo.com',
    description: 'Email: support@sweetrobo.com',
    category: 'support',
    manuals: ['robo-ice-cream', 'candy-monster', 'pop-cart']
  },
  
  // Video Tutorials
  {
    id: 'video-setup-robo-ice-cream',
    url: 'https://sweetrobo.com/videos/robo-ice-cream-setup',
    description: 'Robo Ice Cream Setup Video Tutorial',
    category: 'video',
    manuals: ['robo-ice-cream']
  },
  {
    id: 'video-maintenance-robo-ice-cream',
    url: 'https://sweetrobo.com/videos/robo-ice-cream-maintenance',
    description: 'Robo Ice Cream Maintenance Guide',
    category: 'video',
    manuals: ['robo-ice-cream']
  },
  {
    id: 'video-operation-candy-monster',
    url: 'https://sweetrobo.com/videos/candy-monster-operation',
    description: 'Candy Monster Operation Tutorial',
    category: 'video',
    manuals: ['candy-monster']
  },
  
  // Parts & Service
  {
    id: 'parts-ordering',
    url: 'https://sweetrobo.com/parts',
    description: 'Order Replacement Parts',
    category: 'parts',
    manuals: ['robo-ice-cream', 'candy-monster', 'pop-cart']
  },
  {
    id: 'service-request',
    url: 'https://sweetrobo.com/service-request',
    description: 'Request Service Appointment',
    category: 'service',
    manuals: ['robo-ice-cream', 'candy-monster', 'pop-cart']
  },
  
  // Documentation
  {
    id: 'warranty-registration',
    url: 'https://sweetrobo.com/warranty',
    description: 'Register Your Machine Warranty',
    category: 'documentation',
    manuals: ['robo-ice-cream', 'candy-monster', 'pop-cart']
  },
  {
    id: 'troubleshooting-guide',
    url: 'https://sweetrobo.com/troubleshooting',
    description: 'Interactive Troubleshooting Guide',
    category: 'documentation',
    manuals: ['robo-ice-cream', 'candy-monster', 'pop-cart']
  },
  
  // Software Updates
  {
    id: 'software-updates',
    url: 'https://sweetrobo.com/downloads',
    description: 'Download Software Updates',
    category: 'software',
    manuals: ['robo-ice-cream', 'candy-monster', 'pop-cart']
  },
  
  // Training
  {
    id: 'operator-training',
    url: 'https://sweetrobo.com/training',
    description: 'Online Operator Training Portal',
    category: 'training',
    manuals: ['robo-ice-cream', 'candy-monster', 'pop-cart']
  }
];

// QR code generation options
const qrOptions = {
  type: 'svg',
  width: 200,
  margin: 1,
  color: {
    dark: '#000000',
    light: '#FFFFFF'
  },
  errorCorrectionLevel: 'M'
};

// Ensure output directory exists
const outputDir = path.join(__dirname, '..', 'qr-codes');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate a single QR code
async function generateSingleQRCode(qrData) {
  try {
    // Generate SVG QR code
    const svgPath = path.join(outputDir, `${qrData.id}.svg`);
    const svgString = await QRCode.toString(qrData.url, { ...qrOptions, type: 'svg' });
    fs.writeFileSync(svgPath, svgString);
    
    // Also generate PNG for compatibility
    const pngPath = path.join(outputDir, `${qrData.id}.png`);
    await QRCode.toFile(pngPath, qrData.url, {
      ...qrOptions,
      type: 'png',
      width: 400
    });
    
    console.log(`✓ Generated: ${qrData.id}`);
    console.log(`  URL: ${qrData.url}`);
    console.log(`  Description: ${qrData.description}`);
    
    return true;
  } catch (error) {
    console.error(`✗ Error generating ${qrData.id}:`, error.message);
    return false;
  }
}

// Generate QR codes
async function generateQRCodes() {
  // Handle custom mode
  if (customMode) {
    const customQR = parseCustomQRCode();
    await generateSingleQRCode(customQR);
    console.log('\nCustom QR code generated successfully!');
    console.log(`ID: ${customQR.id}`);
    console.log(`Files: qr-codes/${customQR.id}.svg and qr-codes/${customQR.id}.png`);
    return;
  }
  
  // Handle add mode
  if (addMode) {
    const newQR = parseCustomQRCode();
    
    // Load existing database
    const dbPath = path.join(__dirname, '..', 'qr-codes', 'qr-database.json');
    let existingDatabase = [];
    if (fs.existsSync(dbPath)) {
      existingDatabase = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    }
    
    // Check if ID already exists
    if (existingDatabase.find(qr => qr.id === newQR.id)) {
      console.error(`Error: QR code with ID "${newQR.id}" already exists`);
      process.exit(1);
    }
    
    // Generate the new QR code
    await generateSingleQRCode(newQR);
    
    // Add to database
    existingDatabase.push({
      ...newQR,
      svgPath: `qr-codes/${newQR.id}.svg`,
      pngPath: `qr-codes/${newQR.id}.png`,
      generated: new Date().toISOString()
    });
    
    // Save updated database
    fs.writeFileSync(dbPath, JSON.stringify(existingDatabase, null, 2));
    
    console.log('\nQR code added to database successfully!');
    console.log(`ID: ${newQR.id}`);
    console.log(`Total QR codes in database: ${existingDatabase.length}`);
    
    // Regenerate report
    generateSummaryReport(existingDatabase);
    return;
  }
  
  // Default mode - generate all predefined QR codes
  console.log('Generating QR codes...\n');
  
  const database = [];
  
  for (const qrData of qrCodes) {
    const success = await generateSingleQRCode(qrData);
    
    if (success) {
      // Add to database with relative paths
      database.push({
        ...qrData,
        svgPath: `qr-codes/${qrData.id}.svg`,
        pngPath: `qr-codes/${qrData.id}.png`,
        generated: new Date().toISOString()
      });
      console.log('');
    }
  }
  
  // Save database
  const dbPath = path.join(outputDir, 'qr-database.json');
  fs.writeFileSync(dbPath, JSON.stringify(database, null, 2));
  
  console.log(`\nQR Code generation complete!`);
  console.log(`Generated ${database.length} QR codes`);
  console.log(`Database saved to: ${dbPath}`);
  
  // Generate summary report
  generateSummaryReport(database);
}

// Generate a summary report
function generateSummaryReport(database) {
  const report = [];
  
  report.push('# QR Code Summary Report');
  report.push(`Generated: ${new Date().toISOString()}\n`);
  
  // Group by category
  const categories = {};
  database.forEach(qr => {
    if (!categories[qr.category]) {
      categories[qr.category] = [];
    }
    categories[qr.category].push(qr);
  });
  
  // Report by category
  Object.keys(categories).sort().forEach(category => {
    report.push(`## ${category.charAt(0).toUpperCase() + category.slice(1)}`);
    categories[category].forEach(qr => {
      report.push(`- **${qr.id}**: ${qr.description}`);
      report.push(`  - URL: ${qr.url}`);
      report.push(`  - Used in: ${qr.manuals.join(', ')}`);
    });
    report.push('');
  });
  
  // Report by manual
  report.push('## Usage by Manual\n');
  const manuals = {};
  database.forEach(qr => {
    qr.manuals.forEach(manual => {
      if (!manuals[manual]) {
        manuals[manual] = [];
      }
      manuals[manual].push(qr);
    });
  });
  
  Object.keys(manuals).sort().forEach(manual => {
    report.push(`### ${manual.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`);
    manuals[manual].forEach(qr => {
      report.push(`- ${qr.id} (${qr.category})`);
    });
    report.push('');
  });
  
  const reportPath = path.join(outputDir, 'QR-CODE-REPORT.md');
  fs.writeFileSync(reportPath, report.join('\n'));
  console.log(`\nSummary report saved to: ${reportPath}`);
}

// Run the generator
generateQRCodes().catch(console.error);