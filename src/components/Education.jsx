import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div className="flex gap-4 h-auto flex-col justify-start items-start text-black dark:text-white text-sm sm:text-base">
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
        Education
      </motion.h1>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 15 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.25, delay: 0.2 }}
        className="flex flex-row justify-between px-4 items-center w-full"
      >
        <img src="asu.png" className="w-20 sm:w-24" alt="" />
        <div className="flex flex-col gap-1 w-full pl-2 sm:pl-4">
          <div className="flex flex-row justify-between">
            <h3 className="font-semibold">Arizona State University</h3>
            <span className="italic">2020-2024</span>
          </div>
          <h4 className="italic">B.S. in Computer Science</h4>
        </div>
      </motion.div>
    </div>
  );
}

export default Education;
