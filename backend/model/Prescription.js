const mongoose=require('mongoose');


const schema=mongoose.Schema({
    doctor:String,    
    date:String,
    patient:String,
    problem:String,
    gender:String,
    age:String,
    bloodpressure:String,
    sugar:String,
    oxygen:String,
    weight:String,
    height:String,
    temperature:String,
    medname:[String],
    dose:[String],
    frequency:[String],
    duration:[String],
    route:[String],
     
    

})

module.exports=mongoose.model('Prescription',schema);