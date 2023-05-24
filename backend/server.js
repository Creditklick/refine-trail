const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const paymentController = require("./controllers/paymentController");
const Razorpay = require("razorpay");
const app = express();

const dotenv = require("dotenv");
const refineRoutes = require("./routes/refine");
const dbConfig = require("./util/dbconfig");
dotenv.config();
const config = require("./config/config");
console.log(config);
console.log(process.env);
app.use(express.json());
app.use(cors());
app.use(refineRoutes);
// // const orders=(req,res)=>{
// // let instance=new Razorpay({key_id:KEY_ID,key_secret:KEY_SECRET})
// // var options={
// //     amount:req.body.amount*100,
// //     currency:"INR"
// // }

// // instance.orders.create(options,function(err,order)
// // {
// //     if(err){
// //         return res.send({code:500,message:"Server Err"})

// //     }

// //     return res.send({code:200,message:"Order Created",data:order})
// // })
// // clientName=IMSPL_EMIMSPL_EM&allowInput=1&allowEdit=1&allowCaptcha=1&allowConsent=1&allowEmailVerify=1&allowVoucher=1&voucherCode=XXXXXXX&firstName=SUDIP&surName=GHOSH&mobileNo=XXXXXXX&email=XXXXXXX%40experian.com&noValidationByPass=0&emailConditionalByPass=1

// // }

// app.use(express.json())
// // DB CONNECTIONS
// const db=mysql.createConnection({
//     host:'localhost',
//     user:"root",
//     password:"",
//     database:'refine'
// })

// app.post('/refine',(req,res)=>{
// const sql="INSERT INTO leads (`name`,`email`,`pan`,`pincode`,`query`,`phone`) Values(?)";
// const values=[
//     req.body.name,
//     req.body.email,
//     req.body.pan,
//     req.body.pincode,
//     req.body.query,
//     req.body.phone,
//     // req.body.date,

// ]
//     db.query(sql,[values],(err,data)=>{
//         if(err) return res.json(err);
//         return res.json(data);
//     })
// })

// app.get("/refine",(req,res)=>{
// res.send()
// })

// app.post("/payment",(res=>{
//     let {amount}=req.body;
//     var instance=new Razorpay({key_id:'rzp_test_79UTNf1GrgZBT3'
//         ,key_secret:'2QxP0ZXLHxxydptWN7XQ7gnu'})
//     instance.orders.create({
//         amount:99*100,
//         currency:"INR",
//         receipt:"receipt#1"

//     })

//     res.status(201).json({
//         success:true,
//         order,
//         amount,
//     })
// }))

dbConfig();
app.listen(8801, () => {
  console.log("sucessful");
});
