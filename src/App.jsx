import React, { useEffect } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  useEffect(() => {
    // Detect touch/mobile devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return; // Skip smooth scroll on mobile

    let current = window.scrollY;
    let target = window.scrollY;
    let velocity = 0;

    const friction = 0.95;
    const ease = 0.05;
    const wheelFactor = 0.06;

    const onWheel = (e) => {
      // ✅ Ignore wheel inside scrollable modals/sections
      if (e.target.closest(".scrollable")) return;

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
    <>
      {/* Hide scrollbar */}
      <style>
        {`
          /* Hide scrollbar for Chrome, Safari, Opera */
          ::-webkit-scrollbar {
            width: 0px;
            background: transparent;
          }
          /* Hide scrollbar for Firefox */
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
