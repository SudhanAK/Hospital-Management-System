const DoctorSchedule=require('../model/Doctorschedule');

exports.addSchedule=async(req,res)=>{
    try{
        const sch=req.body;
        const schedule=new DoctorSchedule({
            nameid:sch.docname,
            week:sch.week,
            duty:sch.duty,
            date:sch.date,
            time:sch.timeslot
        })
        await schedule.save();
        console.log("Doctor Schedule Saved");
        res.send("submitted");

    }catch(err){
        res.status(500).json({"err":err})
    }

}


module.exports.searchDoctor=async(req,res)=>{
    const docname=req.body;
    const result=await DoctorSchedule.find();
    res.json(result)
}

module.exports.delete=async(req,res)=>{
    try{
    const dele=req.body;
    console.log("hii")
     
    const d=await DoctorSchedule.findOneAndDelete({nameid:dele.docname,
            week:dele.week,
            duty:dele.duty,
            date:dele.date,
            time:dele.timeslot}); 
     
    console.log("deleted") 
    res.json(d)
    }catch(err){
        console.log(err)
    }      
}