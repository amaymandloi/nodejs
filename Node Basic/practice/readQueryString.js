const http = require('http');
http.createServer((req,res)=>{
    res.write(req.url);
    res.end();
}).listen(8080);