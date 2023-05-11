import React from 'react'
import { Link } from 'react-router-dom'
import Exp from "../../assets/Images/expert.gif"
import Compare from './Compare'
import char from "./challanges"
// import axios from 'axios'


const Payment = () => {
  window.scrollTo(0, 0);




// const navigate=useNavigate();

  const handlePayment=()=>{
    // let response= axios.post("http://localhost:8801/payment") 
    // let orderData=  response.json()
    // console.log(orderData);
    var options = {
      key: "rzp_test_79UTNf1GrgZBT3", // Enter the Key ID generated from the Dashboard
      amount: 99*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      
      order_id: "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      // callback_url: navigate('/confirmination'),
     
      "notes": {
          address: "A product of CreditKlick"
      },
      "theme": {
          color: "#3399cc"
      }
  };
  var rzp1 = new window.Razorpay(options);
  document.getElementById('rzp-button1').onclick = function(e){
      rzp1.open();
      e.preventDefault();
  } 
   }
   

  return (
    <>
    {/* Hero Start */}

<div className="container focus mx-auto h-auto rounded-3xl shadow-lg">
      <div className="bg-gradient-to-l  rounded-3xl from-blue-300 to-gray-100 w-auto h-auto border border-1  p-4">
      <div className="md:flex">
       
        <div className="p-4 mx-auto space-y-12 my-auto">
          <div className="uppercase text-2xl  font-semibold text-indigo-900 text-left ">Take advantage of Credit Refine's program to build your score and qualify for the best loan/credit card offers</div>
       
<div className="uppercase  text-2xl font-semibold text-indigo-900 text-left ">Available @ just <span className=" text-3xl text-blue-700  "> ₹ 99</span></div>


          <div className=' mt-6 mx-auto justify-center'>
                <button id="rzp-button1" onClick={()=>handlePayment()} className="bg-blue-400 hover:bg-blue-600 text-white text-xl font-semibold px-4 py-2 rounded-2xl uppercase">Pay Now </button>
            </div>
          
        </div>
     

        <div className="md:shrink-0 sm:shrink-0 p-5 lg:mx-15  mx-auto">
          <img className=" object-cover  rounded-xl lg:max-w-xl" src={Exp} alt="Modern building architecture"/>
        </div>
      </div>

      </div>
    </div>

{/* Hero End */}
    
<div className="bg-gray-50   py-20 flex flex-col items-center justify-center">
            <div className="xl:w-1/2 space-y-12 w-11/12">
              <h1  className="text-4xl font-bold  leading-2 text-center text-gray-800">Revolutionize Your Credit Score  <br/> with Our Expert Credit Refinement Service!
</h1>
                <p  className="text-2xl font-bold  leading-2 text-center text-gray-600">
                    What we provides as compare to others
                </p>
                <div className="mt-8  flex-col justify-start items-start">
                  <table class="   table:border lg:w-full   bg-white border-collapse">
                    <tr>
                    <th class="bg-blue-100 border   py-4">Contents</th>
                      <th class="bg-blue-100 border   py-4">Creditklick @99 INR</th>
                      <th class="bg-blue-100 border text-left  py-4">
                        Others @1297 INR
                      </th>
                    </tr>
                    {Compare.map((item) => (
                      <tr key={item}>
                        <td class="border  text-left px-8 py-4">
                          {item.content}
                        </td>
                       
                        <td class="border  text-left px-8 py-4">
                          {item.CreditKlick}
                        </td>
                        <td class="border text-left px-8 py-4">
                          {item.others}
                        </td>
                      </tr>
                    ))}
                    
                  </table>
                  <Link to="/Personal-Information">    
                   <button class="bg-blue-400 animate-pulse hover:bg-blue-600 w-auto  mx-auto text-white font-semibold flex mt-8 py-2 px-4 rounded-2xl">
 Pay Now
</button></Link> 
                </div>
            </div>
            </div>

            {/* Challanges */}
            <div className="mt-8 space-y-12  justify-evenly items-start">
           
           <h1 className="text-4xl font-bold  leading-2 text-center text-gray-800">Boost Your Credit Score
</h1>
<p  className="text-2xl font-bold  p-4  leading-2 text-center text-gray-600">CreditKlick is the perfect way to improve your credit score, while learning more about debt management. With our easy-to-use platform, you can be on top of your credit score in no time.
</p>
                  <h3 className="text-2xl lg:mx-4 text-teal-800 font-semibold mt-4">
                    {" "}
                    Features section:

                  </h3>

                  {char.map((item) => (
                    <ul className="mx-4" key={item}>
                      <li
                        li
                        className="my-4  font-semibold text-gray-800 uppercase"
                      >
                        {item.rate}
                      </li>
                      <li className="lg:mx-4 mb-4 text-sm">{item.charge}</li>
                    </ul>
                  ))}
                </div>
    </>
  )
}

export default Payment