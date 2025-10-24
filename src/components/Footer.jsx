import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="px-4 py-8">
      <div className="w-full h-px bg-black/10 dark:bg-white/10 mb-6"></div>

      <div className="flex flex-row gap-6 items-center justify-center sm:justify-start">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/emnlc/"
          className="text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors flex flex-row gap-2 items-center group"
        >
          <FontAwesomeIcon className="w-4 h-4" icon={faLinkedin} />{" "}
          <span className="text-sm font-light border-b border-black/20 dark:border-white/20 group-hover:border-black/60 dark:group-hover:border-white/60 transition-colors">
            LinkedIn
          </span>
        </a>
        <a
          href="mailto:emnlc.dev@gmail.com"
          className="text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors flex flex-row gap-2 items-center group"
        >
          <FontAwesomeIcon className="w-4 h-4" icon={faEnvelope} />
          <span className="text-sm font-light border-b border-black/20 dark:border-white/20 group-hover:border-black/60 dark:group-hover:border-white/60 transition-colors">
            Contact
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
