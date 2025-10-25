import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion, useInView, useAnimation } from "framer-motion";
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
          className="w-20 sm:w-28 h-20 sm:h-28 rounded-full object-cover border border-base-content/20 shrink-0"
          alt="Emmanuel"
        />

        {/* Info */}
        <div className="flex-1 flex flex-col gap-3 pt-1">
          <div>
            <h1 className="text-xl sm:text-2xl font-medium text-base-content tracking-tight mb-1">
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
            <p className="text-base font-light text-base-content/70">
              Software Developer
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/emnlc"
              className="text-base-content hover:text-base-content/60 transition-colors"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon className="text-xl" icon={faLinkedin} />
            </a>
            <a
              href="mailto:emnlc.dev@gmail.com"
              className="text-base-content hover:text-base-content/60 transition-colors"
              aria-label="Email"
            >
              <FontAwesomeIcon className="text-xl" icon={faEnvelope} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.github.com/emnlc"
              className="text-base-content hover:text-base-content/60 transition-colors"
              aria-label="GitHub"
            >
              <FontAwesomeIcon className="text-xl" icon={faGithub} />
            </a>

            <div className="w-px h-5 bg-base-content/20" />

            <a
              href="https://resume.emnlc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light text-base-content hover:text-base-content/60 transition-colors border-b border-base-content/20 hover:border-base-content/60"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* bio  */}
      <div className="border-l-2 border-base-content/10 pl-4">
        <p className="text-sm sm:text-base font-light text-base-content/70 leading-relaxed">
          Web developer from{" "}
          <span className="font-medium text-base-content border-b border-base-content/20 hover:border-base-content/60 transition-colors tooltip tooltip-top">
            <span className="dropdown dropdown-hover dropdown-top dropdown-center cursor-pointer">
              <div tabIndex={0} role="button" className="inline">
                Phoenix, AZ
              </div>
              <div tabIndex={0} className="dropdown-content z-1 mt-2">
                <WeatherWidget />
              </div>
            </span>
          </span>{" "}
          focused on creating full-stack web applications.
        </p>
      </div>
    </motion.div>
  );
}

export default Landing;
