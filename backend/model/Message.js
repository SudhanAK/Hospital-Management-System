const mongoose=require('mongoose');


const schema=mongoose.Schema({
    id:Number,
    name:String,
    message:String,
    reply:String,
    date:String
})


module.exports=mongoose.model('Message',schema);