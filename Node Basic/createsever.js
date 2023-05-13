const http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'application/JSON'});
    res.end("hello");
}).listen(8080);