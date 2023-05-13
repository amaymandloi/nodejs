const express = require('express');
const reqFilter=require('./middleware')
const app = express();
const route = express.Router();

route.use(reqFilter)
app.get('/',(req,res)=>{
    res.send('welcome to home page')
})

route.get('/user',(req,res)=>{
    res.send('welcome to user page')
});

app.use('/', route);
app.listen(1500)