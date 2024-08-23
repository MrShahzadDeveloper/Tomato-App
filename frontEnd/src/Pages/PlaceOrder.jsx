import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'

const PlaceOrder = () => {
  const { totalAmount } = useContext(StoreContext)
  return (
    <form className='place-order flex flex-col lg:flex-row gap-8 mt-28'>
    <div className="order-left w-full lg:w-2/3">
      <p className="title text-2xl sm:text-3xl font-semibold mb-8 sm:mb-12">Delivery Information</p>
      <div className="multi-fields flex flex-col sm:flex-row gap-4 sm:gap-6">
        <input className='w-full sm:w-1/2' type="text" placeholder='First Name' />
        <input className='w-full sm:w-1/2' type="text" placeholder='Last Name' />
      </div>
      <input className='w-full mt-4' type="Email" placeholder='Email Address' />
      <input className='w-full mt-4' type="text" placeholder='Street' />
      <div className="multi-fields flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
        <input className='w-full sm:w-1/2' type="text" placeholder='City' />
        <input className='w-full sm:w-1/2' type="text" placeholder='State' />
      </div>
      <div className="multi-fields flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
        <input className='w-full sm:w-1/2' type="text" placeholder='Zip Code' />
        <input className='w-full sm:w-1/2' type="text" placeholder='Country' />
      </div>
      <input className='w-full mt-4' type="text" placeholder='Phone' />
    </div>
    <div className="order-right w-full lg:w-1/3 mt-8 lg:mt-0">
      <div className="cart-total flex flex-col gap-5">
        <h2 className='text-xl sm:text-2xl font-bold'>Cart Total</h2>
        <div>
          <div className="cart-total-details flex justify-between text-gray-700">
            <p>Sub-Total</p>
            <p>${totalAmount()}</p>
          </div>
          <hr className='my-3' />
          <div className="cart-total-details flex justify-between text-gray-700">
            <p>Delivery Fee</p>
            <p>${totalAmount() === 0 ? 0 : 3.6}</p>
          </div>
          <hr className='my-3' />
          <div className="cart-total-details flex justify-between text-gray-700">
            <p>Total</p>
            <p>${totalAmount() === 0 ? 0 : totalAmount() + 3.6}</p>
          </div>
        </div>
        <button className='cart-btn bg-tomato text-white py-2 px-4 rounded hover:bg-tomato-dark mt-6'>
          Proceed To Payment
        </button>
      </div>
    </div>
  </form>
  
  )
}

export default PlaceOrder
