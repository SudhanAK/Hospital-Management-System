const express=require('express');
const router=express.Router();
const Patientcontroller=require('../controller/Patientcontroller');


router.post('/',Patientcontroller.addPatient)


module.exports =router;