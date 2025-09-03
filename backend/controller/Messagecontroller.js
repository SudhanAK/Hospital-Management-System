const Message=require('../model/Message')
const mongoose=require('mongoose');


module.exports.addMessage=async (req,res)=>{
    const mess=req.body;
    const message=new Message({
        id:mess.id,
        name:mess.name,
        message:mess.message,
        date:new Date()
    })
    await message.save()
    res.json({msg:"Message Sent!"})
} 

module.exports.getMessage=async (req,res)=>{
    const message= await Message.find();
    res.json(message)
}

module.exports.updateMessage=async (req,res)=>{
    const mess=req.body;
    await Message.findOneAndUpdate({id:mess.id},{$set:{reply:mess.reply}},{new:true});
    res.json({msg:"reply sent"}) 
    console.log("REply sent")
} 

module.exports.replyMessage = async (req, res) => {
  try {
    const { id } = req.body;                      
    const reply = await Message.find({ id });      
    res.json(reply);                               
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
