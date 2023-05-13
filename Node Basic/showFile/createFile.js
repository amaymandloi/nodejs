const { dir } = require('console');
const fs = require('fs');
const path = require('path');
const dirPath=path.join(__dirname, 'showFile');
// console.warn(dirPath);
// create File
for(i=0;i<5;i++){
    fs.writeFileSync("hello"+i+".txt","a simple text file");
   // fs.writeFileSync(`hello ${i}.txt`,"a simple text file");
}

// read File 

// fs.readdir((err,showFile)=>{
//     showFile.forEach((item)=>{
//         console.log("file Name is ",item)
//     })
// })