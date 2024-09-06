import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Teaching.css';
import './Carousel.css';  

// Import required modules
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";

function SiddhanathSuryaYoga() {
  return (
      
<>
  <div className="m-2 md:m-5">
<div className="relative w-full  border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
        {/* Container for image */}
        <img
          src="Images/Solis-2014-0228.jpg"
          className="w-full h-fit"
          alt="Nature 1"
        />
        {/* Overlay heading */}
        {/* <h1 className="absolute left-1/3 inset-x-0 md:bottom-1/3 bottom-0 md:h-16 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg md:text-5xl font-bold text-left bg-opacity-50  p-4 m-10 rounded">
          Siddhanath Surya Yoga
        </h1> */}
      </div>
      </div>


    <div className="surya_para  m-3">
      
      <div className="flex flex-col md:flex-row items-center justify-between md:m-10 ">
        
        <div className="flex-1 px-5 md:px-0  md:mx-20">
          <h1 className=" text-center font-medium  mt-5  ">
            Siddhanath Surya Yoga:
          </h1>
          <h1 className="text-center mt-5">
            Pranic Healing with Solar Power
          </h1>
          <p className="sm:text-center text-left mt-6">
            Yogiraj Siddhanath gives us Surya Yoga, a dynamic osmosis of Solar
            healing. He is hailed by many around the world as one of the
            foremost Solar Masters of the 20th century, giving to the modern age
            his Surya Yoga suited to the people of today busy in the rough and
            tumble of daily life.
          </p>
          <h1 className=" text-center mt-7">
            Learn the technique
          </h1>
          <p className="sm:text-center text-left  mt-3 ">
            Below we offer a video of Yogiraj demonstrating the basic version of
            this powerful practice so that all may learn and utilize the
            technique for their spiritual progress. This technique of Surya Yoga
            brings about Pranic Healing and Spiritual Awareness through Solar
            Power. You can use this technique to bring ease and order into your
            daily life during the morning hours of sunrise, or the sunset. The
            full technique may be learned from any of our certified Hamsacharyas
            or at any of the New Life Awakening Retreats with Yogiraj himself.
          </p>
        </div>

        {/* Image section */}
        <div className="flex-1 md:ml-5 w-full h-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            keyboard={{ enabled: true }}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{ delay: 2000, disableOnInteraction: true }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper1 "
          >
            <SwiperSlide>
              <img src="Images/for FB (2 of 1).jpg" alt="Nature 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="Images/USA-2011-3241.jpg" alt="Nature 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="Images/USA-2012-5954.jpg" alt="Nature 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="Images/Ital-2013-0136.jpg" alt="Nature 1" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
    </>
  );
}

export default SiddhanathSuryaYoga;
