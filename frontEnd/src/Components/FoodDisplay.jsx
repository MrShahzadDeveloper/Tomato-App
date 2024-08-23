import React, { useContext } from 'react';
import './main.css';
import { StoreContext } from '../Context/StoreContext';
import FoodItem from './FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className='food-display mt-8' id='food-display'>
      <h2 className='font-semibold'>Top Dishes Near You</h2>
      <div className="food-display-list text-lg s:overflow-y-auto s:max-h-[400px] s:scrollbar s:scrollbar-thumb-tomato s:scrollbar-track-tomato">
        {food_list.map((item, index) => {
          if (category === 'All' || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
