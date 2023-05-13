const express = require('express');
const controller = ('./controllers/employeeController.js')
const constants = require('./config/constants');
const routes = require('./routes/routes.js')
const app = express();
const db = require("./database/sequelize.js");
db.sequelize.sync();
app.use(express.json());

// Adding routes
app.use('/api/v1', routes);

app.listen(constants.dev.PORT, constants.dev.HOST);
console.log(`server started at ${constants.dev.HOST}:${constants.dev.PORT}`);
module.exports = app;
