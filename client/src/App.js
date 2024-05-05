import {Routes , Route} from 'react-router-dom'
import './App.css';
//import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from './context/userContext';
import Dashboard from './pages/Dashboard';
import AOS from 'aos'
import 'aos/dist/aos.css'
import React from 'react';

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials =true

function App() {

  React.useEffect(()=>{
    AOS.init(
      {duration:1200,
      easing: "ease-in-out",}
    )
  })

  return (
    <UserContextProvider>
      <div className="app-container">
      <Toaster position='bottom-right' toastOptions={{duration:2000}}/>
      <div className="content">
        <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/home' element={<Home />} />
          
        </Routes>
      </div>
    </div>
    </UserContextProvider>
  );
}

export default App;
