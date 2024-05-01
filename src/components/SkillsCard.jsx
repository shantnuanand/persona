import React from "react";

const SkillsCard = () => {
  const arr = [
    {
      img: "https://my-awesome-react-project.netlify.app/img/product-chain-1.png",
      title: "Front-End",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor provident minus vero!",
    },
    {
      img: "https://my-awesome-react-project.netlify.app/img/tag-1.png",
      title: "Back-End",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor provident minus vero!",
    },
    {
      img: "https://my-awesome-react-project.netlify.app/img/feather-pen-2.png",
      title: "UI & UX Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor provident minus vero!",
    },
    {
      img: "https://my-awesome-react-project.netlify.app/img/feather-pen-1.png",
      title: "Webflow Development",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor provident minus vero!",
    },
  ];
  return (
    <>
      {arr.map((a) => (
        <div
          className="rounded-lg border-b-4 border-transparent hover:border-purple-600 duration-300 ease-in-out cursor-pointer"
          key={a.title}
        >
          <div className="flex flex-col w-[260px] h-[300px] rounded-lg gap-5 justify-center px-7 bg-gray-100 shadow-lg">
            <div className="bg-white w-[80px] h-[80px] rounded-md flex items-center justify-center shadow-xl">
              <img className="w-[50px] h-[50px]" src={a.img} alt={a.title} />
            </div>
            <h1 className="text-lg font-semibold">{a.title}</h1>
            <h1 className="">{a.desc}</h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default SkillsCard;
