const mongoose=require('mongoose'); 

const schema=mongoose.Schema({
    id:Number,
    name:String, 
    password:String,
    role:String,   
    mail:String,
    mobile:String,
    dob:String,
    gender:String,
    bloodgroup:String,
    address:String,
    state:String,
    city:String,
    pin:String


});


module.exports =mongoose.model('Patient',schema);