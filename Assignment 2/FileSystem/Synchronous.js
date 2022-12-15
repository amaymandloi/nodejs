const fs = require("fs");
let data = fs.readFileSync('syncInput.txt');
console.log( data.toString());

console.log("Program Ended");