import React from "react";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <div className="flex justify-between px-[100px] py-[130px] items-center">
      <div className="flex flex-col gap-3 w-[500px]">
        <h1 className="text-xl font-bold text-gray-700">My Skills</h1>
        <h1 className="text-5xl font-bold text-gray-700">My Expertise</h1>
        <div className="flex justify-around w-[1170px] pt-10">
          <SkillsCard />
        </div>
      </div>
    </div>
  );
};

export default Skills;
