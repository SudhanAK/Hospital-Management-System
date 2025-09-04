require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const Admin = require('./model/Admin');
const Billcontroller = require('./controller/Billcontroller');
const Prescriptioncontroller = require('./controller/Prescriptioncontroller');
const Patientschedulecontroller = require('./controller/Patientschedulecontroller');
const Doctorschedulecontroller = require('./controller/Doctorschedulecontroller');
const Patientroute = require('./route/Patientroute');
const Doctorroute = require('./route/Doctorroute');
const Doctorscheduleroute = require('./route/Doctorscheduleroute');
const Patientscheduleroute = require('./route/Patientscheduleroute');
const Prescriptionroute = require('./route/Prescriptionroute');
const Receptionroute = require('./route/Receptionroute');
const Logincontroller = require('./controller/Login');
const PatientDetails = require('./controller/PatientDetails');
const Patientcontroller = require('./controller/Patientcontroller');
const Doctorcontroller = require('./controller/Doctorcontroller');
const Receptioncontroller = require('./controller/Receptioncontroller');
const Messagecontroller = require('./controller/Messagecontroller');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

 mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  socketTimeoutMS: 60000,
  connectTimeoutMS: 60000
})
.then(() => {
  console.log("  MongoDB Connected");
})
.catch((err) => console.error("  MongoDB Error:", err));

 app.get('/', (req, res) => {
  res.send('Backend is running  ');
});

 app.use('/add-patient', Patientroute);
app.use('/add-doctor', Doctorroute);
app.use('/add-doctor-schedule', Doctorscheduleroute);
app.use('/add-patient-schedule', Patientscheduleroute);
app.use('/add-prescription', Prescriptionroute);
app.use('/add-reception', Receptionroute);

app.post('/login', Logincontroller.login);
app.post('/patient-detail', PatientDetails.patientdetails);
app.post('/show-patient', Patientcontroller.showPatient);
app.post('/show-doctor', Doctorcontroller.showDoctor);
app.post('/show-reception', Receptioncontroller.showReception);

app.post('/all-patient', Patientcontroller.allPatient);
app.post('/all-doctor', Doctorcontroller.allDoctor);
app.post('/all-reception', Receptioncontroller.allReception);

app.post('/update-patient', Patientcontroller.updatePatient);
app.post('/update-doctor', Doctorcontroller.updateDoctor);
app.post('/update-reception', Receptioncontroller.updateReception);

app.post('/update-prescription', Prescriptioncontroller.updatePrescription);

app.post('/delete-patient', Patientcontroller.deletePatient);
app.post('/delete-doctor', Doctorcontroller.deleteDoctor);
app.post('/delete-reception', Receptioncontroller.deleteReception);

app.post('/s-reception', Prescriptioncontroller.sprescription);
app.post('/doctor-schedule', Doctorschedulecontroller.searchDoctor);
app.post('/set-bill', Billcontroller.setBill);
app.post('/search-bill', Billcontroller.searchbill);
app.post('/delete', Doctorschedulecontroller.delete);
app.post('/patient-delete', Patientschedulecontroller.delete);
app.post('/details', Patientschedulecontroller.details);
app.post('/add-message', Messagecontroller.addMessage);
app.post('/get-message', Messagecontroller.getMessage);
app.post('/update-message', Messagecontroller.updateMessage);
app.post('/reply-message', Messagecontroller.replyMessage);

 app.listen(PORT, () => {
  console.log(`  Server running on port ${PORT}`);
});
