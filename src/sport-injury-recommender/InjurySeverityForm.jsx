import React, { useState } from "react";

const InjurySeverityForm = ({ formData, setFormData, nextStep }) => {
  const [error, setError] = useState("");

  const handleChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      injurySeverity: value,
    }));
    setError(""); // Clear the error when the user selects an option
  };

  const handleNext = () => {
    if (!formData.injurySeverity) {
      setError("Please select the severity of your injury before proceeding.");
      return;
    }
    nextStep(); // Proceed to the next step if severity is selected
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 px-4">
      <div className="w-full max-w-3xl px-6 py-6">
        {/* Heading Section */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-gray-800 mb-6">
          How severe is the injury?
        </h2>
        <p className="text-base sm:text-lg text-center text-gray-600 mb-6">
          Please select the severity of your injury
        </p>

        {/* Button-like Radio Options */}
        <div className="space-y-4 sm:space-y-6 mb-8">
          {/* Mild Option */}
          <label
            className={`flex items-center gap-3 cursor-pointer px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full border-2 transition duration-300 ${
              formData.injurySeverity === "mild"
                ? "bg-black text-white border-black"
                : "bg-transparent text-black border-gray-400 hover:border-black"
            }`}
          >
            <input
              type="radio"
              name="injurySeverity"
              value="mild"
              checked={formData.injurySeverity === "mild"}
              onChange={() => handleChange("mild")}
              className="hidden"
            />
            Mild (able to move with little pain)
          </label>

          {/* Moderate Option */}
          <label
            className={`flex items-center gap-3 cursor-pointer px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full border-2 transition duration-300 ${
              formData.injurySeverity === "moderate"
                ? "bg-black text-white border-black"
                : "bg-transparent text-black border-gray-400 hover:border-black"
            }`}
          >
            <input
              type="radio"
              name="injurySeverity"
              value="moderate"
              checked={formData.injurySeverity === "moderate"}
              onChange={() => handleChange("moderate")}
              className="hidden"
            />
            Moderate (restricted movement with noticeable pain)
          </label>

          {/* Severe Option */}
          <label
            className={`flex items-center gap-3 cursor-pointer px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full border-2 transition duration-300 ${
              formData.injurySeverity === "severe"
                ? "bg-black text-white border-black"
                : "bg-transparent text-black border-gray-400 hover:border-black"
            }`}
          >
            <input
              type="radio"
              name="injurySeverity"
              value="severe"
              checked={formData.injurySeverity === "severe"}
              onChange={() => handleChange("severe")}
              className="hidden"
            />
            Severe (unable to move or bearing weight is painful)
          </label>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Next Button Section */}
        <div className="flex justify-center">
          <button
            onClick={handleNext}
            className="px-8 sm:px-10 py-3 sm:py-4 bg-black text-white font-bold text-base sm:text-lg rounded hover:bg-gray-900 transition duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default InjurySeverityForm;
