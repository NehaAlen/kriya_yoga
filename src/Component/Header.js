import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [eventDropdownOpen, setEventDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const eventDropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleEventDropdown = () => {
    setEventDropdownOpen(!eventDropdownOpen);
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
    setEventDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (
        eventDropdownRef.current &&
        !eventDropdownRef.current.contains(event.target)
      ) {
        setEventDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, eventDropdownRef]);

  return (
    <nav className="border-gray-200 dark:bg-gray-900 dark:border-gray-700  ">
      <div className="md:max-w-full flex flex-wrap justify-between md:justify-start  mx-auto p-4">
        <Link
          to="/"
          className="flex md:items-start space-x-3 rtl:space-x-reverse"
        >
          <img src="Images/Logo-Kriya_yoga.png" className="h-20 " alt="Logo" />
          <span className="md:hover:text-white md:hover:scale-125 self-start text-2xl font-semibold whitespace-nowrap dark:text-white">
            
          </span>
        </Link>

        <button4
          onClick={toggleMobileMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button4>

        <div
          className={`w-full md:block md:w-auto ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-multi-level"
        >
          <ul className="font-semibold text-xl flex flex-col md:ml-96 md:text-start p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 rounded md:bg-transparent text-black md:p-0 text-left md:hover:text-white md:hover:bg-transparent hover:bg-gray-100 md:hover:scale-100 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/Yogiraj_siddhanath"
                className="block py-2 px-3 text-gray-900 text-left hover:bg-gray-100 rounded md:hover:bg-transparent md:hover:text-white md:hover:scale-100 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                YOGIRAJ SIDDHANATH
              </Link>
            </li>
            <li className="relative" ref={dropdownRef}>
              <button
                id="dropdownNavbarLink"
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:hover:scale-100 md:border-0 md:p-0 md:w-auto md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                TEACHINGS
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div
                  id="dropdownNavbar"
                  className="bg-orange-50 w-full md:w-40 md:absolute z-10 font-black text-lg divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link
                        to="/KundaliniKriyaYoga"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 text-start hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Kundalini Kriya Yoga
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/SiddhanathSuryaYoga"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 text-start hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Siddhanath Surya Yoga
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/SiddhanathHamsaYoga"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 text-start hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Siddhanath Hamsa Yoga
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/EarthPeaceMeditation"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 text-start hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earth Peace Meditation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Yoga"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 text-start hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Yoga
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link
                to="Our_Community"
                className="block py-2 px-3 text-gray-900 text-left hover:bg-gray-100 rounded md:hover:bg-transparent md:hover:text-white md:hover:scale-100 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                OUR COMMUNITY
              </Link>
            </li>
            
            <li>
              <Link
                to="/Event"
                className="block py-2 px-3 text-gray-900 text-left hover:bg-gray-100 rounded md:hover:bg-transparent md:hover:text-white md:hover:scale-100 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                EVENT
              </Link>
            </li>
            
            <li>
              <Link
                to="/Ayurveda"
                className="block py-2 px-3 text-gray-900 text-left hover:bg-gray-100 rounded md:hover:bg-transparent md:hover:text-white md:hover:scale-100 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                AYURVEDA
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
