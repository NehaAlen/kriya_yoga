import React from "react";
import { useState } from "react";

const Our_Community = () => {
  return (
    <div>
      <div class=" py-16 sm:py-24 lg:py-32 md:m-5 m-2 bg-orange-400">
        <div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div class="max-w-xl text-2xl font-bold tracking-tight  sm:text-3xl lg:col-span-7">
            
            <p class="inline sm:block lg:inline xl:block">
              JOIN OUR COMMUNITY
            </p>
          </div>
          <form class="w-full max-w-md lg:col-span-5 lg:pt-2">
            <div class="flex gap-x-4">
              <label for="email-address" class="sr-only ">
               Name
              </label>
              <input
                id="name"
                name="name"
                type="name"
                autocomplete="name"
                required=""
                class="font-bold min-w-0 flex-auto rounded-md border-2  px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your name"
              />
             
            </div>
            <div class="flex gap-x-4 my-10">
              <label for="email-address" class="sr-only ">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required=""
                class="font-bold min-w-0 flex-auto rounded-md border-2  px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
             
            </div>
                      <div class="flex justify-center items-center  " >
                       <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                       Subscribe
                      </button>
          </div>
            {/* <p class="mt-4 text-sm leading-6 ">
              We care about your data. Read our{" "}
              <a
                href="https://www.swellai.com/privacy"
                class="font-semibold "
              >
                privacy&nbsp;policy
              </a>
              .
            </p> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Our_Community;
