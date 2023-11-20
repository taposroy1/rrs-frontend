import React from 'react';

const RestaurantCard = ({id, img, name, address, type, rating}) => {
    return (
        <div className='font-bold w-[300px] rounded-lg flex flex-col bg-white gap-2  drop-shadow-2xl'>
            <img className='rounded-t-lg' src={img} />
            <div className='rounded-lg flex flex-col p-3 gap-2'>
                <p className='text-lg font-semibold'>{name}</p>
                <p className='text-xs font-normal'>{address}</p>
                <p className='text-xs font-normal'>{type}</p>
                <p className='text-xs font-normal'>{rating}/5</p>
                <button className=' font-medium bg-green-400 hover:bg-green-600 text-white border drop-shadow-md rounded-lg h-10 mt-5'>Reserve Now</button>
            </div>
            
        </div>
    );
};

export default RestaurantCard;