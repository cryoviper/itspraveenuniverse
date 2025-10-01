import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = ({ isModalOpen, setIsModalOpen }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  const [preview, setPreview] = useState(null);
  const [modalProject, setModalProject] = useState(null);

  // Lock background scroll when modal opens
  const openModal = (project) => setModalProject(project);
  const closeModal = () => setModalProject(null);

  return (
    <section onMouseMove={handleMouseMove} className="relative section-spacing c-space">
      <h2 className="text-heading mb-12">My Selected Projects</h2>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

      {myProjects.map((project) => (
        <Project
          key={project.id}
          {...project}
          setPreview={setPreview}
          openModal={() => openModal(project)}
        />
      ))}

      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover w-80 h-56 rounded-lg shadow-2xl pointer-events-none"
          src={preview}
          alt="Preview"
          style={{ x: springX, y: springY }}
        />
      )}

      {modalProject && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-start pt-12 bg-black/70"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-lg w-11/12 max-h-[80vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="absolute top-2 right-3 text-2xl cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </span>
            <h3 className="text-2xl font-bold mb-4">{modalProject.title}</h3>
            <p className="leading-relaxed">{modalProject.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
