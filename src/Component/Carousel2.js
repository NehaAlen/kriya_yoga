import React from "react";

const Carousel2 = () => {
  return (
    <div>
        {/* <div className="bg-[#BFCFCC]">Explore top Yoga</div> */}
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-7 bg-[#BFCFCC] mt-5"
          style={{ width: "100%", height:"100%"}}
        >
          
          <div class="relative max-w-3xl mx-5 my-5 md:my-20 hover:scale-105">
          <a href="/Yogiraj_siddhanath">
            < img
              class="h-100 w-full object-cover rounded-md"
              src="Images/USA-2011-1728.jpg"
              alt="Random image"
            />

            
            {/* <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div> */}
            <div class="absolute inset-0 flex items-end justify-center mb-5">
              <h2 class="text-white text-3xl font-bold ">
                Yogiraj Siddhanath
              </h2>

            </div>
            </a>
          </div>
          <div class="relative max-w-3xl mx-5 my-5 md:my-20 hover:scale-105">
          <a href="/KundaliniKriyaYoga">
            < img
              class="h-100 w-full object-cover rounded-md"
              src="Images/USA-2011-3968.jpg"
              alt="Random image"
            />

            
            {/* <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div> */}
            <div class="absolute inset-0 flex items-end justify-center mb-5">
              <h2 class="text-white text-3xl font-bold ">
              Kundalini Kriya Yoga
              </h2>

            </div>
            </a>
          </div>
          <div class="relative max-w-3xl mx-5 my-5 mb-10 md:my-20 hover:scale-105">
          <a href="/SiddhanathSuryaYoga">
            < img
              class="h-100 w-full object-cover rounded-md"
              src="Images/USA-2012-7903.jpg"
              alt="Random image"
            />

            
            {/* <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div> */}
            <div class="absolute inset-0 flex items-end justify-center mb-5">
              <h2 class="text-white text-3xl font-bold ">
              Siddhanath Surya Yoga
              </h2>

            </div>
            </a>
          </div>
          
        </div>
    </div>
  );
};

export default Carousel2;
