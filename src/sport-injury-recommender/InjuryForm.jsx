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
      <div className="w-full max-w-5xl px-6 py-12">
        {/* Heading Section */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Select Your Injury Type
        </h2>
        <p className="text-lg text-center text-gray-600 mb-8">
          Click on an image to select your injury.
        </p>

        {/* Injury Options with Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Injury Option - Example for all */}
          {[
            { key: "kneeSprain", label: "Knee Sprain", image: "./Images/Knee.jpg" },
            { key: "ankleSprain", label: "Ankle Sprain", image: "./Images/ankle.jpg" },
            { key: "shoulderDislocation", label: "Shoulder Dislocation", image: "./Images/shoulder.jpg" },
            { key: "backStrain", label: "Back Strain", image: "./Images/backpain.jpg" },
            { key: "musclePull", label: "Muscle Pull", image: "./Images/Muscle Pull.jpg" },
          ].map((injury) => (
            <div
              key={injury.key}
              className={`relative cursor-pointer transform transition duration-300 ease-in-out ${
                formData.injuryType === injury.key
                  ? "scale-105"
                  : "hover:scale-105"
              }`}
              onClick={() => handleInjuryChange(injury.key)}
            >
              <img
                src={injury.image}
                alt={injury.label}
                className="w-full h-48 object-cover rounded-md"
              />
              <div
                className={`absolute inset-0 flex justify-center items-center text-white text-lg font-semibold rounded-md ${
                  formData.injuryType === injury.key
                    ? "bg-black bg-opacity-50"
                    : ""
                }`}
              >
                {injury.label}
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={nextStep}
            className="px-10 py-4 bg-black text-white font-bold text-lg rounded hover:bg-gray-900 transition duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default InjuryForm;
