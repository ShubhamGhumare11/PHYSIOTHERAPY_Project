import React from "react";

const ResultPage = ({ formData }) => {
  const getRecommendation = () => {
    switch (formData.injurySeverity) {
      case "mild":
        return "Gentle stretching and light exercises to aid recovery and prevent stiffness. Perfect for mild injuries!";
      case "moderate":
        return "Targeted strengthening and low-impact activities to support your recovery journey.";
      case "severe":
        return "Focus on rest and rehabilitation. Consult a physiotherapist for professional advice.";
      default:
        return "Please select your injury severity to receive personalized recommendations.";
    }
  };

  const getVideos = () => {
    switch (formData.injurySeverity) {
      case "mild":
        return [
          {
            title: "Daily Stretching Routine for Mild Recovery",
            url: "https://www.youtube.com/embed/6qONWZ-Vv7M", // Replace with actual video link
          },
          {
            title: "Gentle Exercises to Relieve Muscle Strain",
            url: "https://www.youtube.com/embed/V1EYmN85S-A", // Replace with actual video link
          },
          {
            title: "5-Minute Light Stretches to Start Your Day",
            url: "https://www.youtube.com/embed/3PZgCZRVT5g", // Replace with actual video link
          },
        ];
      case "moderate":
        return [
          {
            title: "Strengthening Exercises for Moderate Injuries",
            url: "https://www.youtube.com/embed/dz5j2M3jhhw", // Replace with actual video link
          },
          {
            title: "Low-Impact Movements for Recovery",
            url: "https://www.youtube.com/embed/4zXRhCl8NVQ", // Replace with actual video link
          },
          {
            title: "Guided Physiotherapy for Moderate Recovery",
            url: "https://www.youtube.com/embed/hZlg2TFv63o", // Replace with actual video link
          },
        ];
      case "severe":
        return [
          {
            title: "Rehabilitation Tips for Severe Injuries",
            url: "https://www.youtube.com/embed/sVwPPC3OJwo", // Replace with actual video link
          },
          {
            title: "Restorative Practices for Long-Term Recovery",
            url: "https://www.youtube.com/embed/2cV60R8x-BE", // Replace with actual video link
          },
          {
            title: "How to Safely Rest and Heal",
            url: "https://www.youtube.com/embed/z9b61cJtm7Q", // Replace with actual video link
          },
        ];
      default:
        return [];
    }
  };

  const videos = getVideos();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="w-full max-w-3xl px-8 py-6">
        {/* Results Section */}
       
        {/* Display Recommendations */}
        <div className="text-lg font-semibold text-gray-700 text-center mb-8">
          {getRecommendation()}
        </div>

        {/* Video Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Strongly Recommended Videos for Your Recovery
          </h3>
          <p className="text-center text-gray-600 mb-6">
            Watch these specially selected videos to accelerate your recovery process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video, index) => (
              <div key={index} className="flex flex-col items-center">
                <iframe
                  width="280"
                  height="157"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className="mt-2 text-sm font-medium text-gray-700 text-center">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Button to Go Back */}
        <div className="flex justify-center">
          <button
            onClick={() => window.location.reload()} // Optional: to reset the form or navigate back
            className="px-10 py-4 bg-black text-white font-bold text-lg rounded-none hover:bg-gray-900 transition duration-300"
          >
            Start Over
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
