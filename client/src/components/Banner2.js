
import React, { useEffect, useState } from "react";
import satelitImg from "../assets/satelite2.jpg";


const Rapidscat = () => {
  const[data , setData] = useState(null)
/*natural/date/2015-10-31'*/
  useEffect(() => {
    async function fechAPIData(){
      const url = 'https://epic.gsfc.nasa.gov/api/natural/date/2015-10-31?api_key=lzRZKXh9Qg0KhqhrcOnv4MkDz8kBN518Tz7xc3AD'      
      
      try {
        const res = await fetch(url)
        const apiData  =await res.json()
        setData(apiData)
        //console.log('Data\n' , apiData)
      } catch (error) {
        console.log(error.mesaage)
      }

    }
    fechAPIData()
  } ,[])
  return (
    <>
    {data && (
      <section className="bg-black text-white py-20">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
                {data[0].date}
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-3xl"
              >
                {/*data[0].identifier*/}Space Snapshot: NASA's EPIC Camera Captures Earth's Beauty
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
              {data[0].caption}. This mesmerizing image was captured by NASA's EPIC camera aboard the NOAA DSCOVR spacecraft. It provides a stunning view of our planet from space, showcasing the beauty and grandeur of Earth's atmosphere. The satellite was positioned at latitude {data[0].centroid_coordinates.lat} and longitude {data[0].centroid_coordinates.lon}, offering a unique perspective on the globe below.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View All
              </button>
            </div>
            <div data-aos="zoom-in">
              <img
                src={`https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/${data[0].image}.png`}
                alt=""
                className="w-full sm:w-[65%] mx-auto max-h-[600px] "
              />
            </div>
          </div>
        </div>
      </section>
    )}
    </>
  );
};

export default Rapidscat;
