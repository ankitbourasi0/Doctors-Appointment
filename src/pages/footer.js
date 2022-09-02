import React from "react";
import { Images } from "../assets";
const Footer = () => {
  return (
    <div className="bg-gray-700 flex flex-row p-12 justify-between  ">
      
      <div className=" p-4  flex flex-col   text-center items-center w-2/6 bg-red-400">
          <img
            src={Images.logo2}
            className="cursor-pointer md:w-28 w-24 ml-6"
            alt="footer-logo"
          />
          <h1 className="text-white text-xl font-medium font-sans uppercase ">
            Jhawar ENT Care
          </h1>

          <p className="text-white md:text-medium text-xs font-medium font-sans  w-1/2">
            Jhawar ENT care is specialized clinic where you can cure your
            Eye,Nose and Throat.
          </p>
        </div>
   
      <div className=" flex flex-row justify-between w-4/6 bg-black p-8">
      <div className="flex flex-col  justify-center items-center  ">
          <ul className="font-medium text-md text-left space-y-2 tracking-widest uppercase text-white">
            <li>
              About Us
            </li>
            <li>
              Contact us
            </li>
            <li>
              Services
            </li>
            <li>
               Solutions
            </li>
           
          </ul>
        </div>

        <div className="flex flex-col justify-center items-center space-y-6   tracking-wider   text-white text-right">
          <div className="flex flex-col space-y-6 ">
          <div className="">
            <span>Phone: </span>
            <span>+91-9407494294</span>
          </div>
          <div className="">
          <span>Opening hours:</span>

            <span> Morning 10AM to 3PM, Evening 5PM to 8PM</span>
          </div>
          <div className="">
          <span>Address: </span>

            <span>1st floor, Jivan Jyoti Complex, Near Lady Butler gate</span>
          </div>
          </div>
        </div>
      </div>
        {/* <p className="font-semibold p-1 text-gray-500 tracking-wider text-sm text-center">
          All Right Reserved to Digital Computing 
        </p> */}
    </div>
  );
};

export default Footer;
