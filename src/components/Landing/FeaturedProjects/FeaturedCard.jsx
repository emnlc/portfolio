import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

function FeaturedCard({ project, index }) {
  const [isColored, setIsColored] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const handleImageClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // color state
    const newColoredState = !isColored;
    setIsColored(newColoredState);

    // monochrome after 10 seconds
    if (newColoredState) {
      timeoutRef.current = setTimeout(() => {
        setIsColored(false);
      }, 10000);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // color when hovered/clicked
  const showColor = isHovered || isColored;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border border-black/20 dark:border-white/20 bg-white dark:bg-dark-primary p-6 flex flex-col gap-4"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-medium text-black dark:text-white tracking-tight mb-2">
            {project.title}
          </h3>
          {/* techstack */}
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {project.techstack.map((tech, i) => (
              <span
                key={tech}
                className="text-xs text-black/50 dark:text-white/50 font-light"
              >
                {tech}
                {i < project.techstack.length - 1 && (
                  <span className="ml-3 text-black/20 dark:text-white/20">
                    /
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
        {/* number */}
        <span className="text-black/40 dark:text-white/40 text-xs font-light">
          {String(project.id).padStart(2, "0")}
        </span>
      </div>

      {/* image */}
      {project.img && (
        <div
          className="w-full cursor-pointer"
          onClick={handleImageClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={project.img}
            alt={project.title}
            className={`w-full h-48 object-cover transition-all duration-500 ${
              showColor ? "" : "grayscale"
            }`}
          />
        </div>
      )}

      {/* description */}
      {project.description.map((text, i) => (
        <p
          key={i}
          className="text-sm text-black/70 dark:text-white/70 leading-relaxed font-light"
        >
          {text}
        </p>
      ))}

      {/* links */}
      {(project.site || project.source) && (
        <div className="flex gap-4 pt-2">
          {project.site && (
            <a
              href={project.site}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors flex items-center gap-1.5 border-b border-black/20 dark:border-white/20 hover:border-black/60 dark:hover:border-white/60"
            >
              View Live
              <ExternalLink size={14} />
            </a>
          )}
          {project.source && (
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors flex items-center gap-1.5 border-b border-black/20 dark:border-white/20 hover:border-black/60 dark:hover:border-white/60"
            >
              Source Code
              <Github size={14} />
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}

FeaturedCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    img: PropTypes.string,
    techstack: PropTypes.arrayOf(PropTypes.string).isRequired,
    source: PropTypes.string,
    site: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default FeaturedCard;
