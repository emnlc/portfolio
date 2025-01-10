import { useEffect, useRef } from "react";
import PropTypes, { string } from "prop-types";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";

import Express from "./LanguageSVGs/Express";

import { motion, useInView, useAnimation } from "framer-motion";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "./ui/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function ProjectCard({ project }) {
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
        key={project.id}
        variants={{
          hidden: { opacity: 0, y: -25 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.25, delay: 0.2 }}
      >
        <Card
          className={`flex flex-col rounded-xl w-full px-4 py-6 bg-white dark:bg-dark-primary bg-opacity-50 border dark:border-[#e5e7eb] border-opacity-15 dark:border-opacity-15`}
        >
          {project.img ? (
            <img
              src={project.img}
              alt="Product"
              className=" object-cover rounded-lg w-full"
            />
          ) : (
            <></>
          )}

          <div className={``}>
            <CardHeader className="p-4">
              <CardTitle className="text-xl text-black dark:text-white">
                {project.title}
              </CardTitle>
              <div className="project-techstack flex flex-row gap-2 text-xs flex-wrap">
                {project.techstack.map((tech) => (
                  <TooltipProvider delayDuration={100} key={tech}>
                    <Tooltip>
                      <TooltipTrigger className="">
                        <div
                          size="icon"
                          className="bg-white dark:bg-dark-primary bg-opacity-75 rounded-lg cursor-default shadow-inner border hover:bg-dark-secondary hover:bg-opacity-10 dark:border-[#e5e7eb] dark:border-opacity-15 dark:hover:bg-dark-secondary dark:hover:bg-opacity-15 w-10 h-10 flex items-center justify-center"
                        >
                          {tech === "Express" ? (
                            <>
                              <Express />
                            </>
                          ) : (
                            <img
                              id={tech}
                              src={`skills/${tech}.svg`}
                              className="w-6"
                              alt=""
                            />
                          )}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="bg-white dark:bg-dark-primary text-black dark:text-white border dark:border-[#e5e7eb] border-opacity-10 dark:border-opacity-15">
                        <p>{tech}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </CardHeader>

            <CardContent className="p-4">
              <div className="text-black dark:text-white text-sm mb-3 flex flex-col gap-4">
                {project.description.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
            </CardContent>

            {project.source || project.site ? (
              <CardFooter className="flex flex-row justify-between p-4 min-w-full">
                <div className="flex flex-row gap-2">
                  {project.source ? (
                    <a target="_blank" href={project.source}>
                      <Button
                        className="bg-white dark:bg-dark-primary transition-all border dark:border-[#e5e7eb] dark:border-opacity-15 hover:bg-dark-secondary dark:hover:bg-dark-secondary hover:bg-opacity-10 dark:hover:bg-opacity-15"
                        size={"sm"}
                      >
                        <FontAwesomeIcon icon={faGithub} />{" "}
                        <span>&nbsp;Source</span>
                      </Button>
                    </a>
                  ) : (
                    <></>
                  )}

                  {project.site ? (
                    <a target="_blank" href={project.site}>
                      <Button
                        className="transition-all bg-dark-primary dark:bg-white text-white dark:text-black hover:bg-dark-secondary hover:bg-opacity-80 dark:hover:bg-opacity-80"
                        size={"sm"}
                      >
                        <FontAwesomeIcon icon={faGlobe} />{" "}
                        <span>&nbsp;View</span>
                      </Button>
                    </a>
                  ) : (
                    <></>
                  )}
                </div>
              </CardFooter>
            ) : (
              <></>
            )}
          </div>
        </Card>
      </motion.div>
    </>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    img: PropTypes.string.isRequired,
    techstack: PropTypes.arrayOf(string).isRequired,
    source: PropTypes.string,
    site: PropTypes.string,
  }).isRequired,
  i: PropTypes.number.isRequired,
};

export default ProjectCard;
