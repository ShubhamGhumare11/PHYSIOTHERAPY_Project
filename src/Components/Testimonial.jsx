// import React from 'react';
// import { FaLinkedinIn, FaShareAlt } from 'react-icons/fa';

// const testimonials = [
//   {
//     id: 1,
//     name: 'John Doe',
//     designation: 'CEO of Innovate',
//     avatar: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1',
//     review: 'This service has been groundbreaking for our business. Highly recommend to anyone looking to improve their workflow!',
//     linkedIn: '#',
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     designation: 'Marketing Director',
//     avatar: 'https://randomuser.me/api/portraits/men/83.jpg',
//     review: 'Their team is extremely responsive and supportive. Our results have been impressive. A true partnership!',
//     linkedIn: '#',
//   },
//   {
//     id: 3,
//     name: 'Amanda Bynes',
//     designation: 'Product Manager',
//     avatar: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
//     review: 'The customization capabilities and user-friendly interface are top-notch. It’s transformed our operations.',
//     linkedIn: '#',
//   },
//   {
//     id: 4,
//     name: 'Mark Johnson',
//     designation: 'Head of Development',
//     avatar: 'https://images.unsplash.com/photo-1505247964246-1f0a90443c36',
//     review: 'A game-changer in efficiency and performance. Their service is exceptional, making our processes seamless.',
//     linkedIn: '#',
//   },
//   {
//     id: 5,
//     name: 'Lucy Heartfilia',
//     designation: 'UX Designer',
//     avatar: 'https://images.unsplash.com/photo-1484863137850-59afcfe05386',
//     review: 'Brilliant support and usability. Our team has benefited greatly from the intuitive design and features.',
//     linkedIn: '#',
//   },
//   {
//     id: 6,
//     name: 'Natsu Dragneel',
//     designation: 'Software Engineer',
//     avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
//     review: 'Efficient, reliable, and innovative. Highly satisfied with the outcomes and improvements in our project management.',
//     linkedIn: '#',
//   }
// ];
// const TestimonialCard = ({ testimonial }) => (
//     <div className=' p-4 flex flex-col items-center text-center text-xs sm:text-sm transition-transform duration-300  transform'>
//       <img className='w-16 h-16 rounded-full' src={testimonial.avatar} alt='user avatar' />
//       <h5 className='font-bold mt-2'>{testimonial.name}</h5>
//       <p className='text-gray-500'>{testimonial.designation}</p>
//       <p className='mt-2 text-gray-600'>{testimonial.review}</p>
//       <div className='flex justify-center gap-2 mt-2'>
//         <a href={testimonial.linkedIn} className='text-blue-500 text-base'><FaLinkedinIn /></a>
//         <button className='text-gray-500 text-base'><FaShareAlt /></button>
//       </div>
//     </div>
//   );
  

// const Testimonial = () => (
//   <div class="grid grid-cols-2 h-screen bg-gradient-to-r from-yellow-300 to-amber-600 ">
   
   
//     <div class="flex items-center justify-center ">
//       <div class=" text-black p-6 ">
//         <h2 class="text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600">
//           What Our Customers Say
//         </h2>
//         <p class="text-3xl font-semibold text-yellow-200 mt-4 leading-relaxed">
//           Your trust <span class="text-pink-300">matters</span> to us!
//         </p>
//       </div>
//     </div>

//     <div className="overflow-y-auto p-6 rounded-lg  space-y-52  scrollbar-none  ">
//       {testimonials.map((testimonial) => (
//         <TestimonialCard key={testimonial.id} testimonial={testimonial} />
//       ))}
//     </div>
//   </div>
// );

// export default Testimonial;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // Swiper navigation styles
import "swiper/css/pagination"; // Swiper pagination styles

import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Correct way to import modules
import review from "../Images/logo.png";

const Testimonial = () => {
  return (
    <div className="bg-no-repeat bg-cover bg-center relative min-h-fit ">
          <div className="flex flex-col text-center w-full mb-2 md:mb-6 font-serif">
            <h2 className="text-4xl font-bold text-customBrown">
            Happy Customers
            </h2>
            <p className="mt-4 text-lg text-customBrown">
            Thousands of Happy Clients and Counting            </p>
          </div>
      <div className="relative flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center w-full max-w-screen-xl p-6 mx-auto">
          {/* Text Section */}
          <div class="flex items-center justify-center ">
       <div class=" text-black p-6 ">
         <h2 class="text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-red-500 to-pink-600">
           What Our Customers Say
        </h2>
         <p class="text-3xl font-semibold text-blue-700 mt-4 leading-relaxed">
           Your trust <span class="text-pink-600">matters</span> to us!
         </p>
       </div>
     </div>

          {/* Swiper Section */}
          <div className="relative z-10 text-white">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              className="rounded-lg overflow-hidden"
            >
              <SwiperSlide>
                <div className="max-w-lg mx-auto">
                  <div className="relative">
                    <div className="flex justify-center items-center h-72 sm:h-96 bg-gray-100 rounded-lg overflow-hidden">
                      <div className="px-8">
                        <p className="text-lg font-medium text-blue-800 mb-2">
                          "The best experience ever"
                        </p>
                        <p className="text-red-500">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Fusce auctor nisi eget ornare ultrices. Proin
                          laoreet ultrices nunc vel dapibus.
                        </p>
                        <div className="mt-4 flex items-center">
                          <img
                            className="h-10 w-10 rounded-full mr-4"
                            src="https://randomuser.me/api/portraits/women/68.jpg"
                            alt="Avatar of person"
                          />
                          <div>
                            <p className=" text-blue-800 font-medium">Mary Johnson</p>
                            <p className=" text-blue-800">CEO, Acme Inc.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              
           
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
