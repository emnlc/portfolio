import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="flex flex-row py-8 gap-4 items-center justify-center sm:justify-start text-sm px-4">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/emnlc/"
        className="text-black hover:text-opacity-50 dark:hover:text-opacity-50 transition-all flex flex-row gap-2 items-center dark:text-white"
      >
        <FontAwesomeIcon className="w-5 h-5" icon={faLinkedin} />{" "}
        <span>LinkedIn</span>
      </a>
      <a
        href="mailto:emnlc.dev@gmail.com"
        className="text-black hover:text-opacity-50 dark:hover:text-opacity-50 transition-all flex flex-row gap-2 items-center dark:text-white"
      >
        <FontAwesomeIcon className="w-5 h-5" icon={faEnvelope} />
        <span>Contact</span>
      </a>
    </div>
  );
};

export default Footer;
