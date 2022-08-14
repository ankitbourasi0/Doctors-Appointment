import React, { useState,useEffect } from "react";
import { useRef } from "react";
import { CAROUSEL } from "../assets/index";
let count = 0;
let slideInterval;
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
   const sliderRef = useRef()
   const removeAnimation = ()=>{
    sliderRef.current.classList.remove('fade-anim')
   }
  useEffect(() => {
    sliderRef.current.addEventListener("animationend",removeAnimation)
    sliderRef.current.addEventListener("mouseenter",pauseSlider)
    sliderRef.current.addEventListener("mouseleave",startSlider)

    startSlider()
    return ()=>{
        pauseSlider()
    };
  },[])
  const startSlider = ()=>{
   slideInterval = setInterval(()=>{
        handleOnNextClick()
    },3000)
  }
  const pauseSlider = ()=>{
    clearInterval(slideInterval)
  }
  const obJLENGTH = Object.keys(CAROUSEL).length;
  const handleOnNextClick = () => {
    count = (count + 1) % obJLENGTH;
    setCurrentIndex(count);
    sliderRef.current.classList.add('fade-anim')
  };
  const handleOnPrevClick = () => {
  const obJLENGTH = Object.keys(CAROUSEL).length;
    count = (currentIndex + obJLENGTH -1) % obJLENGTH
    setCurrentIndex(count)
  };
  return (
    <div  className="md:max-w-screen-xl md:p-8 mx-auto mb-20   ">
      <div ref={sliderRef} className=" w-full select-none relative">
        <div className="aspect-w-16 aspect-h-9 flex justify-center items-center">
          <img src={CAROUSEL[currentIndex]} alt={CAROUSEL[currentIndex]} className="md:rounded-3xl shadow-lg shadow-gray-400 h-4/5 w-4/5 " />
        </div>

        <div className="absolute top-1/2 w-full px-3 transform -translate-y-1/2 flex justify-between items-center">
          <button className="bg-black text-gray p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100  transition" onClick={handleOnPrevClick}><ion-icon size="large" name="chevron-back-outline"></ion-icon></button>
          <button className="bg-black text-gray p-1 rounded-full bg-opacity-0 cursor-pointer hover:bg-opacity-50  transition" onClick={handleOnNextClick}><ion-icon size="large" name="chevron-forward-outline"></ion-icon></button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
