const http=require('http');
const url = require('url');

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'application/JSON'});
    const q = url.parse(req.url, true).query;
    const txt = q.name+"'s birthday is "+q.Date + " " + q.month + " " + q.year;
    res.end(txt);
}).listen(8080);
