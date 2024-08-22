import React from 'react'


const TeachingCard = (props) => {
  return (
    <div>
        <div class="grid md:grid-cols-3  bg-red-600 place-content-center sm:m-5 sm:mb-20 m-3">
          <div class="col-start-2">
            
              <img
                class="object-cover w-full rounded-t-lg h-auto md:h-auto md:w-96 md:rounded-lg md:rounded-s-lg "
                src={props.image}
                alt=""
              />
          </div>
        </div>
          <>
              <div class="grid md:grid-cols-3 justify-between p-4 leading-normal">
                <h class="mb-2 text-4xl font-bold tracking-tight text-red-800 dark:text-white">{props.heading}</h>

                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-lg">
                  {props.paragraph}
                </p>
              </div>
            
          </>
        
    </div>
  )
}

export default TeachingCard
