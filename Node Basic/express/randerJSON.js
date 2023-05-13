const express= require('express');
const app = express();

app.get("",(req,res)=>{
    res.send([
        {name:"amay",email:"amaymandloi@gmail.com"},
        {name:"amay",email:"amaymandloi@gmail.com"},
        {name:"amay",email:"amaymandloi@gmail.com"},
        {name:"amay",email:"amaymandloi@gmail.com"},
        {name:"amay",email:"amaymandloi@gmail.com"},
        {name:"amay",email:"amaymandloi@gmail.com"},
        {name:"amay",email:"amaymandloi@gmail.com"}
    ])
})
app.listen(1000)