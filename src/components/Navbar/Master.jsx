import React from 'react';
import MenuBar from '../Navbar/MenuBar';
import Footer from '../Navbar/Footer';

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