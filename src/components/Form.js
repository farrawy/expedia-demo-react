import React, { useState } from "react";

import Navbar from "./Navbar";

import "./Form.css";
import FlightsList from "../screens/FlightsList";

const Form = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <div className="container mx-auto px-4 py-8 border-2 border-gray-300 rounded-lg mt-10">
        <div className="flex lg:space-x-6 flex-row items-center justify-center pb-5 border-b-2 w-full space-x-3  ">
          <span>Stays</span>
          <span
            className={`text-blue-500 ${isActive ? "relative" : ""} `}
            onClick={handleClick}
          >
            Flights
            {isActive && (
              <span className="absolute inset-0 h-1 bg-blue-500 top-10"></span>
            )}
          </span>
          <span>Cars</span>
          <span>Packages</span>
          <span>Things to do</span>
          <span>Cruises</span>
        </div>
        <div className="pt-5">
          <FlightsList />
        </div>
      </div>
    </div>
  );
};

export default Form;
