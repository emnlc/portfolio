import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { ExternalLink, Github } from "lucide-react";
import ServerStatus from "./ServerStatus";

function ProjectCard({ project, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isColored, setIsColored] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleImageClick = (e) => {
    e.stopPropagation();

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const newColoredState = !isColored;
    setIsColored(newColoredState);

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

  const isRamenGames = project.title.toLowerCase().includes("ramen");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative border border-black/20 dark:border-white/20 rounded-none overflow-hidden bg-white dark:bg-dark-primary">
        {/* Content */}
        <div className="relative">
          {/* Header */}
          <div
            onClick={toggleExpand}
            className="p-6 cursor-pointer hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-medium text-black dark:text-white tracking-tight">
                {project.title}
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-black/40 dark:text-white/40 text-xs">
                  {String(project.id).padStart(2, "0")}
                </span>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-black/40 dark:text-white/40"
                >
                  <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
                </motion.div>
              </div>
            </div>
            {/* Tech Stack */}
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

          {/* Expandable Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  {/* Image */}
                  {project.img && (
                    <motion.div
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="mb-4"
                    >
                      <div
                        className="cursor-pointer"
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
                    </motion.div>
                  )}

                  {/* Description */}
                  <motion.div
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    className="mb-4"
                  >
                    {project.description.map((text, i) => (
                      <p
                        key={i}
                        className="text-sm text-black/70 dark:text-white/70 leading-relaxed font-light"
                      >
                        {text}
                      </p>
                    ))}
                  </motion.div>

                  {isRamenGames && (
                    <motion.div
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.3, delay: 0.17 }}
                      className="mb-4"
                    >
                      <ServerStatus />
                    </motion.div>
                  )}

                  {/* Links */}
                  {(project.source || project.site) && (
                    <motion.div
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="flex gap-4 pt-2"
                    >
                      {project.site && (
                        <a
                          href={project.site}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-light text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors flex items-center gap-1.5 border-b border-black/20 dark:border-white/20 hover:border-black/60 dark:hover:border-white/60"
                          onClick={(e) => e.stopPropagation()}
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
                          onClick={(e) => e.stopPropagation()}
                        >
                          Source Code
                          <Github size={14} />
                        </a>
                      )}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

ProjectCard.propTypes = {
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

export default ProjectCard;
