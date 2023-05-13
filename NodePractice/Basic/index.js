console.log("Hello Node");
var x = 10;
var y = 20;
console.log(x + y);

var a = 3;
// if condition
if (a <= 0) {
  console.log("negative number");
} else if ((a) => 0) {
  console.log("Positive number");
}
// for loop
for (i = 0; i <= 10; i++) {
  console.log(i);
}

// array

const arr = [2, 3, 2, 4, 2, "amay"];
console.log(arr);
console.log(arr[5]);

// import data one page to another

const app = require("./app");
console.log(app);
console.log(app.a());

//array filter method use repeat 5 
const ar = [3, 2, 1, 5, 4, 0, 6, 5,5];
const result = ar.filter((item) => {
  return item === 5;
});
console.log(result);

// greter than use array filter method

const b = [9,8,7,6,5,4,3,2,1,0,3,3,]
const v= b.filter((item)=>{
    return item >=5;
 })

 console.log(v)

 // create a file with help of writeFilesync module

 const fs = require('fs');
 fs.writeFileSync("Hello.txt", "helloWorld");

 // find the name of directories

console.log(__dirname);
console.log(__filename);


// create Http Server

const Http = require('http');
Http.createServer((req,resp)=>{
    resp.write("<h1>Hello_Amay</h1>");
    resp.end();
}).listen(4500),()=> console.log("the application running on port 4500");

// use Color Module 

const colors= require('colors');
console.log("Orange".bgRed);
console.log("White".bgWhite);
console.log("green".bgGreen);


       // use Chalk Module

// const chalk=require('chalk');
// console.log(chalk.blue('HelloWorld'));


// getting input from command line

console.log(process.argv);

// write file with help for process.argv


  