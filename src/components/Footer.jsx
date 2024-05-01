import React from "react";

const Footer = () => {
  return (
    <div className="bg-purple-200 h-auto font-body">
      <footer className="bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-md text-gray-300 hover:text-white">
              Home
            </a>
            <a href="#" className="text-md text-gray-300 hover:text-white">
              Portfolio
            </a>
            <a href="#" className="text-md text-gray-300 hover:text-white">
              About Me
            </a>
            <a href="#" className="text-md text-gray-300 hover:text-white">
              Testimonials
            </a>
          </div>
          <div className="mt-4 text-center text-gray-400">
            Made with 💕 by Shantnu
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
