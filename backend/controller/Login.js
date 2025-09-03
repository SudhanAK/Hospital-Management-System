const Admin = require('../model/Admin');
const Doctor = require('../model/Doctor');
const Patient = require('../model/Patient');
const Receptionist = require('../model/Reception');
const bcrypt = require('bcrypt');

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Login attempt:", email);

     const admin = await Admin.findOne({ mail: email });
    if (admin ) {
      return res.json({ success: true, role: "admin", mail: admin.mail });
    }

    const doctor = await Doctor.findOne({ mail: email });
    if (doctor && await bcrypt.compare(password, doctor.password)) {
      return res.json({ success: true, role: "doctor", mail: doctor.mail });
    }

    const patient = await Patient.findOne({ mail: email });
    if (patient && await bcrypt.compare(password, patient.password)) {
      return res.json({ success: true, role: "patient", mail: patient.mail });
    }

    const reception = await Receptionist.findOne({ mail: email });
    if (reception && await bcrypt.compare(password, reception.password)) {
      return res.json({ success: true, role: "receptionist", mail: reception.mail });
    }

     res.status(404).json({ success: false, message: "Invalid email or password" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
};
