const express=require("express");
const router=express.Router()
const Patientschedulecontroller=require('../controller/Patientschedulecontroller')


router.post('/',Patientschedulecontroller.addSchedule);


module.exports=router;