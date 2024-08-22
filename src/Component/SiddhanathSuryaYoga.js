import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";

function SiddhanathSuryaYoga() {
  return (
      
<>
<div className="relative w-full p-2 md:p-2 border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
        {/* Container for image */}
        <img
          src="Images/shutterstock_2352568737.jpg"
          className="w-full h-fit"
          alt="Nature 1"
        />
        {/* Overlay heading */}
        <h1 className="absolute left-1/3 inset-x-0 md:bottom-1/3 bottom-0 md:h-16 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg md:text-5xl font-bold text-left bg-opacity-50  p-4 m-10 rounded">
          Siddhanath Surya Yoga
        </h1>
      </div>


    <div className="m-3">
      {/* Container for the image and text */}
      <div className="flex flex-col md:flex-row items-center justify-between md:m-10 ">
        {/* Text section */}
        <div className="flex-1 px-5 md:px-0  md:mx-20">
          <h1 className="font-Poppins text-5xl text-center font-light mt-5  text-red-900">
            Siddhanath Surya Yoga:
          </h1>
          <h1 className="font-Poppins text-5xl text-center font-light mt-5 text-red-900">
            Pranic Healing with Solar Power
          </h1>
          <p className="text-xl text-center mt-6 tracking-wide">
            Yogiraj Siddhanath gives us Surya Yoga, a dynamic osmosis of Solar
            healing. He is hailed by many around the world as one of the
            foremost Solar Masters of the 20th century, giving to the modern age
            his Surya Yoga suited to the people of today busy in the rough and
            tumble of daily life.
          </p>
          <h1 className="font-Poppins font-light text-3xl text-center mt-7 text-red-900">
            Learn the technique
          </h1>
          <p className="text-xl text-center mt-3 tracking-wide">
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
              <img src="Images/shutterstock_2352568737.jpg" alt="Nature 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="Images/139067.jpg" alt="Nature 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="Images/OIP.jpg" alt="Nature 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="Images/shutterstock_2352568737.jpg" alt="Nature 1" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
    </>
  );
}

export default SiddhanathSuryaYoga;
