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
    console.log('  node generate-rounded-qr.js --custom --url <URL> --id <ID> --desc <DESCRIPTION> [--category <CATEGORY>] [--manuals <MANUAL1,MANUAL2>]');
    console.log('\nExample:');
    console.log('  node generate-rounded-qr.js --custom --url "https://example.com" --id "example-qr" --desc "Example QR Code" --category "custom" --manuals "robo-ice-cream,candy-monster"');
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

// Ensure output directory exists
const outputDir = path.join(__dirname, '..', 'qr-codes');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to create rounded SVG QR code
async function createRoundedQRCode(text, options = {}) {
  const qrData = await QRCode.create(text, {
    errorCorrectionLevel: 'M',
    margin: 0
  });
  
  const modules = qrData.modules;
  const size = modules.size;
  const scale = 10; // Size of each module
  const radius = scale * 0.45; // Roundness factor
  const svgSize = size * scale;
  
  // Helper function to check if a module exists
  const getModule = (x, y) => {
    if (x < 0 || y < 0 || x >= size || y >= size) return false;
    return modules.data[y * size + x];
  };
  
  // Create SVG paths for connected rounded modules
  let paths = [];
  const visited = new Array(size * size).fill(false);
  
  // Find connected components and create paths
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const index = y * size + x;
      if (getModule(x, y) && !visited[index]) {
        // Start a new connected component
        let componentPath = [];
        const queue = [[x, y]];
        visited[index] = true;
        
        while (queue.length > 0) {
          const [cx, cy] = queue.shift();
          
          // Check all 4 neighbors
          const neighbors = [
            [cx - 1, cy], [cx + 1, cy],
            [cx, cy - 1], [cx, cy + 1]
          ];
          
          // Add rounded rectangle for this module
          const rx = cx * scale;
          const ry = cy * scale;
          
          // Check connections to neighbors for smoother paths
          const top = getModule(cx, cy - 1);
          const right = getModule(cx + 1, cy);
          const bottom = getModule(cx, cy + 1);
          const left = getModule(cx - 1, cy);
          
          // Create a rounded square with connections
          componentPath.push({
            x: rx,
            y: ry,
            top,
            right,
            bottom,
            left
          });
          
          // Add unvisited neighbors to queue
          for (const [nx, ny] of neighbors) {
            const nIndex = ny * size + nx;
            if (getModule(nx, ny) && !visited[nIndex]) {
              visited[nIndex] = true;
              queue.push([nx, ny]);
            }
          }
        }
        
        // Convert component to SVG path
        const pathData = componentPath.map(module => {
          const { x, y, top, right, bottom, left } = module;
          
          // Create rounded rectangle with connections
          let d = '';
          
          // Adjust corners based on connections
          const tr = !top && !right ? radius : radius * 0.3;
          const br = !bottom && !right ? radius : radius * 0.3;
          const bl = !bottom && !left ? radius : radius * 0.3;
          const tl = !top && !left ? radius : radius * 0.3;
          
          // Create rounded rect path
          d = `M ${x + tl} ${y}`;
          d += ` L ${x + scale - tr} ${y}`;
          if (tr > 0) d += ` Q ${x + scale} ${y} ${x + scale} ${y + tr}`;
          d += ` L ${x + scale} ${y + scale - br}`;
          if (br > 0) d += ` Q ${x + scale} ${y + scale} ${x + scale - br} ${y + scale}`;
          d += ` L ${x + bl} ${y + scale}`;
          if (bl > 0) d += ` Q ${x} ${y + scale} ${x} ${y + scale - bl}`;
          d += ` L ${x} ${y + tl}`;
          if (tl > 0) d += ` Q ${x} ${y} ${x + tl} ${y}`;
          d += ' Z';
          
          return d;
        }).join(' ');
        
        paths.push(pathData);
      }
    }
  }
  
  // Create finder patterns (the three corner squares) with rounded style
  const createFinderPattern = (cx, cy) => {
    const outerSize = 7 * scale;
    const middleSize = 5 * scale;
    const innerSize = 3 * scale;
    const outerRadius = scale * 1.5;
    const innerRadius = scale * 0.8;
    
    return `
      <rect x="${cx * scale}" y="${cy * scale}" width="${outerSize}" height="${outerSize}" rx="${outerRadius}" fill="black"/>
      <rect x="${(cx + 1) * scale}" y="${(cy + 1) * scale}" width="${middleSize}" height="${middleSize}" rx="${outerRadius * 0.7}" fill="white"/>
      <rect x="${(cx + 2) * scale}" y="${(cy + 2) * scale}" width="${innerSize}" height="${innerSize}" rx="${innerRadius}" fill="black"/>
    `;
  };
  
  // Build the complete SVG
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svgSize} ${svgSize}" width="${svgSize}" height="${svgSize}">
      <rect width="${svgSize}" height="${svgSize}" fill="white"/>
      <g fill="black">
        ${paths.map(p => `<path d="${p}"/>`).join('')}
      </g>
      <!-- Overlay finder patterns with rounded style -->
      ${createFinderPattern(0, 0)}
      ${createFinderPattern(size - 7, 0)}
      ${createFinderPattern(0, size - 7)}
    </svg>
  `;
  
  return svg.trim();
}

// Generate a single QR code
async function generateSingleQRCode(qrData) {
  try {
    // Generate rounded SVG QR code
    const svgPath = path.join(outputDir, `${qrData.id}.svg`);
    const svgString = await createRoundedQRCode(qrData.url);
    fs.writeFileSync(svgPath, svgString);
    
    // Also generate PNG for compatibility
    const pngPath = path.join(outputDir, `${qrData.id}.png`);
    await QRCode.toFile(pngPath, qrData.url, {
      type: 'png',
      width: 400,
      margin: 1,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      },
      errorCorrectionLevel: 'M'
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
    console.log('\nCustom rounded QR code generated successfully!');
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
    
    console.log('\nRounded QR code added to database successfully!');
    console.log(`ID: ${newQR.id}`);
    console.log(`Total QR codes in database: ${existingDatabase.length}`);
    return;
  }
  
  // Default mode - generate all predefined QR codes
  console.log('Generating rounded QR codes...\n');
  
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
  
  console.log(`\nRounded QR Code generation complete!`);
  console.log(`Generated ${database.length} QR codes with rounded style`);
  console.log(`Database saved to: ${dbPath}`);
}

// Run the generator
generateQRCodes().catch(console.error);