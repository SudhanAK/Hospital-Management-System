const express=require('express');
const router=express.Router()
const Prescriptioncontroller=require('../controller/Prescriptioncontroller')


router.post('/',Prescriptioncontroller.setPrescription);

module.exports=router;