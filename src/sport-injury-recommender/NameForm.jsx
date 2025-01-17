import React, { useState } from "react";

const NameForm = ({ formData, setFormData, nextStep }) => {
  const [error, setError] = useState("");

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setError(""); // Clear error when user starts typing
  };

  const handleSubmit = () => {
    if (!formData.name || formData.name.trim() === "") {
      setError("Name is required.");
    } else if (formData.name.length < 3) {
      setError("Name must be at least 3 characters long.");
    } else {
      setError("");
      nextStep();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="w-full max-w-xl px-8">
        {/* Heading Section */}
        <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-8">
          Hi, let’s start with an introduction
        </h2>
        <p className="text-xl text-center text-gray-600 mb-10">
          Let us know your name
        </p>

        {/* Input Section */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            className={`w-full p-4 border ${
              error ? "border-red-500" : "border-gray-300"
            } rounded-full text-xl focus:outline-none focus:ring-2 ${
              error ? "focus:ring-red-500" : "focus:ring-gray-400"
            }`}
            value={formData.name || ""}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        {/* Button Section */}
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="px-10 py-4 bg-black text-white font-bold text-lg rounded-none hover:bg-gray-900 transition duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NameForm;
