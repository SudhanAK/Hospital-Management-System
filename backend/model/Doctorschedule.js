const mongoose=require('mongoose');


const schema= mongoose.Schema({
    nameid:String,
    week:String,
    duty:String,
    date:String,
    time:String

})


module.exports=mongoose.model('DoctorSchedule',schema);