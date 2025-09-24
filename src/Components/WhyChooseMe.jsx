import React from "react";
import {
  FiUserCheck,
  FiCpu,
  FiClock,
  FiRefreshCw,
  FiMessageCircle,
  FiBookOpen,
} from "react-icons/fi";

const reasons = [
  {
    icon: <FiUserCheck size={32} />,
    title: "Experienced Developer",
    desc: "With years of experience building modern web applications, I bring practical and efficient solutions to every project.",
  },
  {
    icon: <FiCpu size={32} />,
    title: "Quality & Performance",
    desc: "I write clean, maintainable code optimized for performance and user experience.",
  },
  {
    icon: <FiClock size={32} />,
    title: "Fast Delivery",
    desc: "I ensure timely completion of projects without compromising on quality, respecting your deadlines.",
  },
  {
    icon: <FiRefreshCw size={32} />,
    title: "Reliable & Responsive",
    desc: "I value clear communication and timely delivery, ensuring your needs are always prioritized.",
  },
  {
    icon: <FiMessageCircle size={32} />,
    title: "Good Behavior & Communication",
    desc: "I prioritize clear, respectful communication and a positive attitude throughout our collaboration.",
  },
  {
    icon: <FiBookOpen size={32} />,
    title: "Continuous Learning",
    desc: "I stay up-to-date with the latest technologies to provide cutting-edge solutions.",
  },
];

const WhyChooseMe = () => {
  return (
    <section className="py-20 dark:bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-6xl">
        <h2 className="text-4xl font-bold mb-2">Why Choose Me?</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-teal-800 to-purple-600 bg-opacity-20 rounded-xl p-6 shadow-lg
                flex flex-col items-center text-center
                hover:shadow-2xl hover:scale-105 transition-transform duration-300  group-hover:shadow-[0_0_25px_8px_rgba(56,189,248,0.7)] dark:hover:shadow-[0_0_25px_8px_rgba(56,189,248,0.9)]"
            >
              {/* Icon container with 3D hover */}
              <div className="icon-3d-hover text-white mb-4 transition-colors duration-300 group-hover:text-yellow-400">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-white/90">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Add styles directly here or use your CSS/SCSS file */}
      <style>{`
        .icon-3d-hover {
          display: inline-block;
          perspective: 600px;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .icon-3d-hover svg {
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        .icon-3d-hover:hover svg {
          transform: rotateX(15deg) rotateY(15deg) scale(1.2);
          filter: drop-shadow(0 5px 10px rgba(255, 215, 0, 0.6));
        }
      `}</style>
    </section>
  );
};

export default WhyChooseMe;
