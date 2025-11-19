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
    let current = window.scrollY;
    let target = window.scrollY;
    let velocity = 0;
    let animating = false;
    let isAnchorScroll = false;

    const friction = 0.95;
    const ease = 0.05;
    const anchorEase = 0.12;
    const wheelFactor = 0.06;
    const touchFactor = 0.2;

    let lastTouchY = 0;

    const onWheel = (e) => {
      if (e.target.closest(".scrollable")) return;

      if (e.deltaY === 0) return;

      e.preventDefault();
      velocity += e.deltaY * wheelFactor;
      if (!animating) {
        animating = true;
        animate();
      }
    };

    const onTouchStart = (e) => {
      lastTouchY = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      if (e.target.closest(".scrollable")) return;

      const touchY = e.touches[0].clientY;
      const deltaY = lastTouchY - touchY;
      lastTouchY = touchY;

      e.preventDefault();
      velocity += deltaY * touchFactor;
      if (!animating) {
        animating = true;
        animate();
      }
    };

    const onAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (!href.startsWith("#")) return;
      e.preventDefault();
      const el = document.querySelector(href);
      if (!el) return;
      target = el.offsetTop;
      velocity = 0;
      isAnchorScroll = true;
      if (!animating) {
        animating = true;
        animate();
      }
    };

    const animate = () => {
      const currentEase = isAnchorScroll ? anchorEase : ease;
      target += velocity;
      target = Math.max(0, Math.min(target, document.body.scrollHeight - window.innerHeight));

      current += (target - current) * currentEase;
      window.scrollTo(0, current);

      velocity *= friction;

      if (Math.abs(velocity) > 0.01 || Math.abs(target - current) > 1) {
        requestAnimationFrame(animate);
      } else {
        animating = false;
        if (isAnchorScroll) {
          target = current; // New: Reset target to current after anchor scroll settles, so wheel scroll starts fresh
        }
        isAnchorScroll = false;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", onAnchorClick);
    });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.removeEventListener("click", onAnchorClick);
      });
    };
  }, []);

  return (
    <>
      <style>
        {`
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
