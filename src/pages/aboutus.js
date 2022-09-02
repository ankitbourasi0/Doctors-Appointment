import React from "react";
import "./styles.css";
import { CAROUSEL } from "../assets";
const AboutUs = () => {
  return (
    <div 
    // id="aboutus"
     className="bg-white min-h-screen  flex justify-between flex-col md:flex-row md:px-8 pt-8" >
      
      <div className="bg-white md:w-1/2 flex justify-center items-center  rounded-lg ">
        <div className="md:py-8 md:px-16 px-8 py-12">
        <h1 className="md:text-5xl md:visible invisible font-semibold  font-sans">Jhawar ENT Center</h1>
        <h2 className="md:text-4xl  text-2xl  font-semibold font-sans text-gray-700">
          Dr. Kavish Jhawar
        </h2>
        <h2 className="md:text-2xl  text-lg  font-semibold text-gray-600 font-sans">
            MBBS, DLO, DNB(ENT)
          </h2>
        <p className="text-gray-500 tracking-widest text-justify ">
          Dr. Kavish Jhawar is one of most renowed ENT Doctor. Countless locals
          near Khandwa have placed immense trust in the practitioner over the
          years. He is has a supportive and friendly staff, and the latest
          medical know-how to help patients. The clinic abides by all the
          necessary safety protocols, including Covid-19 precautionary measures.
          The doctor and team offer world-class care and guidance, always
          putting their patients first.
          <br/>
          <br/>
        
          If you’re planning to visit Dr. Kavish Jhawar in the near future, it’s advisable to book an appointment in advance to avoid waiting time.
        </p>
        </div>
      </div>
      <div  className="md:w-1/2 flex justify-center items-center md:p-16 p-6 " >
        <img src={CAROUSEL[5]} alt="doctor Image" className="w-full rounded-md" />
      </div>
    </div>
  );
};

export default AboutUs;
