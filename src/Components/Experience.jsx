import React from "react";
import { Calendar, MapPin, CheckCircle } from "lucide-react";

const Experience = () => {
  const achievements = [
    "Developed and maintained full-stack web applications using MERN stack",
    "Collaborated with cross-functional teams to deliver high-quality software solutions",
    "Implemented responsive designs and optimized application performance",
    "Participated in code reviews and followed best practices for clean, maintainable code",
  ];

  return (
    <section
      id="experience"
      className="py-16 sm:py-20 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional journey and achievements in web development
          </p>
        </div>

        {/* Timeline & Experience */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line (timeline) */}
          <div className="absolute hidden sm:block left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-teal-600"></div>

          {/* Experience Card */}
          <div className="relative pl-4 sm:pl-20 pb-12">
            {/* Timeline dot */}
            <div className="absolute left-2 sm:left-6 top-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>

            <div
              className="bg-gray-50 dark:bg-gray-700 p-6 sm:p-8 rounded-2xl shadow-lg
                         hover:shadow-2xl hover:scale-105 hover:ring-1 hover:ring-blue-500
                         transition-all duration-300 ease-in-out cursor-pointer transform   group-hover:shadow-[0_0_25px_8px_rgba(56,189,248,0.7)] dark:hover:shadow-[0_0_25px_8px_rgba(56,189,248,0.9)]"
            >
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Full Stack Developer
                </h3>
                <div className="flex flex-col sm:items-end">
                  <div className="flex items-center text-blue-600 dark:text-blue-400 mb-1">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm sm:text-base font-medium">
                      2023 - 2024
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm sm:text-base">
                      Kodu • Hisar, Haryana
                    </span>
                  </div>
                </div>
              </div>

              {/* Achievements List */}
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mr-3 mt-0.5 flex-shrink-0"
                      size={20}
                    />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* You can add more experience cards here similarly if needed */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
