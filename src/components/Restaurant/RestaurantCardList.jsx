import React from 'react';
import RestaurantCard from './RestaurantCard';
import restaurantData from '../../data/restaurantData'

const RestaurantCardList = () => {
    return (
        <>
            <div className='flex flex-wrap p-5 mt-10 gap-10 justify-center'>
                {restaurantData.map((restaurant) => (
                    <RestaurantCard 
                     key={restaurant.id} 
                     name={restaurant.name.length > 30 ?restaurant.name.slice(0,30).concat("..."): restaurant.name}
                     img={restaurant.img}
                     address={restaurant.address.length > 40 ? restaurant.address.slice(0,40).concat("..."):restaurant.address }
                     type={restaurant.type}
                     rating={restaurant.rating}
                     description={restaurant.description}
                     />
                ))}
            </div>
        </>
    );
};

export default RestaurantCardList;