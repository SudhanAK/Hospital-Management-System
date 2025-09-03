const Doctorschedule = require('../model/Doctorschedule');
const PatientSchedule=require('../model/Patientschedule');

exports.addSchedule=async(req,res)=>{
    try{
        const sch=req.body;
        const schedule=new PatientSchedule({
            nameid:sch.patname,   
            date:sch.date,
            time:sch.start,
            purpose:sch.purpose,
            doctor:sch.docname,
            status:sch.status
        })
        await schedule.save();
        console.log("Patient Schedule Saved");
        res.send("submitted");

    }catch(err){
        res.status(500).json({"err":err})
    }

}

module.exports.details = async (req, res) => {
  try {
    const { search } = req.body;   // expect { "search": "someName" }
    console.log("Search value:", search);

    const details = await PatientSchedule.find({ nameid: search });
    res.json(details);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: err.message || err });
  }
};

module.exports.delete=async(req,res)=>{
    try{
    const dele=req.body;
    console.log("hii")
    console.log(dele) 
    const d=await PatientSchedule.findOneAndDelete({
            nameid:dele.nameid,   
            date:dele.date,
            time:dele.time,
            purpose:dele.purpose,
            doctor:dele.doctor,
            status:dele.status}); 
     
    console.log("deleteds") 
    res.json(d)
    }catch(err){
        console.log(err)
    }      
}