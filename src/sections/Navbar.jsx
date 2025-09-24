import { useState } from "react";
import { motion } from "motion/react";

function Navigation({ onClickLink }) {
  // Smooth scroll handler with easing
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const startPosition = window.scrollY;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 700; // 0.7s
      let start = null;

      const easeInOutQuad = (t) =>
        t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = (timestamp - start) / duration;
        const eased = easeInOutQuad(Math.min(progress, 1));
        window.scrollTo(0, startPosition + distance * eased);
        if (progress < 1) window.requestAnimationFrame(step);
      };

      window.requestAnimationFrame(step);
    }

    if (onClickLink) onClickLink(); // close mobile menu
  };

  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a
          className="nav-link"
          href="#home"
          onClick={(e) => handleScroll(e, "home")}
        >
          Home
        </a>
      </li>
      <li className="nav-li">
        <a
          className="nav-link"
          href="#about"
          onClick={(e) => handleScroll(e, "about")}
        >
          About
        </a>
      </li>
      <li className="nav-li">
        <a
          className="nav-link"
          href="#work"
          onClick={(e) => handleScroll(e, "work")}
        >
          Work
        </a>
      </li>
      <li className="nav-li">
        <a
          className="nav-link"
          href="#contact"
          onClick={(e) => handleScroll(e, "contact")}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            portfolio
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>

          {/* Desktop */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          className="sm:hidden fixed top-[3.5rem] left-0 w-full bg-primary/95 backdrop-blur-lg flex flex-col items-center pb-5 z-40"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Navigation onClickLink={handleLinkClick} />
        </motion.nav>
      )}
    </div>
  );
};

export default Navbar;
