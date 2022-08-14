import React from "react";
import { Images } from "../assets";
const Footer = () => {
  return (
    <div className="bg-gray-700 flex flex-col justify-center p-12 ">
      <div className=" flex justify-between max-w-5xl border-b-2  ">
        <div className="w-1/2 md:w-full p-2  flex flex-col justify-center">
          <img
            src={Images.logo2}
            className="cursor-pointer md:w-28 w-24 ml-6"
            alt="footer-logo"
          />
          <h1 className="text-white text-xl font-medium font-sans uppercase ">
            Jhawar ENT Care 
          </h1>

          <p className="text-white md:text-medium text-xs font-medium font-sans w-1/2">
           Jhawar ENT care is specialized clinic where you can cure your Eye,Nose and
            Throat.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center w-1/2 p-2 bg-black">
          <ul className="font-medium text-sm space-y-2 tracking-widest text-gray-500">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="font-semibold p-1 text-gray-500 tracking-wider text-sm text-center">
        All Right Reserved to Digital Computing
      </p>
    </div>
  );
};

export default Footer;
