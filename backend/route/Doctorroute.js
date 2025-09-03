const express=require('express');
const router=express.Router()

const Doctorcontroller=require('../controller/Doctorcontroller')



router.post('/',Doctorcontroller.addDoctor);

module.exports=router;