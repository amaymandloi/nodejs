const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>{
    fs.readFile('../ReadFile/demo.html', function(err, data){
        res.writeHead
res.write(data);
return res.end();
    });
}).listen(8081)