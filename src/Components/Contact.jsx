import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pankajbarakoti837@gmail.com",
      href: "mailto:pankajbarakoti837@gmail.com",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7495028505",
      href: "tel:+917495028505",
      color: "from-green-500 to-green-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hisar, Haryana, India",
      href: "#",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/pankaj-barakoti-689019358",
      href: "https://www.linkedin.com/in/pankaj-barakoti-689019358",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/impankajbarakoti",
      href: "https://github.com/impankajbarakoti",
      color: "from-gray-600 to-gray-700",
    },
  ];

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for your message, ${formData.name}!`);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting
            projects. Feel free to reach out!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Send me a message
            </h3>

            <label
              htmlFor="name"
              className="block mb-2 text-gray-700 dark:text-gray-300 font-medium"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Your name"
            />

            <label
              htmlFor="email"
              className="block mb-2 text-gray-700 dark:text-gray-300 font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Your email"
            />

            <label
              htmlFor="message"
              className="block mb-2 text-gray-700 dark:text-gray-300 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Your message"
            ></textarea>

            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-xl transition-transform hover:scale-105 w-full"
            >
              Send Message
            </button>
          </form>

          {/* Right: Contact Info Cards */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    target={
                      contact.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      contact.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105  group-hover:shadow-[0_0_25px_8px_rgba(56,189,248,0.7)] dark:hover:shadow-[0_0_25px_8px_rgba(56,189,248,0.9)] group flex flex-col items-center"
                  >
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${contact.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {contact.label}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 break-all text-center">
                      {contact.value}
                    </p>
                  </a>
                );
              })}
            </div>

            <div className="text-center mt-12">
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
