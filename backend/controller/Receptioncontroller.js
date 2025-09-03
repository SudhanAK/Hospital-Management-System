const Reception=require('../model/Reception');
const Counter2=require('../model/Counter')


exports.addReception= async(req,res)=>{
    try{
        const counter=await Counter2.findOne({name:"patient"});
        if(!counter){
            const add=new Counter2({id:100,name:"patient"});
            await add.save();
        }
        counter.id+=1;
        counter.save();
        const pat=req.body;
        console.log(req.body);
        const reception=new Reception({
            id:counter.id,
            name:pat.name,
            password:pat.pass,
            role:"Reception",
            mail:pat.mail,
            mobile:pat.num,
            dob:pat.dob,
            gender:pat.gen,
             
            address:pat.addr,
            state:pat.state,
            city:pat.city,
            pin:pat.pin
        })
        await reception.save()
        console.log("Reception  saved to DB ")
        res.send("result sent")
    }catch(err){
        res.status(500).json({ error: err.message || "Internal Server Error" });
         
    }
}




module.exports.showReception=async(req,res)=>{
    const name=req.body;
    console.log(name)
    const reception= await Reception.findOne(name);
    res.json(reception)
}

module.exports.allReception=async(req,res)=>{
     
     
    const reception= await Reception.find();
    res.json(reception)
}

module.exports.updateReception=async(req,res)=>{
    const get=req.body;
    const id=get.receptionid
    const update={id:get.receptionid,
        name:get.receptionname, 
        password:get.receptionpass,
        role:"Reception",   
        mail:get.receptionmail,
        mobile:get.receptionmobile,
        dob:get.receptiondob,
        gender:get.receptiongender,
         
        address:get.receptionaddress,
        state:get.receptionstate,
        city:get.receptioncity,
        pin:get.receptionpin} 
     
    const reception= await Reception.findOneAndUpdate(
        {id:id},
        {$set:update},
        {new:true}
         
    );
    res.json({ms:"updated"})
    console.log("Updated")
}


module.exports.deleteReception=async(req,res)=>{
    const get=req.body;
    const id=get.receptionid
     
         
     
    const reception= await Reception.findOneAndDelete(
        {id:id}       
         
    );
    res.json({ms:"deleted"})
    console.log("Deleted")
}