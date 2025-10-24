import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import projectsData from "@/json/projects.json";
import FeaturedCard from "./FeaturedCard";

function FeaturedProjects() {
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    const featured = projectsData.slice(0, 3);
    setFeaturedProjects(featured);
  }, []);

  return (
    <div className="px-4 flex flex-col gap-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-black dark:text-white tracking-tight">
          Featured Projects
        </h2>
        <Link
          to="/projects"
          className="text-sm font-light text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors flex items-center gap-1 border-b border-black/20 dark:border-white/20 hover:border-black/60 dark:hover:border-white/60"
        >
          View all
          <ArrowUpRight size={14} />
        </Link>
      </div>

      {/* projects */}
      <div className="flex flex-col gap-6">
        {featuredProjects.map((project, index) => (
          <FeaturedCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProjects;
