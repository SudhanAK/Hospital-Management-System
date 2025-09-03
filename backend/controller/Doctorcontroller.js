const Doctor=require('../model/Doctor')
const Counter1=require('../model/Counter')

exports.addDoctor=async(req,res)=>{
    try{
        const counter=await Counter1.findOne({name:"doctor"})   ;
        if(!counter){
            count=new Counter1({id:100,name:"doctor"})
            await count.save();
        } 
        counter.id+=1;
        counter.save();
        const doc=req.body;
        const doctor=new Doctor({
        
            id:counter.id,
            name:doc.name,
            role:"Doctor",
            password:doc.pass,
            qualification:doc.qual,
            specialization:doc.special,
            experience:doc.exp,
            mail:doc.mail,
            mobile:doc.num,
            dob:doc.dob,
            gender:doc.gen,
            address:doc.addr,
            state:doc.state,
            city:doc.city,
            pin:doc.pin

        })
        await doctor.save();
        console.log("Doctor Added to DB")
        res.send("sent")
    }catch(err){
      res.status(500).json({err})
    }

} 

module.exports.allDoctor=async(req,res)=>{
     
     
    const doctor= await Doctor.find();
    res.json(doctor)
}

module.exports.updateDoctor=async(req,res)=>{
    const get=req.body;
    const id=get.doctorid
    const update={id:get.doctorid,
        id:doctorid,
    name:doctorname,
    role:"Doctor",
    password:get.doctorpass,
    qualification:get.doctorqual,
    specialization:get.doctorspecial,
    experience:get.doctorexp,
    mail:get.doctormail,
    mobile:get.doctormobile,
    dob:get.doctordob,
    gender:get.doctorgender,
    address:get.doctoraddress,
    state:get.doctorstate,
    city:get.doctorcity,
    pin:get.doctorpin} 
     
    const doctor= await Doctor.findOneAndUpdate(
        {id:id},
        {$set:update},
        {new:true}
         
    );}

    module.exports.deleteDoctor=async(req,res)=>{
        const get=req.body;
        const id=get.doctorid
         
             
         
        const doctor= await Doctor.findOneAndDelete(
            {id:id}       
             
        );
        res.json({ms:"deleted"})
        console.log("Deleted")
    }

    module.exports.showDoctor=async(req,res)=>{
        const name=req.body;
        console.log(name)
        const doctor= await Doctor.findOne(name);
        res.json(doctor)
    }