import React from 'react'
import Logo from '../assets/LogoTwo-transformed.png'
import "./Header.css"
import Carousel from './Carousel'

function Header() {

  
  return (
    <>
    <div className='Header h-24
     bg-white flex justify-around items-center flex-row-reverse
      text-center shadow-xl'>
      <div className="logo">
       <a href="#"><img className='w-20' src={Logo} alt="" /></a> 
      </div>
      <div className="change-lang">
      <button type="button" class="text-white bg-gradient-to-br
       from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 
       focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium 
       rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">En</button>
      </div>
      <div className="login-btn">
      <button type="button" class="text-white bg-gradient-to-r
       from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
        focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm
         px-5 py-2.5 text-center me-2 mb-2">Login</button>
      </div>
    </div>
    <div className="carousel">
    <div className="">
            <Carousel />
        </div>
    </div>
    </>
  )
}

export default Header