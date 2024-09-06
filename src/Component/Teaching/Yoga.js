import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../Teaching.css';
import '../Carousel.css';  

// Import required modules
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";

const Yoga = () => {
  return (
    <div>
             <div className="m-2 md:m-5">
<div className="relative w-full  border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
        {/* Container for image */}
        <img
          src="Images/USA-2011-5953.jpg"
          className="w-full h-fit"
          alt="Nature 1"
        />
        {/* Overlay heading */}
        {/* <h1 className="absolute left-1/3 inset-x-0 md:bottom-1/3 bottom-0 md:h-16 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg md:text-5xl font-bold text-left bg-opacity-50  p-4 m-10 rounded">
          Yoga
        </h1> */}
      </div>
      </div>
      <div className="surya_para ">
      
      <div className="flex flex-col md:flex-row items-center justify-between md:m-10 ">
        
        <div className="flex-1 px-5 md:px-0  md:mx-10">
          <h1 className=" text-center  mt-5  ">
            Yoga
          </h1>
          {/* <h1 className="text-center mt-5">
            Pranic Healing with Solar Power
          </h1> */}
         <p class="text-lg text-start px-2 md:px-0 mt-6"> <span class="font-bold">Yoga is a Sanskrit word translated as “yoke” or “union.”</span> To yoke means to draw together, to bind together; or to unite. Its aim is to yoke or create a union of the body, mind, soul, and universal consciousness. This process of uniting the physical, mental, emotional, and spiritual aspects of ourselves is what allows yogis to experience deep states of freedom, peace and self-realization. </p>
                  <p class="text-lg text-start px-2 md:px-0 mt-3"><span class="font-bold">Yoga is an ancient system of physical, mental and spiritual practices</span> that have been passed down through the generations from teacher to student. Yogic practices include breathing techniques, postures, relaxation, chanting, and other meditation methods. There are many different styles of yoga, each with their own unique focus and approach to creating a unitive state.</p>
                  {/* <p class="text-lg text-start px-5 md:px-0 mt-6"><span class="font-bold">Its origins are traced back thousands of years to the Upanishads,</span> a collection of yogic texts dating from roughly 800 BC to 400 AD. While the word “yoga” was first mentioned in the Rigveda, but the first time it was used with its modern meaning is in the Katha Upanishad. This ancient spiritual text was written sometime between the 5th and 3rd century BCE.</p> */}
          <h1 className=" text-center mt-5">
          Goals of Yoga
          </h1>
          <p class="text-lg text-start px-2 md:px-0 mt-5"><span class="font-bold">  Yoga is a meditative process of self-discovery and liberation.</span>  It is a diverse collection of practices that aims to control the mind, recognize a detached witness consciousness, and free oneself from the cycle of birth and death. It teaches us to see ourselves clearly, to understand what is true about who we are, and to let go of anything that does not serve us. It helps us to become aware of our thoughts, feelings, and beliefs, and to change them when they no longer serve us. It gives us the tools to make better choices in life, and to live more fully.</p>
          <p class="text-lg text-start px-2 md:px-0 mt-3"><span class="font-bold"> Yoga is a practice that allows us to transform</span> and purify our bodies, minds, and souls. It expands our consciousness to help us connect with nature and the universe around us. It also gives us greater access to inner resources to teach us about self-awareness, acceptance, compassion, patience, gratitude, forgiveness, humility, love, peace, and joy.</p>
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
              <img src="Images/DSCF0940.jpg" alt="Nature 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="Images/India-2012-5479.jpg" alt="Nature 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="Images/DSCF9053.jpg" alt="Nature 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="Images/DSCF1112.jpg" alt="Nature 1" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
          
          {/* <div class="grid md:grid-cols-7">
                <div class="col-start-2 col-span-5"  > 
                    
                  <p class="text-lg text-start px-5 md:px-0 mt-6"> <span class="font-bold">Yoga is a Sanskrit word translated as “yoke” or “union.”</span> To yoke means to draw together, to bind together; or to unite. Its aim is to yoke or create a union of the body, mind, soul, and universal consciousness. This process of uniting the physical, mental, emotional, and spiritual aspects of ourselves is what allows yogis to experience deep states of freedom, peace and self-realization. </p>
                  <p class="text-lg text-start px-5 md:px-0 mt-6"><span class="font-bold">Yoga is an ancient system of physical, mental and spiritual practices</span> that have been passed down through the generations from teacher to student. Yogic practices include breathing techniques, postures, relaxation, chanting, and other meditation methods. There are many different styles of yoga, each with their own unique focus and approach to creating a unitive state.</p>
                  <p class="text-lg text-start px-5 md:px-0 mt-6"><span class="font-bold">Its origins are traced back thousands of years to the Upanishads,</span> a collection of yogic texts dating from roughly 800 BC to 400 AD. While the word “yoga” was first mentioned in the Rigveda, but the first time it was used with its modern meaning is in the Katha Upanishad. This ancient spiritual text was written sometime between the 5th and 3rd century BCE.</p>
                  </div>
            </div>
            <div>
            <h1 class="text-4xl text-center mt-7 text-red-900">Goals of Yoga</h1> 
          </div>
          <div class="grid md:grid-cols-7">
                <div class="col-start-2 col-span-5"  > 
                    
                  <p class="text-lg text-start px-5 md:px-0 mt-5"><span class="font-bold">  Yoga is a meditative process of self-discovery and liberation.</span>  It is a diverse collection of practices that aims to control the mind, recognize a detached witness consciousness, and free oneself from the cycle of birth and death. It teaches us to see ourselves clearly, to understand what is true about who we are, and to let go of anything that does not serve us. It helps us to become aware of our thoughts, feelings, and beliefs, and to change them when they no longer serve us. It gives us the tools to make better choices in life, and to live more fully.</p>
                  <p class="text-lg text-start px-5 md:px-0 mt-5"><span class="font-bold"> Yoga is a practice that allows us to transform</span> and purify our bodies, minds, and souls. It expands our consciousness to help us connect with nature and the universe around us. It also gives us greater access to inner resources to teach us about self-awareness, acceptance, compassion, patience, gratitude, forgiveness, humility, love, peace, and joy.</p>
                  </div>
            </div>  */}
            </div>
  )
}

export default Yoga
