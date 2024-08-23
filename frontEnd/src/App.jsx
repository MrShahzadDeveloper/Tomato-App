import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Routes , Route } from 'react-router-dom'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import PlaceOrder from './Pages/PlaceOrder'
import Footer from './Components/Footer'
import "./index.css"
import LoginPop from './Components/LoginPop'
function App() {
    const [showLogin , setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPop setShowLogin = {setShowLogin}/>:<></>}
    <div className='w-4/5 m-auto'>
      <Navbar setShowLogin = {setShowLogin}/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/cart" element = {<Cart/>}/>
        <Route path = "/order" element = {<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
