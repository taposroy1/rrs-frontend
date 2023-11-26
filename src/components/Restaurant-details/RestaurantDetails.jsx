import RestaurantDetailsSlider from "../Slider/RestaurantDetailsSlider.jsx";
import AdultsBooking from "../Slider/AdultsBooking.jsx";
import GoogleMapSlider from "../Slider/GoogleMapSlider.jsx";
import ChildrenBooking from "../Slider/ChildrenBooking.jsx";


const RestaurantDetails = () => {
    return (
        <div>
            <h2 className='pl-20 pt-6 text-[20px]'>Restaurant Details </h2>
            <div className="grid grid-cols-1  ">
                <div className='pt-3 pl-20 pb-6'>
                    <RestaurantDetailsSlider/>
                </div>

                <div className=''>
                    <div className=' pl-20'>

                    </div>
                    {/*<GoogleMapSlider/>*/}
                </div>
            </div>
        </div>
    );
};

export default RestaurantDetails;