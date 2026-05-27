const fs = require('fs');
const PNG = require('pngjs').PNG;

fs.createReadStream('./public/logo_ngs.png')
  .pipe(new PNG())
  .on('parsed', function() {
    const colorCounts = {};
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const idx = (this.width * y + x) << 2;
        const r = this.data[idx];
        const g = this.data[idx+1];
        const b = this.data[idx+2];
        const a = this.data[idx+3];
        
        if (a < 200) continue; // skip transparent
        if (r > 240 && g > 240 && b > 240) continue; // skip white
        if (r < 15 && g < 15 && b < 15) continue; // skip black
        
        // Group similar colors
        const roundR = Math.round(r / 5) * 5;
        const roundG = Math.round(g / 5) * 5;
        const roundB = Math.round(b / 5) * 5;
        
        const hex = "#" + ((1 << 24) + (roundR << 16) + (roundG << 8) + roundB).toString(16).slice(1);
        colorCounts[hex] = (colorCounts[hex] || 0) + 1;
      }
    }
    
    const sorted = Object.keys(colorCounts).sort((a, b) => colorCounts[b] - colorCounts[a]);
    console.log("TOP COLORS:");
    sorted.slice(0, 15).forEach(color => {
      console.log(`${color}: ${colorCounts[color]}`);
    });
  });
