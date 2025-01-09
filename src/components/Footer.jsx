import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="flex flex-row py-8 gap-4 items-center justify-start text-sm px-4">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/emnlc/"
        className="text-white hover:text-opacity-50 transition-all flex flex-row gap-2 items-center"
      >
        <FontAwesomeIcon className="w-5 h-5" icon={faLinkedin} />{" "}
        <span className="hidden sm:block">LinkedIn</span>
      </a>
      <a
        target="_blank"
        href="https://github.com/emnlc"
        className="text-white hover:text-opacity-50 transition-all flex flex-row gap-2 items-center"
      >
        <FontAwesomeIcon className="w-5 h-5" icon={faEnvelope} />
        <span className="hidden sm:block">Contact</span>
      </a>
    </div>
  );
};

export default Footer;
