import React from "react";
import Header from "./Header";
import Carousel from "./Corousel";
// import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      {/* Header Component */}


      {/* Main Carousel */}
      <Carousel />

      {/* Additional Sections (Add more components here) */}
      <section className="my-8">
        <h2 className="text-center text-2xl font-bold">Welcome to Our Physiotherapy Clinic</h2>
        <p className="text-center mt-4">
          We provide top-notch physiotherapy services to help you regain mobility and live pain-free.
        </p>
      </section>

      {/* Footer Component */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
