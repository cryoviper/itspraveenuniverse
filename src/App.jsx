import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <style>
        {`
          /* Use the browser's native smooth scrolling */
          html { scroll-behavior: smooth; }

          /* Optional: keep scrollbar hidden styling you had before */
          ::-webkit-scrollbar {
            width: 0px;
            background: transparent;
          }
          body {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
        `}
      </style>

      <div className="container mx-auto max-w-7xl">
        <Navbar />
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="work">
          <Projects />
        </div>
        <div>
          <Testimonial />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
