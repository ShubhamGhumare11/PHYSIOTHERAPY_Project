
import React, { useState } from "react";

function ServicesCard() {
  const [openPart, setOpenPart] = useState(null); // State to track the open body part

  const bodyParts = [
    { name: "Neck", description: "Treatment for neck pain and stiffness.", position: { top: "10%", left: "50%" } },
    { name: "Shoulder", description: "Relief for shoulder injuries and discomfort.", position: { top: "20%", left: "45%" } },
    { name: "Elbow", description: "Solutions for elbow joint pain.", position: { top: "30%", left: "55%" } },
    { name: "Lower Back", description: "Care for lower back issues.", position: { top: "40%", left: "50%" } },
    { name: "Hip", description: "Support for hip mobility and pain relief.", position: { top: "50%", left: "45%" } },
    { name: "Wrist", description: "Treatment for wrist injuries and conditions.", position: { top: "60%", left: "55%" } },
    { name: "Hand", description: "Care for hand pain and dexterity issues.", position: { top: "70%", left: "50%" } },
    { name: "Knee", description: "Treatment for knee pain and injuries.", position: { top: "80%", left: "48%" } },
    { name: "Ankle", description: "Relief for ankle sprains and discomfort.", position: { top: "90%", left: "52%" } },
  ];

  const togglePart = (partName) => {
    setOpenPart((prev) => (prev === partName ? null : partName)); // Toggle open state
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-900 text-white px-6 py-10">
   
      {/* Center Section */}
      <div className="md:w-1/2 text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white-50">
          WHAT WE TREAT
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          SAY<br />
          <span className="text-orange-500">GOODBYE</span><br />
          TO PAIN
        </h1>

        <p className="text-white-800">
          Granimals provides treatment for <br />
          all musculoskeletal issues from <br />
          head to toe.
        </p>
      </div>


      {/* Right Section */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/3 mx-auto space-y-4">
        {/* List Section */}
        <div className="w-full space-y-4">
          {bodyParts.map((part, index) => (
            <div key={index}>
              <div
                onClick={() => togglePart(part.name)}
                className="flex justify-between items-center bg-gray-800 px-4 py-2 rounded cursor-pointer hover:bg-gray-700"
              >
                <span>{part.name}</span>
                <span className="font-bold text-xl">{openPart === part.name ? "-" : "+"}</span>
              </div>
              {openPart === part.name && (
                <div className="bg-gray-700 p-4 mt-2 rounded text-sm">
                  {part.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
