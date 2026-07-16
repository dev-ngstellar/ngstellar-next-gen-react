const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'public', 'Templates Images', 'Startup Landing Page');

fs.readdir(dir, (err, files) => {
  if (err) throw err;
  
  files.filter(f => f.endsWith('.png')).forEach(file => {
    const filePath = path.join(dir, file);
    const webpPath = path.join(dir, file.replace('.png', '.webp'));
    
    sharp(filePath)
      .webp({ quality: 80 })
      .toFile(webpPath)
      .then(() => {
        console.log(`Converted ${file} to webp`);
        // Optionally delete the png
        // fs.unlinkSync(filePath);
      })
      .catch(err => console.error(err));
  });
});
