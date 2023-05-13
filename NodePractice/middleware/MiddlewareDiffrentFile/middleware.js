const express = require('express');
const reqFilter= require('./router');
const app = express();

app.get('/',(res, resp)=>{
    resp.send('welcome to home page')
});

app.get('/users',reqFilter, (res, resp)=>{
    resp.send('welcome to user page')
});
app.listen(5005)