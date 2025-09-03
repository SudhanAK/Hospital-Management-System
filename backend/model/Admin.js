const mongoose=require('mongoose');


const schema=mongoose.Schema({
    name:String,
    password:String,
    role:String,
    mail:String,
    mobile:String
})

module.exports=mongoose.model('Admin',schema);