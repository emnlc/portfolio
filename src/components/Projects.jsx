import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

import projectsData from "../json/projects.json";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = () => {
      setProjects(projectsData);
    };

    getProjects();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8 px-4 text-white">
        <h1 className="self-start text-3xl md:text-3xl font-semibold">
          Projects
        </h1>
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} i={i} />
        ))}
      </div>
    </>
  );
};

export default Projects;
