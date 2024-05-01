import React from "react";
import PorfolioCards from "./PorfolioCards";
import TestimonialsCards from "./TestimonialsCards";

const Skills = () => {
  return (
    <div className="flex justify-between px-[100px] py-[130px] items-center">
      <div className="flex flex-col justify-around gap-5 w-[1170px]">
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-bold text-gray-700">Clients Feedback</h1>
          <h1 className="text-5xl font-bold text-gray-700">
            Customer Feedback
          </h1>
        </div>

        <div className="flex justify-around w-[1170px] pt-10">
          <TestimonialsCards />
        </div>
      </div>
    </div>
  );
};

export default Skills;
