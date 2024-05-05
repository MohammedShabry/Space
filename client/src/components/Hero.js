import React from "react";
import MountainPng from "../assets/moon-surface-hd.png";

const Hero = () => {
  return (
    <div className=" bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-white space-y-4 lg:pr-36">
            <h1 data-aos="fade-up" className="text-5xl font-bold">
            SPACE EXPLORATION
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
            Exploring the cosmos isn't just about reaching new destinations; it's about discovering the infinite possibilities within ourselves. Welcome to a journey where every star is a reminder of our boundless curiosity and the potential for endless exploration.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
            >
              LEARN MORE
            </button>
          </div>
          <div></div>
        </div>
      </div>
      <img
        src={MountainPng}
        alt=""
        className="absolute right-0 bottom-0 w-full brightness-50 z-10 "
      />

      <div className="absolute bottom-0 w-full z-30 right-0  bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  );
};

export default Hero;
