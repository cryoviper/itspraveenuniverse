"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const ProjectDetails = ({
  title,
  description,
  subDescription = [],
  image,
  tags = [],
  href,
  closeModal,
}) => {
  const modalRef = useRef(null);

  // Lock background scroll
  useEffect(() => {
    const original = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md px-4 sm:px-6 md:px-10 py-10"
      onClick={closeModal}
    >
      <motion.div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        // ✅ Added "scrollable" class here
        className="scrollable relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-[#1B1B2F] rounded-3xl shadow-2xl p-6 sm:p-10 scroll-smooth"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 text-white hover:text-lavender text-2xl font-light transition-colors duration-300"
        >
          &times;
        </button>

        {/* Image */}
        <motion.img
          src={image}
          alt={title}
          className="w-full h-auto rounded-xl mb-6 shadow-lg hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Title */}
        <motion.h2
          className="text-white text-3xl sm:text-4xl font-semibold mb-4 tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {title}
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {description}
        </motion.p>

        {/* Sub Description List */}
        {subDescription.length > 0 && (
          <ul className="space-y-3 mb-8 text-sm sm:text-base text-neutral-400 list-disc list-inside">
            {subDescription.map((item, idx) => (
              <motion.li
                key={idx}
                className="hover:text-white transition-colors duration-200"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        )}

        {/* Footer */}
        <motion.div
          className="flex items-center justify-between flex-wrap gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {/* Tags */}
          <div className="flex gap-3 flex-wrap">
            {tags.map((tag) => (
              <div
                key={tag.id}
                className="w-9 h-9 rounded-full overflow-hidden hover:scale-110 hover:shadow-lg transition-transform duration-300 cursor-pointer"
                title={tag.name}
              >
                <img src={tag.path} alt={tag.name} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* External link */}
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm sm:text-base text-lavender hover:text-white hover:underline font-medium transition-all duration-300"
            >
              View Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
