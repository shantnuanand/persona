import React from "react";

const About = () => {
  return (
    <div className="bg-purple-200 h-auto font-body">
      <div className="flex justify-between px-[100px] py-[130px] items-center">
        <img
          className="w-[400px] h-[400px] rounded-full border-[10px] border-gray-600 object-cover transition-transform transform hover:scale-110 duration-300"
          src="hero1.jpg"
          alt="hero"
        />
        <div className="flex flex-col gap-5 w-[500px]">
          <h1 className="text-xl font-bold text-gray-700">About</h1>
          <h1 className="text-7xl font-bold text-gray-700">About Me</h1>
          <p className="text-xl font-normal text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            officiis sit debitis omnis harum sed veniam quasi dicta accusamus
            recusandae? Voluptatem, reprehenderit alias? Eligendi aperiam
            tempora numquam sint odit optio. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Autem officiis sit debitis omnis harum
            sed veniam quasi dicta accusamus recusandae?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
