import React, { useState } from "react";

const GenderForm = ({ formData, setFormData, nextStep }) => {
  const [error, setError] = useState("");

  const handleChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      gender: value,
    }));
    setError(""); // Clear the error when the user selects an option
  };

  const handleNext = () => {
    if (!formData.gender) {
      setError("Please select your gender before proceeding.");
      return;
    }
    nextStep(); // Proceed to the next step if gender is selected
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 px-4">
      <div className="w-full max-w-md px-6">
        {/* Heading Section */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Almost there! Let’s move on to your gender
        </h2>
        <p className="text-lg text-center text-gray-600 mb-6">
          Please select your gender
        </p>

        {/* Button-like Radio Options (Vertical Layout) */}
        <div className="flex flex-col gap-4 mb-6">
          {/* Male Option */}
          <label
            className={`flex items-center justify-between cursor-pointer px-6 py-4 text-lg font-semibold rounded-full border-2 transition duration-300 ${
              formData.gender === "male"
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-400 hover:border-black"
            }`}
          >
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={() => handleChange("male")}
              className="hidden"
            />
            Male
          </label>

          {/* Female Option */}
          <label
            className={`flex items-center justify-between cursor-pointer px-6 py-4 text-lg font-semibold rounded-full border-2 transition duration-300 ${
              formData.gender === "female"
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-400 hover:border-black"
            }`}
          >
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={() => handleChange("female")}
              className="hidden"
            />
            Female
          </label>

          {/* Prefer Not to Say Option */}
          <label
            className={`flex items-center justify-between cursor-pointer px-6 py-4 text-lg font-semibold rounded-full border-2 transition duration-300 ${
              formData.gender === "preferNotToSay"
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-400 hover:border-black"
            }`}
          >
            <input
              type="radio"
              name="gender"
              value="preferNotToSay"
              checked={formData.gender === "preferNotToSay"}
              onChange={() => handleChange("preferNotToSay")}
              className="hidden"
            />
            Prefer not to say
          </label>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Next Button Section */}
        <div className="flex justify-center">
          <button
            onClick={handleNext}
            className="px-10 py-4 bg-black text-white font-bold text-lg rounded hover:bg-gray-900 transition duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenderForm;
