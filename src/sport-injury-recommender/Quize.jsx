import React, { useState } from "react";
import NameForm from "./NameForm";
import EmailForm from "./EmailForm";
import GenderForm from "./GenderForm";
import AgeGroupForm from "./AgeGroupForm";
import InjuryForm from "./InjuryForm";
import ProgressBar from "./ProgressBar";
import InjurySeverityForm from "./InjurySeverityForm";
import ResultPage from "./ResultPage";

const Quiz = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    ageGroup: "",
    injuryType: "",
    injurySeverity: "",
  });

  const [step, setStep] = useState(1);
  const totalSteps = 7; // Include ResultPage as a step

  const nextStep = () => {
    if (step < totalSteps) setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep((prevStep) => prevStep - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <NameForm
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <EmailForm
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        );
      case 3:
        return (
          <GenderForm
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        );
      case 4:
        return (
          <AgeGroupForm
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        );
      case 5:
        return (
          <InjuryForm
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        );
      case 6:
        return (
          <InjurySeverityForm
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        );
      case 7: // Render ResultPage when step reaches 7
        return <ResultPage formData={formData} />;
      default:
        return <div>Error: Invalid step</div>; // Handle unexpected steps
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Progress Bar */}
      <ProgressBar currentStep={step} totalSteps={totalSteps} />

      {/* Render Form Steps */}
      {renderStep()}

      {/* Navigation Buttons */}
      {step > 1 && step < totalSteps && (
        <div className="fixed bottom-4 left-4">
          <button
            onClick={prevStep}
            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition"
          >
            Previous
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
