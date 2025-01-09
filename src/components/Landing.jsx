import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Resume from "/Resume.pdf";

import { Button } from "./ui/button";

function Landing() {
  return (
    <>
      <div className="flex gap-4 h-auto flex-row justify-start items-center px-4 text-white">
        <div className="landing-image-container">
          <img
            src="portfolio.jpg"
            className=" object-contain w-24 sm:w-36 rounded-full border-white border"
            alt=""
          />
        </div>

        <div className="landing-text-container flex flex-col justify-center items-start">
          <h1 className="text-xl sm:text-2xl font-bold">
            Hey, I&#39;m Emmanuel 👋
          </h1>
          <h2 className="text-lg">Full Stack Developer</h2>
          <div className="flex flex-row justify-start items-center gap-2 mt-2">
            <a
              className="flex transition-colors text-white hover:text-opacity-50"
              target="_blank"
              href="https://www.linkedin.com/in/emnlc"
            >
              <FontAwesomeIcon className="text-2xl" icon={faLinkedin} />
            </a>
            <a
              className="flex transition-colors text-white hover:text-opacity-50"
              target="_blank"
              href="mailto:emnlc.dev@gmail.com"
            >
              <FontAwesomeIcon className="text-2xl" icon={faEnvelope} />
            </a>
            <a
              className="flex transition-colors text-white hover:text-opacity-50"
              target="_blank"
              href="https://www.github.com/emnlc"
            >
              <FontAwesomeIcon className="text-2xl" icon={faGithub} />
            </a>
            <Button
              size="sm"
              className="text-white text-xs bg-dark-primary px-6 py-4 rounded-lg transition-all text-center hover:text-opacity-50 border border-[#e5e7eb] border-opacity-15 hover:bg-dark-secondary hover:bg-opacity-15"
            >
              <a rel="noreffer" href={Resume} target="_blank">
                Resume
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex  gap-4 h-auto flex-col items-start justify-start px-4 text-white">
        <p className="text-sm sm:text-base">
          React developer from{" "}
          <span className="font-semibold">Phoenix, AZ</span> focused on creating
          full-stack web applications.
        </p>

        {/* <div className="links w-full grid grid-cols-3 grid-rows-2 text-xl gap-4 mt-4">
          <a
            className="bg-dark-primary px-12 py-4 rounded-lg text-lg transition-all col-span-1 text-center hover:text-blue-500 border border-[#e5e7eb] border-opacity-15 hover:bg-dark-secondary hover:bg-opacity-15"
            href="https://www.linkedin.com/in/emnlc/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            className="bg-dark-primary bg-opacity-50 px-12 py-4 rounded-lg text-lg flex justify-center items-center gap-2 hover:text-blue-500 transition-all col-span-2 border border-[#e5e7eb] border-opacity-15 hover:bg-dark-secondary hover:bg-opacity-15"
            href="https://www.github.com/emnlc"
            target="_blank"
          >
            <span>Contact</span>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            className="bg-dark-primary bg-opacity-50 px-12 py-4 rounded-lg text-lg flex justify-center items-center gap-2 hover:text-blue-500 transition-all col-span-2 border border-[#e5e7eb] border-opacity-15 hover:bg-dark-secondary hover:bg-opacity-15"
            rel="noreffer"
            href={Resume}
            target="_blank"
          >
            <span className="">Resume</span>{" "}
            <FontAwesomeIcon className="" icon={faFileArrowDown} />
          </a>
          <a
            className="bg-dark-primary px-12 py-4 rounded-lg text-lg transition-all col-span-1 text-center hover:text-blue-500 border border-[#e5e7eb] border-opacity-15 hover:bg-dark-secondary hover:bg-opacity-15 "
            href="mailto:emnlc.dev@gmail.com"
          >
            <FontAwesomeIcon className="" icon={faGithub} />
          </a>
        </div> */}
      </div>
    </>
  );
}

export default Landing;
