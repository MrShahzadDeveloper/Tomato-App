import React, { useContext } from 'react';
import { StoreContext } from "../Context/StoreContext";
import "../assets/Tomato-Assets/assets";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, totalAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className='cart mt-28'>
      <div className="cart-items">
        <div className="cart-title grid items-center text-gray-500">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <React.Fragment key={item._id}>
                <div className="cart-title cart-item my-3 text-black grid items-center">
                  <img src={item.image} alt={item.name} className='w-12' />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p className='relative left-8'>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p className='cursor-pointer text-orange-600 font-medium text-3xl relative left-6' onClick={() => removeFromCart(item._id)}>x</p>
                </div>
                <hr className='my-10px h-0.5 bg-gray-300 border-none' />
              </React.Fragment>
            );
          }
          return null; // Ensure a return statement for when the condition is not met
        })}
      </div>
      <div className="cart-bottom mt-20 flex flex-col lg:flex-row lg:justify-between">
        <div className="cart-total flex-1 flex flex-col gap-5">
          <h2 className='text-xl font-bold'>Cart Total</h2>
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
          <button onClick={() => { navigate('/order') }} className='cart-btn bg-tomato text-white py-2 px-4 rounded hover:bg-tomato-dark'>
            Proceed To Checkout
          </button>
        </div>
        <div className="cart-promocode flex-1 flex flex-col lg:flex-row lg:items-start lg:justify-start">
          <div>
            <p className='text-gray-700'>If you have a promo code, enter it here:</p>
            <div className="promo-input mt-3 flex flex-col lg:flex-row s:flex-row s:justify-between m:flex-row m:justify-between lag:flex-row lag:justify-between lg:items-center lg:gap-2">
              <input className='bg-transparent  rounded p-2 outline-none' type="text" placeholder='Promo Code' />
              <button className='submit-btn py-2 px-2 lg:px-4 bg-black border-none text-white rounded hover:bg-gray-800'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
