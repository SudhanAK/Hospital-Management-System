const mongoose=require('mongoose');


const schema= mongoose.Schema({
    nameid:String,   
    date:String,
    time:String,
    purpose:String,
    doctor:String,
    status:String

})


module.exports=mongoose.model('PatientSchedule',schema);