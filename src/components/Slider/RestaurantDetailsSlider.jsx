
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay} from "swiper/modules";
const RestaurantDetailsSlider = () => {
    const images=[
        {
            img:"https://tourfic.com/preview/wp-content/uploads/sites/9/2022/01/330735439.jpg"
        },
        {
            img:"https://tourfic.com/preview/wp-content/uploads/sites/9/2022/01/269776614.jpg"

        },
        {
            img:"https://tourfic.com/preview/wp-content/uploads/sites/9/2022/01/269776614.jpg"

        },

    ]


    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Autoplay]}
            autoplay={{ delay: 5000 }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}


        >
            {images.map((image, index)=>(
                <SwiperSlide key={index}>
                    <img src={image.img} className="w-[90vw] h-[60vh] mx-auto" alt=''/>
                </SwiperSlide>
            ))}


        </Swiper>
    );
};

export default RestaurantDetailsSlider;