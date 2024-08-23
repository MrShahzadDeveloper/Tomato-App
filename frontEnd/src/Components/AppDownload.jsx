import React from 'react'
import { asstes } from '../assets/Tomato-Assets/assets'
import "./main.css"

const AppDownload = () => {
    return (
        <div className='app-download m-auto mt-28 text-center font-medium' id='app-download'>
            <hr className='my-10px h-1.5 bg-gray-200 border-none mb-11' />
            <p>For Better Experience Download <span className='text-red-600 font-medium mt-11'>Tomato App</span></p>
            <div className="platforms flex justify-center mt-10">
                <img src={asstes.play_store} alt="" />
                <img src={asstes.app_store} alt="" />
            </div>
        </div>
    )
}

export default AppDownload
