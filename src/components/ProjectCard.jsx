// import { useState, useEffect } from "react";
import PropTypes, { string } from "prop-types";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";

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
  return (
    <>
      <Card
        key={project.id}
        className={`flex flex-col w-full px-4 py-6 bg-dark-primary bg-opacity-50 border border-[#e5e7eb] border-opacity-15`}
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
            <CardTitle className="text-xl text-white">
              {project.title}
            </CardTitle>
            <div className="project-techstack flex flex-row gap-2 text-xs flex-wrap">
              {project.techstack.map((tech) => (
                <TooltipProvider delayDuration={100} key={tech}>
                  <Tooltip>
                    <TooltipTrigger className="">
                      <Button
                        size="icon"
                        className="bg-dark-primary bg-opacity-75 rounded-lg cursor-default shadow-inner border border-[#e5e7eb] border-opacity-15 hover:bg-dark-secondary hover:bg-opacity-15"
                      >
                        <img
                          src={`skills/${tech}.svg`}
                          className="w-6 "
                          alt=""
                        />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="bg-dark-primary text-white border border-[#e5e7eb] border-opacity-15">
                      <p>{tech}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </CardHeader>

          <CardContent className="p-4">
            <div className="text-white text-sm mb-3 flex flex-col gap-4">
              {project.description.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </CardContent>

          {project.source || project.site ? (
            <CardFooter className="flex flex-row justify-between p-4 min-w-full">
              <div className="flex flex-row gap-2">
                {project.source ? (
                  <Button
                    className="bg-dark-primary transition-all border border-[#e5e7eb] border-opacity-15 hover:bg-dark-secondary hover:bg-opacity-15"
                    size={"sm"}
                  >
                    <a target="_blank" href={project.source}>
                      <FontAwesomeIcon icon={faGithub} />{" "}
                      <span>&nbsp;Source</span>
                    </a>
                  </Button>
                ) : (
                  <></>
                )}

                {project.site ? (
                  <Button
                    className="bg-white text-black hover:bg-opacity-80"
                    size={"sm"}
                  >
                    <a target="_blank" href={project.site}>
                      <FontAwesomeIcon icon={faGlobe} /> <span>&nbsp;View</span>
                    </a>
                  </Button>
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
    </>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    img: PropTypes.string.isRequired,
    techstack: PropTypes.arrayOf(string).isRequired,
    source: PropTypes.string,
    site: PropTypes.string,
  }).isRequired,
  i: PropTypes.number.isRequired,
};

export default ProjectCard;
