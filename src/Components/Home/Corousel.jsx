import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    "https://via.placeholder.com/800x400/0000FF/808080?text=Slide+1",
    "https://via.placeholder.com/800x400/008000/FFFFFF?text=Slide+2",
    "https://via.placeholder.com/800x400/FF0000/FFFFFF?text=Slide+3",
  ];

  const [typingText, setTypingText] = useState("");
  const fullText = "19+ Sports Injury and Physiotherapy Clinic"; // Full header text

  useEffect(() => {
    const interval = setInterval(() => {
      setTypingText((prev) => prev + fullText[typingText.length]);
    }, 100); // Adjust the typing speed here (in ms)
    
    if (typingText.length === fullText.length) {
      clearInterval(interval); // Stop the typing effect when text is fully typed
    }

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [typingText]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Auto-play every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative w-full ">
      {/* Carousel */}
      <div className="relative h-64 md:h-96 lg:h-screen overflow-hidden bg-gray-200">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <img
              src={slide}
              className="block w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content: Text and Booking Form */}
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-20 z-10 text-white">
          {/* Left: Text with Typing Effect */}
          <div className="text-center md:text-left w-full md:w-1/2 lg:w-1/2 mb-6 md:mb-0 pr-0 md:pr-6 lg:pr-12">
            <motion.h2
              className="text-2xl md:text-4xl lg:text-7xl font-semibold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {typingText}
            </motion.h2>
            <p className="mt-4 text-sm md:text-lg lg:text-xl">
              Get personalized sports injury treatment and rehabilitation plans tailored for you.
            </p>
            <a
              href="#appointment"
              className="mt-6 inline-block bg-orange-500 text-white py-2 px-6 rounded-lg text-sm md:text-lg hover:bg-orange-600 transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              Learn More
            </a>
          </div>

          {/* Right: Booking Form (Slide-In Effect using framer-motion) */}
          <motion.div
            className="hidden md:block w-full md:w-2/3 lg:max-w-lg md:max-w-md sm:max-w-sm bg-white shadow-lg rounded-lg p-6 overflow-y-auto max-h-screen"
            initial={{ x: "100%" }} // Start from right side of the screen
            animate={{ x: 0 }} // Animate to normal position
            transition={{ type: "spring", stiffness: 100, damping: 40 }}
          >
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 text-center">
              Book an Appointment
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-300 focus:ring-opacity-50"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-300 focus:ring-opacity-50"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-300 focus:ring-opacity-50"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-300 focus:ring-opacity-50"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-orange-500" : "bg-white"
            }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 9l4-4-4-4"
            />
          </svg>
        </span>
      </button>
      
    </div>
  );
};

export default Carousel;
