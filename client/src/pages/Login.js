import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {Link, useNavigate} from 'react-router-dom'

import {AiOutlineUnlock} from 'react-icons/ai'
import { CiMail } from "react-icons/ci";


const Login = () => {
    const [data , setData] = useState({
        email: '',
        password: '',
    })
    const navigate = useNavigate()



    const loginUser =async (e)=>{
      e.preventDefault()
      const {email , password} = data
      try {
        const {data} = await axios.post('/login' , {
          email , password
        })
        if(data.error){
          toast.error(data.error)
        }else{
          setData({})
          navigate('/home')
        }
      } catch (error) {
        console.log(error)
      }
  }


  return (
    <div className='w-full h-screen bg text-white  flex justify-center items-center '>
    <div>
      <div className='bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
        <h1 className='text-5xl text-white font-bold text-center mb-6'>Login</h1>
          <form action='' onSubmit={loginUser}>
          <div className='relative my-4'>
          <input type='email' className=' block w-72 py-2.5 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder='' value={data.email} onChange={(e)=> setData({...data , email:e.target.value})}/>
          <label htmlFor='' className=' absolute  text-2xl text-white duration-300 transform -translate-y-6 scale-75 top-3 -left-1 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark text-blue-500 peer-placeholder-shown::scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-50 peer-focus:=translate-y-6'>Your Email</label>
          <CiMail className='absolute top-4 right-4'/>
        </div>

        <div className='relative my-4'>
          <input type='password' className='block w-72 py-2.5 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer'placeholder='' value={data.password} onChange={(e)=> setData({...data , password:e.target.value})}/>
          <label htmlFor='' className='absolute  text-2xl text-white duration-300 transform -translate-y-6 scale-75 top-3 -left-1 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark text-blue-500 peer-placeholder-shown::scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-50 peer-focus:=translate-y-6'>Your Password</label>
          <AiOutlineUnlock className='absolute top-4 right-4' />
        </div>

        <div className='flex justify-between items-center pt-6 '>
        <div className='flex gap-2 items-center'>
          <input type='checkbox' name='' id=''/>
          <label htmlFor=''>Remember me</label>
        </div>

        
          <Link to='' className='text-blue-500'>Forgot Password?</Link>
        </div>
        <button type='submit' className='font-bold w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300'>Login</button>

        <div>
          <span className='m-4'>New Here?<Link className='text-blue-500' to='/register'>Create an Account</Link></span>
        </div>
          </form>
      </div>
    </div>
    </div>
  )
}

export default Login


/*
<div>
    <form onSubmit={loginUser}>
        <label>Email</label>
        <input type='email' placeholder='enter email' value={data.email} onChange={(e)=> setData({...data , email:e.target.value})}></input>

        <label>Password</label>
        <input type='password' placeholder='enter password' value={data.password} onChange={(e)=> setData({...data , password:e.target.value})}></input>

        <button type='submit'>Login</button>
    </form>
    </div>
*/