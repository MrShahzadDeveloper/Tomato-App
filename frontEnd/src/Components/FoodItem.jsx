import React, { useContext } from 'react';
import "./main.css";
import { asstes } from '../assets/Tomato-Assets/assets'; // Ensure this import is correct
import { StoreContext } from '../Context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div>
      <div className="food-item w-full m-auto">
        <div className="food-item-img-container relative"> {/* Fixed typo here */}
          <img src={image} alt={name} className="food-item-img w-full" />
          {
            !cartItems[id] ? (
              <img
                className='add w-9 absolute bottom-4 right-4 cursor-pointer rounded-full'
                onClick={() => addToCart(id)}
                src={asstes.add_icon_white}
                alt="Add"
              />
            ) : (
              <div className='counter absolute bottom-4 right-4 flex items-center gap-3 p-2 rounded-full bg-white'>
                <img
                  className='w-7'
                  onClick={() => removeFromCart(id)}
                  src={asstes.remove_icon_red} 
                  alt="Remove"
                />
                <p>{cartItems[id]}</p>
                <img
                  className='w-7'
                  onClick={() => addToCart(id)}
                  src={asstes.add_icon_green}
                  alt="Add"
                />
              </div>
            )
          }
        </div>
        <div className="food-item-info p-5">
          <div className="food-item-name flex justify-between items-center mb-3">
            <p className='text-xl font-medium'>{name}</p>
            <img src={asstes.rating_starts} className='w-16' alt="Rating" /> {/* Fixed typo here */}
          </div>
          <p className="food-desc text-gray-500 text-sm">{description}</p>
          <p className="price text-orange-600 text-2xl font-medium my-3 mx-0">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
