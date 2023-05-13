const express = require('express')
const app=express()
app.get('',(req, res)=>{
    res.send('welcome, this is home page');
});
app.get('/about',(req, res)=>{
    res.send("welcome , this is about page");
});
app.get('/help',(req, res)=>{
    res.send("welcome , this is help page")
})
app.listen(5000)