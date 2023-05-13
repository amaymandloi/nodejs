const express = require('express');
const app=express();

app.get("",(req,res)=>{
    res.send("<h1>Welcome</h1>");
});

app.get("/about",(req, res)=>{
res.send(`<input type="text" placeholder="username"/>
<button>click me </button> `);
}); 
app.listen(2000)