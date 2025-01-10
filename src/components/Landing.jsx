import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Resume from "/Resume.pdf";

import { Button } from "./ui/button";

function Landing() {
  return (
    <>
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
        <p className="text-sm sm:text-base">
          React developer from{" "}
          <span className="font-semibold">Phoenix, AZ</span> focused on creating
          full-stack web applications.
        </p>
      </div>
    </>
  );
}

export default Landing;
