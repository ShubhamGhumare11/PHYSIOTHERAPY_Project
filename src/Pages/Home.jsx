import React from "react";
import { motion } from "framer-motion";
import HowWorks from "../Components/Home/HowWorks";
import Carousel from "../Components/Home/Corousel";
import AppointmentForm from "../Components/Home/AppointmentForm";
import OurServices from "../Components/Home/OurServices";
import Testimonial from "../Components/Home/Testimonial";
import ServicesCard from "../Test Components/ServicesCard";
import OurMission from "../Test Components/OurMission";

const Home = () => {
  return (
    <div>
      {/* Carousel */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }} // Fade and slide effect when visible
        initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and y-offset
        transition={{ duration: 1 }}
      >
        <Carousel />
      </motion.div>

      {/* HowWorks */}
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.2 }} // Added delay for staggered effect
      >
        <HowWorks />
      </motion.div>

      {/* AppointmentForm */}
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.4 }} // Added delay for staggered effect
      >
        <AppointmentForm />
      </motion.div>

      {/* OurServices */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }} // Slide in from left on scroll
        initial={{ opacity: 0, x: -200 }} // Starts off from left
        transition={{ duration: 1, delay: 0.6 }} // Added delay for staggered effect
      >
        <OurServices />
      </motion.div>

      {/* Testimonial */}
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.8 }} // Added delay for staggered effect
      >
        <Testimonial />
      </motion.div>

      {/* ServicesCard */}
      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, delay: 1 }} // Added delay for staggered effect
      >
        <ServicesCard />
      </motion.div>

      {/* OurMission */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }} // Slide up on scroll
        initial={{ opacity: 0, y: 50 }} // Starts lower
        transition={{ duration: 1, delay: 1.2 }} // Added delay for staggered effect
      >
        <OurMission />
      </motion.div>
    </div>
  );
};

export default Home;
