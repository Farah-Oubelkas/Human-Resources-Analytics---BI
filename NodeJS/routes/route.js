const express =  require('express');
const controller = require('../controller/controller')

const router = express.Router();
router.get('/getAllEmployees', controller.getAllEmployees);
router.post('/addNewEmployee' , controller.addNewEmployee);
router.put('/updateEmployeeDetails/:id',controller.updateEmployeeDetails);
router.delete('/deleteEmployee/:id' , controller.deleteEmployee);

module.exports = router;