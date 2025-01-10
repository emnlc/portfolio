import { useState, useEffect, useRef } from "react";
import skilsData from "../json/skills.json";
import { motion, useInView, useAnimation } from "framer-motion";

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
          <div
            key={i}
            className="flex flex-col gap-2 col-span-1 py-2 justify-center bg-white dark:bg-dark-primary bg-opacity-50 dark:bg-opacity-50 place-items-center rounded-lg transition-all border dark:border-[#e5e7eb] border-opacity-15 dark:border-opacity-15 hover:bg-opacity-10 hover:bg-dark-secondary dark:hover:bg-dark-secondary dark:hover:bg-opacity-15"
          >
            <img src={`/skills/${skill}.svg`} className="w-8" alt="" />
            <span className="text-xs">{skill}</span>
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default Skills;
