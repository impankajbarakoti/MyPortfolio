import React from "react";
import { MapPin, Calendar, Briefcase, FolderOpen } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Calendar, label: "Experience", value: "1+ Years" },
    { icon: FolderOpen, label: "Projects", value: "10+ Completed" },
    { icon: MapPin, label: "Location", value: "Hisar, Haryana" },
    { icon: Briefcase, label: "Availability", value: "Open to Work" },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* About Content */}
          <div className="text-base sm:text-lg text-gray-600 dark:text-gray-300 space-y-6 leading-relaxed">
            <p>
              I'm a passionate Full Stack MERN Developer with 1 year of
              professional experience at Kodu in Hisar. I specialize in building
              scalable web applications using modern technologies and best
              practices.
            </p>
            <p>
              My expertise lies in the MERN stack (MongoDB, Express.js,
              React.js, Node.js), and I'm constantly learning new technologies
              to stay current with industry trends. I enjoy solving complex
              problems and creating user-friendly applications that make a
              difference.
            </p>
            <p>
              Beyond web development, I also have knowledge in programming
              languages like C, C++, and Java, which gives me a strong
              foundation in computer science fundamentals.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 p-6 sm:p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105  group-hover:shadow-[0_0_25px_8px_rgba(56,189,248,0.7)] dark:hover:shadow-[0_0_25px_8px_rgba(56,189,248,0.9)]"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl mb-4 mx-auto">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
