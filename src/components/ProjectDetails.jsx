import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full backdrop-blur-sm px-4">
      <motion.div
        className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-gradient-to-l from-midnight to-navy shadow-xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 p-2 rounded hover:bg-gray-600/30 transition"
        >
          <img src="assets/close.svg" alt="Close" className="w-5 h-5" />
        </button>

        {/* Image Preview */}
        <div className="relative w-full max-h-[350px] overflow-hidden rounded-t-2xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-midnight/80 to-transparent" />
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <h5 className="text-2xl font-bold text-white mb-3">{title}</h5>
          <p className="text-neutral-400 mb-4">{description}</p>

          <div className="space-y-3 mb-5">
            {subDescription.map((item, index) => (
              <p key={index} className="text-neutral-400 text-sm leading-relaxed">
                {item}
              </p>
            ))}
          </div>

          {/* Footer: Tags + CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  title={tag.name}
                  className="size-10 rounded hover:scale-105 transition-transform"
                />
              ))}
            </div>

            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-white text-sm font-medium hover:text-lavender transition"
              >
                View Project
                <img src="assets/arrow-up.svg" alt="Open" className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
