import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

const Contact = () => {
  const list = ["item1", "item2", "item3", "item4"];
  const [isOpen, setIsOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  return (
    <div className="flex justify-between px-[100px] py-[130px] items-center">
      <div className="flex flex-col justify-around gap-5 w-[1170px]">
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-bold text-gray-700">Get In Touch</h1>
          <h1 className="text-5xl font-bold text-gray-700">Contact Me</h1>
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.
          </p>
        </div>
        <div>
          <form action="#" method="POST">
            <div className="mt-4 mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your first name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your last name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="number"
              >
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="relative mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="number"
              >
                Choose a topic
              </label>
              <Link to="">
                <button
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="flex justify-between items-center shadow appearance-none rounded w-full py-2 px-3 text-[#9CA3AF] leading-tight bg-white "
                >
                  <span>{selectedItem || "Select one"}</span>
                  {!isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                </button>
              </Link>

              {!isOpen && (
                <div className="bg-white absolute top-20 flex flex-col items-start rounded-md shadow-md p-2 w-full">
                  {list.map((item, i) => (
                    <div
                      className="flex w-full justify-between hover:bg-gray-300 cursor-pointer rounded-lg px-2 py-1"
                      key={i}
                      onClick={() => handleItemClick(item)}
                    >
                      <h3>{item}</h3>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="checkbox"
                type="checkbox"
                className="form-checkbox h-5 w-5 text-purple-600"
              />
              <label htmlFor="checkbox" className="ml-2 text-gray-700">
                Remember me
              </label>
            </div>
            <div className="h-[60px] w-[160px] flex items-center justify-start">
              <button className="h-[48px] w-[100px] font-medium text-white border-purple-600 bg-purple-600 transition-all duration-300 ease-in-out rounded-md px-5 py-2 hover:text-purple-600 hover:bg-gray-200 hover:border hover:border-purple-600">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
