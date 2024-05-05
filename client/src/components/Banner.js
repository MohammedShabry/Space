import React, { useEffect, useState } from "react";


const Banner = () => {
  const[data , setData] = useState(null)

  useEffect(() => {
    
    async function fechAPIData(){
      
      const url = 'https://api.nasa.gov/planetary/apod?api_key=lzRZKXh9Qg0KhqhrcOnv4MkDz8kBN518Tz7xc3AD'

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
  return (
    <>
    {data && (
      <div className="bg-black text-white pb-12">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src={data.hdurl}
                alt={data.title}
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
                {data.date}
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                {data.title}
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
              {data.explanation}
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default Banner;