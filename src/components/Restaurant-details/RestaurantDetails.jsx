import RestaurantDetailsSlider from "../Slider/RestaurantDetailsSlider.jsx";
import Master from "../Navbar/Master.jsx";
import RestaurantNameTabel from "./RestaurantNameTabel.jsx";

const RestaurantDetails = () => {
    return (
        <div>
           <Master>
              <RestaurantDetailsSlider/>
               <div className='mt-10'>
                   <RestaurantNameTabel/>
               </div>

           </Master>
        </div>
    );
};

export default RestaurantDetails;