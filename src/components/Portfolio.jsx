import React from "react";
import PorfolioCards from "./PorfolioCards";

const Portfolio = () => {
  return (
    <div className="flex justify-between px-[100px] py-[130px] items-center">
      <div className="flex flex-col justify-around gap-5 w-[1170px]">
        <div className="flex justify-between gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-bold text-gray-700">Recent Projects</h1>
            <h1 className="text-5xl font-bold text-gray-700">My Portfolio</h1>
          </div>
          <div className="h-[60px] w-[160px] flex items-center justify-start">
            <button className="h-[48px] w-[170px] font-medium text-white border-purple-600 bg-purple-600 transition-all duration-300 ease-in-out rounded-md px-5 py-2 hover:text-purple-600 hover:bg-gray-200 hover:border hover:border-purple-600">
              Visit My Github
            </button>
          </div>
        </div>
        <div className="flex justify-around w-[1170px] pt-10">
          <PorfolioCards />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
