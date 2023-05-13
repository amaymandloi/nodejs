const mysql=require('mysql8');

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'example'
});
module.exports=connection;
