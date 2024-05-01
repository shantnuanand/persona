import React from "react";

const PorfolioCards = () => {
  const arr = [
    {
      img: "https://my-awesome-react-project.netlify.app/img/placeholder-image.png",
      title: "Ahuse",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor provident minus vero!",
      github: "/",
    },
    {
      img: "https://my-awesome-react-project.netlify.app/img/placeholder-image-1.png",
      title: "App Dashboard",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor provident minus vero!",
      github: "/",
    },
    {
      img: "https://my-awesome-react-project.netlify.app/img/placeholder-image-2.png",
      title: "Easy Return",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor provident minus vero!",
      github: "/",
    },
  ];
  return (
    <>
      {arr.map((a) => (
        <div key={a.title}>
          <div className="bg-white rounded-lg flex flex-col gap-5 shadow-lg w-[350px] overflow-hidden">
            <img className="object-cover transition-transform transform hover:scale-110 duration-300" src={a.img} alt={a.title} />
            <div className="p-5 flex flex-col gap-2">
              <h1 className="text-xl font-bold text-gray-700">{a.title}</h1>
              <h1 className=" text-gray-700">{a.desc}</h1>
              <div className="h-[60px] w-[160px] flex items-center justify-start">
                <button className="h-[48px] w-[170px] font-medium text-white border-purple-600 bg-purple-600 transition-all duration-300 ease-in-out rounded-md px-5 py-2 hover:text-purple-600 hover:bg-white hover:border hover:border-purple-600">
                  View In Github
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PorfolioCards;
