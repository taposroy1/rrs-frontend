import React, { useState } from 'react';
import { VscReport } from "react-icons/vsc";
import {RxDashboard} from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaThList,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import '../Css/Owner Css/owner.css'


const Owner = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<RxDashboard/>
        },
        {
            path:"/reservation",
            name:"Reservation",
            icon:<FaUserAlt/>
        },
        {
            path:"/Menus",
            name:"Menus",
            icon:<FaTh/>
        },
        {
            path:"/reports",
            name:"Reports",
            icon:<VscReport/>
        },
        {
            path:"/profileSetup",
            name:"Profile",
            icon:<FaUserCircle/>
        },
        {
            path:"/branch",
            name:"Branch",
            icon:<FaCodeBranch/>
        },
        {
            path:"/gallery",
            name:"Gallery",
            icon:<GrGallery/>
        },
        {
            path:"/setup Table",
            name:"Setup Table",
            icon:<FaThList/>
        },



    ]
    return (
        <div className="container">
            <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
                <div className="top_section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">
                        Logo
                    </h1>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
                <span className='mt-96'>Logout</span>

            </div>

            <main>{children}</main>

        </div>

    );
};


export default Owner;
