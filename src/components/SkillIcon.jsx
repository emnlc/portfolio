import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState } from "react";

function SkillIcon({ skill }) {
  const [isHovered, setIsHovered] = useState(false); // State to control animation

  return (
    <motion.div
      className="flex flex-col gap-2 col-span-1 py-2 justify-center bg-white dark:bg-dark-primary bg-opacity-50 dark:bg-opacity-50 place-items-center rounded-lg transition-all border dark:border-[#e5e7eb] border-opacity-15 dark:border-opacity-15 hover:bg-opacity-10 hover:bg-dark-secondary dark:hover:bg-dark-secondary dark:hover:bg-opacity-15"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Image animation controlled by state */}
      <motion.img
        src={`/skills/${skill}.svg`}
        className="w-8 h-full"
        alt={skill}
        animate={isHovered ? { y: -3 } : { y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          type: "spring",
        }}
      />
      <span className="text-xs">{skill}</span>
    </motion.div>
  );
}

SkillIcon.propTypes = {
  skill: PropTypes.string.isRequired,
};

export default SkillIcon;
