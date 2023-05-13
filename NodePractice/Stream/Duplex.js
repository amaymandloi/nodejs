const fs = require("fs");
let readerStream = fs.createReadStream('input1.txt');

let writerStream = fs.createWriteStream('output1.txt');

readerStream.pipe(writerStream);

console.log("Program Ended");