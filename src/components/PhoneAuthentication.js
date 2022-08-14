import React, { useState } from "react";
import { authentication } from "../firebase-config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const PhoneAuthentication = () => {
  const countryCode = "+91";
  const [phoneNumber, setPhoneNumber] = useState(countryCode);
  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (reponse) => {},
      },
      authentication
    );
  };
  const requestOTP = (e) => {
    e.preventDefault();
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="md:w-1/2 flex flex-col justify-center  md:pr-12  py-3 ">
 <h2 className="md:text-4xl font-semibold text-3xl " htmlFor="phoneNumber">
        Sign In
      </h2>
      <form onSubmit={requestOTP} className='space-y-4'>
     
        <label
          className=" block md:text-2xl text-xl font-medium text-gray-700"
          htmlFor="phoneNumber"
        >
          Enter your phone number
        </label>
        <p className=" text-sm md:font-medium font-bold md:tracking-widest tracking-wider text-gray-500  ">
          We will send a code(via SMS text message) to your phone number
        </p>
        <div className="">
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            className="w-full border border-gray-300 py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus-ring-1  focus:ring-indigo-500"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
        </div>
     
     <div>
     <button className="w-full mt-10 flex justify-center  border px-4 py-2 bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-red-500 text-white rounded-md text-lg font-medium">
            Send Message
          </button>
     </div>
          
        
      </form>
    </div>
  );
};

export default PhoneAuthentication;
