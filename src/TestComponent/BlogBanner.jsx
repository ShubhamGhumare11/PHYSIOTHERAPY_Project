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

import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import backgroundImage from "./Image/p1.jpg"; // Correct image path
import logoImage from "./Image/P2.avif"; // Correct image path
import p3Image from "./Image/p3.webp";
import p4Image from "./Image/p4.webp";
import p5Image from "./Image/p5.jpg";
import p6Image from "./Image/p6.jpg";
import p7Image from "./Image/p7.jpg";
import p8Image from "./Image/p8.png";


function BlogBanner() {
  // Array of articles for the blog section (6 articles now)
  const articles = [
    {
      title: "Injury Prevention Tips for Athletes",
      description:
        "Explore essential tips and strategies to prevent injuries while engaging in physical activities and sports.",
      link: "/blog/injury-prevention-tips",
      image: p3Image, // Image for the first article
    },
    {
      title: "Health Tips for a Stronger Immune System",
      description:
        "Learn how to boost your immune system with natural remedies, proper nutrition, and exercise.",
      link: "/blog/health-tips-immune-system",
      image: p4Image, // Image for the second article
    },
    {
      title: "Effective Rehabilitation Techniques",
      description:
        "Discover the most effective rehabilitation techniques that promote faster recovery and restore strength.",
      link: "/blog/rehabilitation-techniques",
      image: p5Image, // Image for the third article
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

  return (
    <div>
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
        }}
        initial={{ opacity: 0 }} // Start from 0 opacity
        animate={{ opacity: 1 }} // Fade in to full opacity
        transition={{ duration: 1 }} // Duration of 1 second for fade-in effect
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "20px",
            padding: "20px",
            maxWidth: "1000px",
            width: "100%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Left side (Text) */}
          <motion.div
            style={{ flex: 1 }}
            initial={{ x: -100 }} // Start from left (offscreen)
            animate={{ x: 0 }} // Slide to its original position
            transition={{ duration: 1, type: "spring", stiffness: 50 }} // Smooth slide-in effect
          >
            <h1 style={{ fontSize: "3rem", marginBottom: "10px", color: "#dac292" }}>
            Explore Wellness Through 
            </h1>
            <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#dac292" }}>
            Our Blogs..
            </h2>
            <h3 style={{ fontSize: "2.5rem", marginTop: "20px", fontWeight: "bold", color: "#dac292" }}>
            Your Path to Recovery
            </h3>
          </motion.div>

          {/* Right side (Logo Image) */}
          <motion.div
            style={{ marginLeft: "20px", borderRadius: "50%", overflow: "hidden" }}
            initial={{ scale: 0 }} // Start from scale 0 (small)
            animate={{ scale: 1 }} // Zoom in to normal size
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }} // Zoom-in effect
          >
            <img
              src={logoImage}
              alt="Auspicious Numerology Logo"
              style={{
                width: "300px",
                height: "300px",
                objectFit: "cover",
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Blog Section */}
      <div className="blog-section py-16">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Latest Articles
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className="article-card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.3, duration: 1 }}
              style={{
                backgroundColor: "#f9fafb", // Light gray background for the cards
                border: "1px solid #e5e7eb", // Light border
                color: "#1f2937", // Dark text color for better contrast
              }}
            >
              {/* Conditionally render image only for the first three articles */}
              {article.image && (
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    backgroundImage: `url(${article.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "8px", // Rounded corners for image
                    marginBottom: "15px", // Spacing between image and text
                  }}
                />
              )}

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <a
                href={article.link}
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                style={{
                  fontWeight: "600", // Bold for the link text
                }}
              >
                Read more
              </a>
            </motion.div>
          ))}

          {/* Additional 6 cards with scroll-up and scroll-down effects */}
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              className="article-card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 100 }} // Start from below (invisible)
              whileInView={{ opacity: 1, y: 0 }} // Scroll into view
              viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the card is in view
              transition={{ delay: index * 0.3, duration: 1 }}
              style={{
                backgroundColor: "#f9fafb", // Light gray background for the cards
                border: "1px solid #e5e7eb", // Light border
                color: "#1f2937", // Dark text color for better contrast
              }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Sample Card Title {index + 1}
              </h3>
              <p className="text-gray-600 mb-4">
                This is a placeholder for card number {index + 1}. Scroll to see the animation.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                style={{
                  fontWeight: "600", // Bold for the link text
                }}
              >
                Read more
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogBanner;





