// import React from "react";
// import Carousel from "./Corousel";
// // import Footer from "./Footer";

// const OurServices = () => {



//     const handleServices = () => {
//         nav("/services");
//       };
//   return (


// <div className="text-gray-600 body-font font-serif">
//         <div className="py-7 px-6 md:px-10 lg:px-20 mt-5 font-serif bg-cover bg-center mb-6">
//           <div className="flex flex-col text-center w-full mb-2 md:mb-6">
//             <h2 className="text-4xl font-bold text-customBrown">
//               Explore Our Services
//             </h2>
//             <p className="mt-4 text-lg text-customBrown">
//               {/* Unlock Your True Potential with Personalized Numerology Insights. */}
//             </p>
//           </div>


//           <div className="px-4 md:px-8 lg:px-16 py-8 font-serif mt-4">
           
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               <div className="w-full max-w-sm bg-white border border-golden rounded-lg shadow-lg ">
//                 <a href="#" onClick={() => handleCardClick(1)}>
//                   <img
//                     className="p-4 rounded-t-lg object-cover w-full h-52 md:h-56 "
//                     // src={service1}
//                     alt="service image"
//                   />
//                 </a>
//                 <div className="px-5 pb-5">
//                   <a href="#" >
//                     <h5 className="text-xl font-semibold tracking-tight text-gray-900   ">
//                     Exercise Information By Injury
//                     </h5>
//                   </a>
//                   <h3 className="text-black   mb-1 italic line-clamp-2 text-sm">
//                     {/* {item.subTitle} */}
//                   </h3>

//                   {/* Ratings Section */}
//                   {/* <div className="flex items-center mt-2.5 mb-5">
//                     <div className="flex items-center space-x-1 rtl:space-x-reverse">
//                       <svg
//                         // key={i}
//                         className="w-4 h-4 text-yellow-300"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                       >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                       </svg>
//                       <svg
//                         // key={i}
//                         className="w-4 h-4 text-yellow-300"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                       >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                       </svg>
//                       <svg
//                         // key={i}
//                         className="w-4 h-4 text-yellow-300"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                       >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                       </svg>
//                       <svg
//                         // key={i}
//                         className="w-4 h-4 text-yellow-300"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                       >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                       </svg>
//                       <svg
//                         className="w-4 h-4 text-gray-200 dark:text-gray-600"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                       >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                       </svg>
//                     </div>
//                     <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded   ms-3">
//                       5.0
//                     </span>
//                   </div> */}

//                   {/* Pricing Section */}
//                   {/* <div className="flex items-center justify-between">
//                     <span className="text-lg font-bold text-gray-900  ">

//                       INR 1,900/-
//                     </span>
//                     <span className="text-xs text-slate-900">(Duration: 25-30 Days )</span>
//                   </div> */}

//                   {/* Button Section */}
//                   <a
//                     href="#"
//                     className="flex items-center justify-center w-full rounded-lg bg-golden  focus:ring-4 focus:outline-none  font-medium text-sm px-5 py-2.5 text-center text-white mt-5 "
//                   >
//                     Know More
//                     <svg
//   xmlns="http://www.w3.org/2000/svg"
//   className="h-6 w-6"
//   fill="none"
//   viewBox="0 0 24 24"
//   stroke="currentColor"
//   strokeWidth="2"
// >
//   <path
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     d="M9 5l7 7-7 7"
//   />
// </svg>

//                   </a> 
//                 </div>
//               </div>

//               <div className="w-full max-w-sm bg-white border border-golden rounded-lg shadow-lg">
//                 <a href="#" onClick={() => handleCardClick(2)}>
//                   <img
//                     className="p-4 rounded-t-lg object-cover w-full h-52 md:h-56"
//                     // src={service2}
//                     alt="service image"
//                   />
//                 </a>
//                 <div className="px-5 pb-5">
//                   <a href="#">
//                     <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
//                     Videos & PDFs
//                     </h5>
//                   </a>
//                   <h3 className="text-black mb-1 italic line-clamp-2 text-sm">
//                     {/* {item.subTitle} */}
//                   </h3>

//                   {/* Ratings Section */}
//                   {/* <div className="flex items-center mt-2.5 mb-5">
//                     <div className="flex items-center space-x-1 rtl:space-x-reverse">
//                       <svg
//                         className="w-4 h-4 text-yellow-300"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                       >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                       </svg>
//                       <svg
//                         className="w-4 h-4 text-yellow-300"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                       >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                       </svg>
//                       <svg
//                         className="w-4 h-4 text-yellow-300"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                       >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                       </svg>
//                       <svg
//                         className="w-4 h-4 text-yellow-300"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                       >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                       </svg>
//                       <svg
//                         className="w-4 h-4 text-gray-200"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                       >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                       </svg>
//                     </div>
//                     <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
//                       5.0
//                     </span>
//                   </div> */}

//                   {/* Pricing Section */}
//                   {/* <div className="flex items-center justify-between">
//                     <span className="text-lg font-bold text-gray-900">
//                       INR 1,900/-
//                     </span>
//                     <span className="text-xs text-slate-900">(Duration: 25-30 Days)</span>
//                   </div> */}
//   {/* Button Section */}
//   <a
//                     href="#"
//                     className="flex items-center justify-center w-full rounded-lg bg-golden  focus:ring-4 focus:outline-none  font-medium text-sm px-5 py-2.5 text-center text-white mt-5 "
//                   >
                   
//                     Know More
//                     <svg
//   xmlns="http://www.w3.org/2000/svg"
//   className="h-6 w-6"
//   fill="none"
//   viewBox="0 0 24 24"
//   stroke="currentColor"
//   strokeWidth="2"
// >
//   <path
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     d="M9 5l7 7-7 7"
//   />
// </svg>

//                   </a> 


//                 </div>
//               </div>

//               <div className="w-full max-w-sm bg-white border border-golden rounded-lg shadow-lg ">
//                 <a href="#" onClick={() => handleCardClick(3)}>
//                   <img
//                     className="p-4 rounded-t-lg object-cover w-full h-52 md:h-56 "
//                     // src={service3}
//                     alt="service image"
//                   />
//                 </a>
//                 <div className="px-5 pb-5">
//                   <a href="#">
//                     <h5 className="text-xl font-semibold tracking-tight text-gray-900   ">
//                      Video Call Consultation
//                     </h5>
//                   </a>
//                   <h3 className="text-black   mb-1 italic line-clamp-2 text-sm">
//                     {/* {item.subTitle} */}
//                   </h3>

//                   {/* Ratings Section */}
//                   {/* <div className="flex items-center mt-2.5 mb-5">
//                     <div className="flex items-center space-x-1 rtl:space-x-reverse">
//                       <svg
//                         // key={i}
//                         className="w-4 h-4 text-yellow-300"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                       >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                       </svg>
//                       <svg
//                         // key={i}
//                         className="w-4 h-4 text-yellow-300"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                       >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                       </svg>
//                       <svg
//                         // key={i}
//                         className="w-4 h-4 text-yellow-300"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                       >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                       </svg>
//                       <svg
//                         // key={i}
//                         className="w-4 h-4 text-yellow-300"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                       >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                       </svg>
//                       <svg
//                         className="w-4 h-4 text-gray-200 dark:text-gray-600"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                       >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                       </svg>
//                     </div>
//                     <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
//                       5.0
//                     </span>
//                   </div> */}

//                   {/* Pricing Section */}
//                   {/* <div className="flex items-center justify-between">
//                     <span className="text-lg font-bold text-gray-900  ">

//                       INR 1,900/-
//                     </span>
//                     <span className="text-xs text-slate-900">(Duration: 25-30 Days )</span>
//                   </div> */}

//                   {/* Button Section */}
//                    <a
//                     href="#"
//                     className="flex items-center justify-center w-full rounded-lg bg-golden  focus:ring-4 focus:outline-none  font-medium text-sm px-5 py-2.5 text-center text-white mt-5 "
//                   >
                   
//                     Know More
//                     <svg
//   xmlns="http://www.w3.org/2000/svg"
//   className="h-6 w-6"
//   fill="none"
//   viewBox="0 0 24 24"
//   stroke="currentColor"
//   strokeWidth="2"
// >
//   <path
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     d="M9 5l7 7-7 7"
//   />
// </svg>

//                   </a> 
//                 </div>
//               </div>

//               <div className="w-full max-w-sm bg-white border border-golden rounded-lg shadow-lg ">
//                 <a href="#" onClick={() => handleCardClick(5)}>
//                   <img
//                     className="p-4 rounded-t-lg object-cover w-full h-52 md:h-56 "
//                     // src={service5}
//                     alt="service image"
//                   />
//                 </a>
//                 <div className="px-5 pb-5">
//                   <a href="#">
//                     <h5 className="text-xl font-semibold tracking-tight text-gray-900   truncate">
//                    Sport Injury 
//                     </h5>
//                   </a>
//                   <h3 className="text-black   mb-1 italic line-clamp-2 text-sm">
//                     {/* {item.subTitle} */}
//                   </h3>

//                   {/* Ratings Section */}
//                   {/* <div className="flex items-center mt-2.5 mb-5">
//                     <div className="flex items-center space-x-1 rtl:space-x-reverse">
//                       <svg
//                         // key={i}
//                         className="w-4 h-4 text-yellow-300"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                       >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                       </svg>
//                       <svg
//                         // key={i}
//                         className="w-4 h-4 text-yellow-300"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                       >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                       </svg>
//                       <svg
//                         // key={i}
//                         className="w-4 h-4 text-yellow-300"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                       >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                       </svg>
//                       <svg
//                         // key={i}
//                         className="w-4 h-4 text-yellow-300"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                       >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                       </svg>
//                       <svg
//                         className="w-4 h-4 text-gray-200  "
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                       >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                       </svg>
//                     </div>
//                     <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded   ms-3">
//                       5.0
//                     </span>
//                   </div> */}

//                   {/* Pricing Section */}
//                   {/* <div className="flex items-center justify-between">
//                     <span className="text-lg font-bold text-gray-900  ">

//                       INR 2,800/-
//                     </span>
//                     <span className="text-xs text-slate-900">(Duration: 25-30 Days )</span>
//                   </div> */}

//                   {/* Button Section */}
//                   <a
//                     href="#"
//                     className="flex items-center justify-center w-full rounded-lg bg-golden  focus:ring-4 focus:outline-none  font-medium text-sm px-5 py-2.5 text-center text-white mt-5 "
//                   >
                   
//                     Know More
//                     <svg
//   xmlns="http://www.w3.org/2000/svg"
//   className="h-6 w-6"
//   fill="none"
//   viewBox="0 0 24 24"
//   stroke="currentColor"
//   strokeWidth="2"
// >
//   <path
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     d="M9 5l7 7-7 7"
//   />
// </svg>

//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-center mt-6">
//             <button
//               onClick={handleServices}
//               className="bg-customBrown text-white font-semibold py-3 px-6 rounded-full hover:bg-customOrange transition-colors duration-300"
//             >
//               Explore All Services →
//             </button>
//           </div>

         
//         </div>
//       </div>

// );
// };
// export default OurServices;







// import React from 'react';
 
// const Card = ({ icon, title, description }) => {
//     return (
// <div className="border-2 border-red-500 p-6 rounded-lg text-center bg-red-50 w-56 h-56 flex flex-col items-center justify-center shadow-md">
// <img src={icon} alt={title} className="w-16 h-16 mb-4" />
// <h3 className="font-bold text-lg">{title}</h3>
// <p className="text-sm mt-2 text-gray-700">{description}</p>
// </div>
//     );
// };
 
// const OurServices = () => {
//     const cards = [
//         {
//             icon: "https://img.icons8.com/ios-filled/50/hand.png",
//             title: "PREVENTION",
//             description: "It's never too early to prevent pain"
//         },
//         {
//             icon: "https://img.icons8.com/ios-filled/50/plus.png",
//             title: "ACUTE",
//             description: "Repair, recover and regain mobility"
//         },
//         {
//             icon: "https://img.icons8.com/ios-filled/50/refresh.png",
//             title: "CHRONIC",
//             description: "A solution to live pain free and happy life"
//         },
//         {
//             icon: "https://img.icons8.com/ios-filled/50/person-working-with-a-table.png",
//             title: "PRE AND POST OP",
//             description: "Prepare for and recover from operation"
//         }
//     ];
 
//     return (
// <div className="flex items-center justify-center min-h-screen bg-white text-center p-8">
// <div className="grid grid-cols-3 grid-rows-3 gap-4 w-[1100px] h-[400px]">
// <div className="flex items-center justify-center"><Card {...cards[0]} /></div>
// <div></div>
// <div className="flex items-center justify-center"><Card {...cards[1]} /></div>
// <div></div>
// <div className="flex flex-col items-center justify-center">
// <p className="text-gray-500 uppercase">ALL CONDITIONS</p>
// <h1 className="text-5xl font-bold">
//                         A life <span className="text-red-500">without pain</span> is possible
// </h1>
// <p className="text-gray-500 mt-4">Whatever your journey, we have a program to support you</p>
// <button className="mt-6 px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all">
//                         Make me pain free Today →
// </button>
// </div>
// <div></div>
// <div className="flex items-center justify-center"><Card {...cards[2]} /></div>
// <div></div>
// <div className="flex items-center justify-center"><Card {...cards[3]} /></div>
// </div>
// </div>
//     );
// };
 
// export default OurServices;



import React from 'react';
 
const Card = ({ icon, title, description }) => {
    return (
<div className="border-2 border-red-500 p-6 rounded-lg text-center bg-red-50 w-56 h-56 flex flex-col items-center justify-center shadow-md">
<img src={icon} alt={title} className="w-16 h-16 mb-4" />
<h3 className="font-bold text-lg">{title}</h3>
<p className="text-sm mt-2 text-gray-700">{description}</p>
</div>
    );
};
 
const OurServices = () => {
    const cards = [
        {
            icon: "https://img.icons8.com/ios-filled/50/hand.png",
            title: "PREVENTION",
            description: "It's never too early to prevent pain"
        },
        {
            icon: "https://img.icons8.com/ios-filled/50/plus.png",
            title: "ACUTE",
            description: "Repair, recover and regain mobility"
        },
        {
            icon: "https://img.icons8.com/ios-filled/50/refresh.png",
            title: "CHRONIC",
            description: "A solution to live pain free and happy life"
        },
        {
            icon: "https://img.icons8.com/ios-filled/50/person-working-with-a-table.png",
            title: "PRE AND POST OP",
            description: "Prepare for and recover from operation"
        }
    ];
 
    return (
<div className="flex items-center justify-center  bg-white text-center p-2 ">
<div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-3 gap-4 w-full max-w-5xl max-h-xs">
<div className="flex items-center justify-center"><Card {...cards[0]} /></div>
<div></div>
<div className="flex items-center justify-center"><Card {...cards[1]} /></div>
<div></div>
<div className="flex flex-col items-center justify-center p-4">
<p className="text-gray-500 uppercase">ALL CONDITIONS</p>
<h1 className="text-5xl font-bold">
                        A life <span className="text-red-500">without pain</span> is possible
</h1>
<p className="text-gray-500 mt-4">Whatever your journey, we have a program to support you</p>
<button className="mt-6 px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all">
                        Make me pain free Today →
</button>
</div>
<div></div>
<div className="flex items-center justify-center"><Card {...cards[2]} /></div>
<div></div>
<div className="flex items-center justify-center"><Card {...cards[3]} /></div>
</div>
</div>
    );
};
 
export default OurServices;