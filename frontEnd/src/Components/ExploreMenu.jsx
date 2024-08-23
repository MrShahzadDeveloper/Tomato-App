import React from 'react'
import "./main.css"
import { menu_list } from '../assets/Tomato-Assets/assets'
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu flex flex-col gap-5' id='menu'>
      <h1 className='text-gray-600 font-medium text-4xl'>Explore Our Menu</h1>
      <p className='explore-menu-text lag:max-w-full lag:text-sm'>Choose from a diverse menue featuring a delectable array of dishes. Our Mission is to satisfy your craving and evaluate your dining experience, One delicious meal at a time.</p>
      <div className="explore-menu-list flex justify-between items-center text-center gap-8 my-5 mx-0 cursor-pointer">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => {
                setCategory((prev) => prev === item.menu_name ? "All" : item.menu_name);
              }}
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p className='mt-3 text-gray-500'>{item.menu_name}</p>
            </div>

          )
        })}
      </div>
      <hr className='my-10px h-1.5 bg-gray-200 border-none' />
    </div>
  )
}

export default ExploreMenu
