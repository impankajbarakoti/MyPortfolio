import React from 'react'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import Header from './Components/Header'
import About from './Components/About'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Contact from './Components/contact'
import Hero from './Components/Hero'
import Projects from './Components/Projects';
import FooterWithScrollTop from './Components/FooterWithScrollTop';
import WhyChooseMe from './Components/WhyChooseMe';

const App = () => {
  return (
    <div>
      <Helmet>
        <title>Pankaj Barakoti</title>
      </Helmet>
      <Header />
      <Hero />
      <ToastContainer position="top-center" autoClose={3000} />
      <About />
      <Skills />
      <Projects />
      <WhyChooseMe />
      <Experience />
      <Contact />

      <FooterWithScrollTop />
    </div>
  );
}

export default App
