import React from "react";
import { ArrowDown, Download } from "lucide-react";
import { toast } from "react-toastify";
import { Typewriter } from "react-simple-typewriter";
import "react-toastify/dist/ReactToastify.css";
import gitpic from "../assets/gitpic.jpg"; // Ensure the path is correct

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCVClick = (e) => {
    e.preventDefault();
    toast.info("Please contact Pankaj Barakoti to request the CV.", {
      position: "top-center",
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* 👇 Mobile-first: image first, text second */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
          {/* ✅ Profile Image First */}
          
          <div className="relative group">
            <div
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-700 shadow-2xl mx-auto lg:mx-0
    transition-shadow duration-500
    group-hover:shadow-[0_0_25px_8px_rgba(56,189,248,0.7)] dark:group-hover:shadow-[0_0_25px_8px_rgba(56,189,248,0.9)]
  "
            >
              <img
                src={gitpic}
                alt="Pankaj Barakoti"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* ✅ Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                <Typewriter
                  words={["Hi, I'm Pankaj Barakoti"]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-light">
              Full Stack MERN Developer
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Passionate about creating scalable web applications with modern
              technologies. Specialized in MongoDB, Express.js, React.js, and
              Node.js with 1 year of professional experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToAbout}
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Learn More About Me
                <ArrowDown className="ml-2" size={20} />
              </button>

              <button
                onClick={handleCVClick}
                className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Download className="mr-2" size={20} />
                Get CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
