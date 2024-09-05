import React from 'react';

const Our_Community = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row mt-10">
        {/* Text Block */}
        <div className="md:w-2/3 md:pt-10 md:mx-4 md:pr-5">
          <h2 className="text-4xl font-medium mb-4 ">
            This is our community page
          </h2>
          <p className="text-lg text-gray-700 py-2 md:px-16 px-2">
            Yogiraj is one of the rare Masters available to all sincere truth
            seekers as he bestows upon them the three graces of Shivapat,
            Shaktipat, and Pranapat transmissions.
          </p>

        </div>
        {/* Form Block */}
        <div className="w-fit md:w-1/3 p-14 md:mr-10">
          <form class="max-w-md">
            
            <div class="flex items-center border-b border-[#649178] m-4 py-2">
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" id="email" placeholder="Please enter your Email" aria-label="email"/>
                <button
                  className="bg-[#649178] hover:bg-teal-700 text-sm text-white py-2 px-4 rounded"
                  type="button"
                  >
                  Subscribe
                </button>      
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Our_Community;
 