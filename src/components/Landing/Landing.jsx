import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WeatherWidget from "../WeatherWidget/WeatherWidget";

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
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.4 }}
      className="px-4 flex flex-col gap-6"
    >
      {/* Profile Section */}
      <div className="flex gap-6 items-start">
        {/* Picture */}
        <img
          src="portfolio.jpg"
          className="w-20 sm:w-28 h-20 sm:h-28 rounded-full object-cover border border-black/20 dark:border-white/20 flex-shrink-0"
          alt="Emmanuel"
        />

        {/* Info */}
        <div className="flex-1 flex flex-col gap-3 pt-1">
          <div>
            <h1 className="text-xl sm:text-2xl font-medium text-black dark:text-white tracking-tight mb-1">
              Hey, I&#39;m Emmanuel{" "}
              <motion.span
                style={{ display: "inline-block" }}
                whileHover={{
                  rotate: [0, -10, 10, -10, 10, 0],
                  transition: { duration: 1.5 },
                }}
                className="cursor-default"
              >
                👋
              </motion.span>
            </h1>
            <p className="text-base font-light text-black/70 dark:text-white/70">
              Software Developer
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/emnlc"
              className="text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon className="w-5 h-5" icon={faLinkedin} />
            </a>
            <a
              href="mailto:emnlc.dev@gmail.com"
              className="text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors"
              aria-label="Email"
            >
              <FontAwesomeIcon className="w-5 h-5" icon={faEnvelope} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.github.com/emnlc"
              className="text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors"
              aria-label="GitHub"
            >
              <FontAwesomeIcon className="w-5 h-5" icon={faGithub} />
            </a>

            <div className="w-px h-5 bg-black/20 dark:bg-white/20" />

            <a
              href="https://resume.emnlc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors border-b border-black/20 dark:border-white/20 hover:border-black/60 dark:hover:border-white/60"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* bio  */}
      <div className="border-l-2 border-black/10 dark:border-white/10 pl-4">
        <p className="text-sm sm:text-base font-light text-black/70 dark:text-white/70 leading-relaxed">
          Web developer from{" "}
          <TooltipProvider>
            <Tooltip delayDuration={100}>
              <TooltipTrigger className="font-medium text-black dark:text-white border-b border-black/20 dark:border-white/20 hover:border-black/60 dark:hover:border-white/60 transition-colors">
                Phoenix, AZ
              </TooltipTrigger>
              <TooltipContent className="min-w-72 p-0 rounded-none border-none">
                <WeatherWidget />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>{" "}
          focused on creating full-stack web applications.
        </p>
      </div>
    </motion.div>
  );
}

export default Landing;
