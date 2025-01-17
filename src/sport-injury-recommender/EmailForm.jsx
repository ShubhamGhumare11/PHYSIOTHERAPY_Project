import React, { useState } from "react";

const EmailForm = ({ formData, setFormData, nextStep }) => {
  const [error, setError] = useState("");

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setError(""); // Clear error when user starts typing
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = () => {
    if (!formData.email || formData.email.trim() === "") {
      setError("Email is required.");
    } else if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
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
          Great! Now, let’s move on to your email
        </h2>
        <p className="text-xl text-center text-gray-600 mb-10">
          Please enter your email address
        </p>

        {/* Input Section */}
        <div className="mb-8">
          <input
            type="email"
            placeholder="Enter your email"
            className={`w-full p-4 border ${
              error ? "border-red-500" : "border-gray-300"
            } rounded-full text-xl focus:outline-none focus:ring-2 ${
              error ? "focus:ring-red-500" : "focus:ring-gray-400"
            }`}
            value={formData.email || ""}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        {/* Button Section */}
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="px-10 py-4 bg-black text-white font-bold text-lg rounded-none hover:bg-gray-900 transition duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
