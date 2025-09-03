const mongoose=require('mongoose');


const schema=mongoose.Schema({
    id:Number,
    name:String,
    role:String,
    password:String,
    qualification:String,
    specialization:String,
    experience:String,
    mail:String,
    mobile:String,
    dob:String,
    gender:String,
    address:String,
    state:String,
    city:String,
    pin:String
})


module.exports=mongoose.model('Doctor',schema);