import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Teaching.css";
import "../Carousel.css";

// Import required modules
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";

function SiddhanathHamsaYoga() {
  return (
    <div>
      <div className="m-2 md:m-5">
        <div className="relative w-full border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            src="Images/USA-2011-2537.jpg"
            className="w-full h-fit"
            alt="Nature 1"
          />
        </div>
      </div>
      <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium mt-5">
        Siddhanath Hamsa Yoga - Honor the Feminine Kundalini Energy Shakti
      </h2>
      <div className="surya_para m-3">
        <div className="flex flex-col md:flex-row justify-between md:m-10">
          <div className="flex-1 px-4 md:px-6 lg:px-8 xl:px-12">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-left mt-4 md:mt-6 lg:mt-8">
              Siddhanath has given us the Seven Yogic Techniques of Shakti
              mentioned below. They were developed by him for spiritual
              evolution and healing. Taught at the subjective level for the True
              Self (Soul) and the objective level for the Apparent Self (Body).
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-left mt-3">
              The majority of these techinques are taught at our New Life
              Awakening Retreats. To see when the next retreat is happening in
              your area, see the schedule.
            </p>

            <ul class="sm:space-y-4 space-y-2  list-disc text-lg text-start dark:text-gray-400">
              <li class="">
                <p>
                  <b>Shakti Healing: </b> Shakti means “Siddhanath Healing and
                  Kundalini Transmission In-depth.” Shakti is an inner journey
                  of awakening Kundalini Energy & cleansing the chakras.
                </p>
              </li>
              <li class="">
                <p>
                  <b>Siddhanath Samadhi Yoga:</b> This is the way of the White
                  Swan. This simple technique was developed by Yogiraj
                  Siddhanath to achieve a state of natural enlightenment, where
                  the breath is united with the mind.
                </p>
              </li>
              <li class="">
                <p>
                  <b>Ojasviya Meditation:</b> A dynamic process of Kayakalpa.
                  The vital fluid in the body is transformed, gradually
                  reversing the aging process. This is a process of transforming
                  sexual into spiritual energy.
                </p>
              </li>
              <li class="">
                <p>
                  <b>Advanced Omkar Meditation:</b> The birthing hum of creation
                  evolves your consciousness and heals all maladies by its
                  resonant frequency. From it proceeds all sounds and mantras of
                  Shakti Healing Enlightenment.
                </p>
              </li>
              <li class="">
                <p>
                  <b>Earth Peace Meditations: </b>These practices are simple and
                  complement all faiths and religions. They are for people of
                  all ages and from all walks of life. They help doing what one
                  does even better.
                </p>
              </li>
              <li class="">
                <p>
                  <b>Hamsa Asanas: </b>This is the yoga of postural integration.
                  Each posture is matched with the Hamsa breath. Asanas are
                  enjoyable. They rejuvenate your body with vitality and help
                  bring ease and order in your daily life.
                </p>
              </li>
              <li class="">
                <p>
                  <b>GOD Healings 1, 2 & 3: </b>
                </p>
              </li>
            </ul>
            <ol class="list-decimal text-start">
              <li class="text-lg ml-24 mt-8">Gurunath Oath-Proth Dhayana</li>
              <li class="text-lg ml-24 mt-2">Gurunath Ojasviya Dhanaya</li>
              <li class="text-lg ml-24 mt-2">Gurunath Omkar Dhayana</li>
            </ol>
          </div>

          {/* Image Slider Section */}
          <div className="flex-1 md:ml-5 md:mt-40 w-full h-auto">
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
                <img src="Images/_SOL0173.jpg" alt="Nature 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="Images/_SOL0038.jpg" alt="Nature 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="Images/India-2012-2255.jpg" alt="Nature 3" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="Images/SOL_4288.jpg" alt="Nature 4" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiddhanathHamsaYoga;
