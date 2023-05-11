const express =require("express")
const mysql =require("mysql")
const cors =require("cors")
const paymentController = require("./paymentController")
const Razorpay = require("razorpay")
const app =express()
app.use(cors())

// const orders=(req,res)=>{
// let instance=new Razorpay({key_id:KEY_ID,key_secret:KEY_SECRET})
// var options={
//     amount:req.body.amount*100,
//     currency:"INR"
// }

// instance.orders.create(options,function(err,order)
// {
//     if(err){
//         return res.send({code:500,message:"Server Err"})

//     }

//     return res.send({code:200,message:"Order Created",data:order})
// })



// }



app.use(express.json())
// DB CONNECTIONS 
const db=mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"",
    database:'refine'
})





app.post('/refine',(req,res)=>{
const sql="INSERT INTO leads (`name`,`email`,`pan`,`pincode`,`query`,`phone`) Values(?)";
const values=[
    req.body.name,
    req.body.email,
    req.body.pan,
    req.body.pincode,
    req.body.query,
    req.body.phone,
    // req.body.date,

   
]
    db.query(sql,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get("/refine",(req,res)=>{
res.send()
})

app.post("/payment",(res=>{
    let {amount}=req.body;
    var instance=new Razorpay({key_id:'rzp_test_79UTNf1GrgZBT3'
        ,key_secret:'2QxP0ZXLHxxydptWN7XQ7gnu'})
    instance.orders.create({
        amount:99*100,
        currency:"INR",
        receipt:"receipt#1"

    })

    res.status(201).json({
        success:true,
        order,
        amount,
    })
}))



app.listen(8801,()=>{
    console.log("sucessful");
})