import React, { useState } from "react";

const AgeGroupForm = ({ formData, setFormData, nextStep }) => {
  const [error, setError] = useState("");

  const handleChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      ageGroup: value,
    }));
    setError(""); // Clear the error when the user selects an option
  };

  const handleNext = () => {
    if (!formData.ageGroup) {
      setError("Please select your age group before proceeding.");
      return;
    }
    nextStep(); // Proceed to the next step if age group is selected
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 px-4">
      <div className="w-full max-w-3xl px-4">
        {/* Heading Section */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Which age group do you belong to?
        </h2>
        <p className="text-lg text-center text-gray-600 mb-6">
          Please select your age group
        </p>

        {/* Button-like Radio Options (Responsive Grid Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {/* Below 18 Option */}
          <label
            className={`flex items-center justify-center gap-3 cursor-pointer px-6 py-4 text-lg font-semibold rounded-full border-2 transition duration-300 ${
              formData.ageGroup === "below18"
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-400 hover:border-black"
            }`}
          >
            <input
              type="radio"
              name="ageGroup"
              value="below18"
              checked={formData.ageGroup === "below18"}
              onChange={() => handleChange("below18")}
              className="hidden"
            />
            Below 18
          </label>

          {/* 18 to 24 Option */}
          <label
            className={`flex items-center justify-center gap-3 cursor-pointer px-6 py-4 text-lg font-semibold rounded-full border-2 transition duration-300 ${
              formData.ageGroup === "18to24"
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-400 hover:border-black"
            }`}
          >
            <input
              type="radio"
              name="ageGroup"
              value="18to24"
              checked={formData.ageGroup === "18to24"}
              onChange={() => handleChange("18to24")}
              className="hidden"
            />
            18 to 24
          </label>

          {/* 25 to 30 Option */}
          <label
            className={`flex items-center justify-center gap-3 cursor-pointer px-6 py-4 text-lg font-semibold rounded-full border-2 transition duration-300 ${
              formData.ageGroup === "25to30"
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-400 hover:border-black"
            }`}
          >
            <input
              type="radio"
              name="ageGroup"
              value="25to30"
              checked={formData.ageGroup === "25to30"}
              onChange={() => handleChange("25to30")}
              className="hidden"
            />
            25 to 30
          </label>

          {/* 31 to 35 Option */}
          <label
            className={`flex items-center justify-center gap-3 cursor-pointer px-6 py-4 text-lg font-semibold rounded-full border-2 transition duration-300 ${
              formData.ageGroup === "31to35"
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-400 hover:border-black"
            }`}
          >
            <input
              type="radio"
              name="ageGroup"
              value="31to35"
              checked={formData.ageGroup === "31to35"}
              onChange={() => handleChange("31to35")}
              className="hidden"
            />
            31 to 35
          </label>

          {/* 36 to 40 Option */}
          <label
            className={`flex items-center justify-center gap-3 cursor-pointer px-6 py-4 text-lg font-semibold rounded-full border-2 transition duration-300 ${
              formData.ageGroup === "36to40"
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-400 hover:border-black"
            }`}
          >
            <input
              type="radio"
              name="ageGroup"
              value="36to40"
              checked={formData.ageGroup === "36to40"}
              onChange={() => handleChange("36to40")}
              className="hidden"
            />
            36 to 40
          </label>

          {/* 40 Above Option */}
          <label
            className={`flex items-center justify-center gap-3 cursor-pointer px-6 py-4 text-lg font-semibold rounded-full border-2 transition duration-300 ${
              formData.ageGroup === "40above"
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-400 hover:border-black"
            }`}
          >
            <input
              type="radio"
              name="ageGroup"
              value="40above"
              checked={formData.ageGroup === "40above"}
              onChange={() => handleChange("40above")}
              className="hidden"
            />
            40 Above
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

export default AgeGroupForm;
