const express = require('express');
const app = express();
const  reqFilter =(req,resp,next)=>{
   if(!req.query.age){
    resp.send("Please provide your age")
   }
   else if(req.query.age<=18){
    resp.send("you are under aged");
   }
   else {
    next();
   }
}
app.use(reqFilter);
app.get('/',(res,resp)=>{
    resp.send('welcome to home page')
});

app.get('/users',(res,resp)=>{
    resp.send('welcome to user page')
});
app.listen(5003)