const express =require ('express');
let app = express();
app.get('/', function(req,res){
    res.send("hello amay");
})

let server = app.listen(8080, function (){
    let host = server.address().address
    let port = server.address().port
    console.log("example",host,port)
})