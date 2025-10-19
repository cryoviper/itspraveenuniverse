import { useState } from "react";
import { myProjects } from "../constants";

const Projects = () => {
  const [modalProject, setModalProject] = useState(null);

  if (modalProject) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "auto";

  const openProject = (project) => setModalProject(project);
  const closeProject = () => setModalProject(null);

  return (
    <section className="relative section-spacing c-space bg-[#030412] text-gray-200">
      <h2 className="text-heading mb-12 text-white text-center">
        My Selected Projects
      </h2>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

      <div className="flex flex-wrap justify-center gap-10">
        {myProjects.map((project) => (
          <div
            key={project.id}
            className="bg-[#1A1B2D] rounded-2xl p-8 hover:bg-[#23243d] transition-colors duration-200 flex flex-col cursor-pointer w-full sm:w-[48%] lg:w-[30%]"
            onClick={() => openProject(project)}
          >
            <HoverPreview thumbnail={project.image} video={project.video} title={project.title} />
            <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm line-clamp-3">{project.description}</p>
            <div className="mt-auto">
              <span className="text-indigo-400 font-medium text-sm">
                View Project →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Project Page */}
      {modalProject && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-start pt-12 bg-black/70 overflow-auto scrollable"
          onClick={closeProject}
        >
          <div
            className="bg-[#1A1B2D] rounded-2xl p-6 max-w-5xl w-full max-h-[90vh] overflow-y-auto flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Video or Screenshot */}
            {modalProject.video ? (
              <video
                src={modalProject.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full max-h-[80vh] object-contain rounded-lg mb-4"
              />
            ) : (
              <img
                src={modalProject.image}
                alt={modalProject.title}
                className="w-full max-h-[80vh] object-contain rounded-lg mb-4"
              />
            )}

            <h3 className="text-white text-3xl font-bold mb-2">{modalProject.title}</h3>
            <p className="text-gray-300 text-center mb-4">{modalProject.description}</p>

            {/* Sub-description list */}
            {modalProject.subDescription && (
              <ul className="text-gray-400 list-disc list-inside space-y-2 w-full max-w-3xl">
                {modalProject.subDescription.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

// Hover preview component
const HoverPreview = ({ thumbnail, video, title }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-xl overflow-hidden mb-6 border border-zinc-800 w-full h-52"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && video ? (
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover transition-all duration-300"
        />
      ) : (
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-all duration-300"
        />
      )}
    </div>
  );
};

export default Projects;
