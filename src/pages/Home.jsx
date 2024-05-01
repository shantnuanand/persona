import React from "react";
import Skills from "../components/Skills";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-purple-200 h-auto font-body">
      <div className="flex justify-between px-[100px] py-[130px] items-center overflow-hidden">
        <div className="flex flex-col gap-5 w-[500px]">
          <h1 className="text-xl font-bold text-gray-700">Hey, I'm Shantnu</h1>
          <h1 className="text-7xl font-bold text-gray-700">
            Front End Developer
          </h1>
          <p className="text-xl font-normal text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            animi quasi nemo.
          </p>
          <div className="h-[60px] w-[160px] flex items-center justify-start">
            <button className="h-[48px] w-[140px] font-medium text-white border-purple-600 bg-purple-600 transition-all duration-300 ease-in-out rounded-md px-5 py-2 hover:text-purple-600 hover:bg-gray-200 hover:border hover:border-purple-600">
              Get in touch
            </button>
          </div>
        </div>
        <img
          className="w-[400px] h-[400px] rounded-full border-[10px] border-gray-600 object-cover transition-transform transform hover:scale-110 duration-300"
          src="hero1.jpg"
          alt="hero"
        />
      </div>
      <Skills />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
