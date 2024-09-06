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
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="Images/_DSC0357.jpg" alt="Nature 1" />
          <div className="quote"><p>"Yoga is a method of transformation... from man the brute, to man the man, to man the God.</p> The Alchemy of Total Transformation."</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="Images/_DSC2884.jpg" alt="Nature 2" />
          <div className="quote"><p>"Live God, Love God, Die God, Be God, God God.</p><p>God God. God God. God God."</p></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="Images/Italy-2013-0084-2-Edit.jpg" alt="Nature 3" />
          <div className="quote"><p>"The only purpose of</p><p>man's sojourn on this Earth</p><p>is to Seek God"</p></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="Images/USA-2011-2537.jpg" alt="Nature 4" />
          <div className="quote"><p>"When the Soul is burned with the Five of Devotion,</p><p>the Perfume is Nectarine"</p></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
