import React from "react";

const TestimonialsCards = () => {
  const arr = [
    {
      stars: "⭐⭐⭐⭐⭐",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor provident minus vero!",
      img: "https://my-awesome-react-project.netlify.app/img/avatar-image.png",
      title: "Dianne Russel",
      subtitle: "Starbucks",
    },
    {
      stars: "⭐⭐⭐⭐",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor provident minus vero!",
      img: "https://my-awesome-react-project.netlify.app/img/avatar-image-1.png",
      title: "Kristin Watson",
      subtitle: "Louis Vuitton",
    },
    {
      stars: "⭐⭐⭐⭐",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor provident minus vero!",
      img: "https://my-awesome-react-project.netlify.app/img/avatar-image-2.png",
      title: "Kathryn Murphy",
      subtitle: "McDonald's",
    },
  ];
  return (
    <>
      {arr.map((a) => (
        <div key={a.title}>
          <div className="border border-purple-600 px-10 py-[60px] rounded-lg gap-5 flex flex-col shadow-lg w-[350px]">
            <h1 className="">{a.stars}</h1>
            <h1 className="">{a.desc}</h1>
            <div className="flex items-center gap-5">
              <img className="" src={a.img} alt={a.title} />
              <div>
                <h1 className="text-lg font-bold text-gray-700">{a.title}</h1>
                <h1 className="">{a.subtitle}</h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TestimonialsCards;
