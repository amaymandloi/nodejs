const db = require("../database/sequelize.js");
const employee = require("../models/employee.js");
console.log(db.employee);

const Employee = db.employee;
// const Op = db.Sequelize.Op;

module.exports.create = async (employee) => {
    try {
        const result = await Employee.create(employee);        
        return result.dataValues;
    } catch (error) {
        throw new Error(error.message);        
    }
}

module.exports.findAll = async () => {    
    const condition = {};
    try {
        const result = await Employee.findAll(condition);
        return result.map((obj) => obj.dataValues);
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports.find = async (empid) => {
    console.log('find() method for employee based on id is called.');
    const condition = {
        where: {
            empid
        }
    };
    try {
        const result = await Employee.findOne(condition);
        if (result) {
            return result.dataValues;
        } else {
            return {};
        }
    } catch (error) {        
        throw new Error(error.message);
    }
}

module.exports.update = async (params) => {
    const condition = {
        where: {
            empid: params.empid
        }
    };
    try {
        const result = await Employee.update(params, condition);
        if(result[0] == 0){
            throw new Error('No record not found to update');
        }else{
            return true;
        }                
    } catch (error) {        
        throw new Error(error.message);
    }
}

module.exports.delete = async (empid) => {
    const condition = {
        where: {
            empid
        }
    };
    try {
        const result = await Employee.destroy(condition);
        if(result == 0){
            throw new Error('No record not found to delete');
        }else{
            return true;
        }        
        
    } catch (error) {        
        throw new Error(error.message);
    }
}

module.exports.generate_token = () =>{
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        let data = {
            time: Date()
        }
        const token = jwt.sign(data, jwtSecretKey);
        return token;
     };

module.exports.verifyToken = () =>{

    
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
  
    try {
        const token = req.header(tokenHeaderKey);
  
        const verified = jwt.verify(token, jwtSecretKey);
        if(verified){
            return res.send("Successfully Verified");
        }else{
            // Access Denied
            return res.status(401).send(error);
        }
    } catch (error) {
        // Access Denied
        return res.status(401).send(error);
    }
}