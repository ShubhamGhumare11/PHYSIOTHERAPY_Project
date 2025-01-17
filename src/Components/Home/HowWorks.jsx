import React from 'react';
import { motion } from "framer-motion"; // Import framer-motion for animations

// StepCard component with animation applied
const StepCard = ({ icon, title, description, number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Initially invisible and 50px lower
      whileInView={{ opacity: 1, y: 0 }} // Fade in and slide to original position
        //   transition={{ duration: 0.6 }} // Apply transition on each card

        //    initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8 , delay: 1 }} 
      
      className="flex flex-col items-center justify-center text-center relative"
    >
      <div className="w-32 h-32 border-4 border-orange-500 rounded-full flex items-center justify-center">
        <img src={icon} alt={title} className="w-12 h-12" />
      </div>
      <div className="absolute top-0 left-0 text-7xl text-orange-500 font-bold opacity-30">{number}</div>
      <h3 className="mt-4 text-lg font-semibold text-orange-500">{title}</h3>
      <p className="text-sm text-gray-700 mt-2">{description}</p>
    </motion.div>
  );
};

// HowWorks component to display steps with staggered animation
const HowWorks = () => {
  const steps = [
    {
      icon: "https://img.icons8.com/ios-filled/50/hand.png",
      title: "Book A Session",
      description: "Book a session with a click",
      number: "1"
    },
    {
      icon: "https://img.icons8.com/ios-filled/50/phone.png",
      title: "Assessment On Call",
      description: "Get assessed by experts on call",
      number: "2"
    },
    {
      icon: "https://img.icons8.com/ios-filled/50/walking.png",
      title: "Physiotherapist Visit",
      description: "Get a professional visit at home",
      number: "3"
    },
    {
      icon: "https://img.icons8.com/ios-filled/50/massage.png",
      title: "Home Treatment",
      description: "Receive treatment at home",
      number: "4"
    }
  ];

  return (

    <div className="lg:max-h-full">
    <motion.div
      className="flex flex-col items-center justify-center bg-white p-8"
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.9 } // Stagger the animation of children (StepCard)
        }
      }}
    >
      <h1 className="text-4xl font-bold text-orange-500 mb-3">Physiotherapy At Home</h1>
      <h2 className="text-3xl font-bold text-teal-600 mb-12 text-center">How Does It Work?</h2>

      {/* Wrapping StepCards with a motion.div container */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1 }
        }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }} // Start with opacity 0
            whileInView={{ opacity: 1 }} // When in view, opacity goes to 1
            transition={{ duration: 0.5, delay: index * 0.9 }} // Delay stagger effect by index
          >
            <StepCard {...step} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
    </div>
  );
};

export default HowWorks;
