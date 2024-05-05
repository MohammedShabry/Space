import React from "react";
import Logo from "../assets/logo.png";
import { useNavigate} from 'react-router-dom'
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {

  const navigate = useNavigate()

  

  const logoutUser = async () => {
    try {
        await axios.post('/logout');
        navigate('/');
        console.log('logout successfull')
    } catch (error) {
        console.error('Logout error:', error);
        toast.error('Logout failed. Please try again later.');
    }
}

  return (
    <>
      <nav
        data-aos="fade-down"
        className="fixed top-0 right-0 w-full z-[99] bg-black/10 backdrop-blur-sm py-4 sm:py-0"
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 text-white font-bold text-2xl">
              <img src={Logo} alt="" className="w-10" />
              <span>SPACE</span>
            </div>
            <div className="text-white hidden sm:block">
              <ul className="flex items-center gap-6 text-xl py-4 ">
                <li>
                  <a href="#">APOD</a>
                </li>
                <li>
                  <a href="#">EPIC</a>
                </li>
                <li>
                  <a href="#">MRP</a>
                </li>
                <li>
                  <a href="#">ABOUT</a>
                </li>
              </ul>
            </div>
            <div>
              <button onClick={logoutUser} className=" text-white border-2 border-white px-3 py-1 rounded-md">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
