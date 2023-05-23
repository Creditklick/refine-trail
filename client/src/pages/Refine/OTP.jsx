import React, { useState, useEffect } from 'react';
// import score from '../../assets/img/ModalCC.png'
import { Link } from 'react-router-dom';
const OTP = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(()=>{
      setIsVisible(true);
    },3000)
  }, []);

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <div className={`modal ${isVisible ? 'show' : ''}`}>
      <div className=" modal-content rounded-xl">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        {/* <img src={score} alt="" className='max-w-lg m-auto'/> */}
        {/* <h2 className='text-center font-semibold my-2 uppercase'>Check your credit score for <span className='text-red-700'>free </span> </h2> */}
        <div className='w-auto flex justify-center'>
        <Link to="/Credit-score" className='flex px-2 py-1 justify-center shadow-lg bg-blue-300 font-semibold ' onClick={closeModal}>CHECK NOW</Link></div>
      </div>
    </div>
  );
};

export default OTP;



