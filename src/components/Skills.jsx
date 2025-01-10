import { useState, useEffect } from "react";
import skilsData from "../json/skills.json";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const getSkills = () => {
      setSkills(skilsData);
    };

    getSkills();
  }, []);

  return (
    <>
      <h1 className="px-4 text-black dark:text-white self-start text-3xl md:text-3xl font-semibold">
        Skills
      </h1>

      <div className="px-4 text-black dark:text-white grid grid-cols-2 sm:grid-cols-3 grid-rows-2 gap-4">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 col-span-1 py-2 justify-center bg-white dark:bg-dark-primary bg-opacity-50 dark:bg-opacity-50 place-items-center rounded-lg transition-all border dark:border-[#e5e7eb] border-opacity-15 dark:border-opacity-15 hover:bg-opacity-10 hover:bg-dark-secondary dark:hover:bg-dark-secondary dark:hover:bg-opacity-15"
          >
            <img src={`/skills/${skill}.svg`} className="w-8" alt="" />
            <span className="text-xs">{skill}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
