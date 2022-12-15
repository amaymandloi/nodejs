p = function(x,y){
    console.log("x= "+x , "y= "+y);
    positiveSum(x, y).then(result=>{
        console.log("Sum ="+result);
    }).catch(err=>{
        console.log(err)
        console.log("end of function")
    })
}

positiveSum=function(x,y){
    return new Promise(function(resolve, reject){
        if(x+y>0){
            resolve(x+y);
        }
        else{
            reject("sum is less than zero")
        }
    })
}
p(10,-23);