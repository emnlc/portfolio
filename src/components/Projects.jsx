import { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";

import { motion, useInView, useAnimation } from "framer-motion";

import projectsData from "../json/projects.json";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  useEffect(() => {
    const getProjects = () => {
      setProjects(projectsData);
    };

    getProjects();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-8 min-h-screen">
        <motion.h1
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: 15 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.25, delay: 0.2 }}
          className="px-4 text-black dark:text-white self-start text-lg md:text-xl font-semibold"
        >
          Projects
        </motion.h1>

        <div className="flex flex-col items-center justify-center gap-4 md:gap-8 px-4 text-black dark:text-white">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} i={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
