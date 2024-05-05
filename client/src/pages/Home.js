import React, { useContext, useEffect, useState } from 'react'
import bgVideo from "../assets/earth-bg.mp4"
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import Banner2 from '../components/Banner2'
import Banner3 from '../components/Banner3'
import Footer from '../components/Footer'
import { UserContext } from '../context/userContext';
import axios from 'axios'



const Home = () => {

  const { user, setUser } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch user profile when component mounts
        if (!user) {
            axios.get('/profile')
                .then(({ data }) => {
                    setUser(data);
                    console.log('data:' , data)
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error("Error fetching user profile:", error);
                    setIsLoading(false);
                    
                });
        } else {
            setIsLoading(false);
        }
    }, [user, setUser]);

    useEffect(() => {
        // Redirect to login page if token is expired or user is not logged in
        if (!isLoading && !user) {
            console.log("User not logged in, redirecting to login page...");
            window.location.href = '/';
        }
    }, [isLoading, user]);

    if (isLoading) {
        return <div>Loading...</div>;
    }
  
  

    return (
        <div className="">
          <div className="h-[700px] relative">
            <video
              autoPlay
              loop
              muted
              className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
            >
              <source src={bgVideo} type="video/mp4" />
            </video>
            <Navbar />
            <Hero />
          </div>
          <Services/>
          <Banner />
          <Banner2/>
          <Banner3/>
          <Footer/>
          
        </div>
      );
}

export default Home