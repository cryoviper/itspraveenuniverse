import React, { useEffect } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  useEffect(() => {
    let current = window.scrollY;
    let target = window.scrollY;
    let velocity = 0;

    // Portfolio-perfect values
    const friction = 0.95;    // slow momentum decay
    const ease = 0.05;        // smooth interpolation
    const wheelFactor = 0.06; // very low wheel increment for readability

    const onWheel = (e) => {
      e.preventDefault();
      velocity += e.deltaY * wheelFactor;
    };

    const onAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (!href.startsWith("#")) return;
      e.preventDefault();
      const el = document.querySelector(href);
      if (!el) return;
      target = el.offsetTop;
    };

    const animate = () => {
      target += velocity;
      target = Math.max(0, Math.min(target, document.body.scrollHeight - window.innerHeight));

      current += (target - current) * ease;
      window.scrollTo(0, current);

      velocity *= friction;

      requestAnimationFrame(animate);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", onAnchorClick);
    });

    animate();

    return () => {
      window.removeEventListener("wheel", onWheel);
      document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.removeEventListener("click", onAnchorClick);
      });
    };
  }, []);

  return (
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
        <Experiences />
      </div>
      <div>
        <Testimonial />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
