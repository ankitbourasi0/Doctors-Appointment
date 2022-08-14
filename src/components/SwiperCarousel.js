import React from "react";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CAROUSEL } from "../assets/index";
import "./styles.css";
function useWidowSize() {
  const [windowsSize, setWindowsSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useEffect(() => {
    const handle = () => {
      setWindowsSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("resize", handle);
    };
  }, []);

  return windowsSize;
}
const SwiperCarousel = () => {
  // const [height,width] = useWidowSize()
  // const Navigation = () =>{
  //   if (width < 767){
  //     return false
  //   }else{
  //     return true
  //   }
  // }
  return (
    <div id="patterns" className="bg-white p-16 ">
      <h1 className="text-5xl font-semibold tracking-wide text-center">
        Gallery
      </h1>
      <div className="max-w-5xl  md:p-8 p-4 mx-auto mb-20 ">
        {/* <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        centeredSlides={true}
        modules={[Navigation, Pagination,]}
        className="mySwiper md:rounded-2xl rounded-xl"
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
      >
        <SwiperSlide>
          <img src={CAROUSEL[0]} alt={CAROUSEL[0]}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={CAROUSEL[1]} alt={CAROUSEL[1]}/>
        </SwiperSlide><SwiperSlide>
          <img src={CAROUSEL[2]} alt={CAROUSEL[2]}/>
        </SwiperSlide><SwiperSlide>
          <img src={CAROUSEL[3]} alt={CAROUSEL[3]}/>
        </SwiperSlide><SwiperSlide>
          <img src={CAROUSEL[4]} alt={CAROUSEL[4]}/>
        </SwiperSlide><SwiperSlide>
          <img src={CAROUSEL[5]} alt={CAROUSEL[5]}/>
        </SwiperSlide>
      </Swiper> */}
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3703.856818249937!2d76.33992231486849!3d21.82446238557282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd81b958eaf2c01%3A0xe4f0391869357ae0!2sDr.%20Kavish%20Jhawar!5e0!3m2!1sen!2sin!4v1657018659716!5m2!1sen!2sin"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
      </div>
    </div>
  );
};

export default SwiperCarousel;
