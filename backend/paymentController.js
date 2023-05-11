
const KEY_ID='rzp_test_79UTNf1GrgZBT3'
const KEY_SECRET='2QxP0ZXLHxxydptWN7XQ7gnu'
const Razorpay=require('razorpay')

module.exports.orders=(req,res)=>{
    let instance= new Razorpay({id:KEY_ID,key_secret:KEY_SECRET})
    var options={
        amount:req.body.amount,
        currency:'INR'
    }
    instance.create(options,function(err,order){
        if(err){
            return res.send({code:500,message:"Server Abort"})

        }
        return res.send({code:200,message:'order ready',data:order})


        
    })
    
}

module.exports.verify=(req,res)=>{
    res.send({verify})
}