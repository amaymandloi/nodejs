const zlib = require("zlib");
const gzip = zlib.createGzip();
const fs = require("fs");
const inp = fs.createReadStream("fruit.txt");
const out = fs.createWriteStream("fruit.txt.gz");
inp.pipe(gzip).pipe(out);
