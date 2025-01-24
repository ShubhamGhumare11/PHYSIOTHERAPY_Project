// import React from "react";
// import { motion } from "framer-motion"; // Import framer-motion
// import backgroundImage from "F:/project/Phisiotherapy/src/Image/p1.jpg"; // Correct image path
// import logoImage from "F:/project/Phisiotherapy/src/Image/P2.avif"; // Correct image path

// function BlogBanner() {
//   // Array of articles for the blog section (6 articles now)
//   const articles = [
//     {
//       title: "Injury Prevention Tips for Athletes",
//       description:
//         "Explore essential tips and strategies to prevent injuries while engaging in physical activities and sports.",
//       link: "/blog/injury-prevention-tips",
//     },
//     {
//       title: "Health Tips for a Stronger Immune System",
//       description:
//         "Learn how to boost your immune system with natural remedies, proper nutrition, and exercise.",
//       link: "/blog/health-tips-immune-system",
//     },
//     {
//       title: "Effective Rehabilitation Techniques",
//       description:
//         "Discover the most effective rehabilitation techniques that promote faster recovery and restore strength.",
//       link: "/blog/rehabilitation-techniques",
//     },
//     {
//       title: "Understanding Sports Psychology",
//       description:
//         "Gain insights into the mental aspects of sports and how to improve focus and performance.",
//       link: "/blog/sports-psychology",
//     },
//     {
//       title: "Nutrition for Optimal Performance",
//       description:
//         "Learn the role of nutrition in achieving peak physical performance and recovery.",
//       link: "/blog/nutrition-performance",
//     },
//     {
//       title: "Managing Stress and Anxiety for Athletes",
//       description:
//         "Explore techniques for managing stress and anxiety to improve overall well-being and performance.",
//       link: "/blog/managing-stress-anxiety",
//     },
//   ];

//   return (
//     <div>
//       {/* Blog Banner */}
//       <motion.div
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "400px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           textAlign: "left",
//           padding: "20px",
//         }}
//         initial={{ opacity: 0 }} // Start from 0 opacity
//         animate={{ opacity: 1 }} // Fade in to full opacity
//         transition={{ duration: 1 }} // Duration of 1 second for fade-in effect
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             borderRadius: "20px",
//             padding: "20px",
//             maxWidth: "1000px",
//             width: "100%",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           {/* Left side (Text) */}
//           <motion.div
//             style={{ flex: 1 }}
//             initial={{ x: -100 }} // Start from left (offscreen)
//             animate={{ x: 0 }} // Slide to its original position
//             transition={{ duration: 1, type: "spring", stiffness: 50 }} // Smooth slide-in effect
//           >
//             <h1 style={{ fontSize: "3rem", marginBottom: "10px", color: "#dac292" }}>
//               Explore Insights Through
//             </h1>
//             <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#dac292" }}>
//               Our Blogs
//             </h2>
//             <h3 style={{ fontSize: "2.5rem", marginTop: "20px", fontWeight: "bold", color: "#dac292" }}>
//               AUSPI'COUS NUMEROLOGY
//             </h3>
//           </motion.div>

//           {/* Right side (Logo Image) */}
//           <motion.div
//             style={{ marginLeft: "20px", borderRadius: "50%", overflow: "hidden" }}
//             initial={{ scale: 0 }} // Start from scale 0 (small)
//             animate={{ scale: 1 }} // Zoom in to normal size
//             transition={{ duration: 0.8, type: "spring", stiffness: 80 }} // Zoom-in effect
//           >
//             <img
//               src={logoImage}
//               alt="Auspicious Numerology Logo"
//               style={{
//                 width: "300px",
//                 height: "300px",
//                 objectFit: "cover",
//               }}
//             />
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Blog Section */}
//       <div className="blog-section py-16">
//         <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
//           Latest Articles
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {articles.map((article, index) => (
//             <motion.div
//               key={index}
//               className="article-card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: index * 0.3, duration: 1 }}
//               style={{
//                 backgroundColor: "#f9fafb", // Light gray background for the cards
//                 border: "1px solid #e5e7eb", // Light border
//                 color: "#1f2937", // Dark text color for better contrast
//               }}
//             >
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">{article.title}</h3>
//               <p className="text-gray-600 mb-4">{article.description}</p>
//               <a
//                 href={article.link}
//                 className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
//                 style={{
//                   fontWeight: "600", // Bold for the link text
//                 }}
//               >
//                 Read more
//               </a>
//             </motion.div>
//           ))}

//           {/* Additional 6 cards with scroll-up and scroll-down effects */}
//           {[...Array(6)].map((_, index) => (
//             <motion.div
//               key={index}
//               className="article-card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300"
//               initial={{ opacity: 0, y: 100 }} // Start from below (invisible)
//               whileInView={{ opacity: 1, y: 0 }} // Scroll into view
//               viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the card is in view
//               transition={{ delay: index * 0.3, duration: 1 }}
//               style={{
//                 backgroundColor: "#f9fafb", // Light gray background for the cards
//                 border: "1px solid #e5e7eb", // Light border
//                 color: "#1f2937", // Dark text color for better contrast
//               }}
//             >
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//                 Sample Card Title {index + 1}
//               </h3>
//               <p className="text-gray-600 mb-4">
//                 This is a placeholder for card number {index + 1}. Scroll to see the animation.
//               </p>
//               <a
//                 href="#"
//                 className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
//                 style={{
//                   fontWeight: "600", // Bold for the link text
//                 }}
//               >
//                 Read more
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BlogBanner;

// import React from "react";
// import { motion } from "framer-motion"; // Import framer-motion
// import backgroundImage from "./Image/p1.jpg"; // Correct image path
// import logoImage from "./Image/P2.avif"; // Correct image path
// import p3Image from "./Image/p3.webp";
// import p4Image from "./Image/p4.webp";
// import p5Image from "./Image/p5.jpg";
// import p6Image from "./Image/p6.jpg";
// import p7Image from "./Image/p7.jpg";
// import p8Image from "./Image/p8.png";


// function BlogBanner() {
//   // Array of articles for the blog section (6 articles now)
//   const articles = [
//     {
//       title: "Injury Prevention Tips for Athletes",
//       description:
//         "Explore essential tips and strategies to prevent injuries while engaging in physical activities and sports.",
//       link: "/blog/injury-prevention-tips",
//       image: p3Image, // Image for the first article
//     },
//     {
//       title: "Health Tips for a Stronger Immune System",
//       description:
//         "Learn how to boost your immune system with natural remedies, proper nutrition, and exercise.",
//       link: "/blog/health-tips-immune-system",
//       image: p4Image, // Image for the second article
//     },
//     {
//       title: "Effective Rehabilitation Techniques",
//       description:
//         "Discover the most effective rehabilitation techniques that promote faster recovery and restore strength.",
//       link: "/blog/rehabilitation-techniques",
//       image: p5Image, // Image for the third article
//     },
//     {
//       title: "Understanding Sports Psychology",
//       description:
//         "Gain insights into the mental aspects of sports and how to improve focus and performance.",
//       link: "/blog/sports-psychology",
//       image: p6Image,
//     },
//     {
//       title: "Nutrition for Optimal Performance",
//       description:
//         "Learn the role of nutrition in achieving peak physical performance and recovery.",
//       link: "/blog/nutrition-performance",
//       image: p7Image,
//     },
//     {
//       title: "Managing Stress and Anxiety for Athletes",
//       description:
//         "Explore techniques for managing stress and anxiety to improve overall well-being and performance.",
//       link: "/blog/managing-stress-anxiety",
//       image: p8Image,
//     },
//   ];

//   return (
//     <div>
//       {/* Blog Banner */}
//       <motion.div
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "400px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           textAlign: "left",
//           padding: "20px",
//         }}
//         initial={{ opacity: 0 }} // Start from 0 opacity
//         animate={{ opacity: 1 }} // Fade in to full opacity
//         transition={{ duration: 1 }} // Duration of 1 second for fade-in effect
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             borderRadius: "20px",
//             padding: "20px",
//             maxWidth: "1000px",
//             width: "100%",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           {/* Left side (Text) */}
//           <motion.div
//             style={{ flex: 1 }}
//             initial={{ x: -100 }} // Start from left (offscreen)
//             animate={{ x: 0 }} // Slide to its original position
//             transition={{ duration: 1, type: "spring", stiffness: 50 }} // Smooth slide-in effect
//           >
//             <h1 style={{ fontSize: "3rem", marginBottom: "10px", color: "#dac292" }}>
//             Explore Wellness Through 
//             </h1>
//             <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#dac292" }}>
//             Our Blogs..
//             </h2>
//             <h3 style={{ fontSize: "2.5rem", marginTop: "20px", fontWeight: "bold", color: "#dac292" }}>
//             Your Path to Recovery
//             </h3>
//           </motion.div>

//           {/* Right side (Logo Image) */}
//           <motion.div
//             style={{ marginLeft: "20px", borderRadius: "50%", overflow: "hidden" }}
//             initial={{ scale: 0 }} // Start from scale 0 (small)
//             animate={{ scale: 1 }} // Zoom in to normal size
//             transition={{ duration: 0.8, type: "spring", stiffness: 80 }} // Zoom-in effect
//           >
//             <img
//               src={logoImage}
//               alt="Auspicious Numerology Logo"
//               style={{
//                 width: "300px",
//                 height: "300px",
//                 objectFit: "cover",
//               }}
//             />
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Blog Section */}
//       <div className="blog-section py-16">
//         <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
//           Latest Articles
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {articles.map((article, index) => (
//             <motion.div
//               key={index}
//               className="article-card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: index * 0.3, duration: 1 }}
//               style={{
//                 backgroundColor: "#f9fafb", // Light gray background for the cards
//                 border: "1px solid #e5e7eb", // Light border
//                 color: "#1f2937", // Dark text color for better contrast
//               }}
//             >
//               {/* Conditionally render image only for the first three articles */}
//               {article.image && (
//                 <div
//                   style={{
//                     width: "100%",
//                     height: "200px",
//                     backgroundImage: `url(${article.image})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     borderRadius: "8px", // Rounded corners for image
//                     marginBottom: "15px", // Spacing between image and text
//                   }}
//                 />
//               )}

//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">{article.title}</h3>
//               <p className="text-gray-600 mb-4">{article.description}</p>
//               <a
//                 href={article.link}
//                 className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
//                 style={{
//                   fontWeight: "600", // Bold for the link text
//                 }}
//               >
//                 Read more
//               </a>
//             </motion.div>
//           ))}

//           {/* Additional 6 cards with scroll-up and scroll-down effects */}
//           {[...Array(6)].map((_, index) => (
//             <motion.div
//               key={index}
//               className="article-card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300"
//               initial={{ opacity: 0, y: 100 }} // Start from below (invisible)
//               whileInView={{ opacity: 1, y: 0 }} // Scroll into view
//               viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the card is in view
//               transition={{ delay: index * 0.3, duration: 1 }}
//               style={{
//                 backgroundColor: "#f9fafb", // Light gray background for the cards
//                 border: "1px solid #e5e7eb", // Light border
//                 color: "#1f2937", // Dark text color for better contrast
//               }}
//             >
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//                 Sample Card Title {index + 1}
//               </h3>
//               <p className="text-gray-600 mb-4">
//                 This is a placeholder for card number {index + 1}. Scroll to see the animation.
//               </p>
//               <a
//                 href="#"
//                 className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
//                 style={{
//                   fontWeight: "600", // Bold for the link text
//                 }}
//               >
//                 Read more
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BlogBanner;




// import React, { useRef } from "react";
// import { motion } from "framer-motion"; // Import framer-motion
// import backgroundImage from "./Image/p1.jpg"; // Correct image path
// import logoImage from "./Image/P2.avif"; // Correct image path
// import p3Image from "./Image/p3.webp";
// import p4Image from "./Image/p4.webp";
// import p5Image from "./Image/p5.jpg";
// import p6Image from "./Image/p6.jpg";
// import p7Image from "./Image/p7.jpg";
// import p8Image from "./Image/p8.png";

// function BlogBanner() {
//   // Array of articles for the blog section (6 articles)
//   const articles = [
//     {
//       title: "Injury Prevention Tips for Athletes",
//       description:
//         "Explore essential tips and strategies to prevent injuries while engaging in physical activities and sports.",
//       link: "/blog/injury-prevention-tips",
//       image: p3Image, // Image for the first article
//     },
//     {
//       title: "Health Tips for a Stronger Immune System",
//       description:
//         "Learn how to boost your immune system with natural remedies, proper nutrition, and exercise.",
//       link: "/blog/health-tips-immune-system",
//       image: p4Image, // Image for the second article
//     },
//     {
//       title: "Effective Rehabilitation Techniques",
//       description:
//         "Discover the most effective rehabilitation techniques that promote faster recovery and restore strength.",
//       link: "/blog/rehabilitation-techniques",
//       image: p5Image, // Image for the third article
//     },
//     {
//       title: "Understanding Sports Psychology",
//       description:
//         "Gain insights into the mental aspects of sports and how to improve focus and performance.",
//       link: "/blog/sports-psychology",
//       image: p6Image,
//     },
//     {
//       title: "Nutrition for Optimal Performance",
//       description:
//         "Learn the role of nutrition in achieving peak physical performance and recovery.",
//       link: "/blog/nutrition-performance",
//       image: p7Image,
//     },
//     {
//       title: "Managing Stress and Anxiety for Athletes",
//       description:
//         "Explore techniques for managing stress and anxiety to improve overall well-being and performance.",
//       link: "/blog/managing-stress-anxiety",
//       image: p8Image,
//     },
//   ];

//   // Reference to the scroll container
//   const scrollContainerRef = useRef(null);

//   // Scroll function
//   const scroll = (direction) => {
//     if (direction === "left") {
//       scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
//     } else {
//       scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
//     }
//   };

//   return (
//     <div>
//       {/* Blog Banner */}
//       <motion.div
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "400px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           textAlign: "left",
//           padding: "20px",
//         }}
//         initial={{ opacity: 0 }} // Start from 0 opacity
//         animate={{ opacity: 1 }} // Fade in to full opacity
//         transition={{ duration: 1 }} // Duration of 1 second for fade-in effect
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             borderRadius: "20px",
//             padding: "20px",
//             maxWidth: "1000px",
//             width: "100%",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           {/* Left side (Text) */}
//           <motion.div
//             style={{ flex: 1 }}
//             initial={{ x: -100 }} // Start from left (offscreen)
//             animate={{ x: 0 }} // Slide to its original position
//             transition={{ duration: 1, type: "spring", stiffness: 50 }} // Smooth slide-in effect
//           >
//             <h1 style={{ fontSize: "3rem", marginBottom: "10px", color: "#dac292" }}>
//               Explore Wellness Through
//             </h1>
//             <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#dac292" }}>
//               Our Blogs..
//             </h2>
//             <h3 style={{ fontSize: "2.5rem", marginTop: "20px", fontWeight: "bold", color: "#dac292" }}>
//               Your Path to Recovery
//             </h3>
//           </motion.div>

//           {/* Right side (Logo Image) */}
//           <motion.div
//             style={{ marginLeft: "20px", borderRadius: "50%", overflow: "hidden" }}
//             initial={{ scale: 0 }} // Start from scale 0 (small)
//             animate={{ scale: 1 }} // Zoom in to normal size
//             transition={{ duration: 0.8, type: "spring", stiffness: 80 }} // Zoom-in effect
//           >
//             <img
//               src={logoImage}
//               alt="Auspicious Numerology Logo"
//               style={{
//                 width: "300px",
//                 height: "300px",
//                 objectFit: "cover",
//               }}
//             />
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Blog Section */}
//       <div className="blog-section py-16">
//         <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
//           Latest Articles
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* First 6 articles */}
//           {articles.map((article, index) => (
//             <motion.div
//               key={index}
//               className="article-card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: index * 0.3, duration: 1 }}
//               style={{
//                 backgroundColor: "#f9fafb", // Light gray background for the cards
//                 border: "1px solid #e5e7eb", // Light border
//                 color: "#1f2937", // Dark text color for better contrast
//               }}
//             >
//               <div
//                 style={{
//                   width: "100%",
//                   height: "200px",
//                   backgroundImage: `url(${article.image})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   borderRadius: "8px", // Rounded corners for image
//                   marginBottom: "15px", // Spacing between image and text
//                 }}
//               />
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">{article.title}</h3>
//               <p className="text-gray-600 mb-4">{article.description}</p>
//               <a
//                 href={article.link}
//                 className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
//                 style={{
//                   fontWeight: "600", // Bold for the link text
//                 }}
//               >
//                 Read more
//               </a>
//             </motion.div>
//           ))}
//         </div>

//         {/* Last 6 articles with scrolling buttons */}
//         <div className="relative mt-16">
//           <button
//             onClick={() => scroll("left")}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
//           >
//             &larr; {/* Left arrow */}
//           </button>
//           <div
//             ref={scrollContainerRef}
//             className="flex overflow-x-auto space-x-6 scroll-smooth"
//           >
//             {articles.map((article, index) => (
//               <motion.div
//                 key={index + 6}
//                 className="article-card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 min-w-[300px]"
//                 initial={{ opacity: 0, y: 100 }} // Start from below (invisible)
//                 whileInView={{ opacity: 1, y: 0 }} // Scroll into view
//                 viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the card is in view
//                 transition={{ delay: index * 0.3, duration: 1 }}
//                 style={{
//                   backgroundColor: "#f9fafb", // Light gray background for the cards
//                   border: "1px solid #e5e7eb", // Light border
//                   color: "#1f2937", // Dark text color for better contrast
//                 }}
//               >
//                 <div
//                   style={{
//                     width: "100%",
//                     height: "200px",
//                     backgroundImage: `url(${article.image})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     borderRadius: "8px", // Rounded corners for image
//                     marginBottom: "15px", // Spacing between image and text
//                   }}
//                 />
//                 <h3 className="text-2xl font-semibold text-gray-800 mb-4">{article.title}</h3>
//                 <p className="text-gray-600 mb-4">{article.description}</p>
//                 <a
//                   href={article.link}
//                   className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
//                   style={{
//                     fontWeight: "600", // Bold for the link text
//                   }}
//                 >
//                   Read more
//                 </a>
//               </motion.div>
//             ))}
//           </div>
//           <button
//             onClick={() => scroll("right")}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
//           >
//             &rarr; {/* Right arrow */}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BlogBanner;

// import React, { useRef } from "react";
// import { motion } from "framer-motion"; // Import framer-motion
// import backgroundImage from "./Image/p1.jpg"; // Correct image path
// import logoImage from "./Image/P2.avif"; // Correct image path
// import p3Image from "./Image/p3.webp";
// import p4Image from "./Image/p4.webp";
// import p5Image from "./Image/p5.jpg";
// import p6Image from "./Image/p6.jpg";
// import p7Image from "./Image/p7.jpg";
// import p8Image from "./Image/p8.png";

// function BlogBanner() {
//   // Array of articles for the blog section (6 articles)
//   const articles = [
//     {
//       title: "Injury Prevention Tips for Athletes",
//       description:
//         "Explore essential tips and strategies to prevent injuries while engaging in physical activities and sports.",
//       link: "/blog/injury-prevention-tips",
//       image: p3Image, // Image for the first article
//     },
//     {
//       title: "Health Tips for a Stronger Immune System",
//       description:
//         "Learn how to boost your immune system with natural remedies, proper nutrition, and exercise.",
//       link: "/blog/health-tips-immune-system",
//       image: p4Image, // Image for the second article
//     },
//     {
//       title: "Effective Rehabilitation Techniques",
//       description:
//         "Discover the most effective rehabilitation techniques that promote faster recovery and restore strength.",
//       link: "/blog/rehabilitation-techniques",
//       image: p5Image, // Image for the third article
//     },
//     {
//       title: "Understanding Sports Psychology",
//       description:
//         "Gain insights into the mental aspects of sports and how to improve focus and performance.",
//       link: "/blog/sports-psychology",
//       image: p6Image,
//     },
//     {
//       title: "Nutrition for Optimal Performance",
//       description:
//         "Learn the role of nutrition in achieving peak physical performance and recovery.",
//       link: "/blog/nutrition-performance",
//       image: p7Image,
//     },
//     {
//       title: "Managing Stress and Anxiety for Athletes",
//       description:
//         "Explore techniques for managing stress and anxiety to improve overall well-being and performance.",
//       link: "/blog/managing-stress-anxiety",
//       image: p8Image,
//     },
//   ];

//   // Reference to the scroll container
//   const scrollContainerRef = useRef(null);

//   // Scroll function
//   const scroll = (direction) => {
//     if (direction === "left") {
//       scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
//     } else {
//       scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
//     }
//   };

//   return (
//     <div>
//       {/* Blog Banner */}
//       <motion.div
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "400px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           textAlign: "left",
//           padding: "20px",
//         }}
//         initial={{ opacity: 0 }} // Start from 0 opacity
//         animate={{ opacity: 1 }} // Fade in to full opacity
//         transition={{ duration: 1 }} // Duration of 1 second for fade-in effect
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             borderRadius: "20px",
//             padding: "20px",
//             maxWidth: "1000px",
//             width: "100%",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           {/* Left side (Text) */}
//           <motion.div
//             style={{ flex: 1 }}
//             initial={{ x: -100 }} // Start from left (offscreen)
//             animate={{ x: 0 }} // Slide to its original position
//             transition={{ duration: 1, type: "spring", stiffness: 50 }} // Smooth slide-in effect
//           >
//             <h1 style={{ fontSize: "2.rem", fontWeight: "bold",marginBottom: "10px", color: "#dac292" }}>
//             Welcome to Our Wellness Blog
            
//             </h1>
//             <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#dac292" }}>
//             Explore insightful articles and
//             </h2>
//             <h3 style={{ fontSize: "2rem", marginTop: "20px", fontWeight: "bold", color: "#dac292" }}>
//             tips for a healthier lifestyle.
//             </h3>
//           </motion.div>

//           {/* Right side (Logo Image) */}
//           <motion.div
//             style={{ marginLeft: "20px", borderRadius: "50%", overflow: "hidden" }}
//             initial={{ scale: 0 }} // Start from scale 0 (small)
//             animate={{ scale: 1 }} // Zoom in to normal size
//             transition={{ duration: 0.8, type: "spring", stiffness: 80 }} // Zoom-in effect
//           >
//             <img
//               src={logoImage}
//               alt="Auspicious Numerology Logo"
//               style={{
//                 width: "300px",
//                 height: "300px",
//                 objectFit: "cover",
//               }}
//             />
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Blog Section */}
//       <div className="blog-section py-16">
//         <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
//           Latest Articles
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* First 6 articles */}
//           {articles.map((article, index) => (
//             <motion.div
//               key={index}
//               className="article-card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: index * 0.3, duration: 1 }}
//               style={{
//                 backgroundColor: "#f9fafb", // Light gray background for the cards
//                 border: "1px solid #e5e7eb", // Light border
//                 color: "#1f2937", // Dark text color for better contrast
//               }}
//             >
//               <div
//                 style={{
//                   width: "100%",
//                   height: "200px",
//                   backgroundImage: `url(${article.image})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   borderRadius: "8px", // Rounded corners for image
//                   marginBottom: "15px", // Spacing between image and text
//                 }}
//               />
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">{article.title}</h3>
//               <p className="text-gray-600 mb-4">{article.description}</p>
//               <a
//                 href={article.link}
//                 className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
//                 style={{
//                   fontWeight: "600", // Bold for the link text
//                 }}
//               >
//                 Read more
//               </a>
//             </motion.div>
//           ))}
//         </div>

//         {/* Last 6 articles with scrolling buttons */}
//         <div className="relative mt-16">
//           <button
//             onClick={() => scroll("left")}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
//           >
//             &larr; {/* Left arrow */}
//           </button>
//           <div
//             ref={scrollContainerRef}
//             className="flex overflow-x-auto space-x-6 scroll-smooth"
//           >
//             {articles.map((article, index) => (
//               <motion.div
//                 key={index + 6}
//                 className="article-card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 min-w-[300px]"
//                 initial={{ opacity: 0, y: 100 }} // Start from below (invisible)
//                 whileInView={{ opacity: 1, y: 0 }} // Scroll into view
//                 viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the card is in view
//                 transition={{ delay: index * 0.3, duration: 1 }}
//                 style={{
//                   backgroundColor: "#f9fafb", // Light gray background for the cards
//                   border: "1px solid #e5e7eb", // Light border
//                   color: "#1f2937", // Dark text color for better contrast
//                 }}
//               >
//                 <div
//                   style={{
//                     width: "100%",
//                     height: "200px",
//                     backgroundImage: `url(${article.image})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     borderRadius: "8px", // Rounded corners for image
//                     marginBottom: "15px", // Spacing between image and text
//                   }}
//                 />
//                 <h3 className="text-2xl font-semibold text-gray-800 mb-4">{article.title}</h3>
//                 <p className="text-gray-600 mb-4">{article.description}</p>
//                 <a
//                   href={article.link}
//                   className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
//                   style={{
//                     fontWeight: "600", // Bold for the link text
//                   }}
//                 >
//                   Read more
//                 </a>
//               </motion.div>
//             ))}
//           </div>
//           <button
//             onClick={() => scroll("right")}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
//           >
//             &rarr; {/* Right arrow */}
//           </button>
//         </div>

//         {/* Image Collage Section */}
//         <div className="image-collage-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-16">
//           <div className="image-item">
//             <img src={p3Image} alt="Collage Image 1" className="object-cover rounded-lg" />
//           </div>
//           <div className="image-item">
//             <img src={p4Image} alt="Collage Image 2" className="object-cover rounded-lg" />
//           </div>
//           <div className="image-item">
//             <img src={p5Image} alt="Collage Image 3" className="object-cover rounded-lg" />
//           </div>
//           <div className="image-item">
//             <img src={p6Image} alt="Collage Image 4" className="object-cover rounded-lg" />
//           </div>
//           <div className="image-item">
//             <img src={p7Image} alt="Collage Image 5" className="object-cover rounded-lg" />
//           </div>
//           <div className="image-item">
//             <img src={p8Image} alt="Collage Image 6" className="object-cover rounded-lg" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BlogBanner;


// import React, { useRef } from "react";
// import { motion } from "framer-motion"; // Import framer-motion
// import backgroundImage from "./Image/p1.jpg"; // Correct image path
// import logoImage from "./Image/P2.avif"; // Correct image path
// import p3Image from "./Image/p3.webp";
// import p4Image from "./Image/p4.webp";
// import p5Image from "./Image/p5.jpg";
// import p6Image from "./Image/p6.jpg";
// import p7Image from "./Image/p7.jpg";
// import p8Image from "./Image/p8.png";

// function BlogBanner() {
//   // Array of articles for the blog section (6 articles)
//   const articles = [
//     {
//       title: "Injury Prevention Tips for Athletes",
//       description:
//         "Explore essential tips and strategies to prevent injuries while engaging in physical activities and sports.",
//       link: "/blog/injury-prevention-tips",
//       image: p3Image, // Image for the first article
//     },
//     {
//       title: "Health Tips for a Stronger Immune System",
//       description:
//         "Learn how to boost your immune system with natural remedies, proper nutrition, and exercise.",
//       link: "/blog/health-tips-immune-system",
//       image: p4Image, // Image for the second article
//     },
//     {
//       title: "Effective Rehabilitation Techniques",
//       description:
//         "Discover the most effective rehabilitation techniques that promote faster recovery and restore strength.",
//       link: "/blog/rehabilitation-techniques",
//       image: p5Image, // Image for the third article
//     },
//     {
//       title: "Understanding Sports Psychology",
//       description:
//         "Gain insights into the mental aspects of sports and how to improve focus and performance.",
//       link: "/blog/sports-psychology",
//       image: p6Image,
//     },
//     {
//       title: "Nutrition for Optimal Performance",
//       description:
//         "Learn the role of nutrition in achieving peak physical performance and recovery.",
//       link: "/blog/nutrition-performance",
//       image: p7Image,
//     },
//     {
//       title: "Managing Stress and Anxiety for Athletes",
//       description:
//         "Explore techniques for managing stress and anxiety to improve overall well-being and performance.",
//       link: "/blog/managing-stress-anxiety",
//       image: p8Image,
//     },
//   ];

//   // Reference to the scroll container
//   const scrollContainerRef = useRef(null);

//   // Scroll function
//   const scroll = (direction) => {
//     if (direction === "left") {
//       scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
//     } else {
//       scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
//     }
//   };

//   return (
//     <div>
//       {/* Blog Banner */}
//       <motion.div
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "400px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           textAlign: "left",
//           padding: "20px",
//         }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             borderRadius: "20px",
//             padding: "20px",
//             maxWidth: "1000px",
//             width: "100%",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           {/* Left side (Text) */}
//           <motion.div
//             style={{ flex: 1 }}
//             initial={{ x: -100 }}
//             animate={{ x: 0 }}
//             transition={{ duration: 1, type: "spring", stiffness: 50 }}
//           >
//             <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "10px", color: "#dac292" }}>
//               Welcome to Our Wellness Blog
//             </h1>
//             <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#dac292" }}>
//               Explore insightful articles and
//             </h2>
//             <h3 style={{ fontSize: "2rem", marginTop: "20px", fontWeight: "bold", color: "#dac292" }}>
//               tips for a healthier lifestyle.
//             </h3>
//           </motion.div>

//           {/* Right side (Logo Image) */}
//           <motion.div
//             style={{ marginLeft: "20px", borderRadius: "50%", overflow: "hidden" }}
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
//           >
//             <img
//               src={logoImage}
//               alt="Auspicious Numerology Logo"
//               style={{
//                 width: "300px",
//                 height: "300px",
//                 objectFit: "cover",
//               }}
//             />
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Blog Section */}
//       <div className="blog-section py-16">
//         <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
//           Latest Articles
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* First 6 articles */}
//           {articles.map((article, index) => (
//             <motion.div
//               key={index}
//               className="article-card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: index * 0.3, duration: 1 }}
//               style={{
//                 backgroundColor: "#f9fafb", // Light gray background for the cards
//                 border: "1px solid #e5e7eb", // Light border
//                 color: "#1f2937", // Dark text color for better contrast
//               }}
//             >
//               <div
//                 style={{
//                   width: "100%",
//                   height: "200px",
//                   backgroundImage: `url(${article.image})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   borderRadius: "8px",
//                   marginBottom: "15px",
//                 }}
//               />
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">{article.title}</h3>
//               <p className="text-gray-600 mb-4">{article.description}</p>
//               <a
//                 href={article.link}
//                 className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
//                 style={{
//                   fontWeight: "600", // Bold for the link text
//                 }}
//               >
//                 Read more
//               </a>
//             </motion.div>
//           ))}
//         </div>

//         {/* Image with text section */}
//         <motion.div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "space-between",
//             height: "400px",
//             padding: "20px",
//             borderRadius: "15px",
//             marginTop: "50px",
//             backgroundColor: "#f9fafb",
//           }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           {/* Left side (Image) */}
//           <div
//             style={{
//               width: "50%",
//               height: "100%",
//               borderRadius: "15px",
//               overflow: "hidden",
//             }}
//           >
//             <img
//               src={p8Image}
//               alt="Collage Image with Text"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//               }}
//             />
//           </div>

//           {/* Right side (Text) */}
//           <div
//             style={{
//               width: "45%",
//               padding: "20px",
//               color: "#1f2937",
//               textAlign: "left",
//             }}
//           >
//             <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "10px" }}>
//               Dive Deeper into Wellness
//             </h2>
//             <h4>Dive Deeper into Wellness: Explore a diverse range of articles designed to enhance your physical and mental well-being. From practical fitness tips and nutritious recipes to mindfulness practices and stress management strategies, you'll find valuable insights and actionable advice to support a healthier, happier lifestyle. Stay informed and motivated with our expert-curated content that covers the latest trends and timeless wisdom in wellness.</h4>
//             <p style={{ fontSize: "1.2rem", marginTop: "20px" }}>
              
//             </p>
//           </div>
//         </motion.div>

//         {/* Scrolling Articles Section */}
//         <div className="relative mt-16">
//           <button
//             onClick={() => scroll("left")}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
//           >
//             &larr; {/* Left arrow */}
//           </button>
//           <div
//             ref={scrollContainerRef}
//             className="flex overflow-x-auto space-x-6 scroll-smooth"
//           >
//             {articles.map((article, index) => (
//               <motion.div
//                 key={index + 6}
//                 className="article-card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 min-w-[300px]"
//                 initial={{ opacity: 0, y: 100 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ delay: index * 0.3, duration: 1 }}
//                 style={{
//                   backgroundColor: "#f9fafb",
//                   border: "1px solid #e5e7eb",
//                   color: "#1f2937",
//                 }}
//               >
//                 <div
//                   style={{
//                     width: "100%",
//                     height: "200px",
//                     backgroundImage: `url(${article.image})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     borderRadius: "8px",
//                     marginBottom: "15px",
//                   }}
//                 />
//                 <h3 className="text-2xl font-semibold text-gray-800 mb-4">{article.title}</h3>
//                 <p className="text-gray-600 mb-4">{article.description}</p>
//                 <a
//                   href={article.link}
//                   className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
//                   style={{
//                     fontWeight: "600", // Bold for the link text
//                   }}
//                 >
//                   Read more
//                 </a>
//               </motion.div>
//             ))}
//           </div>
//           <button
//             onClick={() => scroll("right")}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
//           >
//             &rarr; {/* Right arrow */}
//           </button>
//         </div>

//         {/* Image Collage Section */}
//         <div className="image-collage-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-16">
//           <div className="image-item">
//             <img src={p3Image} alt="Collage Image 1" className="object-cover rounded-lg" />
//           </div>
//           <div className="image-item">
//             <img src={p4Image} alt="Collage Image 2" className="object-cover rounded-lg" />
//           </div>
//           <div className="image-item">
//             <img src={p5Image} alt="Collage Image 3" className="object-cover rounded-lg" />
//           </div>
//           <div className="image-item">
//             <img src={p6Image} alt="Collage Image 4" className="object-cover rounded-lg" />
//           </div>
//           <div className="image-item">
//             <img src={p7Image} alt="Collage Image 5" className="object-cover rounded-lg" />
//           </div>
//           <div className="image-item">
//             <img src={p8Image} alt="Collage Image 6" className="object-cover rounded-lg" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BlogBanner;

// import React, { useRef } from "react";
// import { motion } from "framer-motion"; // Import framer-motion
// import backgroundImage from "./Image/p1.jpg"; // Correct image path
// import logoImage from "./Image/P2.avif"; // Correct image path
// import p3Image from "./Image/p3.webp";
// import p4Image from "./Image/p4.webp";
// import p5Image from "./Image/p5.jpg";
// import p6Image from "./Image/p6.jpg";
// import p7Image from "./Image/p7.jpg";
// import p8Image from "./Image/p8.png";

// function BlogBanner() {
//   // Array of articles for the blog section (6 articles)
//   const articles = [
//     {
//       title: "Injury Prevention Tips for Athletes",
//       description:
//         "Explore essential tips and strategies to prevent injuries while engaging in physical activities and sports.",
//       link: "/blog/injury-prevention-tips",
//       image: p3Image, // Image for the first article
//     },
//     {
//       title: "Health Tips for a Stronger Immune System",
//       description:
//         "Learn how to boost your immune system with natural remedies, proper nutrition, and exercise.",
//       link: "/blog/health-tips-immune-system",
//       image: p4Image, // Image for the second article
//     },
//     {
//       title: "Effective Rehabilitation Techniques",
//       description:
//         "Discover the most effective rehabilitation techniques that promote faster recovery and restore strength.",
//       link: "/blog/rehabilitation-techniques",
//       image: p5Image, // Image for the third article
//     },
//     {
//       title: "Understanding Sports Psychology",
//       description:
//         "Gain insights into the mental aspects of sports and how to improve focus and performance.",
//       link: "/blog/sports-psychology",
//       image: p6Image,
//     },
//     {
//       title: "Nutrition for Optimal Performance",
//       description:
//         "Learn the role of nutrition in achieving peak physical performance and recovery.",
//       link: "/blog/nutrition-performance",
//       image: p7Image,
//     },
//     {
//       title: "Managing Stress and Anxiety for Athletes",
//       description:
//         "Explore techniques for managing stress and anxiety to improve overall well-being and performance.",
//       link: "/blog/managing-stress-anxiety",
//       image: p8Image,
//     },
//   ];

//   // Reference to the scroll container
//   const scrollContainerRef = useRef(null);

//   // Scroll function
//   const scroll = (direction) => {
//     if (direction === "left") {
//       scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
//     } else {
//       scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
//     }
//   };

//   return (
//     <div>
//       {/* Blog Banner */}
//       <motion.div
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "400px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           textAlign: "left",
//           padding: "20px",
//         }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             borderRadius: "20px",
//             padding: "20px",
//             maxWidth: "1000px",
//             width: "100%",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           {/* Left side (Text) */}
//           <motion.div
//             style={{ flex: 1 }}
//             initial={{ x: -100 }}
//             animate={{ x: 0 }}
//             transition={{ duration: 1, type: "spring", stiffness: 50 }}
//           >
//             <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "10px", color: "#dac292" }}>
//               Welcome to Our Wellness Blog
//             </h1>
//             <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#dac292" }}>
//               Explore insightful articles and
//             </h2>
//             <h3 style={{ fontSize: "2rem", marginTop: "20px", fontWeight: "bold", color: "#dac292" }}>
//               tips for a healthier lifestyle.
//             </h3>
//           </motion.div>

//           {/* Right side (Logo Image) */}
//           <motion.div
//             style={{ marginLeft: "20px", borderRadius: "50%", overflow: "hidden" }}
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
//           >
//             <img
//               src={logoImage}
//               alt="Auspicious Numerology Logo"
//               style={{
//                 width: "300px",
//                 height: "300px",
//                 objectFit: "cover",
//               }}
//             />
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Blog Section */}
//       <div className="blog-section py-16">
//         <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
//           Latest Articles
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* First 6 articles */}
//           {articles.map((article, index) => (
//             <motion.div
//               key={index}
//               className="article-card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: index * 0.3, duration: 1 }}
//               style={{
//                 backgroundColor: "#f9fafb", // Light gray background for the cards
//                 border: "1px solid #e5e7eb", // Light border
//                 color: "#1f2937", // Dark text color for better contrast
//               }}
//             >
//               <div
//                 style={{
//                   width: "100%",
//                   height: "200px",
//                   backgroundImage: `url(${article.image})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   borderRadius: "8px",
//                   marginBottom: "15px",
//                 }}
//               />
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">{article.title}</h3>
//               <p className="text-gray-600 mb-4">{article.description}</p>
//               <a
//                 href={article.link}
//                 className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
//                 style={{
//                   fontWeight: "600", // Bold for the link text
//                 }}
//               >
//                 Read more
//               </a>
//             </motion.div>
//           ))}
//         </div>

//         {/* Image with text section */}
//         <motion.div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "space-between",
//             height: "400px",
//             padding: "20px",
//             borderRadius: "15px",
//             marginTop: "50px",
//             backgroundColor: "#f9fafb",
//             overflow: "hidden",
//           }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
//         >
//           {/* Left side (Image) */}
//           <motion.div
//             style={{
//               width: "50%",
//               height: "100%",
//               borderRadius: "15px",
//               overflow: "hidden",
//             }}
//             whileHover={{ scale: 1.1 }}
//           >
//             <img
//               src={p8Image}
//               alt="Collage Image with Text"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//                 transition: "transform 0.5s",
//               }}
//             />
//           </motion.div>

//           {/* Right side (Text) */}
//           <motion.div
//             style={{
//               width: "45%",
//               padding: "20px",
//               color: "#1f2937",
//               textAlign: "left",
//             }}
//             initial={{ x: 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "10px" }}>
//               Dive Deeper into Wellness
//             </h2>
//             <h4 style={{ marginBottom: "20px" }}>
//               Explore a diverse range of articles designed to enhance your physical and mental well-being. From practical fitness tips and nutritious recipes to mindfulness practices and stress management strategies, you'll find valuable insights and actionable advice to support a healthier, happier lifestyle. Stay informed and motivated with our expert-curated content that covers the latest trends and timeless wisdom in wellness.
//             </h4>
//             <p style={{ fontSize: "1.2rem", marginTop: "20px" }}>
//               Your journey to a healthier lifestyle starts here!
//             </p>
//           </motion.div>
//         </motion.div>

//         {/* Scrolling Articles Section */}
//         <div className="relative mt-16">
//           <button
//             onClick={() => scroll("left")}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
//           >
//             &larr; {/* Left arrow */}
//           </button>
//           <div
//             ref={scrollContainerRef}
//             className="flex overflow-x-auto space-x-6 scroll-smooth"
//           >
//             {articles.map((article, index) => (
//               <motion.div
//                 key={index + 6}
//                 className="article-card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 min-w-[300px]"
//                 initial={{ opacity: 0, y: 100 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ delay: index * 0.3, duration: 1 }}
//                 style={{
//                   backgroundColor: "#f9fafb",
//                   border: "1px solid #e5e7eb",
//                   color: "#1f2937",
//                 }}
//               >
//                 <div
//                   style={{
//                     width: "100%",
//                     height: "200px",
//                     backgroundImage: `url(${article.image})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     borderRadius: "8px",
//                     marginBottom: "15px",
//                   }}
//                 />
//                 <h3 className="text-2xl font-semibold text-gray-800 mb-4">{article.title}</h3>
//                 <p className="text-gray-600 mb-4">{article.description}</p>
//                 <a
//                   href={article.link}
//                   className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
//                   style={{
//                     fontWeight: "600", // Bold for the link text
//                   }}
//                 >
//                   Read more
//                 </a>
//               </motion.div>
//             ))}
//           </div>
//           <button
//             onClick={() => scroll("right")}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
//           >
//             &rarr; {/* Right arrow */}
//           </button>
//         </div>

//         {/* Image Collage Section */}
//         <div className="image-collage-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-16">
//           <div className="image-item">
//             <img src={p3Image} alt="Collage Image 1" className="object-cover rounded-lg" />
//           </div>
//           <div className="image-item">
//             <img src={p4Image} alt="Collage Image 2" className="object-cover rounded-lg" />
//           </div>
//           <div className="image-item">
//             <img src={p5Image} alt="Collage Image 3" className="object-cover rounded-lg" />
//           </div>
//           <div className="image-item">
//             <img src={p6Image} alt="Collage Image 4" className="object-cover rounded-lg" />
//           </div>
//           <div className="image-item">
//             <img src={p7Image} alt="Collage Image 5" className="object-cover rounded-lg" />
//           </div>
//           <div className="image-item">
//             <img src={p8Image} alt="Collage Image 6" className="object-cover rounded-lg" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BlogBanner;

// import React, { useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import backgroundImage from "./Image/p1.jpg";
// import logoImage from "./Image/P2.avif";
// import p3Image from "./Image/p3.webp";
// import p4Image from "./Image/p4.webp";
// import p5Image from "./Image/p5.jpg";
// import p6Image from "./Image/p6.jpg";
// import p7Image from "./Image/p7.jpg";
// import p8Image from "./Image/p8.png";

// function BlogBanner() {
//   const articles = [
//     {
//       title: "Injury Prevention Tips for Athletes",
//       description:
//         "Explore essential tips and strategies to prevent injuries while engaging in physical activities and sports.",
//       link: "/blog/injury-prevention-tips",
//       image: p3Image,
//     },
//     {
//       title: "Health Tips for a Stronger Immune System",
//       description:
//         "Learn how to boost your immune system with natural remedies, proper nutrition, and exercise.",
//       link: "/blog/health-tips-immune-system",
//       image: p4Image,
//     },
//     {
//       title: "Effective Rehabilitation Techniques",
//       description:
//         "Discover the most effective rehabilitation techniques that promote faster recovery and restore strength.",
//       link: "/blog/rehabilitation-techniques",
//       image: p5Image,
//     },
//     {
//       title: "Understanding Sports Psychology",
//       description:
//         "Gain insights into the mental aspects of sports and how to improve focus and performance.",
//       link: "/blog/sports-psychology",
//       image: p6Image,
//     },
//     {
//       title: "Nutrition for Optimal Performance",
//       description:
//         "Learn the role of nutrition in achieving peak physical performance and recovery.",
//       link: "/blog/nutrition-performance",
//       image: p7Image,
//     },
//     {
//       title: "Managing Stress and Anxiety for Athletes",
//       description:
//         "Explore techniques for managing stress and anxiety to improve overall well-being and performance.",
//       link: "/blog/managing-stress-anxiety",
//       image: p8Image,
//     },
//   ];

//   const scrollContainerRef = useRef(null);

//   const scroll = (direction) => {
//     if (direction === "left") {
//       scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
//     } else {
//       scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       scroll("right");
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="font-serif">
//       {/* Blog Banner */}
//       <motion.div
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "400px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           textAlign: "left",
//           padding: "20px",
//           position: "relative",
//         }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             padding: "20px",
//             borderRadius: "20px",
//             maxWidth: "1000px",
//             width: "100%",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//             position: "absolute",
//             zIndex: 10,
//           }}
//           className="flex flex-col md:flex-row"
//         >
//           {/* Left side (Text) */}
//           <motion.div
//             className="flex-1 mb-5 md:mb-0"
//             initial={{ x: -100 }}
//             animate={{ x: 0 }}
//             transition={{ duration: 1, type: "spring", stiffness: 50 }}
//           >
//             <motion.h1
//   className="text-3xl md:text-4xl font-bold mb-2"
//   style={{ color: "#dac292" }}
//   whileHover={{ scale: 1.1, color: "#ffd700" }}
// >
//   Welcome to Our Wellness Blog
// </motion.h1>

// <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "#dac292" }}>
//         Explore Insightful Articles and Tips
//       </h1>
//       <h2 className="text-3xl font-bold" style={{ color: "#dac292" }}>
//         For a Healthier Lifestyle
//       </h2>
//           </motion.div>

//           {/* Right side (Logo Image) */}
//           <motion.div
//             className="rounded-full overflow-hidden"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 1, type: "spring", stiffness: 200 }}
//           >
//             <img
//               src={logoImage}
//               alt="Auspicious Numerology Logo"
//               className="w-48 h-48 object-cover"
//             />
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Blog Section */}
//       <div className="blog-section py-16">
//         <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
//           Latest Articles
//         </h2>

//         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {articles.slice(0, 6).map((article, index) => (
//             <div
//               key={index}
//               className="article-card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300"
//               style={{
//                 backgroundColor: "#f9fafb",
//                 border: "1px solid #e5e7eb",
//                 color: "#1f2937",
//               }}
//             >
//               <div
//                 style={{
//                   width: "100%",
//                   height: "200px",
//                   backgroundImage: `url(${article.image})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   borderRadius: "8px",
//                   marginBottom: "15px",
//                 }}
//               />
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//                 {article.title}
//               </h3>
//               <p className="text-gray-600 mb-4">{article.description}</p>
//               <a
//                 href={article.link}
//                 className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
//                 style={{
//                   fontWeight: "600",
//                 }}
//               >
//                 Read more
//               </a>
//             </div>
//           ))}
//         </div>

//         {/* Image with text section */}
//         <div
//   className="flex flex-col md:flex-row items-center justify-between mt-16 bg-[#f9fafb] py-16" // Set background color here
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1 }}
//   transition={{ duration: 1 }}
//   whileHover={{
//     scale: 1.05,
//     rotateX: 5,
//     rotateY: 5,
//     transition: { duration: 0.5 },
//   }}
// >
//   {/* Left side (Image) */}
//   <motion.div
//     className="w-full md:w-1/2 h-80 rounded-lg overflow-hidden"
//     whileHover={{ scale: 1.1 }}
//   >
//     <img
//       src={p8Image}
//       alt="Collage Image with Text"
//       className="w-full h-full object-cover"
//       style={{ transition: "transform 0.5s" }}
//     />
//   </motion.div>

//   {/* Right side (Text) */}
//   <div className="w-full md:w-1/2 p-6">
//     <h2 className="text-2xl font-bold mb-4">Dive Deeper into Wellness</h2>
//     <p className="mb-4">
//       Explore a diverse range of articles designed to enhance your
//       physical and mental well-being. From practical fitness tips and
//       nutritious recipes to mindfulness practices and stress management
//       strategies, you'll find valuable insights and actionable advice to
//       support a healthier, happier lifestyle.
//     </p>
//     <p className="text-lg font-medium">
//       Your journey to a healthier lifestyle starts here!
//     </p>
//   </div>
//         </div>

//         {/* Scrolling Articles Section */}
//         <div className="relative mt-16">
//   <div
//     ref={scrollContainerRef}
//     className="flex overflow-x-auto space-x-6 scroll-smooth"
//   >
//     {articles.map((article, index) => (
//       <motion.div
//         key={index + 6}
//         className="article-card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 min-w-[300px]"
//         initial={{ opacity: 0, y: 100 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ delay: index * 0.3, duration: 1 }}
//         style={{
//           backgroundColor: "#f9fafb",
//           border: "1px solid #e5e7eb",
//           color: "#1f2937",
//           transformStyle: "preserve-3d",
//         }}
//         whileHover={{
//           scale: 1.05, // Slight zoom effect
//           rotateY: 10, // Tilt the card slightly for a 3D effect
//           transition: { duration: 0.3 },
//         }}
//       >
//         <div
//           style={{
//             width: "100%",
//             height: "200px",
//             backgroundImage: `url(${article.image})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             borderRadius: "8px",
//             marginBottom: "15px",
//           }}
//         />
//         <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//           {article.title}
//         </h3>
//         <p className="text-gray-600 mb-4">{article.description}</p>
//         <a
//           href={article.link}
//           className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
//           style={{
//             fontWeight: "600",
//           }}
//         >
//           Read more
//         </a>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BlogBanner;

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import backgroundImage from "./Image/p1.jpg";
import logoImage from "./Image/P2.avif";
import p3Image from "./Image/p3.webp";
import p4Image from "./Image/p4.webp";
import p5Image from "./Image/p5.jpg";
import p6Image from "./Image/p6.jpg";
import p7Image from "./Image/p7.jpg";
import p8Image from "./Image/p8.png";

function BlogBanner() {
  const articles = [
    {
      title: "Injury Prevention Tips for Athletes",
      description:
        "Explore essential tips and strategies to prevent injuries while engaging in physical activities and sports.",
      link: "/blog/injury-prevention-tips",
      image: p3Image,
    },
    {
      title: "Health Tips for a Stronger Immune System",
      description:
        "Learn how to boost your immune system with natural remedies, proper nutrition, and exercise.",
      link: "/blog/health-tips-immune-system",
      image: p4Image,
    },
    {
      title: "Effective Rehabilitation Techniques",
      description:
        "Discover the most effective rehabilitation techniques that promote faster recovery and restore strength.",
      link: "/blog/rehabilitation-techniques",
      image: p5Image,
    },
    {
      title: "Understanding Sports Psychology",
      description:
        "Gain insights into the mental aspects of sports and how to improve focus and performance.",
      link: "/blog/sports-psychology",
      image: p6Image,
    },
    {
      title: "Nutrition for Optimal Performance",
      description:
        "Learn the role of nutrition in achieving peak physical performance and recovery.",
      link: "/blog/nutrition-performance",
      image: p7Image,
    },
    {
      title: "Managing Stress and Anxiety for Athletes",
      description:
        "Explore techniques for managing stress and anxiety to improve overall well-being and performance.",
      link: "/blog/managing-stress-anxiety",
      image: p8Image,
    },
  ];

  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (direction === "left") {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scroll("right"); // Automatically scroll right every 3 seconds
    }, 3000);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <div className="font-serif">
      {/* Blog Banner */}
      <motion.div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "left",
          padding: "20px",
          position: "relative",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
            borderRadius: "20px",
            maxWidth: "1000px",
            width: "100%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            position: "absolute",
            zIndex: 10,
          }}
          className="flex flex-col md:flex-row"
        >
          {/* Left side (Text) */}
          <motion.div
            className="flex-1 mb-5 md:mb-0"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
          >
            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ color: "#dac292" }}
              whileHover={{ scale: 1.1, color: "#ffd700" }}
            >
              Welcome to Our Wellness Blog
            </motion.h1>
            <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "#dac292" }}>
              Explore Insightful Articles and Tips
            </h1>
            <h2 className="text-3xl font-bold" style={{ color: "#dac292" }}>
              For a Healthier Lifestyle
            </h2>
          </motion.div>

          {/* Right side (Logo Image) */}
          <motion.div
            className="rounded-full overflow-hidden"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 200 }}
          >
            <img
              src={logoImage}
              alt="Auspicious Numerology Logo"
              className="w-48 h-48 object-cover"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Blog Section */}
      <div className="blog-section py-16">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Latest Articles
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(0, 6).map((article, index) => (
            <div
              key={index}
              className="article-card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300"
              style={{
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
                color: "#1f2937",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  backgroundImage: `url(${article.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "8px",
                  marginBottom: "15px",
                }}
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <a
                href={article.link}
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                style={{
                  fontWeight: "600",
                }}
              >
                Read more
              </a>
            </div>
          ))}
        </div>

        {/* Image with text section */}
        <div
          className="flex flex-col md:flex-row items-center justify-between mt-16 bg-[#f9fafb] py-16"
        >
          {/* Left side (Image) */}
          <motion.div
            className="w-full md:w-1/2 h-80 rounded-lg overflow-hidden"
            whileHover={{ scale: 1.1 }}
          >
            <img
              src={p8Image}
              alt="Collage Image with Text"
              className="w-full h-full object-cover"
              style={{ transition: "transform 0.5s" }}
            />
          </motion.div>

          {/* Right side (Text) */}
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-4">Dive Deeper into Wellness</h2>
            <p className="mb-4">
              Explore a diverse range of articles designed to enhance your physical and mental well-being.
              From practical fitness tips and nutritious recipes to mindfulness practices and stress management strategies, you'll find valuable insights and actionable advice to support a healthier, happier lifestyle.
            </p>
            <p className="text-lg font-medium">
              Your journey to a healthier lifestyle starts here!
            </p>
          </div>
        </div>

        {/* Scrolling Articles Section */}
      
        <div className="relative mt-16 overflow-hidden">
  {/* Scrolling Container */}
  <div
    ref={scrollContainerRef} // Reference to the container for programmatic control
    className="flex space-x-6 animate-marquee"
    style={{
      animation: "marquee 20s linear infinite",
      animationPlayState: "running", // Default animation state
    }}
    onMouseEnter={() => {
      scrollContainerRef.current.style.animationPlayState = "paused"; // Pause animation
    }}
    onMouseLeave={() => {
      scrollContainerRef.current.style.animationPlayState = "running"; // Resume animation
    }}
  >
    {[...articles, ...articles].slice(0, 12).map((article, index) => (
      <div
        key={index}
        className="bg-white shadow-md rounded-lg p-6"
        style={{
          backgroundColor: "#f9fafb",
          border: "1px solid #e5e7eb",
          minWidth: "350px", // Card size
          maxWidth: "400px",
          height: "auto",
        }}
      >
        {/* Card Image */}
        <div
          style={{
            width: "100%",
            height: "200px", // Image size
            backgroundImage: `url(${article.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
            marginBottom: "15px",
          }}
        />
        {/* Card Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          {article.title}
        </h3>
        {/* Card Description */}
        <p className="text-sm text-gray-600 mb-4">{article.description}</p>
        {/* Read More Link */}
        <a
          href={article.link}
          className="text-blue-600 hover:text-blue-800"
          style={{
            fontWeight: "500",
          }}
        >
          Read more
        </a>
      </div>
    ))}
  </div>

  {/* Inline Keyframes for Scrolling Animation */}
  <style>
    {`
      @keyframes marquee {
        from {
          transform: translateX(0); /* Start position */
        }
        to {
          transform: translateX(-100%); /* Move all cards out of view */
        }
      }

      .animate-marquee {
        display: flex;
        will-change: transform; /* Optimize for smoother animations */
      }
    `}
  </style>
</div>
      





      </div>
    </div>
  );
}

export default BlogBanner;
