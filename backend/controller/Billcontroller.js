const Bill = require('../model/Bill');

// Add prescription with billing
exports.setBill = async (req, res) => {
  try {
    const pres = req.body;
    console.log("Incoming bill:", pres);

    const bill = new Bill({
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
      status:pres.status,
      amount:pres.amount || [],
      total:pres.total
       
    });

    await bill.save();
    console.log("Prescription saved successfully");
    res.send("submitted");
  } catch (err) {
    console.error(err);
    res.status(500).json({ err });
  }
};


module.exports.searchbill = async (req, res) => {
  try {
    const { sname } = req.body;
    console.log("Searching bill for:", sname);

    if (!sname) {
      return res.status(400).json({ error: "sname is required" });
    }

    // Only fetch pending prescriptions
    const bill = await Bill.find({
      patient: sname,
     });

    console.log("Found records:", bill);
    res.json(bill);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
