import React from "react";
import wave from "../assets/wave Gif.gif";




const Services = () => {
  return (
    <>
      <section className="bg-black text-white relative z-50">
        <div className="container">
          <div className="min-h-[400px]">
            <div>
              <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 ">
                {
                  
                    
                  
                }
              </div>
              <img
                src={wave}
                alt=""
                className="h-[300px] w-full  object-cover   relative z-[0] "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
