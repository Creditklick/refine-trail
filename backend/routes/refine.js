const Lead = require("../models/Leads.model");
const router = require("express").Router();
const { postRefineController } = require("../controllers/refine.controller");
router.post("/refine", postRefineController);
router.get("/refine",(req,res,next)=>{
    res.status(200).json({name:"Tushar"})
})
module.exports = router;