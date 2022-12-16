var express = require('express');
const constants = require('./config/constants');

const routes = require('./routes/routes');
// const bodyParser = require("body-parser");


const app = express();
const db = require("./database/sequelize.js");
db.sequelize.sync();
app.use(express.json());


// Adding routes
app.use('/api/v1',routes);

app.listen(constants.dev.PORT,constants.dev.HOST);

console.log(`Server started at ${constants.dev.HOST}:${constants.dev.PORT}`);
module.exports = app;
