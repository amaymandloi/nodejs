const http =require('http');
const dt = require('./dateTime');
http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'application/JSON'});
    res.write("date-time:"+ dt.myDateTime());
    res.end();
}).listen(8080);