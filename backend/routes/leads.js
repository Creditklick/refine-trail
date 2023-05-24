const {getAllLeads} = require("../controllers/leads.controller")
const router = require("express").Router();
router.get("/leads",getAllLeads);
module.exports = router;