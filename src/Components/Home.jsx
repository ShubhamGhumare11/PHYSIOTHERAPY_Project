import React from "react";
import Carousel from "./Corousel";
import AppointmentForm from "./AppointmentForm";
import OurServices from "./OurServices";
import Testimonial from "./Testimonial";
import ServicesCard from '../Test Components/ServicesCard';
import OurMission from '../Test Components/OurMission';

const Home = () => {
  return (
    <div>

      <Carousel />
      <AppointmentForm />

      <OurServices />
      <Testimonial />
      <ServicesCard />
      <OurMission/>
  
    </div>
  );
};

export default Home;
