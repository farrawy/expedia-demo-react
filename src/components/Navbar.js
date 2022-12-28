import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-[#3E6A7E] p-3 flex justify-between items-center px-10 mb-10">
        <a href="/" className="text-white font-semibold text-4xl">
          Zaren Group
        </a>
        <div className="flex items-center">
          <a
            href="Home"
            className="px-3 py-2 rounded-md text-sm font-medium text-white bg-[#356276] focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Home
          </a>
          <a
            href="About"
            className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            About Us
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
