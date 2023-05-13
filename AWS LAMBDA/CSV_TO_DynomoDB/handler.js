module.exports = dependencies => async function(event,context,callback){
    let response = await accessFarm(dependencies.ddb);
    console.log(response);
    return JSON.stringify(response);
};
const csv = require("csv-parser");
const fs = require("fs");
//function To read CSV
const farms = [];
function fetchDta() {
    const promiseToken = new Promise((resolve, reject) => {
        fs.createReadStream("./read.csv")
            .pipe(csv())
            .on("data", (data) => farms.push(data))
            .on("end", () => {
                resolve(farms);
            });
    });
    return promiseToken;
}
const promiseResult = fetchDta();
async function accessFarm(ddb){
    let resultant;
    // promiseResult.then((promiseData)=>promiseData.forEach(obj=>{
    //   //console.log(obj);
    //   resultant = await save(obj,ddb);
    // } ));
    resultant= await promiseResult;
    for(let i of resultant){
        console.log(JSON.parse(JSON.stringify(i)));

        await save(JSON.parse(JSON.stringify(i)),ddb);
    }
    // resultant.forEach(obj=>{
    //     console.log(JSON.parse(JSON.stringify(obj)));

    //     save(JSON.parse(JSON.stringify(obj)),ddb);
    // })
    return resultant;
}
function save(obj, ddb) {
     console.log(obj);
      return ddb.put({
        TableName: 'CSVData',
        Item: obj,
    }).promise();
}