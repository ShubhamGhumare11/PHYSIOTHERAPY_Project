import React from "react";
import jsPDF from "jspdf";

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
          { title: "Daily Stretching Routine for Mild Recovery", url: "https://www.youtube.com/watch?v=6qONWZ-Vv7M" },
          { title: "Gentle Exercises to Relieve Muscle Strain", url: "https://www.youtube.com/watch?v=V1EYmN85S-A" },
          { title: "5-Minute Light Stretches to Start Your Day", url: "https://www.youtube.com/watch?v=3PZgCZRVT5g" },
        ];
      case "moderate":
        return [
          { title: "Strengthening Exercises for Moderate Injuries", url: "https://www.youtube.com/watch?v=dz5j2M3jhhw" },
          { title: "Low-Impact Movements for Recovery", url: "https://www.youtube.com/watch?v=4zXRhCl8NVQ" },
          { title: "Guided Physiotherapy for Moderate Recovery", url: "https://www.youtube.com/watch?v=hZlg2TFv63o" },
        ];
      case "severe":
        return [
          { title: "Rehabilitation Tips for Severe Injuries", url: "https://www.youtube.com/watch?v=sVwPPC3OJwo" },
          { title: "Restorative Practices for Long-Term Recovery", url: "https://www.youtube.com/watch?v=2cV60R8x-BE" },
          { title: "How to Safely Rest and Heal", url: "https://www.youtube.com/watch?v=z9b61cJtm7Q" },
        ];
      default:
        return [];
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const videos = getVideos();

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Injury Severity Report", 20, 20);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Severity: ${formData.injurySeverity}`, 20, 40);
    doc.text("Recommendations:", 20, 60);
    doc.text(getRecommendation(), 20, 70, { maxWidth: 170 });

    doc.text("Recommended Videos:", 20, 90);
    videos.forEach((video, index) => {
      doc.text(`${index + 1}. ${video.title}`, 20, 100 + index * 10, { maxWidth: 170 });
      doc.textWithLink("Watch Here", 150, 100 + index * 10, { url: video.url });
    });

    doc.save("Injury_Severity_Report.pdf");
  };

  const videos = getVideos();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 px-4">
      <div className="w-full max-w-3xl px-6 py-6">
        {/* Display Recommendations */}
        <div className="text-lg font-semibold text-gray-700 text-center mb-8">
          {getRecommendation()}
        </div>

        {/* Video Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Recommended Videos for Your Recovery
          </h3>
          <p className="text-center text-gray-600 mb-6">
            Watch or click the links below to download these videos for your recovery process.
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
                <p className="mt-2 text-sm font-medium text-gray-700 text-center">{video.title}</p>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-blue-500 underline text-sm"
                >
                  Watch or Download
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* PDF Generation */}
        <div className="mb-8 flex justify-center">
          <button
            onClick={generatePDF}
            className="px-8 py-3 bg-red-600 text-white font-bold text-lg rounded hover:bg-gray-900 transition duration-300"
          >
            Generate PDF
          </button>
        </div>

        {/* Button to Start Over */}
        <div className="flex justify-center">
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-black text-white font-bold text-lg rounded hover:bg-gray-900 transition duration-300"
          >
            Start Over
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
