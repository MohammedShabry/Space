
import React, { useEffect, useState } from "react";
import sateliteImg from "../assets/satelite1.jpg";

const Banner = () => {
  const[data , setData] = useState(null)

  useEffect(() => {
    
    async function fechAPIData(){
      
      const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=lzRZKXh9Qg0KhqhrcOnv4MkDz8kBN518Tz7xc3AD'

      try {
        const res = await fetch(url)
        const apiData  =await res.json()
        setData(apiData)
        
      } catch (error) {
        console.log(error.mesaage)
      }

    }

    
    fechAPIData()
  } ,[])

  const imageIndices = [0, 8, 855, 655, 846 , 845];  //570  250

  return (
    <>
   {data && (
  <div className="bg-black text-white pb-12">
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        {/* Your content here */}
      </div>
    </div>

    {/* Title in the middle */}
    <div className="container mt-8 text-center">
      <h2
        data-aos="fade-up"
        data-aos-delay="500"
        className="text-5xl mb-4 font-bold p-10 pb-20"
      >
        Mars Rover Photos
      </h2>
    </div>

    {/* Display specified images */}
    <div className="container mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {imageIndices.map((index) => (
    <div data-aos="zoom-in">
        <div  key={index} className="relative overflow-hidden">
          <img
            src={data.photos[index].img_src}
            alt={`Mars Photo ${index + 1}`}
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50">
            <p className="text-white text-sm truncate">
              {data.photos[index].camera.full_name}
            </p>
          </div>
        </div>
    </div>
      ))}
    </div>
  </div>
)}

    </>
  );
};

export default Banner;
