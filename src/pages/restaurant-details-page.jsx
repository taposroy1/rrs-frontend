import React from 'react';
import Master from "../components/Navbar/Master.jsx";
import RestaurantDetails from "../components/Restaurant-details/RestaurantDetails.jsx";
import RestaurantNameTabel from "../components/Restaurant-details/RestaurantNameTabel.jsx";

const RestaurantDetailsPage = () => {
    return (
        <div>
            <Master>
              <RestaurantDetails/>
              <RestaurantNameTabel/>
            </Master>
        </div>
    );
};

export default RestaurantDetailsPage;