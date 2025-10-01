import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
  setScrollLocked, // 👈
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setScrollLocked(true); // 👈 lock scroll
  };

  const closeModal = () => {
    setIsOpen(false);
    setScrollLocked(false); // 👈 unlock scroll
  };

  return (
    <>
      <div
        className="flex flex-wrap items-center justify-between py-10 sm:flex-nowrap"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl font-semibold text-white">{title}</p>
          <div className="flex flex-wrap gap-4 mt-3 text-sm text-sand">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="px-2 py-1 rounded bg-white/10 text-white/80"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={openModal}
          className="flex items-center gap-2 mt-6 text-sm font-medium text-white transition-colors duration-200 hover:text-lavender sm:mt-0"
        >
          Read More
          <img src="assets/arrow-right.svg" alt="arrow" className="w-5 h-5" />
        </button>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

      {isOpen && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default Project;
