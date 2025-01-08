import React from "react";

const Carousel = () => {
  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96 bg-gray-200">
      <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-screen-lg mx-auto p-6 flex justify-center items-center h-full text-center">
          <div>
            <h2 className="text-4xl font-semibold mb-4">Recover Stronger, Live Healthier</h2>
            <p className="mb-6">Get back on track with personalized sports injury treatment and rehabilitation plans.</p>
            <a href="#appointment" className="bg-orange-500 text-white py-2 px-6 rounded-lg text-lg">Book Your Appointment</a>
          </div>
        </div>


        
        {/* Slide 1 */}
        <div
          className="hidden duration-700 ease-in-out bg-blue-500 flex items-center justify-center"
          data-carousel-item
        >
          <img
            src="https://via.placeholder.com/800x400/0000FF/808080?text=Slide+1"
            className="absolute block w-full h-full object-cover"
            alt="Slide 1"
          />
          <div className="absolute text-white text-2xl font-bold">Slide 1</div>
        </div>
        {/* Slide 2 */}
        <div
          className="hidden duration-700 ease-in-out bg-green-500 flex items-center justify-center"
          data-carousel-item
        >
          <img
            src="https://via.placeholder.com/800x400/008000/FFFFFF?text=Slide+2"
            className="absolute block w-full h-full object-cover"
            alt="Slide 2"
          />
          <div className="absolute text-white text-2xl font-bold">Slide 2</div>
        </div>
        {/* Slide 3 */}
        <div
          className="hidden duration-700 ease-in-out bg-red-500 flex items-center justify-center"
          data-carousel-item
        >
          <img
            src="https://via.placeholder.com/800x400/FF0000/FFFFFF?text=Slide+3"
            className="absolute block w-full h-full object-cover"
            alt="Slide 3"
          />
          <div className="absolute text-white text-2xl font-bold">Slide 3</div>
        </div>
       
      
      </div>
      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-white"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-white"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-white"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-white"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-white"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
      </div>
      {/* Previous Button */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
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
          <span className="sr-only">Previous</span>
        </span>
      </button>
      {/* Next Button */}
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
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
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
