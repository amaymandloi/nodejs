const express = require('express');

const router = express.Router();

const employeeController = require('../controllers/employeeController');
const authController = require('../controllers/auth.controller')

// Creating new user
router.post('/employee', employeeController.createEmployee);
// Get all users
router.get('/employee', employeeController.getAllEmployee);
// Get user by Id
router.get('/employee/:id', employeeController.getEmployeeById);
// To update user
router.put('/employee', employeeController.updateEmployee);
// Delete user by Id
router.delete('/employee/:id', employeeController.deleteEmployee);
//Signing in a user by email
router.post('/login', employeeController.loginEmployee);
//generating jwt token
router.post('/employee/generatetoken', employeeController.generatToken);
//verifying jwt token
router.get('/employee/verifyToken', authController.verifyEmployee);


module.exports = router;