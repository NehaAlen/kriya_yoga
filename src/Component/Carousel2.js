import React from "react";

const Carousel2 = () => {
  return (
    <div>
      {/* <div class="max-w-screen-xl md:max-w-fit md:max-h-max mx-auto p-5 sm:p-10 md:p-16 ">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <div class="rounded overflow-hidden shadow-lg flex flex-col  ">
            <a href="#"></a>
            <div class="relative ">
              <a href="#">
                <img
                  class="w-full"
                  src="https://swiperjs.com/demos/images/nature-2.jpg"
                  alt="Sunset in the mountains"
                />
                <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
            </div>
            <div class="px-6 py-4 mb-auto">
              <a
                href="#"
                class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out  mb-2"
              >
                test
              </a>
              <p class="text-gray-500 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>

          
          <div class="rounded overflow-hidden shadow-lg flex flex-col">
            <a href="#"></a>
            <div class="relative">
              <a href="#">
                <img
                  class="w-full"
                  src="https://swiperjs.com/demos/images/nature-2.jpg"
                  alt="Sunset in the mountains"
                />
                <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
            </div>
            <div class="px-6 py-4 mb-auto">
              <a
                href="#"
                class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out  mb-2"
              >
                test
              </a>
              <p class="text-gray-500 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>

          
          <div class="rounded overflow-hidden shadow-lg flex flex-col">
            <a href="#"></a>
            <div class="relative">
              <a href="#">
                <img
                  class="w-full"
                  src="https://swiperjs.com/demos/images/nature-2.jpg"
                  alt="Sunset in the mountains"
                />
                <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
            </div>
            <div class="px-6 py-4 mb-auto">
              <a
                href="#"
                class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out  mb-2"
              >
                test
              </a>
              <p class="text-gray-500 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div> */}
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-7 bg-[#91b4ae] mt-5"
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
