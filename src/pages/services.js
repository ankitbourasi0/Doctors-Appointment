import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CAROUSEL } from "../assets/index";
import "./styles.css";
const Services = () => {
  return (
    <div className="min-h-screen flex justify-between flex-col  md:px-8 md:flex-row bg-white">
      <div className="md:w-1/2  flex justify-center items-center  rounded-lg  ">
        <div className="md:py-8 md:px-16 px-8 py-12">
          <h1 className="md:text-5xl text-4xl font-semibold ">Services</h1>
          <p>
            Jhawar ENT care center is dedicated center for Ear, nose and throat
            disease and equipped with all latest instruments, audiometry and
            allergy testing facility.
            <br />
            <ul className="list-disc p-5">
              <li>Deafness treatment</li>
              <li>Endoscopic sinus surgery</li>
              <li>Eardrum bone surgery (Stapedectomy) </li>
              <li>Ear discharge,Hearing loss & Ruptured Eardrum Treatment </li>
              <li>Foreign Object Taked out from Ear, Nose and Throat </li>
              <li>Laryngoscopy</li>
              <li>Nose bone surgery (Rhinoplasty) </li>
              <li>Sinusitis</li>
              <li> Tonsil and adenoid surgery </li>
              <li> Vocal cord microsurgery(Microlaryngoscopy)</li>
            </ul>
            If you’re planning to visit Jhawar Ennt Clinic Center in the near future, it is advisable to book an appointment in advance to avoid waiting time.
          </p>
        </div>
      </div>
      <div
        className="md:w-1/2
       flex justify-center items-center"
      >
        <div className="max-w-3xl  md:p-8 p-4 mx-auto  w-full flex justify-center items-center z-0 ">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            centeredSlides={true}
            modules={[Navigation, Pagination]}
            className=" md:rounded-2xl rounded-xl"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <img src={CAROUSEL[4]} alt={CAROUSEL[4]} />
            </SwiperSlide>

            <SwiperSlide>
              <img src={CAROUSEL[3]} alt={CAROUSEL[3]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CAROUSEL[2]} alt={CAROUSEL[2]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CAROUSEL[5]} alt={CAROUSEL[5]} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Services;
