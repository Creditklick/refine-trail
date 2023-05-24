const Lead = require("../models/Leads.model")
exports.getAllLeads = async (req,res,next)=>{
    try {
        const allLeads = await Lead.findAndCountAll();
        res.status(200).json(allLeads);
      } catch (err) {
        res.status(500).json(err);
      }
}