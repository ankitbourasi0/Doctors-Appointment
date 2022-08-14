import React, { useState, useEffect, useRef } from "react";
import { Animations, AnimationsTitle } from "../assets/index";
let count = 0;
let slideInterval;

const AnimationCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef();
  useEffect(() => {
    sliderRef.current.addEventListener("mouseenter", pauseSlider);
    sliderRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    },5000 );
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };
  const obJLENGTH = Object.keys(Animations).length;
  const handleOnNextClick = () => {
    count = (count + 1) % obJLENGTH;
    setCurrentIndex(count);
  };
  const handleOnPrevClick = () => {
    const obJLENGTH = Object.keys(Animations).length;
    count = (currentIndex + obJLENGTH - 1) % obJLENGTH;
    setCurrentIndex(count);
  };

  return (
    <div >
    
    {/* <h2 className="absolute top-20 left-60 text-3xl font-thin font-serif text-gray-600">{AnimationsTitle[currentIndex]}</h2> */}

    <div ref={sliderRef} className=" relative flex flex-col justify-center items-center ">
      <div className="flex justify-center items-center ">
      <img src={Animations[currentIndex]} alt="appointment" className=" w-4/5" />

      </div>

    </div>

    </div>

  );
};

export default AnimationCarousel;
