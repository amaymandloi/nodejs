p = function (x,y) {
    console.log("x= "+x, "y" +y);
    let sum = add(x,y, function(result){
        console.log("sum = " + result);
    });
    console.log("end of program");
}

add = function (x, y, callback) {
    setTimeout(function () {
        console.log('performed after 5000ms');
        callback(x + y);
    }, 5000);
}
p(10,13);