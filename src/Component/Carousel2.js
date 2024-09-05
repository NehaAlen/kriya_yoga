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
          <a href="/SiddhanathHamsaYoga">
            < img
              class="h-100 w-full object-cover rounded-md"
              src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
              alt="Random image"
            />

            
            <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
            <div class="absolute inset-0 flex items-end justify-center mb-5">
              <h2 class="text-white text-3xl font-bold ">
                Get Lost in Mountains
              </h2>

            </div>
            </a>
          </div>
          <div class="relative max-w-3xl mx-5 my-5 md:my-20 hover:scale-105">
          <a href="/SiddhanathHamsaYoga">
            < img
              class="h-100 w-full object-cover rounded-md"
              src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
              alt="Random image"
            />

            
            <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
            <div class="absolute inset-0 flex items-end justify-center mb-5">
              <h2 class="text-white text-3xl font-bold ">
                Get Lost in Mountains
              </h2>

            </div>
            </a>
          </div>
          <div class="relative max-w-3xl mx-5 my-5 mb-10 md:my-20 hover:scale-105">
          <a href="/SiddhanathHamsaYoga">
            < img
              class="h-100 w-full object-cover rounded-md"
              src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
              alt="Random image"
            />

            
            <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
            <div class="absolute inset-0 flex items-end justify-center mb-5">
              <h2 class="text-white text-3xl font-bold ">
                Get Lost in Mountains
              </h2>

            </div>
            </a>
          </div>
          
        </div>
    </div>
  );
};

export default Carousel2;
