import React, { useState } from 'react'
import { asstes } from '../assets/Tomato-Assets/assets'
import "./main.css"
const LoginPop = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Sign Up")
    return (
        <div className='login-popup absolute w-full h-full grid '>
            <form className="login-contaioner place-self-center text-gray-500 bg-white flex flex-col gap-6 py-7 px-8 rounded-lg text-sm">
                <div className="login-title flex justify-between items-center text-red-500 text-2xl font-bold">
                    <h2>{currState}</h2>
                    <img className='w-4 cursor-pointer' src={asstes.cross_icon} onClick={() => { setShowLogin(false) }} alt="" />
                </div>
                <div className="login-input flex flex-col gap-5">
                    {currState === "Login" ? <></> : <input type="text" placeholder='Enter Name' required />}
                    <input type="email" placeholder='Enter Email' required />
                    <input type="password" placeholder='Enter Password' required />
                </div>
                    <button className='log-btn border-none p-3 rounded text-white text-base'>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-condition flex items-start gap-2 ">
                <input class="checkbox-custom mt-1" type="checkbox" required />
                    <p className='mt-1'>By continuing, I agree tthe terms of use & privacy policy.</p>
                </div>
                {currState === "Login" ?
                    <p>Create a new Account? <span  className='text-red-500 cursor-pointer' onClick={() => { setCurrState("Sign Up") }}>Click Here</span></p> :
                    <p>Already have an Account? <span  className='text-red-500 cursor-pointer' onClick={() => { setCurrState("Login") }}>Login Here</span></p>}
            </form>
        </div>
    )
}

export default LoginPop
