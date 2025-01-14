import React from "react";
import Carousel from "./Corousel";
import AppointmentForm from "./AppointmentForm";
import OurServices from "./OurServices";
import Testimonial from "./Testimonial";
import ServicesCard from '../Test Components/ServicesCard';

const Home = () => {
  return (
    <div>

      <Carousel />
      <AppointmentForm />

      <OurServices />
      <Testimonial />
      <ServicesCard />
  


    
    </div>
  );
};

export default Home;
