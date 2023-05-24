const Lead = require("../models/Leads.model");
exports.postRefineController = async (req, res, next) => {
  const { firstName, lastName, email, pan, pincode, query, phone } = req.body;
  console.log(req.body)
  try {
    const savedRecord = await Lead.create({
      firstName,
      lastName,
      email,
      pan,
      pincode,
      query,
      phone,
    });
    res.status(200).json(savedRecord);
  } catch (err) {
    res.status(500).json(err);
  }
};
