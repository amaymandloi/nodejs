const fs = require("fs");

fs.writeFile('writeinput.txt', 'hello hi ', function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("Data written successfully!");
});