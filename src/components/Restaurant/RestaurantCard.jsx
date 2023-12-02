import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { IoRestaurantOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import {Link} from "react-router-dom";
const RestaurantCard = ({id, img, name, address, type, rating}) => {

    return (
        <div className='font-bold w-[300px] rounded-lg flex flex-col bg-white gap-2  drop-shadow-2xl'>
            <img className='rounded-t-lg hover:opacity-95 cursor-pointer' src={img} />
            <div className='rounded-lg flex flex-col p-3 gap-2'> 
                <p className='text-lg font-semibold'>{name}</p>
                <p  className=' flex text-xs font-normal gap-2'><IoLocationOutline />{address}</p>
                <p className='flex text-xs font-normal gap-2'><IoRestaurantOutline />{type}</p>
                <p className='flex text-xs font-normal gap-2'><FaStar className='text-yellow-400'/>{rating}/5</p>
                <button className=' font-medium bg-green-400 hover:bg-green-600 text-white border drop-shadow-md rounded-lg h-10 mt-5' >
                    {<Link to={'http://localhost:5173/RestaurantDetails'} >Reserve Now</Link>}
                    </button>
            </div>
            
        </div>
    );
};

export default RestaurantCard;