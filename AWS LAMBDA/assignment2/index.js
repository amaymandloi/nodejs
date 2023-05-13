const csv = require('csv-parser')
const fs = require('fs')
const result = [];

fs.createReadStream('read.csv')
.pipe(csv({}))
.on('data', (data) => result.push(data))
.on('end', ()=> {
   // console.log(result);
    farm("farm_name","GeetaBhawan",result);
});

function farm (key , value, list){
    list.forEach((farm)=>{
             if (farm[key] == value) {
                console.log(farm)
             } 
    });
}
    