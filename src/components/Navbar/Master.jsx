import React from 'react';
import MenuBar from '../Navbar/MenuBar';
import Footer from "../Footer/Footer.jsx";


const Master = (props) => {
    return (
        <>
            <MenuBar/>
                {props.children}
            <Footer/>
        </>
    );
};

export default Master;