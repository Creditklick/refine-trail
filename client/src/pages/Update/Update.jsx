





import React,{useRef,useState,useEffect} from "react";
import axios from "axios";

import {useParams} from "react-router-dom"

const Update = () => {
    const {id}=useParams();
const [values,setValues]=useState({
    pan:id,
    CreditScore:'',
    LoanAmount:'',
    ActiveAccount:'',
    SuitFileCount:'',
    SuitFileNames:'',
    BankAccountCount:''
    
})
   
    useEffect(()=>{
        axios.get('http://localhost:5000/api/user/'+id)
        .then(res=>setValues(res.values))
        .catch((err)=>console.log(err))
       
    })




    
   
  
  



    let form = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form_data = new FormData(form.current);
        let payload = {};
        form_data.forEach(function (value, key) {
            payload[key] = value;
        });
        // console.log("payload", payload);
        // Place your API call here to submit your payload.
    };
    return (
        <form id="login" onSubmit={handleSubmit}>
            <div className="bg-white dark:bg-gray-800">
              
                <div className="container mx-auto bg-white dark:bg-gray-800 mt-10 rounded px-4">
                    <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
                        <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                            <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">User Status Update panel</p>
                            <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                    <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto pt-4">
                        <div className="container mx-auto">


                          <div className="flex gap-64 ">
                          <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                <label htmlFor="FirstName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                   Pan Number
                                </label>
                                <input type="text" id="panNumber" value={values.pan} name="pan" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="eg. ASDTF2039S" />
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                <label htmlFor="LastName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                   Credit Score
                                </label>
                                <input type="number" id="creditscore" value={values.CreditScore} name="CreditScore" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Credit Score" />
                            </div>
                          </div>



                           <div className="flex gap-64">
                           <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                <label htmlFor="Email" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                  Loan Amount
                                </label>
                                <div className="border  shadow-sm rounded flex">
                                    <div className="px-4 py-3 dark:text-gray-100 flex items-center border-r border-green-400">
                                       
                                    </div>
                                    <input type="number" id="loanamount" name="LoanAmount" required className="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-500 dark:text-gray-400" value={values.LoanAmount} placeholder="eg. 23000" />
                                </div>
                                
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                <label htmlFor="StreetAddress" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                  Active Account
                                </label>
                                <input type="number" id="Activeaccount" name="ActiveAccount" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" value={values.ActiveAccount} placeholder="eg.2,3" />
                            </div>
                           </div>



                           <div className="flex gap-64">

                           <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                <label htmlFor="City" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                   SuitFile Count
                                </label>
                                <div className="border border-gray-300 dark:border-gray-700 shadow-sm rounded flex">
                                    <input type="number" id="City" name="SuitFile" required className="pl-3 py-3 w-full text-sm focus:outline-none border border-transparent focus:border-indigo-700 bg-transparent rounded placeholder-gray-500 text-gray-500 dark:text-gray-400" value={values.SuitFileCount} placeholder="eg. 1,2" />
                                  
                                </div>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                <label htmlFor="State/Province" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                  SuitFile Names
                                </label>
                                <input type="text" id="suitfilename" name="SuitFieName" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" value={values.SuitFileNames} placeholder="eg. sbi,pnb" />
                            </div>
                           </div>



                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                <label htmlFor="Country" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                  BankAccount Count
                                </label>
                                <input type="text" id="count" name="BankAccountCount" required className="border bg-transparent border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" value={values.BankAccountCount} placeholder="eg.2" />
                            </div>
                          
                        </div>
                    </div>
                </div>
              
                <div className="container mx-auto w-11/12 xl:w-full">
                    <div className="w-full py-4 sm:px-0 bg-white dark:bg-gray-800 flex justify-end">
                       
                        <button className="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm" type="submit">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};
export default Update;
