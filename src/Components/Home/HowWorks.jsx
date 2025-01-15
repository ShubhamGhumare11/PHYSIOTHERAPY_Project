import React from 'react';
 
const StepCard = ({ icon, title, description, number }) => {
    return (
<div className="flex flex-col items-center justify-center text-center relative">
<div className="w-32 h-32 border-4 border-orange-500 rounded-full flex items-center justify-center">
<img src={icon} alt={title} className="w-12 h-12" />
</div>
<div className="absolute top-0 left-0 text-7xl text-orange-500 font-bold opacity-30">{number}</div>
<h3 className="mt-4 text-lg font-semibold text-orange-500">{title}</h3>
<p className="text-sm text-gray-700 mt-2">{description}</p>
</div>
    );
};
 
const HowWorks = () => {
    const steps = [
        {
            icon: "https://img.icons8.com/ios-filled/50/hand.png",
            title: "Book A Session",
            description: "Book a session with a click",
            number: "1"
        },
        {
            icon: "https://img.icons8.com/ios-filled/50/phone.png",
            title: "Assessment On Call",
            description: "Get assessed by experts on call",
            number: "2"
        },
        {
            icon: "https://img.icons8.com/ios-filled/50/walking.png",
            title: "Physiotherapist Visit",
            description: "Get a professional visit at home",
            number: "3"
        },
        {
            icon: "https://img.icons8.com/ios-filled/50/massage.png",
            title: "Home Treatment",
            description: "Receive treatment at home",
            number: "4"
        }
    ];
 
    return (
<div className="flex flex-col items-center justify-center  bg-white p-8">
<h1 className="text-4xl font-bold text-orange-500 mb-3">Physiotherapy At Home</h1>
<h2 className="text-3xl font-bold text-teal-600 mb-12 text-center">How Does It Work?</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => (
<StepCard key={index} {...step} />
                ))}
</div>
</div>
    );
};
 
export default HowWorks;

