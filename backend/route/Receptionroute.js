const express=require('express');
const router=express.Router();
const Receptioncontroller=require('../controller/Receptioncontroller');


router.post('/',Receptioncontroller.addReception)


module.exports =router;