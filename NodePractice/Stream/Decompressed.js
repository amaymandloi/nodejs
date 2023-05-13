const fs = require("fs");
let zlib = require('zlib');

// Decompress the file input.txt.gz to input.txt
fs.createReadStream('input.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('Decompressed.txt'));
  
console.log("File Decompressed.");