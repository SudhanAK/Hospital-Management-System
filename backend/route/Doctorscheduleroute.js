const express=require("express");
const router=express.Router()
const Doctorschedulecontroller=require('../controller/Doctorschedulecontroller')


router.post('/',Doctorschedulecontroller.addSchedule);


module.exports=router;