import React, { useState } from "react";
import heroImg from "../../assets/Images/Refine/refine2.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const queryOptionsList = {
  option1: "Need fresh loan/CC to clear outstandings?",
  option2: "Settle the existing loan",
  option3: "Pay partial payment of existing account and pay in EMIs",
  option4: " Just want to improve the credit score",
  option5: "Get rid off the recurring phone calls of recovery",
  option6: "Close existing account",
  option7: "Others",
};

const PayoutN = () => {
  const [query, setQuery] = useState();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    pincode: "",
    pan: "",
  });
  var emailRegex = /^[a-zA-Z0-9_.+-]+@[a-z]+.[a-z]{2,3}$/;
  var pinRegex = /^[0-9]{6}$/;
  var panRegex = /^[A-Z]{3}[CPHFATBLJG]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}$/;
  var phoneRegex = /^[6-9]{1}[0-9]{9}$/;

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!formData.firstName) {
      errors.name = "First Name is required";
    }
    if (!formData.lastName) {
      errors.name = "Last Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Email is not valid";
    }
    if (!formData.phone) {
      errors.phone = "Phone is required";
    } else if (formData.phone.length > 10) {
      errors.phone = "Please enter 10 digit mobile number";
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = "Phone is not valid";
    }
    if (!formData.pincode) {
      errors.pin = "Pin is required";
    } else if (formData.pincode.length > 6) {
      errors.pin = "Please enter 6 digit PIN";
    } else if (!pinRegex.test(formData.pincode)) {
      errors.pin = "Pin is not valid";
    }
    if (!formData.pan) {
      errors.pan = "Pan is required";
    } else if (!panRegex.test(formData.pan)) {
      errors.pan = "Pan is not valid";
    }
    if (!query) {
      errors.selectedError = "Please select any query";
    }
    setFormData(errors);
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const navigate = useNavigate();
  const postData = async (formData) => {
    const data = await axios.post("http://localhost:8801/refine", formData);
    return data.status;
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/confirmation");
      console.log("form submitted");
      console.log({...formData,query});
      const updateData = await postData({...formData,query});
      console.log(updateData)
    } else {
      console.log("form not submitted");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const handleOptionChange = (e) => {
    setQuery(e.target.value);
  };

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };
  return (
    <div className="py-2 bg-gray-100 overflow-y-hidden">
      {/* Code block starts */}
      <dh-component>
        <div className="w-full px-6">
          <div className="mt-8  rounded-lg bg-indigo-700 container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
            <img
              className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg"
              alt="bg"
            />
            <img
              className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg"
              alt="bg"
            />
            <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">
                We manage factors that positivity impact your credit.
              </h1>
            </div>
          </div>
          <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40">
            <div className=" shadow-xl shadow-l-xl rounded-2xl  m-4 sm:w-2/3 w-11/12">
              <img className="rounded-2xl" src={heroImg} alt="Sample Page" />
            </div>
          </div>
        </div>
      </dh-component>
      {/* Code block ends */}

      <div className="w-full flex items-center justify-center my-12">
        <div className=" top-40 bg-gray-200 shadow-lg rounded-2xl py-12 lg:px-28 px-8">
          <p className="md:text-3xl text-2xl font-semibold leading-7 text-center text-gray-700">
            Submit Your Query
          </p>
          <form onSubmit={HandleSubmit}>
            <div className="grid md:grid-cols-2 items-center mt-12">
              <div className="md:w-72 flex flex-col md:p-6 p-2">
                <label className="text-xl font-semibold leading-none text-gray-800">
                  First Name
                </label>
                <input
                  tabIndex={0}
                  arial-label="Enter your name"
                  type="text"
                  name="firstName"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-purple-100 border rounded border-gray-200 shadow-lg placeholder-gray-500 rounded-xl"
                  placeholder="Enter your full name"
                  onChange={handleChange}
                />
                <div style={{ color: "red" }}>{formErrors.name}</div>
              </div>
              <div className="md:w-72 flex flex-col md:p-6 p-2">
                <label className="text-xl font-semibold leading-none text-gray-800">
                  Last Name
                </label>
                <input
                  tabIndex={0}
                  arial-label="Enter your name"
                  type="text"
                  name="lastName"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-purple-100 border rounded border-gray-200 shadow-lg placeholder-gray-500 rounded-xl"
                  placeholder="Enter your full name"
                  onChange={handleChange}
                />
                <div style={{ color: "red" }}>{formErrors.name}</div>
              </div>

              <div className="md:w-72 flex flex-col md:p-6 p-2">
                <label className="text-xl font-semibold leading-none text-gray-800">
                  Email Address
                </label>
                <input
                  tabIndex={0}
                  arial-label="Your email address"
                  type="email"
                  name="email"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-purple-100 border rounded border-gray-200 shadow-lg placeholder-gray-500 rounded-xl"
                  placeholder="Enter your valid email address"
                  onChange={handleChange}
                />

                <div style={{ color: "red" }}>{formErrors.email}</div>
              </div>
              <div className="md:w-72 flex flex-col md:p-6 p-2">
                <label className="text-xl font-semibold leading-none text-gray-800">
                  Pin Code
                </label>
                <input
                  tabIndex={0}
                  role="input"
                  arial-label="enter your PIN code"
                  name="pincode"
                  type="number"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-purple-200 border shadow-lg rounded border-gray-200 placeholder-gray-500 rounded-xl"
                  placeholder="Enter your 6 digit code"
                  onChange={handleChange}
                />

                <div style={{ color: "red" }}>{formErrors.pin}</div>
              </div>

              <div className="md:w-72 flex flex-col md:p-6 p-2">
                <label className="text-xl font-semibold leading-none text-gray-800">
                  Pan Number
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please input country name"
                  type="text"
                  name="pan"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-purple-200 border rounded border-gray-200 shadow-lg placeholder-gray-500 rounded-xl"
                  placeholder="Enter your PAN number"
                  onChange={handleChange}
                />
                <div style={{ color: "red" }}>{formErrors.pan}</div>
              </div>
              <div className="md:w-72 flex flex-col md:p-6 p-2">
                <label className="text-xl font-semibold leading-none text-gray-800">
                  Phone Number
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please input country name"
                  type="number"
                  name="phone"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-purple-200 border rounded border-gray-200 shadow-lg placeholder-gray-500 rounded-xl"
                  placeholder="Enter your 10 digit number"
                  onChange={handleChange}
                />
                <div style={{ color: "red" }}>{formErrors.phone}</div>
              </div>
            </div>
            <div className="my-8">
              <label className="text-xl font-semibold leading-none text-gray-800 ">
                Your Query
              </label>
              <div className="w-full flex flex-col mt-4 bg-pink-200 p-3 rounded-xl shadow-lg">
                <span className="mb-3">
                  <input
                    type="checkbox"
                    value={queryOptionsList.option1}
                    name="query"
                    checked={query === queryOptionsList.option1}
                    onChange={handleOptionChange}
                  />
                  <label
                    htmlFor="salaried"
                    className="text-base font-semibold mx-3 text-gray-700"
                  >
                    {queryOptionsList.option1}
                  </label>
                </span>
                <span className="my-3">
                  <input
                    type="checkbox"
                    value={queryOptionsList.option2}
                    name="query"
                    checked={query === queryOptionsList.option2}
                    onChange={handleOptionChange}
                  />
                  <label
                    htmlFor="salaried"
                    className="text-base font-semibold mx-3 text-gray-700"
                  >
                    {queryOptionsList.option2}
                  </label>
                </span>
                <span className="my-3">
                  <input
                    type="checkbox"
                    value={queryOptionsList.option3}
                    name="query"
                    checked={query === queryOptionsList.option3}
                    onChange={handleOptionChange}
                  />
                  <label
                    htmlFor="salaried"
                    className="text-base font-semibold mx-3 text-gray-700"
                  >
                    {queryOptionsList.option3}
                  </label>
                </span>
                <span className="my-3">
                  <input
                    type="checkbox"
                    value={queryOptionsList.option4}
                    name="query"
                    checked={query === queryOptionsList.option4}
                    onChange={handleOptionChange}
                  />
                  <label
                    htmlFor="salaried"
                    className="text-base font-semibold mx-3 text-gray-700"
                  >
                    {queryOptionsList.option4}
                  </label>
                </span>
                <span className="my-3">
                  <input
                    type="checkbox"
                    value={queryOptionsList.option5}
                    name="query"
                    checked={query === queryOptionsList.option5}
                    onChange={handleOptionChange}
                  />
                  <label
                    htmlFor="salaried"
                    className="text-base font-semibold mx-3 text-gray-700"
                  >
                    {queryOptionsList.option5}
                  </label>
                </span>
                <span className="my-3">
                  <input
                    type="checkbox"
                    value={queryOptionsList.option6}
                    name="query"
                    checked={query === queryOptionsList.option6}
                    onChange={handleOptionChange}
                  />
                  <label
                    htmlFor="salaried"
                    className="text-base font-semibold mx-3 text-gray-700"
                  >
                    {queryOptionsList.option6}
                  </label>
                </span>
                <span className="mt-3">
                  <input
                    type="checkbox"
                    value={queryOptionsList.option7}
                    name="query"
                    checked={query === queryOptionsList.option7}
                    onChange={handleOptionChange}
                  />
                  <label
                    htmlFor="salaried"
                    className="text-base font-semibold mx-3 text-gray-700"
                  >
                    {queryOptionsList.option7}
                  </label>
                </span>
              </div>
              <div style={{ color: "red" }}>{formErrors.selectedError}</div>
            </div>

            <p className="text-sm leading-3 text-red-900 mt-8 px-3">
              By clicking submit you agree to our terms of service & privacy
              policy.
            </p>
            <div className="w-80 text-sm text-gray-900 mt-8 ">
              <p
                className={isExpanded ? "expand" : "truncate"}
                onClick={handleMouseEnter}
              >
                CreditKlick does not sell any loans on our own and do not charge
                any fee from any customers/viewers. We advise customers/viewers
                to choose from best offers from Banks and its advertisers. We do
                not guarantee any loans as loan sanction is as per Banks and
                Nbfcs. We suggest all users to never pay any upfront amount for
                any loan disbursal and if any person who call you as
                representative of CreditKlick and ask for any amount report the
                incident immediately via putting us a mail at{" "}
                <a
                  href="mailto:support@creditklick.com"
                  className="text-blue-800"
                >
                  support@creditklick.com
                </a>
              </p>
            </div>
            <div
              id="button"
              className=" my-8 justify-center items-center w-auto"
            >
              <button className="m-auto text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-500 rounded hover:bg-indigo-700  rounded-full">
                SUBMIT
              </button>
            </div>
          </form>

          {/* <form onSubmit={HandleSubmit}>
                        <div>
                            <label htmlFor="name">name</label>
                            <input type="text" id='name' name='name'  onChange={handleChange} />

                            <div>{formErrors.name}</div> 
                        </div>
                        <div>
                            <label htmlFor="email">email</label>
                            <input type="email" id='email' name='email'  onChange={handleChange} />

                           <div>{formErrors.email}</div>
                        </div>
                        <div>
                            <label htmlFor="phone">phone</label>
                            <input type="text" id='phone' name='phone'  onChange={handleChange} />

                            <div>{formErrors.phone}</div>
                        </div>
                        <div>
                            <label htmlFor="pin">pin</label>
                            <input type="text" id='pin' name='pin'  onChange={handleChange} />

                           <div>{formErrors.pin}</div> 
                        </div>
                        <div>
                            <label htmlFor="pan">pan</label>
                            <input type="text" id='pan' name='pan'  onChange={handleChange} />

                           <div>{formErrors.pan}</div>
                        </div>
                        <button type="submit" onSubmit={HandleSubmit}>Submit</button>
                    </form> */}
        </div>
      </div>
    </div>
  );
};

export default PayoutN;
