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
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.4 }}
      className="px-4 flex flex-col gap-8"
    >
      {/* Header */}
      <h2 className="text-lg font-medium text-black dark:text-white tracking-tight">
        Education
      </h2>

      {/* card */}
      <div className="border border-black/20 dark:border-white/20 bg-white dark:bg-dark-primary p-6">
        <div className="flex gap-6 items-center">
          <img
            src="asu.svg"
            alt="Arizona State University"
            className="w-16 sm:w-20 flex-shrink-0"
          />

          {/* details */}
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-base font-medium text-black dark:text-white tracking-tight">
                Arizona State University
              </h3>
              <span className="text-xs text-black/50 dark:text-white/50 font-light">
                2020 &#45; 2024
              </span>
            </div>
            <p className="text-sm text-black/70 dark:text-white/70 font-light">
              B.S. in Computer Science
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
