import React from "react";
import "./styles.css";
import { CAROUSEL } from "../assets";
import BookingModal from "../components/BookingModal";
const AboutUs = () => {
  return (
    <div className="md:flex columns-1 md:columns-2 bg-white h-auto md:py-8 pr-5" >
      <div className="items-center p-5 w-auto flex md:hidden" >
        <img src={CAROUSEL[5]} alt="docImage" className="w-full rounded-lg shadow-lg shadow-gray-300 " />
      </div>
      <div className="md:py-8 md:px-16 px-8 py-12 w-50">
        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl  font-semibold font-sans text-gray-700 custom-font mb-1">
          Dr. Kavish Jhawar
        </h1>
        <h2 className="md:text-2xl  text-lg  font-semibold text-blue-400 font-sans my-0 capitalize">
          MBBS, DLO, DNB(ENT)
        </h2>
       
        <p className="mt-8 text-justify custom-font">
          One of the most renowned ENT Doctor.
          Countless locals near Khandwa have placed immense trust in the practitioner over the years.

          He has a supportive and friendly staff, latest equipment and he knows how to help patients.

          The clinic abides by all the necessary safety protocols, including Covid-19 precautionary measures. The doctor and team offer world-class care and guidance, always putting their patients first.
          <br />
          <br />
          If you’re planning to visit Jhawar Ennt Clinic Center in the near future, it is advisable to book an appointment in advance to avoid waiting time.

          <div className="block md:hidden mt-8">
            <BookingModal />
          </div>
        </p>

      </div>

      <div className="items-center p-5 w-auto md:flex hidden" >
        <img src={CAROUSEL[5]} alt="docImage" className="w-full rounded-lg shadow-lg shadow-gray-300 " />
      </div>
    </div>
  );
};

export default AboutUs;
