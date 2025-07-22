const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'index.html');
const destPath = path.join(__dirname, 'dist', 'index.html');

fs.copyFile(srcPath, destPath, (err) => {
  if (err) {
    console.error('Error copying index.html:', err);
  } else {
    console.log('index.html copied to dist folder successfully.');
  }
});
