import React, { useContext, useState } from 'react'
import { asstes } from "../assets/Tomato-Assets/assets"
import './main.css';
import { Link } from "react-router-dom"
import { StoreContext } from '../Context/StoreContext';
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home")

  const { totalAmount } = useContext(StoreContext)

  const handleClick = (item) => {
    setMenu(item)
  }
  return (
    <div className="navbar px-0 py-5 flex justify-between items-center sticky top-0 bg-white z-50">
  <Link to={"/"}>
    <img
      src={asstes.logo}
      alt=""
      className="logo w-36 s:w-32 m:w-28 lag:w-36 xlag:w-40"
    />
  </Link>
  <ul className="navbar-menu flex list-none gap-5 text-gray-500 text-lg cursor-pointer s:hidden m:gap-4 lag:gap-5 xlag:gap-6">
    <Link to={"/"} onClick={() => handleClick("Home")} className={menu === "Home" ? 'active' : ''}>Home</Link>
    <a href='/#menu' onClick={() => handleClick("Menu")} className={menu === "Menu" ? 'active' : ''}>Menu</a>
    <a href='/#app-download' onClick={() => handleClick("Mobile App")} className={menu === "Mobile App" ? 'active' : ''}>Mobile App</a>
    <a href='/#footer' onClick={() => handleClick("Contact Us")} className={menu === "Contact Us" ? 'active' : ''}>Contact Us</a>
  </ul>
  <div className="navbar-right flex items-center gap-10 s:gap-4 m:gap-6 lag:gap-8 xlag:gap-10">
    {/* <img src={asstes.search_icon} alt="" className="s:w-5 m:w-5 lag:w-6 xlag:w-7" /> */}
    <div className="navbar-search-icon relative">
      <Link to={"/cart"}>
        <img src={asstes.basket_icon} alt="" className="s:w-5 m:w-5 lag:w-6 xlag:w-7" />
      </Link>
      <div className={totalAmount() === 0 ? "" : "dot"}></div>
    </div>
    <button onClick={() => { setShowLogin(true) }} className="sign-up bg-transparent text-base text-gray-500 py-2 px-7 s:py-1 s:px-4 m:py-2 m:px-5 lag:py-2 lag:px-6 xlag:py-2 xlag:px-7">SignUp</button>
  </div>
</div>



  )
}

export default Navbar
