import React from "react";
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


      <Carousel />
      <HowWorks />
      <AppointmentForm />

      <OurServices />
      <Testimonial />
      <ServicesCard />
      {/* <OurMission /> */}




    
    </div>
  );
};

export default Home;
