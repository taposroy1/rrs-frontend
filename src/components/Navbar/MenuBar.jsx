import React from 'react';
import {Link} from "react-router-dom";
const MenuBar = () => {
    return (
        <nav className='flex justify-between p-5 rounded-sm shadow-md'>
          <div className='flex'>
            <h4 className='text-2xl mr-10 drop-shadow-2xl'><Link to="/">GIVE ME REST</Link></h4>
            <ul className='flex gap-6 pt-1'>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className='flex gap-5 me-6'>
              <input
              type="search"
              name="search"
              id=""
              placeholder="Search here"
              autoComplete="off"
              className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
            />
            <Link className='pt-2' to="/login">Login</Link>
          </div>
      </nav>
      
    );
};

export default MenuBar;