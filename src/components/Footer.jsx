import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center py-12 bg-zinc-800 text-white text-sm md:text-base">
      <div className=" flex flex-row gap-6">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/emnlc/"
          className="hover:opacity-80 transition-all"
        >
          <FontAwesomeIcon className="w-8 h-8" icon={faLinkedin} />
        </a>
        <a
          target="_blank"
          href="https://github.com/emnlc"
          className="hover:opacity-80 transition-all"
        >
          <FontAwesomeIcon className="w-8 h-8" icon={faGithub} />
        </a>
      </div>
      © Emmanuel Cortes Castaneda
    </div>
  );
};

export default Footer;
