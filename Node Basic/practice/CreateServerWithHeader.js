const { application } = require('express');
const http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200, {"Content-Type": 'application/JSON'})
    res.write("createserverwithheader");
    res.end();
}).listen(8080);