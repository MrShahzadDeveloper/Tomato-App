import React from 'react'
import { asstes } from '../assets/Tomato-Assets/assets'
import "./main.css"
const Footer = () => {
    return (
        <div className='footer text-gray-100 bg-stone-700 flex flex-col items-center gap-5 pt-20 mt-28' id='footer'>
      <div className="footer-content w-full grid gap-20 xlag:grid-cols-3 lag:grid-cols-2 s:flex s:flex-col s:gap-8 ">
        <div className="left flex flex-col items-start gap-5">
          <img src={asstes.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolores ad consequatur voluptatibus velit impedit illum veniam? Veniam, necessitatibus. Nobis quidem officiis ullam maiores molestias, tenetur id corporis magnam aliquid.</p>
          <div className="icons flex gap-5 w-10">
            <img className='w-14 cursor-pointer' src={asstes.facebook_icon} alt="" />
            <img className='w-14 cursor-pointer' src={asstes.twitter_icon} alt="" />
            <img className='w-14 cursor-pointer' src={asstes.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="center flex flex-col items-start gap-5 s:items-left">
          <h2 className='text-white text-2xl font-medium'>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="right flex flex-col items-start gap-5 s:items-left">
          <h2 className='text-white text-2xl font-medium'>Get In Touch</h2>
          <ul>
            <li>+1-212-456-784590</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr className='w-full h-1 my-5 bg-gray-800'/>
      <p className="copyright text-center">
        Copyright 2024 &#169; Tomato.com - All Rights Reserved
      </p>
    </div>
    )
}

export default Footer
