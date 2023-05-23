import React,{useState} from 'react'
import Exp from "../../assets/Images/expert.gif"
import Analyse from "../../assets/Images/Refine/analyise.png"
import Educate from "../../assets/Images/Refine/educate.png"
import Karma1 from "../../assets/Images/Refine/karma1.png"
import login from "../../assets/Images/Refine/login.png"
import form from "../../assets/Images/Refine/form.png"
import navi from "../../assets/Images/Refine/navi.png"
import approved from "../../assets/Images/bloan/approved.jpg"
import redrefine from "../../assets/Images/Icon/redrefine.png"
import emirefine from "../../assets/Images/Icon/emirefine.png"
import eyerefine from "../../assets/Images/Icon/eyerefine.png"
import iderefine from "../../assets/Images/Icon/iderefine.png"


import { Link } from 'react-router-dom'
const Refine = () => {
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);
  const [box4, setBox4] = useState(false);
  const [box5, setBox5] = useState(false);
// window.scrollTo(0,0)

window.scrollBy(0,0)

  return (
    <>

{/* Hero Start */}

<div className="container mx-auto h-auto rounded-3xl shadow-lg">
      <div className="bg-gradient-to-l rounded-3xl from-blue-300 to-gray-100 w-auto h-auto border border-1  p-4">
      <div className="md:flex">
       
        <div className="p-4 my-auto space-y-8">
          <div className="uppercase text-4xl  font-semibold text-indigo-900 text-left ">How Credit Refine can boost your financial future!</div>
          <p className='text-semibold text-2xl text-blue-900 my-2 p-2'>Credit refine improves your credit score, which leads to better financial products and services, and ultimatey financial stability and wealth building opportunities.
</p>
<div className="uppercase text-3xl  font-semibold text-indigo-900 text-left ">Talk to an <span className='text-red-500'>Expert </span> </div>

<Link to="/queriesN">
          <div className=' mt-6 mx-auto justify-center'>
                <button className="bg-blue-400 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-2xl uppercase">Connect Now</button>
            </div>
            </Link>
        </div>
     

        <div className="md:shrink-0 sm:shrink-0 p-5 lg:mx-15  mx-auto">
          <img className=" object-cover  rounded-xl lg:max-w-xl" src={Exp} alt="Modern building architecture"/>
        </div>
      </div>
      </div>
    </div>

{/* Hero End */}



{/* Our Process Starts bigScreen */}


<div classname="overflow-y-hidden bg-gray-100 ">
    <div className="mx-auto container hidden  lg:block f-f-p px-4 xl:px-0 py-24">
      <h1 className="focus:outline-none text-center text-4xl font-semibold lg:leading-9 tracking-wider text-gray-900">How We Works?</h1>
      <div className="md:mt-12 f-f-p">
         

      <div className="  md:flex justify-center w-full">
          <div className="flex flex-col items-center md:items-end md:pr-12 md:border-r-4 border-gray-300 relative md:w-1/2">
            <div aria-label="sign up" role="img" className='w-40'>
              <img className="focus:outline-none mt-10" src={login} alt="how it work" />
            </div>
            <div  role="img">
              <img className="focus:outline-none mt-24" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg2.svg" alt=" " />
            </div>
            <div className="flex mt-12 flex-col items-center lg:items-end md:w-8/12">
              <h1 className="focus:outline-none text-xl font-bold leading-5">Raise Your Application</h1>
              <h2 className="focus:outline-none text-gray-500 mt-3 pl-3 text-center md:text-right text-base leading-6 tracking-wide">Book a slot to navigate your importance  </h2>
            </div>
            <div aria-label="transactions" role="img" className='w-40'>
              <img className="focus:outline-none mt-24" src={navi} alt="" />
            </div>
            <img className="hidden md:block absolute right-0 top-0 -mt-2 -mr-1" src="https://cdn.tuk.dev/assets/components/111220/Fs7/line.png" alt="" />
          </div>


       
          <div className="flex flex-col items-center md:items-start md:pl-12 lg:border-gray-400 mt-20 md:mt-0 md:w-1/2">
           
              {/* Setp1 */}
            <div  role="img" className='mt-10'>
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg4.svg" alt="" />
            </div>
            <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
              <h1 className="focus:outline-none text-xl font-bold leading-5">SignUp for an Account</h1>
              <h2 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">Log In to our website or Register yourself  . </h2>
            </div>

               {/* Setp1 End */}
            <div aria-label="wallet" role="img" className='w-40  mt-28'>
              <img className="focus:outline-none" src={form} alt="" />
            </div>
            <div  role="img" className='mt-24'>
              <img className="focus:outline-none" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg6.svg" alt=" " />
            </div>
            <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
              <h1 className="focus:outline-none text-xl font-bold leading-5">Connect with Consultant</h1>
              <h2 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">Our Professional Consultant assist you as soon as possible. Know your importance in details.</h2>
            </div>

              <div className=' lg:h-48'  role="img">
             
            </div>
          </div>
          
        </div>
        <img className='flex  col my-8  justify-center items-center w-2/5 mx-auto ' src={Karma1} alt="" srcset="" />



      
      </div>
    </div>
  </div>


{/* Our Process Ends bigScreen*/}


{/* smallScreen how we works starts */}

<div className="grid grid-cols-1 lg:hidden ">
<h1 className="focus:outline-none text-center text-4xl font-semibold lg:leading-9 tracking-wider text-gray-900">How We Works?</h1>
    
    <div aria-label="sign up" role="img" className='w-28 mx-auto'>
        <img className="focus:outline-none mt-10" src={login} alt="login" />
    </div>
    <div>
        <div  role="img" className='mt-8'>
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg4.svg" className='mx-auto' alt=" " />

        </div>
        <div className="flex mt-6 flex-col items-center ">
            <h1 className="focus:outline-none text-xl text-center font-semibold leading-5">SignUp for an Account</h1>
            <h2 className="focus:outline-none text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">Log In to our website or Register yourself  . </h2>
        </div>
    </div>
    <div aria-label="transactions" role="img" className='w-28 mx-auto'>
              <img className="focus:outline-none mt-10" src={navi} alt="Raise your application" />
            </div>
    <div> 
        <div  role="img" className='mt-8'>
            <img className="mx-auto" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg2.svg" alt="" />
        </div>
        <div className="flex mt-6 flex-col items-center">
            <h1 className="focus:outline-none text-xl text-center font-semibold leading-5">Raise Your Application</h1>
            <h2 className="focus:outline-none text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">Book a slot to navigate your importance  </h2>
        </div>
    </div>
    <div aria-label="transactions" role="img" className='w-28 mx-auto'>
              <img className="focus:outline-none mt-10" src={form} alt="Raise your application" />
            </div>
    <div>
    <div  role="img" className='mt-8'>
            <img className="mx-auto" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg6.svg" alt="" />
        </div>
        <div className="flex mt-6 flex-col items-center ">
              <h1 className="focus:outline-none text-xl text-center  font-semibold leading-5">Connect with Consultant</h1>
              <h2 className="focus:outline-none text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">Our Professional Consultant assist you as soon as possible. Know your importance in details.</h2>
            </div>
    </div>
  <img className='flex  col my-8  justify-center items-center w-2/5 mx-auto ' src={Karma1} alt="" srcset="" />

</div>

{/* smallScreen how we works ends */}



{/* Contact Us Start  */}

< div className = "  2xl:mx-auto 2xl:container md:px-20 px-4 " > 
                   < div className = " text-xl relative z-20 bg-gradient-to-r from-blue-500 to-blue-100 md:flex flex-row-2 w-full top-0  md:p-16 p-8 justify-between rounded-md ring-1 ring-blue-100" > 
                        <div className='space-y-8'> 
                            <h1 className = "md:text-5xl text-3xl font-bold md:leading-10 leading-9 text-white w-auto" >Book a Call with Expert  </h1> 
                            <p className = "text-xl font-semibold text-blue-900 leading-6 w-auto mt-4" >Need personalized guidance to solve your question? Don't worry!<br/> Call a trained credit professional to make an appointment. </p> 
                        </div> 
                                                < div className = "flex my-auto md:pt-0 pt-8" > 
                                                <Link to="/queries">
                            < button className = " text-base  font-medium text-white bg-gradient-to-r h-12 px-4 from-blue-500 to-blue-300 w-auto rounded  hover:bg-gray-100  mx-auto " > TALK TO TEAM </ button > 
                            </Link>
                        </div> 
                                            </div> 
                                    </div> 





                                    <div className="mx-auto container mt-8">
                                        <p className="text-center font-semibold md:text-4xl text-3xl text-blue-900 my-8">EXCLUSIVE FEATURES</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 bs-gray-100 mx-auto">
      <div className='hover:shadow-xl m-2 p-4 rounded-xl space-y-4'>
        <img src={approved} alt="" className='w-20'/>
        <p className="font-semibold text-xl text-blue-800 ">An Individual Credit Coach</p>
        <p className='text-lg font-semibold text-gray-700'>Expert Guidance with our Credit Coach</p>
      </div>
      <div className='hover:shadow-xl m-2 p-4 rounded-xl space-y-4'>
        <img src={approved} alt="" className='w-20'/>
        <p className="font-semibold text-xl text-blue-800 ">Credit Health Reports</p>
        <p className='text-lg font-semibold text-gray-700'>Get personalised Credit Report.</p>
      </div>
      <div className='hover:shadow-xl m-2 p-4 rounded-xl space-y-4'>
        <img src={approved} alt="" className='w-20'/>
        <p className="font-semibold text-xl text-blue-800 ">Free Account Dispute Service</p>
        <p className='text-lg font-semibold text-gray-700'>One time free account dispute can be filed with the Experian Bureau.</p>
      </div>
    </div>
    </div>




{/* Contact us End */}

{/* Our Vision Start*/}


<div className="2xl:container 2xl:mx-auto  lg:px-20 py-4 px-4">
            
                {/* Educate Starts */}
            <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
                <div className="w-full lg:w-6/12 my-auto">
                    <h2 className="w-full font-semibold lg:text-4xl text-3xl lg:leading-10 leading-9">We Educate & Analyse</h2>
                    <p className="font-normal text-xl leading-6 text-gray-600 mt-6">We educate you on the best ways to improve your credit score, so that you can take steps towards a better financial future. We analyse information from all of your accounts and give you an holistic view of what not only affects your credit score but also how much you have in total debt.
</p>
                </div>
                <div className="w-full lg:w-6/12 p-8">
                    <img className="lg:block hidden  w-full" src={Educate} alt="people discussing on board" />
                    <img className="lg:hidden sm:block hidden w-full" src={Educate} alt="people discussing on board" />
                    <img className="sm:hidden block w-full" src={Educate} alt="people discussing on board" />
                </div>
            </div>
              {/* Educate Ends */}
            
                {/* Cordination Starts */}
            <div className="flex lg:flex-row  flex-col lg:gap-8 sm:gap-10 gap-12">

            <div className="w-full lg:w-6/12 md:p-8">
                    <img className="lg:block  hidden my-auto w-full" src={Analyse} alt="people discussing on board" />
                   </div>


                <div className="w-full  lg:w-6/12 my-auto">
                    <h2 className="w-full font-semibold lg:text-4xl text-3xl lg:leading-10 leading-9">We Coordinate & Resolve</h2>
                    <p className="font-normal text-xl leading-6 text-gray-600 mt-6">Our team of experts coordinate the best available solutions to resolve your consumer credit issues. We take a holistic approach to understanding the problems, the current trends and what can be done to make things better. Our services include: credit repair, debt management and consolidation.

</p>
                </div>
                <div className="w-full lg:hidden sm:block lg:w-6/12">
                    <img className="lg:hidden sm:block hidden w-full" src={Analyse} alt="people discussing on board" />
                    <img className="sm:hidden  block w-full" src={Analyse} alt="people discussing on board" />
                </div>
            </div>

{/* Cordination Ends */}

<div className="mx-auto  my-16">
    <p className="text-center font-semibold text-4xl text-blue-900 my-10">WHY USE CREDIT REFINE</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 bg-gray-100 mx-auto py-4 rounded-xl">
      <div className='hover:shadow-xl m-2 p-4 rounded-xl space-y-4 bg-white'>
        <img src={emirefine} alt="" className='w-28 mx-auto rounded-full shadow-lg'/>
        <p className="font-semibold text-xl text-blue-800 ">To achieve a credit score above 800</p>
      </div>
      <div className='hover:shadow-xl m-2 p-4 rounded-xl space-y-4 bg-white'>
        <img src={redrefine} alt="" className='w-28 mx-auto rounded-full shadow-lg'/>
        <p className="font-semibold text-xl text-blue-800 ">Reduce the monthly cost of EMI.</p>
      </div>
      <div className='hover:shadow-xl m-2 p-4 rounded-xl space-y-4 bg-white'>
        <img src={eyerefine} alt="" className='w-28 mx-auto rounded-full shadow-lg' />
        <p className="font-semibold text-xl text-blue-800 ">You can keep an eye on your Credit Profile</p>
      </div>
      <div className='hover:shadow-xl m-2 p-4 rounded-xl space-y-4 bg-white'>
        <img src={iderefine} alt="" className='w-28 mx-auto rounded-full shadow-lg' />
        <p className="font-semibold text-xl text-blue-800 ">Identify accounts that affects your Credit Score.</p>
      </div>
    </div>
    </div>

          
           
        </div>










{/* Our Vision End */}

{/* FAQ STARTS */}


<div>
                <img src="https://i.ibb.co/DQ4FZhL/pattern-bg.png" alt="blue pattern background" class="absolute w-full h-64 md:h-96 object-center object-fit z-0" />
                <div class="relative flex flex-col items-center justify-center sm:px-0 px-6 z-20 pb-32">
                    <div class="md:py-36 py-20">
                        <h1  class="xl:text-6xl md:text-5xl text-xl font-bold leading-10 text-white">
                            Frequently asked questions
                        </h1>
                    </div>
                    <div class="lg:w-1/2 md:w-8/12 sm:w-9/12 w-full">
                        <div class="bg-white shadow rounded p-8">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h2 class="text-lg font-semibold leading-none text-gray-800">What is a credit refine service?</h2>
                                </div>
                                <button onClick={() => setBox1(!box1)} class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
                                    {box1 ? (
                                        <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5 1L9 5" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>

                            {box1 && (
                                <ul class="">
                                    <li>
                                        <p class="text-base leading-normal text-gray-600 mt-4 lg:w-full">Our credit refine service is a program designed to help individuals improve their credit scores. We work with clients to identify areas for improvement and develop a personalized plan to help them achieve their credit goals.
</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div class="bg-white shadow rounded p-8 mt-8">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h2 class="text-lg font-semibold leading-none text-gray-800">How does the credit refine service work?</h2>
                                </div>
                                <button
                                    onClick={() => {
                                        setBox2(!box2);
                                    }}
                                    data-menu
                                    class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                                >
                                    {box2 ? (
                                        <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5 1L9 5" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {box2 && (
                                <ul>
                                    <li>
                                        <p class="text-base leading-normal text-gray-600 mt-4 lg:w-full">Our credit refine service starts with a free consultation to assess your current credit situation and identify areas for improvement. We then develop a personalized plan that may include strategies such as disputing inaccuracies on your credit report, negotiating with creditors, and providing guidance on how to improve your credit utilization and payment history. We provide ongoing support throughout the process to help you achieve your credit goals
.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div class="bg-white shadow rounded p-8 mt-8">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h2 class="text-lg font-semibold leading-none text-gray-800">What are the benefits of using a credit refine service?</h2>
                                </div>
                                <button
                                    onClick={() => {
                                        setBox3(!box3);
                                    }}
                                    data-menu
                                    class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                                >
                                    {box3 ? (
                                        <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5 1L9 5" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {box3 && (
                                <ul>
                                    <li>
                                        <p class="text-base leading-normal text-gray-600 mt-4 lg:w-full">Using our credit refine service can help you improve your credit score, which can lead to lower interest rates and better loan terms. It can also help you qualify for credit cards and loans that you may not have been eligible for before.</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div class="bg-white shadow rounded p-8 mt-8">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h2 class="text-lg font-semibold leading-none text-gray-800">How long does it take to see results with a credit refine service?</h2>
                                </div>
                                <button onClick={() => setBox4(!box4)} data-menu class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
                                    {box4 ? (
                                        <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5 1L9 5" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {box4 && (
                                <ul>
                                    <li>
                                        <p class="text-base leading-normal text-gray-600 mt-4 lg:w-full">The amount of time it takes to see results with our credit refine service varies depending on your individual credit situation. Some clients may see results within a few months, while others may take longer. However, we work with you to develop a personalized plan and provide ongoing support to help you achieve your credit goals as quickly as possible.
</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div class="bg-white shadow rounded p-8 mt-8">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h2 class="text-lg font-semibold leading-none text-gray-800">Is using a credit refine service worth the investment?</h2>
                                </div>
                                <button onClick={() => setBox5(!box5)} data-menu class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
                                    {box5 ? (
                                        <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5 1L9 5" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#4B5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {box5 && (
                                <ul>
                                    <li>
                                        <p class="text-base leading-normal text-gray-600 mt-4 lg:w-full">Using a credit refine service can be a worthwhile investment if you're struggling with a low credit score and want to improve your creditworthiness. The cost of our service is reasonable, and the benefits of improving your credit score can save you money in the long run by qualifying you for better loan terms and interest rates.
<br/><br/>
When answering these questions, it's important to provide clear and concise answers that directly address the question. Additionally, using bullet points or numbered lists can help make the information more digestible and easier to read.

</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
{/* FAQ ENDS */}





    </>
  )
}

export default Refine