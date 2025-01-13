import { useState, useEffect, useRef } from "react";
import skilsData from "../json/skills.json";
import { motion, useInView, useAnimation } from "framer-motion";

import SkillIcon from "./SkillIcon";

function Skills() {
  const [skills, setSkills] = useState([]);
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref);
  const containerIsInView = useInView(containerRef);

  const mainControls = useAnimation();
  const containerControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }

    if (containerIsInView) {
      containerControls.start("visible");
    }
  }, [isInView, containerIsInView, mainControls, containerControls]);

  useEffect(() => {
    const getSkills = () => {
      setSkills(skilsData);
    };

    getSkills();
  }, []);

  return (
    <>
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
        Skills
      </motion.h1>

      <motion.div
        ref={containerRef}
        variants={{
          hidden: { opacity: 0, y: -25 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={containerControls}
        transition={{ duration: 0.25, delay: 0.2 }}
        className="px-4 text-black dark:text-white grid grid-cols-2 sm:grid-cols-3 grid-rows-2 gap-4"
      >
        {skills.map((skill, i) => (
          <SkillIcon key={i} skill={skill} />
        ))}
      </motion.div>
    </>
  );
}

export default Skills;
