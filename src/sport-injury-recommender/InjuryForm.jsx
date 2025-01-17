import React from "react";

const InjuryForm = ({ formData, setFormData, nextStep }) => {
  const handleInjuryChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      injuryType: value,
    }));
  };

  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="w-full max-w-5xl px-8 py-12">
        {/* Heading Section */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Select Your Injury Type
        </h2>
        <p className="text-lg text-center text-gray-600 mb-8">
          Click on an image to select your injury.
        </p>

        {/* Injury Options with Images */}
        <div className="flex justify-center gap-6 mb-8">
          {/* Knee Sprain */}
          <div
            className={`relative w-40 h-40 cursor-pointer transform transition duration-300 ease-in-out ${
              formData.injuryType === "kneeSprain"
                ? "scale-105"
                : "hover:scale-105"
            }`}
            onClick={() => handleInjuryChange("kneeSprain")}
          >
            <img
              src="./Images/Knee.jpg" // Updated to use local images in the public folder
              alt="Knee Sprain"
              className="w-full h-full object-cover rounded-md"
            />
            <div
              className={`absolute inset-0 flex justify-center items-center text-white text-lg font-semibold ${
                formData.injuryType === "kneeSprain" ? "bg-black bg-opacity-50" : ""
              }`}
            >
              Knee Sprain
            </div>
          </div>

          {/* Ankle Sprain */}
          <div
            className={`relative w-40 h-40 cursor-pointer transform transition duration-300 ease-in-out ${
              formData.injuryType === "ankleSprain"
                ? "scale-105"
                : "hover:scale-105"
            }`}
            onClick={() => handleInjuryChange("ankleSprain")}
          >
            <img
              src="./Images/ankle.jpg" // Updated to use local images in the public folder
              alt="Ankle Sprain"
              className="w-full h-full object-cover rounded-md"
            />
            <div
              className={`absolute inset-0 flex justify-center items-center text-white text-lg font-semibold ${
                formData.injuryType === "ankleSprain" ? "bg-black bg-opacity-50" : ""
              }`}
            >
              Ankle Sprain
            </div>
          </div>

          {/* Shoulder Dislocation */}
          <div
            className={`relative w-40 h-40 cursor-pointer transform transition duration-300 ease-in-out ${
              formData.injuryType === "shoulderDislocation"
                ? "scale-105"
                : "hover:scale-105"
            }`}
            onClick={() => handleInjuryChange("shoulderDislocation")}
          >
            <img
              src="./Images/shoulder.jpg" // Updated to use local images in the public folder
              alt="Shoulder Dislocation"
              className="w-full h-full object-cover rounded-md"
            />
            <div
              className={`absolute inset-0 flex justify-center items-center text-white text-lg font-semibold ${
                formData.injuryType === "shoulderDislocation" ? "bg-black bg-opacity-50" : ""
              }`}
            >
              Shoulder Dislocation
            </div>
          </div>

          {/* Back Strain */}
          <div
            className={`relative w-40 h-40 cursor-pointer transform transition duration-300 ease-in-out ${
              formData.injuryType === "backStrain"
                ? "scale-105"
                : "hover:scale-105"
            }`}
            onClick={() => handleInjuryChange("backStrain")}
          >
            <img
              src="./Images/backpain.jpg" // Updated to use local images in the public folder
              alt="Back Strain"
              className="w-full h-full object-cover rounded-md"
            />
            <div
              className={`absolute inset-0 flex justify-center items-center text-white text-lg font-semibold ${
                formData.injuryType === "backStrain" ? "bg-black bg-opacity-50" : ""
              }`}
            >
              Back Strain
            </div>
          </div>

          {/* Muscle Pull */}
          <div
            className={`relative w-40 h-40 cursor-pointer transform transition duration-300 ease-in-out ${
              formData.injuryType === "musclePull"
                ? "scale-105"
                : "hover:scale-105"
            }`}
            onClick={() => handleInjuryChange("musclePull")}
          >
            <img
              src="./Images/Muscle Pull.jpg" // Updated to use local images in the public folder
              alt="Muscle Pull"
              className="w-full h-full object-cover rounded-md"
            />
            <div
              className={`absolute inset-0 flex justify-center items-center text-white text-lg font-semibold ${
                formData.injuryType === "musclePull" ? "bg-black bg-opacity-50" : ""
              }`}
            >
              Muscle Pull
            </div>
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={nextStep}
            className="px-10 py-4 bg-black text-white font-bold text-lg rounded-none hover:bg-gray-900 transition duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default InjuryForm;
