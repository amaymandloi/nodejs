const express = require('express');
const app = express();

app.get('/', function(req, res){
   
   let err = new Error("Something went wrong");
   next(err);
});

app.use(function(err, req, res, next) {
   res.status(500);
   res.send("Oops, something went wrong.")
});

app.listen(3000);