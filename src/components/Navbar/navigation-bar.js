import React from "react";
import { Images } from "../../assets/index";
import BookingModal from "../BookingModal";
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Bars
} from "./navbar-elements";
const NavigationBar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <div classname="w-20 h-7 bg-red-400">
          <img src={Images.logo} alt="logo" className="w-24 h-full" />

          </div>
        </NavLink>
        <Bars/>
        <NavMenu>
            <NavLink to="/about-us">
               About
            </NavLink>
            <NavLink to="/services">
              Services
             </NavLink>
            <NavLink to="/contact-us">
            Contact Us
            </NavLink>
            <NavLink to="/sign-up">
              Sign Up
            </NavLink>
        </NavMenu>
        <BookingModal/>
        {/* <NavBtn>
          <NavBtnLink to="/appointment">Appointment</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default NavigationBar;
