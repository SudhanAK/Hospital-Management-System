const Prescription = require('../model/Prescription');

// Add prescription with billing
exports.setPrescription = async (req, res) => {
  try {
    const pres = req.body;
    console.log("Incoming prescription:", pres);

    const prescription = new Prescription({
      doctor: pres.docname,    
      date: pres.date,
      patient: pres.patname,
      problem: pres.patprob,
      gender: pres.patgen,
      age: pres.patage,
      bloodpressure: pres.bp,
      sugar: pres.sugar,
      oxygen: pres.oxygen,
      weight: pres.weight,
      height: pres.height,
      temperature: pres.temp,
      medname: pres.medname || [],
      dose: pres.meddose || [],
      frequency: pres.medfreq || [],
      duration: pres.meddur || [],
      route: pres.medroute || [],
       
    });

    await prescription.save();
    console.log("Prescription saved successfully");
    res.send("submitted");
  } catch (err) {
    console.error(err);
    res.status(500).json({ err });
  }
};

// Search prescription by patient name
module.exports.sprescription = async (req, res) => {
  try {
    const { sname } = req.body;
    console.log("Searching prescriptions for:", sname);

    if (!sname) {
      return res.status(400).json({ error: "sname is required" });
    }

    // Only fetch pending prescriptions
    const reception = await Prescription.find({
      patient: sname,
     });

    console.log("Found records:", reception);
    res.json(reception);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// In your controller
module.exports.updatePrescription = async (req, res) => {
  try {
    const { _id, status, amount, total } = req.body;

    if (!_id) {
      return res.status(400).json({ error: "Prescription _id is required" });
    }

    const updated = await Prescription.findByIdAndUpdate(
      _id,
      { status, amount, total },
      { new: true }  // return updated document
    );

    if (!updated) {
      return res.status(404).json({ error: "Prescription not found" });
    }

    res.json({ success: true, data: updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};


