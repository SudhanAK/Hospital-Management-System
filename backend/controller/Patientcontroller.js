const Patient=require('../model/Patient');
const Counter=require('../model/Counter')
const bcrypt=require('bcrypt')
const rounds=10

exports.addPatient= async(req,res)=>{
    try{
        const counter=await Counter.findOne({name:"patient"});
        if(!counter){
            const add=new Counter({id:100,name:"patient"});
            await add.save();
        }
        counter.id+=1;
        counter.save();
        const pat=req.body;
        console.log(req.body);
        const password= await bcrypt.hash(pat.pass,rounds)
        const patient=new Patient({
            id:counter.id,
            name:pat.name,
            password:password,
            role:"Patient",
            mail:pat.mail,
            mobile:pat.num,
            dob:pat.dob,
            gender:pat.gen,
            bloodgroup:pat.bg,
            address:pat.addr,
            state:pat.state,
            city:pat.city,
            pin:pat.pin
        })
        await patient.save()
        console.log("Patient  saved to DB ")
        res.send("Patient Registered!!")
    }catch(err){
        res.status(500).json({ error: err.message || "Internal Server Error" });
         
    }
}


module.exports.showPatient=async(req,res)=>{
    const name=req.body;
    console.log(name)
    const patient= await Patient.findOne(name);
    res.json(patient)
}

module.exports.allPatient=async(req,res)=>{
     
     
    const patient= await Patient.find();
    res.json(patient)
}

module.exports.updatePatient=async(req,res)=>{
    const get=req.body;
    const id=get.patientid
    const Password= await bcrypt.hash(get.patientpass,rounds)
    const update={id:get.patientid,
        name:get.patientname, 
        password:Password,
        role:"Patient",   
        mail:get.patientmail,
        mobile:get.patientmobile,
        dob:get.patientdob,
        gender:get.patientgender,
        bloodgroup:get.patientbloodgroup,
        address:get.patientaddress,
        state:get.patientstate,
        city:get.patientcity,
        pin:get.patientpin} 
     
    const patient= await Patient.findOneAndUpdate(
        {id:id},
        {$set:update},
        {new:true}
         
    );
    res.json({ms:"updated"})
    console.log("Updated")
}


module.exports.deletePatient=async(req,res)=>{
    const get=req.body;
    const id=get.patientid
     
         
     
    const patient= await Patient.findOneAndDelete(
        {id:id}       
         
    );
    res.json({ms:"deleted"})
    console.log("Deleted")
}