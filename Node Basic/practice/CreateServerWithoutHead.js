const http = require('http');
const express = require('express');
http.createServer((req,res)=>{
    res.write("new Server");
    res.end();
})
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
  }).listen(8080);