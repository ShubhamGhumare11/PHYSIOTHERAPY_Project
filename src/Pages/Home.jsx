import React from "react";
import Carousel from "../Components/Home/Corousel";
import AppointmentForm from "../Components/Home/AppointmentForm";
import OurServices from "../Components/Home/OurServices";
import Testimonial from "../Components/Home/Testimonial";

const Home = () => {
  return (
    <div>

      <Carousel />
      <AppointmentForm />

      <OurServices />
      <Testimonial />

    
    </div>
  );
};

export default Home;
