import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Teaching.css";
import '../Carousel.css';  

// Import required modules
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";

function EarthPeaceMeditation() {
  return (
    <div>
      {/* Image Section */}
      <div className="m-2 md:m-5">
        <div className="relative w-full border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            src="Images/USA-2011-5953.JPG"
            className="w-full h-fit"
            alt="Nature 1"
          />
        </div>
      </div>
      <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium mt-5">
      Learn the Earth Peace Meditation Online – The Peace Mantra given by Gurunath for Earth Peace
            </h2>

      {/* Content Section */}
      <div className="surya_para m-3">
        <div className="flex flex-col md:flex-row items-center justify-between md:m-10">
          <div className="flex-1 px-4 md:px-6 lg:px-8 xl:px-12">
            {/* <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium mt-5">
              Learn the Earth Peace Meditation Online – The Peace Mantra given by Gurunath for Earth Peace
            </h2> */}
           
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium ">
              Individual Full Moon Meditations
            </h2>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-left mt-4 md:mt-6 lg:mt-8">
              Every full moon night, Yogiraj encourages us to sit for Earth
              Peace meditations at our individual homes anytime between the
              hours of 7 to 10pm local time. During the meditation session,
              there is a direct spiritual transmission from the Master. While
              experiencing “Still Mind”, humanity can experience oneness with
              the Creator, greater peace, and love. This great peace and love
              then can be released into all the world through the Earth Peace
              Meditation which utilizes group energy through chanting simple
              vowel sounds, visualization and intention.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-left mt-3">
              You may learn Yogiraj’s Earth Peace Meditation technique through
              the video above, or if you’d like to learn in person, contact your
              nearest Hamsacharya (teacher). To receive a monthly reminder of
              every full moon, join our email list.
            </p>

            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium text-left sm:text-center mt-7">
              Community Humanity Meditations
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-left mt-3">
              Please attend Community Humanity gatherings for Earth Peace
              Meditations to cultivate the spirit of serving humanity as our
              larger Selves. These sessions will be held on the third Saturday
              of each month from 1 to 4PM. If you cannot attend one of the
              locally organized group meditation meetings, make sure to tune in
              individually wherever you are at that time.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-left mt-3">
              To understand why we do earth peace meditations, read the
              declaration of human rights. To receive notifications of the
              Community Humanity events in your area, join our email list.
            </p>
          </div>

          {/* Image Slider Section */}
          <div className="flex-1 md:ml-5 w-full h-auto">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              keyboard={{ enabled: true }}
              pagination={{ clickable: true }}
              navigation={true}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper3"
            >
              <SwiperSlide>
                <img src="Images/India-2012-6117.jpg" alt="Nature 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="Images/India-2012-8861.jpg" alt="Nature 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="Images/India-2012-0904.jpg" alt="Nature 3" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="Images/USA-2012-7846.jpg" alt="Nature 4" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EarthPeaceMeditation;
