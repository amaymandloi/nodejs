const employeeDAO = require('../dao/empdao')

module.exports.verifyEmployee = async(req, res) => {
  
    try {

        const result = await employeeDAO.verifyToken();
        res.status(200).send(result, {status: true});
    } catch (error) {        
        res.status(400).send({ status: false, error: error.message })
    }
    
};