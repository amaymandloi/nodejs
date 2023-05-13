const express= require('express');
const app= express();

//middleware
const reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("please provide age")
    }else if(req.query.age<18){
        res.send("you can not access this page")
    }else{
        next();
    }
}
// app.use(reqFilter)

app.get('/',(req,res)=>{
    res.send('welcome to home page')
})

app.get('/user',reqFilter,(req,res)=>{
    res.send('welcome to user page')
})
app.listen(1500)