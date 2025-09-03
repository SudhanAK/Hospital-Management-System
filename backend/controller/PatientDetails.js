const Patient=require('../model/Patient')


module.exports.patientdetails=async(req,res)=>{
    const mail=req.body
    const patient=await Patient.findOne(mail);
    res.json(patient)
}