import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Resume from "/Resume.pdf";
import { motion, useInView, useAnimation } from "framer-motion";

import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import WeatherWidget from "./WeatherWidget/WeatherWidget";

function Landing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: -25 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.2, delay: 0.2 }}
        className="flex flex-col gap-8"
      >
        <div className="flex gap-4 h-auto flex-row justify-start items-center px-4 text-black dark:text-white">
          {/* IMAGE CODE */}
          <div className="landing-image-container">
            <img
              src="portfolio.jpg"
              className="object-contain w-24 sm:w-36 rounded-full border border-black border-opacity-50 dark:border-white"
              alt=""
            />
          </div>

          {/* IMAGE TEXT */}
          <div className="landing-text-container flex flex-col justify-center items-start text-black dark:text-white">
            <h1 className="text-xl sm:text-2xl font-bold">
              Hey, I&#39;m Emmanuel 👋
            </h1>
            <h2 className="text-lg">Full Stack Developer</h2>
            <div className="flex flex-row justify-start items-center gap-2 mt-2">
              <a
                className="flex "
                target="_blank"
                href="https://www.linkedin.com/in/emnlc"
              >
                <FontAwesomeIcon
                  className="text-2xl transition-all hover:opacity-80 dark:hover:text-opacity-50"
                  icon={faLinkedin}
                />
              </a>
              <a
                className="flex "
                target="_blank"
                href="mailto:emnlc.dev@gmail.com"
              >
                <FontAwesomeIcon
                  className="text-2xl transition-all hover:opacity-80 dark:hover:text-opacity-50"
                  icon={faEnvelope}
                />
              </a>
              <a
                className="flex "
                target="_blank"
                href="https://www.github.com/emnlc"
              >
                <FontAwesomeIcon
                  className="text-2xl transition-all hover:opacity-80 dark:hover:text-opacity-50"
                  icon={faGithub}
                />
              </a>
              <Button
                size="sm"
                className="text-xs bg-white px-6 py-4 rounded-lg transition-all text-center border hover:bg-dark-secondary dark:hover:bg-dark-secondary hover:bg-opacity-10 dark:hover:bg-opacity-15 dark:bg-dark-primary dark:hover:text-opacity-50 dark:border-[#e5e7eb] dark:border-opacity-15"
              >
                <a rel="noreffer" href={Resume} target="_blank">
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-4 h-auto flex-col items-start justify-start px-4 text-black dark:text-white">
          <span className="text-sm sm:text-base font-normal">
            React developer from{" "}
            <TooltipProvider>
              <Tooltip delayDuration={100}>
                <TooltipTrigger className="font-bold">
                  Phoenix, AZ
                </TooltipTrigger>
                <TooltipContent className="min-w-72 p-0">
                  <WeatherWidget />
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>{" "}
            focused on creating full-stack web applications.
          </span>
        </div>
      </motion.div>
    </>
  );
}

export default Landing;
