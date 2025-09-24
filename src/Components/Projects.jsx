import React from "react";
import Ralo from "../assets/Ralo.png";
import Packers from "../assets/Packers.png";
import Novine from "../assets/Novine.png";
import Solar from "../assets/Solar.png";
import Painting from "../assets/Painting.png";
import Electric from "../assets/Electric.png";
import Hendon from "../assets/Hendon.png";
import Book from "../assets/Book.png";
import Vastu from "../assets/Vastu.png";

const projects = [
  {
    title: "Ralo Home Loan",
    url: "https://ralo-homeloan.netlify.app",
    img: Ralo,
    desc: "A modern home loan website for loan consultation and lead generation.",
  },
  {
    title: "Packers & Movers",
    url: "http://packersmoverss.netlify.app/",
    img: Packers,
    desc: "Business site for packers and movers with service listings and inquiry form.",
  },
  {
    title: "Novine",
    url: "https://novine.netlify.app/",
    img: Novine,
    desc: "A clean and responsive blog/magazine layout with multiple article sections.",
  },
  {
    title: "Solar Edge",
    url: "http://solaredgee.netlify.app/",
    img: Solar,
    desc: "A solar energy solutions website with product offerings and contact form.",
  },
  {
    title: "Painting Services",
    url: "https://paintingservices.netlify.app/",
    img: Painting,
    desc: "Portfolio website for painting contractors with project showcase.",
  },
  {
    title: "Electrician Website",
    url: "https://electricianwebsite.netlify.app/",
    img: Electric,
    desc: "Professional electrician business website with service details and quote request.",
  },
  {
    title: "Hendon",
    url: "http://hendon.netlify.app/",
    img: Hendon,
    desc: "Agency-style multi-page template ideal for consulting and tech companies.",
  },
  {
    title: "Vastu Augury",
    url: "http://vastu-augury.netlify.app/",
    img: Vastu,
    desc: "Vastu consultation website offering spiritual and architectural services.",
  },
  {
    title: "Ochaka Books",
    url: "http://ochaka-book.netlify.app/",
    img: Book,
    desc: "Online bookstore layout for listing and promoting books effectively.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore some of the projects I've built and deployed using modern
            web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white  dark:bg-gray-700 p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-500 dark:border-gray-600 flex flex-col transform  group-hover:shadow-[0_0_25px_8px_rgba(56,189,248,0.7)] dark:hover:shadow-[0_0_25px_8px_rgba(56,189,248,0.3)]"
            >
              <div className="w-full h-40 sm:h-52 overflow-hidden rounded-lg mb-4">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full  text-blue-500 object-contain"
                />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 font-bold dark:text-gray-300 mb-2">
                {project.desc}
              </p>
              <p className="text-blue-600 dark:text-blue-400 break-all text-sm">
                {project.url}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
