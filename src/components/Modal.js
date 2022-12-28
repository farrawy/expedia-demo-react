import React, { useEffect, useState } from "react";
import { VscClose } from "react-icons/vsc";
import {
  AiOutlineCheck,
  AiFillDollarCircle,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import {
  BrowserRouter as Router,
  Link,
  useNavigate,
  Route,
  Switch,
} from "react-router-dom";
import Checkout from "../screens/Checkout";

const Modal = ({
  isOpen,
  closeModal,
  flightNumber,
  departureCity,
  departureAirport,
  arrivalCity,
  arrivalAirport,
  departureTime,
  arrivalTime,
  price,
  numberOfSeatsAvailable,
  flightTime,
  departureDate,
  arrivalDate,
  airline,
  airlineLogo,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [protectionPrice, setProtectionPrice] = useState(price + 6);

  const flightInfo = {
    isOpen,
    closeModal,
    flightNumber,
    departureCity,
    departureAirport,
    arrivalCity,
    arrivalAirport,
    departureTime,
    arrivalTime,
    price,
    numberOfSeatsAvailable,
    flightTime,
    departureDate,
    arrivalDate,
    airline,
    airlineLogo,
  };

  const name = "Ahmed";
  const age = 22;
  const location = "Istanbul";

  const handleCheckChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`modal fixed inset-0 right-0 overflow-auto z-50 flex `}>
      <div className="modal-content bg-white p-4 rounded-lg ml-auto shadow-lg lg:w-1/3 w-full">
        <div className="flex py-2 border-b-[1px] border-gray-200 items-center">
          <button className="p-2" onClick={closeModal}>
            <VscClose size={24} />
          </button>

          <h3>Review fare to {departureCity}</h3>
        </div>

        <div className="py-2">
          {/* Start of details */}
          <h1 className="font-semibold text-lg">
            {departureTime} - {arrivalTime} (Nonstop)
          </h1>
          <div className="flex items-center p-1 pb-3">
            <img src={airlineLogo} alt="" className="w-10" />
            <p>{airline}</p>
          </div>

          {/* Show details */}
          <p>Show details</p>
          {/* End of show details */}

          {/* Flight info modal start */}
          <div className="w-2/4 bg-white h-auto border-[1px] border-gray-300 rounded-lg p-4">
            <p className="font-bold">{isChecked ? protectionPrice : price}</p>
            <p className="font-extralightlight text-[9px]">
              {isChecked ? protectionPrice : price} roundtrip for 1 traveler
            </p>
            <p className="font-light text-sm">Cabin: Economy</p>

            {/* Bags */}
            <div className="mt-4 space-y-2">
              <p>Bags</p>
              <div className="flex items-center space-x-2">
                <AiOutlineCheck />
                <p className="font-light text-sm">Carry-on bag included</p>
              </div>
              <div className="flex items-center space-x-2 justify-between">
                <div className="items-center flex space-x-2">
                  <AiFillDollarCircle />
                  <p className="font-light text-sm">1st checked bag:</p>
                </div>
                <p className="font-light text-sm">$0-$40</p>
              </div>
            </div>
            {/* Bags end */}

            {/* Flexibility */}
            <div className="mt-4 space-y-2">
              <p className="">Flexibility</p>
              <div className="flex items-center space-x-2">
                <VscClose />
                <p className="font-light text-sm">Non-refundable</p>
              </div>
              <div className="flex items-center space-x-2">
                <AiOutlineCheck />
                <p className="font-light text-sm">No change fees</p>
              </div>
            </div>
            {/* Flexibility end */}

            {/* divider */}
            <div className="border-t-[1px] border-black my-4" />
            {/* divider end */}

            {/* Price drop protection */}
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-6">
                  <path d="M12 21c6.632-2.129 8-7.998 8-10.524V4H4v.81l4.8 4.857 2.4-2.429 3.44 3.481a1.98 1.98 0 012.46.439 2.041 2.041 0 01.119 2.524 2 2 0 01-1.087.764c-.438.122-.904.09-1.32-.09a2.006 2.006 0 01-.976-.905 2.045 2.045 0 01-.204-1.323L11.2 9.667l-2.4 2.428L4 7.238v3.238C4 13.002 5.368 18.871 12 21z"></path>
                </svg>
                <p className="text-sm font-light">Price Drop Protection</p>
                <AiOutlineInfoCircle size={20} color="blue" />
              </div>
              <p className="font-light text-xs ml-7">
                We'll refund the difference if the price drops before you fly.
              </p>
              <div className="flex items-center space-x-2 py-2 ml-7 justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckChange}
                  />
                  <p className="text-xs">Add to this flight</p>
                </div>
                <p className="text-xs">$6</p>
              </div>
            </div>
            {/* Price drop protection end */}
            <Link
              to={(props) => ({
                ...props,
                pathname: "/checkout",
                state: { name, age, location },
              })}
              className="justify-center bg-blue-600 rounded-lg items-center
              text-white inline-flex w-full flex-wrap font-[500]
              hover:bg-blue-700 cursor-pointer p-1 mt-3"
            >
              <button>Select</button>
            </Link>
          </div>
          {/* Flight info modal end */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
