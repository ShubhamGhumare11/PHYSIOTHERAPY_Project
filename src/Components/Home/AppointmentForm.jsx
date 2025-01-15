import React, { useState } from "react";
import herosection from "../../Images/AppointmentForm.jpg";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import Chatbot from "../Other/Chatbot";
// import { appointmentFormat, sendEmailWithAttachment } from "../Email-service/emailSendingService";

const AppointmentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city,setCity ] = useState("");

  const [painArea, setPainArea] = useState("");

  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Preferred Date:", preferredDate);
    console.log("Preferred Time:", preferredTime);
    console.log("Notes:", notes);

    const htmlEmailFormat = appointmentFormat({
      name,
      email,
      city,
      painArea,
      phone,
      preferredDate,
      preferredTime,
      notes,
    });
    await sendEmailWithAttachment(htmlEmailFormat);

    setName("");
    setEmail("");
    setPhone("");
    setPreferredDate("");
    setPreferredTime("");
    setNotes("");
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
    

      <div className="flex flex-col md:flex-row items-start mt-4 md:mt-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 space-y-6 md:space-y-0 overflow-x-hidden  bg-gray-100 shadow-md ">
        <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 font-serif">
       
          <img
          src={herosection}
          className=" inset-0 object-cover"
          alt="Background"
          loading="lazy"
        />
         
         
        </div>

        <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl ">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono font-extrabold ">
            Schedule Your   <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4  text-customOrange">
             Appointment
          </h2>
          </h2>
        
          <p className="text-customOrange mt-3 italic  border-l-4sm:text-base md:text-lg lg:text-xl tracking-wide mb-4">
          {/* <p className="text-customOrange mt-3 italic border-l-4 border-customLightOrange pl-3 text-sm"> */}

            Fill out the form below to book your appointment. We will get back to you shortly.
          </p>

          <hr className="border-t-4 border-gray-300" />

          <form onSubmit={handleSubmit} className="space-y-4 font-serif">
          
          <label
              htmlFor="name"
              className="block text-sm sm:text-base font-semibold text-blue-800"
            >
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full rounded-2xl py-2 px-4 text-gray-800 border border-gray-300 focus:border-yellow-500 focus:bg-transparent text-sm sm:text-base"
              required
            />


            
          <div className="flex space-x-10">
  <div className="flex-1">
  <label
              htmlFor="phone"
              className="block text-sm sm:text-base font-semibold text-blue-800"
            >
              WhatsApp Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              className="w-full rounded-2xl py-2 px-4 text-gray-800 border border-gray-300 focus:border-yellow-500 focus:bg-transparent text-sm sm:text-base"
              required
            />
  </div>
  <div className="flex-1">
            <label
              htmlFor="email"
              className="block text-sm sm:text-base font-semibold text-blue-800"
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full rounded-2xl py-2 px-4 text-gray-800 border border-gray-300 focus:border-yellow-500 focus:bg-transparent text-sm sm:text-base"
              required
            />
  </div>
  </div>
            
  <div className="flex space-x-4">
  <div className="flex-1">
    <label
      htmlFor="city"
      className="block text-sm sm:text-base font-semibold text-blue-800"
    >
      City
    </label>
    <input
      type="text"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      placeholder="Enter your city"
      className="w-full rounded-2xl py-2 px-4 text-gray-800 border border-gray-300 focus:border-yellow-500 focus:bg-transparent text-sm sm:text-base"
      required
    />
  </div>

  {/* Pain Area Dropdown */}
  <div className="flex-1">
    <label
      htmlFor="painArea"
      className="block text-sm sm:text-base font-semibold text-blue-800"
    >
      Pain Area
    </label>
    <select
      value={painArea}
      onChange={(e) => setPainArea(e.target.value)}
      className="w-full rounded-2xl py-2 px-4 text-gray-800 border border-gray-300 focus:border-yellow-500 focus:bg-transparent text-sm sm:text-base"
      required
    >
      <option value="" disabled>
        Select Pain Area
      </option>
      <option value="lower-back">Lower Back Pain</option>
      <option value="upper-back">Upper Back Pain</option>
      <option value="neck">Neck Pain</option>
      <option value="shoulder">Shoulder Pain</option>
      <option value="knee">Knee Pain</option>
    </select>
  </div>
</div>



<div className="flex space-x-4">
<div className="flex-1">
            <label
              htmlFor="preferredDate"
              className="block text-sm sm:text-base font-semibold text-blue-800"
            >
              Preferred Date
            </label>
            <input
              type="date"
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className="w-full rounded-2xl py-2 px-4 text-gray-800 border border-gray-300 focus:border-yellow-500 focus:bg-transparent text-sm sm:text-base"
              required
            />
</div>
<div className="flex-1">

            <label
              htmlFor="preferredTime"
              className="block text-sm sm:text-base font-semibold text-blue-800"
            >
              Preferred Time
            </label>
            <input
              type="time"
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
              className="w-full rounded-2xl py-2 px-4 text-gray-800 border border-gray-300 focus:border-yellow-500 focus:bg-transparent text-sm sm:text-base"
              required
            />
</div></div>

<div className="relative inline-block">
  <button
    type="submit"
    className="bg-customOrange text-white font-sans py-4 px-8 rounded-3xl hover:bg-yellow-600 transition duration-300"
  >
    Book Appointment
  </button>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-5 right-2 h- w-5 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 12h14m-7-7l7 7-7 7"
    />
  </svg>
</div>

            
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
