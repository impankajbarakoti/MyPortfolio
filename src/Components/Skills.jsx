import React from "react";

const Skills = () => {
  const skills = [
    { name: "MongoDB", level: 85, color: "from-green-500 to-green-600" },
    { name: "Express.js", level: 90, color: "from-red-600 to-red-700" },
    { name: "React.js", level: 95, color: "from-blue-500 to-blue-600" },
    { name: "Node.js", level: 88, color: "from-green-600 to-green-700" },
    { name: "JavaScript", level: 92, color: "from-yellow-500 to-yellow-600" },
    { name: "TypeScript", level: 80, color: "from-blue-600 to-blue-700" },
    { name: "HTML/CSS", level: 95, color: "from-orange-500 to-orange-600" },
    { name: "Tailwind CSS", level: 90, color: "from-teal-500 to-teal-600" },
    { name: "Java", level: 75, color: "from-red-500 to-red-600" },
    { name: "C/C++", level: 70, color: "from-indigo-500 to-indigo-600" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Proficient in modern web development technologies and frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105  group-hover:shadow-[0_0_25px_8px_rgba(56,189,248,0.7)] dark:hover:shadow-[0_0_25px_8px_rgba(56,189,248,0.9)]"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-700 group-hover:duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
