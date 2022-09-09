import React from "react";
import { Images } from "../assets";
const Footer = () => {
  return (<div className="bg-gray-700 px-12 pt-6 capitalize flex-col items-center">
    <div className="flex flex-col md:flex-row justify-between ">
      <div className=" p-4  flex flex-col   md:w-1/2 mr-4 text-center items-center">
        <img
          src={Images.logo2}
          width={100}
          height={100}
          alt="footer-logo"
        />
        <h1 className="text-white text-xl font-medium mt-3 uppercase ">
          Jhawar ENT Care Center
        </h1>

        <p className="text-white md:text-medium text-xs font-medium w-1/2">
          Jhawar ENT care is specialized clinic where you can cure your
          Eye,Nose and Throat.
        </p>
        <hr className="w-1/6 my-3" />
        <div className="flex flex-col items-center text-white">
          <div className="">
            <span>Contact: </span>
            <span>9407494294</span>
          </div>
          <hr className="w-1/6 my-3" />
          <div className="">
            <span>Opening hours:</span><br />

            <span> Morning 10AM to 3PM,<br /> Evening 5PM to 8PM</span>
          </div>
          <hr className="w-1/6 my-3" />
          <div className="">
            <span>Address: </span><br></br>

            <span>1st floor, Jivan Jyoti Complex, Near Lady Butler gate<br /> Khandwa-45001 Madhya Pradesh </span>
          </div>
        </div>
      </div>


      <div className="flex flex-col w-full justify-center items-center  ">
        <iframe title="map" className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14815.427271505785!2d76.342111!3d21.8244624!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe4f0391869357ae0!2sDr.%20Kavish%20Jhawar!5e0!3m2!1sen!2sin!4v1662744471934!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">

        </iframe>
      </div>



    </div>
    <div className="flex flex-col justify-end">
      <p className="mt-5 mb-0 text-gray-400 text-md text-center">
        All Right Reserved to Jhawar ENT Care Center
      </p>
      <p className="mt-0 pb-2 text-gray-400 text-md text-center">
        Powered By <a className="text-gray-400" href="https://digitalcomputing.co.in">Digital Computing&reg;</a>
      </p>
    </div>
  </div>
  );
};

export default Footer;
