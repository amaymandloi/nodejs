const express = require('express');
const reqFilter= require('./router');
const app = express();
const route = express.Router()
route.use(reqFilter);  
app.get('/home',(res, resp)=>{
    resp.send('welcome to home page')
});

app.get('/users',reqFilter, (res, resp)=>{
    resp.send('welcome to user page')
});

route.get('/about',reqFilter, (res, resp)=>{
    resp.send("welcome to about page")
});

app.get('/contact', (res, resp)=>{
    resp.send('welcome to contact page')
});
app.use('/',route);

app.listen(5006)