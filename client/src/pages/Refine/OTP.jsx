import React, { useState, useEffect } from 'react';
// import score from '../../assets/Images/Refine/form.png'
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import './modal.css'
const OTP = () => {
  // const [isVisible, setIsVisible] = useState(false);
  const [otpdata, setOtpdata]= useState({
    otp:''
  })
  var otpRegex = ''
  const [otperror, setOtperror] = useState({});
const validateotp=()=>{
    let errors={};
    if(!otpdata){
        errors.otp="OTP is required"
        console.log(errors.otp);
    }else if(!otpRegex.test(otpdata.otp)){
        errors.otp="Please enter correct OTP"
    }else if(otpRegex.test(otpdata.otp)){
      console.log('otp successful');
    }

    setOtpdata(errors);
    setOtperror(errors);
    return Object.keys(errors).length=== 0;
}
const navigate = useNavigate();
const handleSubmit =(e)=>{
    e.preventDefaullt();
    // closeModal();
    if(validateotp()){
        navigate('/confirmation')
    }
    else{
        console.log('incorrect otp');
    }
}
const handleChange =(e)=>{
    setOtpdata({
        ...otpdata,
        [e.target.name]: e.target.value
    });
};

  // useEffect(() => {
  //   setIsVisible(true);
    
  // }, []);

  // const closeModal = () => {
  //   setIsVisible(false);
  // };

  return (
    <div className="modal">
      <div className=" modal-content rounded-xl ">
        {/* <span className="close" onClick={closeModal}>
          &times;
        </span> */}
        {/* <img src={score} alt="" className='max-w-lg m-auto'/> */}
        <h2 className='text-center font-semibold my-2 uppercase'>OTP verification</h2>
        <form className='w-auto flex justify-center' onSubmit={handleSubmit}>
        <label>
          Enter OTP:
          <input type="text" />
        </label>
        <div style={{ color: 'red' }}>{otperror.otp}</div>

        {/* <button type="submit" onClick={handleSubmit}>Verify OTP</button> */}
        <button className='flex px-2 py-1 justify-center shadow-lg bg-blue-300 font-semibold ' >CHECK NOW</button>
        </form>
      </div>
    </div>
  );
};

export default OTP;



