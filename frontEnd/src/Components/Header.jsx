import React from 'react';
import './main.css'; // Ensure this imports Tailwind and any other custom styles
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header my-8 mx-auto bg-no-repeat bg-contain  relative' id='home'>
      <div className='header-content absolute flex flex-col items-start px-4 sm:px-6 sm:mt-1 md:px-8 lg:px-12 xlag:px-16 '>
        <h2 className='font-medium text-white text-sm s:text-sm sm:text-sm  md:text-3xl lag:text-4xl xlag:text-5xl'>
          Order Your Favourite Food Here.
        </h2>

        <p className='text-white text-sm sm:text-base md:text-lg lag:text-xl xlag:text-2xl hidden lag:block'>
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </p>
        <a href="/#menu"><button className='border border-tomato rounded-full px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lag:px-10 lag:py-5 xlag:px-12 xlag:py-6 text-gray-500 bg-white hover:bg-tomato hover:text-white transition duration-200'>
          View Menu
        </button></a>
      </div>
    </div>
  );
}

export default Header;
