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
import textureImage from './Image/texture.jpg';
import starLogo from "./Image/svg-2.svg"; // Correct path


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
      <div className="blog-section py-16 bg-blue-50">

      <motion.h2
  className="text-4xl font-bold text-center mb-10 text-gray-800"
  initial={{ opacity: 0, y: 50 }} // Start invisible & below
  animate={{ opacity: 1, y: 0 }} // Fade in & move up
  transition={{ duration: 1, ease: "easeOut" }} // Smooth effect
  whileHover={{ scale: 1.1, color: "#3b82f6" }} // Slight hover effect
>
  Latest Articles
</motion.h2>

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
      className="flex flex-col md:flex-row items-center justify-between mt-16 py-16 relative"
      style={{
        backgroundImage: `url(${textureImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

  {/* Left side (Image) */}
  <motion.div
  className="w-full md:w-1/2 h-100 rounded-lg overflow-hidden"
  initial={{ opacity: 0, scale: 0.8 }} // Fade-in effect
  animate={{ opacity: 1, scale: 1 }} // Smooth entrance
  whileHover={{
    scale: 1.1,
    rotate: 5, // Slight rotation on hover
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Adds depth effect
  }}
  whileTap={{ scale: 0.95 }} // Shrink effect on click
  transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transitions
>
  <img
    src={p8Image}
    alt="Collage Image with Text"
    className="w-full h-full object-cover"
    style={{ transition: "transform 0.5s" }}
  />
</motion.div>

  

  {/* Right side (Text) */}
  <div className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center text-center">

        {/* Logo on Top */}
        <motion.img
          src={starLogo}
          alt="Wellness Logo"
          className="w-24 h-24 mb-4" // Increased size & added margin-bottom
          animate={{ opacity: [1, 0.2, 1] }} // Blinking effect
          transition={{ duration: 1.5, repeat: Infinity, ease: "ease-in-out" }} // Smooth transition
        />

        {/* Heading Below the Logo */}
        <h2 className="text-3xl font-bold mb-4">Dive Deeper into Wellness</h2>

        {/* Text Content */}
        <p className="mb-4">
          Explore a diverse range of articles designed to enhance your physical and mental well-being.
          From practical fitness tips and nutritious recipes to mindfulness practices and stress management strategies, 
          you'll find valuable insights and actionable advice to support a healthier, happier lifestyle.
        </p>
        <p className="text-lg font-medium">
          Your journey to a healthier lifestyle starts here!
        </p>
      </div>
</div>


{/* Scrolling Articles Section */}
<div className="relative mt-16 overflow-hidden py-10">

  
  {/* Scrolling Container */}
  <div
    ref={scrollContainerRef}
    className="flex space-x-6 animate-marquee"
    style={{
      animation: "marquee 15s linear infinite",
      animationPlayState: "running",
    }}
  >
    {[...articles, ...articles].slice(0, 12).map((article, index) => (
      <motion.div
        key={index}
        className="bg-white shadow-md rounded-lg p-6 min-w-[350px] max-w-[400px] transition-transform"
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 10px 40px rgba(0, 123, 255, 0.3)", // Glow effect on hover
        }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => {
          scrollContainerRef.current.style.animationPlayState = "paused"; // Pause scrolling
        }}
        onMouseLeave={() => {
          scrollContainerRef.current.style.animationPlayState = "running"; // Resume scrolling
        }}
      >
        {/* Card Image */}
        <div
          className="w-full h-52 rounded-lg"
          style={{
            backgroundImage: `url(${article.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.1)",
          }}
        />

        {/* Card Title */}
        <h3 className="">
          {article.title}
        </h3>

        {/* Card Description */}
        <p className="">{article.description}</p>

        {/* Read More Link */}
        <motion.a
  href={article.link}
  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300"
  whileHover={{
    textShadow: "0px 0px 5px rgba(0, 123, 255, 0.6)", // Neon Effect
  }}
>
  Read more
</motion.a>

      </motion.div>
    ))}
  </div>

  {/* Keyframes for Scrolling Animation */}
  <style>
    {`
      @keyframes marquee {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-100%);
        }
      }

      .animate-marquee {
        display: flex;
        animation: marquee 15s linear infinite;
        will-change: transform;
      }
    `}
           </style>
         </div>
      </div>
    </div>
  
  );
}

export default BlogBanner;
