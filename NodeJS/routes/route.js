const express =  require('express');
const controller = require('../controller/controller')

const router = express.Router();
router.get('/getAllEmployees', controller.getAllEmployees);
router.post('/addNewEmployee' , controller.addNewEmployee);
router.put('/updateEmployeeDetails/:id',controller.updateEmployeeDetails);
router.delete('/deleteEmployee/:id' , controller.deleteEmployee);


router.get('/accident', controller.getAllAccident);
router.post('/addAccident' , controller.addNewAccident);
router.put('/updateAccidentDetails/:id',controller.updateAccidentDetails);
router.delete('/deleteAccident/:id' , controller.deleteAccident);

router.get('/recruitment', controller.getAllrecruitment);
router.post('/addrecruitment' , controller.addNewrecruitment);
router.put('/updaterecruitmentDetails/:id',controller.updaterecruitmentDetails);
router.delete('/deleterecruitment/:id' , controller.deleterecruitment);

module.exports = router;