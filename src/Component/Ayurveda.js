import React from 'react'

const Ayurveda = () => {
  return (
    <div>
         <div class="grid md:grid-cols-6  place-content-center md:m-10 md:mb-10 m-3">
          <div class="col-start-3 col-span-5">
              <img
                class="object-cover md:ml-5 w-full rounded-t-lg h-auto md:h-auto md:w-96 md:rounded-lg md:rounded-s-lg "
                src="Images/OIP (1).jpg"
                alt=""
              />
              <h1 class="text-4xl font-semibold text-start mt-7 ml-24 text-red-900">Ayurveda</h1>
              
               </div>
               </div>
               <div class="grid md:grid-cols-7">
                <div class="col-start-2 col-span-5"  > 
                    <h1 class="text-4xl text-start font-bold ml-5 mb-4">What is Ayurveda?</h1>
                  <p class="text-lg text-start px-5 md:px-0 mt-6"> Ayurveda is the ancient Indian system of natural and holistic medicine. When translated from Sanskrit, Ayurveda means “the science of life” (the Sanskrit root ayur means “longevity” or “life” and veda means “science”). </p>
                  <p class="text-lg text-start px-5 md:px-0 mt-6 mb-10">While allopathic medicine tends to focus on the management of disease, Ayurveda provides us with the knowledge of how to prevent disease and how to eliminate its root cause if it does occur.</p>
                  <h1 class="text-4xl text-start font-bold ml-5 mb-4">History & Core Principles of Ayurveda</h1>
                  <p class="text-lg text-start px-5 md:px-0 mt-6"> The knowledge of Ayurveda was passed on orally through a lineage of sages in India until it was collated into text more than five thousand years ago. The oldest known texts on Ayurveda are the Charaka Samhita, Sushruta Samhita, and the Ashtanga Hrudaya. These texts detail the affect that the five elements found in the cosmic system - earth, water, air, fire, space – have on our individual system, and expound on the importance of keeping these elements balanced for a healthy and happy life. </p>
                  <p class="text-lg text-start px-5 md:px-0 mt-6"> According to Ayurveda, each person will be influenced by certain elements more than others. This is because of their prakriti, or natural constitution. Ayurveda categorizes the different constitutions into three different doshas:</p>
                  <ul class=" space-y-4  list-disc text-lg text-start ml-20 mt-5 dark:text-gray-400">
                    <li class="font-normal">
                    <span class="font-bold">Vata dosha,</span> in which the air and space elements dominate
                    </li>
                    <li class="font-normal">
                    <span class="font-bold">Pitta dosha,</span> in which the fire element dominates
                    </li>
                    <li class="font-normal">
                    <span class="font-bold">Kapha dosha,</span> in which the earth and water elements dominate
                    </li>
                </ul>
                <p class="text-lg text-start px-5 md:px-0 mt-6"> The dosha affects not just the shape of one’s body but also bodily tendencies (like food preferences and digestion), and the temperament of one’s mind and emotions. For example, the earth element in people with Kapha dosha is evident in their solid, sturdy body type, their tendency for slower digestion, their strong memory, and their emotional steadiness. Most people’s prakriti is made up of a combination of two doshas. For example, people who are “Pitta Kapha” will have the tendencies of both Pitta dosha and Kapha dosha, with Pitta dominating. By understanding the qualities of our natural constitution we are better able to do what is needed to keep ourselves in balance.</p>
                  
                  </div>
                  
            </div>
            
      
    </div>
  )
}

export default Ayurveda
