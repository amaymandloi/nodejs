const express = require("express");

const router = express.Router();

const employeeController = require("../controllers/employeeController");

// Creating new user
router.post("/employee", employeeController.createEmployee);
// Get all users
router.get("/employee", employeeController.getAllEmployee);
// Get user by Id
router.get("/employee/:id", employeeController.getEmployeeById);
// To update user
router.put("/employee", employeeController.updateEmployee);
// Delete user by Id
router.delete("/employee/:id", employeeController.deleteEmployee);

module.exports = router;
