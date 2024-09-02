import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Banner() {
  const [currentAlertIndex, setCurrentAlertIndex] = useState(0);
  const alerts = [
    {
      className: "bg-[#FED36F] text-black px-4 py-3",
      Subject: "Events ",
      message: "1/4 - This is the first Event.",
      information: <Link to="/Event">LEARN MORE</Link>,
      details: <Link to="/Event">DISMISS</Link>

    },
    {
      className: "bg-[#FED36F] text-black px-4 py-3 ",
      Subject: "Events ",
      message: "2/4 - This is the Second Event.",
      information: <Link to="/Event">LEARN MORE</Link>,
      details: <Link to="/Event">DISMISS</Link>
    },
    {
      className: "bg-[#FED36F] text-black px-4 py-3",
      Subject: "Events ",
      message: "3/4 - This is the Third Event.",
      information: <Link to="/Event">LEARN MORE</Link>,
      details: <Link to="/Event">DISMISS</Link>
    },
    {
      className: "bg-[#FED36F] text-black px-4 py-3",
      Subject: "Events ",
      message: "4/4 - This is the Fourth Event.",
      information: <Link to="/Event">LEARN MORE</Link>,
      details: <Link to="/Event">DISMISS</Link>
      
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAlertIndex((prevIndex) => (prevIndex + 1) % alerts.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [alerts.length]);

  return (
    <div className="relative flex items-center justify-center border-4 border-[#FED36F] rounded-tl-lg ml-1">
      <div className="relative  w-full h-auto">
        {alerts.map((alert, index) => (
          <div
            // key={index}
            // className={`${alert.className} alert ${currentAlertIndex === index ? 'active' : ''} transition-opacity duration-0 ease-in-out`}
            // role="alert"
            style={{ opacity: currentAlertIndex === index ? 1 : 0, position: currentAlertIndex === index ? 'relative' : 'absolute' }}
            key={index}
            className={`absolute top-0 left-0  ${alert.className} transition-opacity duration-0 ease-in-out ${currentAlertIndex === index ? 'opacity-100' : 'opacity-0'}`}
            role="alert"
            // style={{ height: 'auto' }} // Ensure height fits content
          >
            <div className="grid justify-items-stretch md:grid md:grid-cols-10 text-center  items-center h-auto">
              
              <div className="md:col-span-1 text-start  md:col-start-1 font-bold text-xl md:text-2xl md:p-1 md:pl-8 pl-3">
                {alert.Subject}   
              </div>
              <div className="md:col-span-7 text-start text-sm md:text-left md:text-lg  md:py-2 pt-3 pl-3">
                {alert.message}
              </div>
              
              <div className="md:col-span-1  text-end text-sm font-bold  md:text-left md:text-lg md:p-1  ">
                {alert.information}
              </div>
              {/* <div className="md:col-span-1 text-end text-sm font-bold  md:text-left md:text-lg md:p-1 ">
                {alert.details}
              </div> */}
            </div>
          </div>
        ))}
      </div>
   
    </div>
  );
}

export default Banner;
