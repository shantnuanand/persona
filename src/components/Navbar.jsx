import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const arr = ["Home", "Portfolio", "About Me", "Testimonials"];
  return (
    <div className="flex flex-wrap justify-between items-center px-[50px] font-semibold py-3 font-body bg-gray-800 fixed top-0 w-full z-50">
      <Link to="/">
        <div className="w-[50px] h-[50px] flex items-center gap-1 cursor-pointer">
          <img
            src="https://static.vecteezy.com/system/resources/previews/012/986/639/original/red-abstract-logo-free-png.png"
            alt="logo"
          />
          <h1 className="font-bold text-gray-300 hover:text-white">Persona</h1>
        </div>
      </Link>
      <div className="flex list-none gap-10">
        {arr.map((a) => (
          <li className="text-gray-300 hover:text-white cursor-pointer" key={a}>
            {a}
          </li>
        ))}
      </div>
      <div className="text-gray-300 border border-gray-300 rounded-md transition duration-300 ease-in-out px-5 py-2 hover:text-purple-600 hover:bg-white">
        <button>Contact Me</button>
      </div>
    </div>
  );
};

export default Navbar;
