import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Import autoplay styles

import './Carousel.css';

// Import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Carousel() {
  return (
    <div className='carousel-container'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
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
  );
}
