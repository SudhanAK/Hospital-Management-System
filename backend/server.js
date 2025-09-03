const express=require('express');
const exp=express();
const cors=require('cors');
const mongoose=require('mongoose');
const Admin=require('./model/Admin')
const Billcontroller=require('./controller/Billcontroller')
 const Prescriptioncontroller=require('./controller/Prescriptioncontroller')
const Patientschedulecontroller=require('./controller/Patientschedulecontroller')
const Doctorschedulecontroller=require('./controller/Doctorschedulecontroller')
const Patientroute=require('./route/Patientroute')
const Doctorroute=require('./route/Doctorroute')
const Doctorscheduleroute=require('./route/Doctorscheduleroute')
const Patientscheduleroute=require('./route/Patientscheduleroute')
const Prescriptionroute=require('./route/Prescriptionroute')
const Receptionroute=require('./route/Receptionroute')
const Logincontroller=require('./controller/Login')
const PatientDetails=require('./controller/PatientDetails')
const Patientcontroller=require('./controller/Patientcontroller')
const Doctorcontroller=require('./controller/Doctorcontroller')
const Receptioncontroller=require('./controller/Receptioncontroller')
const Messagecontroller=require('./controller/Messagecontroller')
mongoose.connect('mongodb+srv://sudhan1:1234@myapp.x9dwhqr.mongodb.net/Patient?retryWrites=true&w=majority&appName=MyApp',{
    socketTimeoutMS:60000,connectTimeoutMS:60000

})
.then(()=>{console.log("MongoDB Connected");
            const admin=new Admin({
                name:"Sudhan",
                password:"12345",
                role:"Admin",
                mail:"admin@gmail.com",
                number:"9159975444"
            })
            //admin.save()  
})
.catch((err)=>console.log(err))


exp.use(cors());
exp.use(express.json());
exp.use('/add-patient',Patientroute) ;
exp.use('/add-doctor',Doctorroute);
exp.use('/add-doctor-schedule',Doctorscheduleroute);
exp.use('/add-patient-schedule',Patientscheduleroute);

exp.use('/add-prescription',Prescriptionroute);
exp.use('/add-reception',Receptionroute);

exp.post('/login',Logincontroller.login)
exp.post('/patient-detail',PatientDetails.patientdetails)
 exp.post('/show-patient',Patientcontroller.showPatient)
  exp.post('/show-doctor',Doctorcontroller.showDoctor)
    exp.post('/show-reception',Receptioncontroller.showReception)





exp.post('/all-patient',Patientcontroller.allPatient)
  exp.post('/all-doctor',Doctorcontroller.allDoctor)
    exp.post('/all-reception',Receptioncontroller.allReception)



exp.post('/update-patient',Patientcontroller.updatePatient) 
exp.post('/update-doctor',Doctorcontroller.updateDoctor)  
exp.post('/update-reception',Receptioncontroller.updateReception)  

exp.post("/update-prescription",Prescriptioncontroller.updatePrescription);


exp.post('/delete-patient',Patientcontroller.deletePatient) ;
exp.post('/delete-doctor',Doctorcontroller.deleteDoctor) 
exp.post('/delete-reception',Receptioncontroller.deleteReception)  

exp.post('/s-reception',Prescriptioncontroller.sprescription)
exp.post('/doctor-schedule',Doctorschedulecontroller.searchDoctor)
exp.post('/set-bill',Billcontroller.setBill)
exp.post('/search-bill',Billcontroller.searchbill)
exp.post('/delete',Doctorschedulecontroller.delete);
exp.post('/patient-delete',Patientschedulecontroller.delete)
exp.post('/details',Patientschedulecontroller.details)
exp.post('/add-message',Messagecontroller.addMessage)
exp.post('/get-message',Messagecontroller.getMessage)
exp.post('/update-message',Messagecontroller.updateMessage) 
exp.post('/reply-message',Messagecontroller.replyMessage)
exp.listen(3000,(err)=>{
    console.log(" Server Connected");
    if(err) console.log(err);
}) 