import React from "react";
import { NavLink } from "react-router-dom";
import { Images } from "../../assets/index";
import BookingModal from "../BookingModal";

const NavigationBar = () => {
  return (
    <>
      <nav className=" z-10 px-3 py-2 flex justify-between items-center align-middle w-full bg-white sticky top-0">
        <NavLink to="/">
          <div classname="w-20 h-7 bg-red-400">
            <img src={Images.logo} alt="logo" className="w-24 h-full" />
          </div>
        </NavLink>
        <NavLink to="/" >
          <h1 className="sm:text-2xl text-lg pt-2 font-bold custom-font mr-4 md:mr-auto">Jhawar ENT</h1>
        </NavLink>
        <div className="md:block hidden">
          <BookingModal />
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
