const employeeDAO = require('../dao/empdao')

module.exports.createEmployee = async (req, res) => {    
    try {
        const result = await employeeDAO.create(req.body);
        res.status(200).send({status: true, data: result});
    } catch (error) {        
        res.status(400).send({ status: false, error: error.message })
    }

}


module.exports.getAllEmployee = async (req, res) => {
    try {
        const result = await employeeDAO.findAll();
        console.log("result==> " ,result);
        res.status(200).send({status: true, data: result});    
    } catch (error) {
        res.status(400).send({ status: false, error: error.message })
    }
    
}
module.exports.getEmployeeById = async (req, res) => {    
    try {
        console.log('Method getEmployeeById called');
        
        console.log('req param==>  ', req.params.id);
        const result = await employeeDAO.find(req.params.id);
        console.log('Employee based on Employee id returned');
        res.status(200).send({status: true, data: result});
    } catch (error) {
        res.status(400).send({ status: false, error: error.message });
    }
}
module.exports.updateEmployee = async (req, res) => {    
    try {

        console.log('Method updateEmployee() called to update employee based on id');
        const result = await employeeDAO.update(req.body);
        console.log('Updated employee returned based on Id');

        res.status(200).send({status: true});
    } catch (error) {        
        res.status(400).send({ status: false, error: error.message })
    }
}
module.exports.deleteEmployee = async (req, res) => {    
    try {
        const result = await employeeDAO.delete(req.params.id);
        res.status(200).send({status: true});
    } catch (error) {
        res.status(400).send({ status: false, error: error.message });
    }
}

    module.exports.loginEmployee = async (req,res) =>{

        try{
            const result = await employeeDAO.login(req.body);
            res.status(200).send({status: true});
        }
        catch(error)
        {
            res.status(400).send({status: false, error: error.message});
        }
    }

    module.exports.generatToken = async (req, res) =>{

        try {
            const result = await employeeDAO.generate_token();
            res.status(200).send(result);
        }
        catch(error)
        {
            res.status(400).send({status: false, error: error.message});
        }
    }




