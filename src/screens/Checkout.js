import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  AiOutlineArrowRight,
  AiOutlineRight,
  AiFillCheckCircle,
  AiOutlineClose,
  AiFillDollarCircle,
} from "react-icons/ai";
import { BsCheckLg, BsBoxArrowUpRight } from "react-icons/bs";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import {
  BrowserRouter as Router,
  Link,
  useNavigate,
  Route,
  Switch,
} from "react-router-dom";

const Checkout = () => {
  const props = useLocation();
  const {
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
  } = props.state;
  return (
    <div className="bg-gray-50 h-full pb-24">
      <Navbar />
      <div className="mt-10">
        {/* Steps start */}
        <div className="flex items-center space-x-2 mx-8">
          <p className="flex items-center space-x-2 text-sm">
            {airline} · {departureAirport} <AiOutlineArrowRight />
            {arrivalAirport}
          </p>
          <div className="flex items-center space-x-2 text-sm">
            <AiOutlineRight />
            {airline} · {arrivalAirport} <AiOutlineArrowRight />
            {departureAirport} <AiOutlineRight />
          </div>
          <p className="font-bold text-sm">Review your trip</p>
        </div>
        {/* Steps end */}

        {/* Flexibility */}
        <div className="shadow-sm flex items-center mx-8 rounded-lg p-3 space-x-2 bg-white my-10">
          <div className="w-10 h-10 bg-purple-200 rounded-full items-center justify-center flex">
            <BsCheckLg size={18} color="black" />
          </div>
          <div className="">
            <p>No change fees for all flights</p>
            <p className="text-sm font-light">
              You can change these flights without paying a fee if plans change.
              Because flexibility matters.
            </p>
          </div>
        </div>
        {/* Flexibility End */}

        {/* Departure Flight */}
        <div className="shadow-sm mx-8 rounded-lg mt-10 p-3 bg-white text-sm font-light">
          <div>
            <p className="text-lg font-bold">
              {departureCity} to {arrivalCity}
            </p>

            <p>
              {departureTime} - {arrivalTime} ({flightTime}, nonstop)
            </p>

            <div className="flex items-center text-sm font-light">
              <img src={airlineLogo} alt="" width={50} height={50} />
              <p>
                {airline} · {departureDate.toLocaleDateString()}
              </p>
            </div>

            <div className="flex items-center space-x-2 mt-2">
              <FaPlaneDeparture />
              <div className="">
                <p>
                  {departureTime} - {departureCity}
                </p>
                <p>
                  {departureCity} ({departureAirport})
                </p>
              </div>
            </div>

            <div className="mt-6">
              <p>{flightTime} flight</p>
              <p>
                {airline} {flightNumber}
              </p>
            </div>

            <div className="mt-6 flex items-center space-x-2">
              <FaPlaneDeparture />
              <div>
                <p>
                  {arrivalTime} - {arrivalCity}
                </p>
                <p>
                  {arrivalCity} ({arrivalAirport})
                </p>
              </div>
            </div>

            {/* divider */}
            <div className="border-t border-black my-5" />
            {/* divider end */}

            <div>
              <p className="font-semibold">
                Estimated bag fees for Europ Essentials
              </p>
              <div className="flex justify-between">
                <p>Carry-on:</p>
                <p>Included</p>
              </div>
              <div className="flex justify-between">
                <p>1st checked bag:</p>
                <p>$0 to $40</p>
              </div>
              <div className="flex justify-between">
                <p>2nd checked bag:</p>
                <p>$6 to $40</p>
              </div>
            </div>

            <div className="my-4 space-y-2">
              <p className="">
                Baggage fees reflect the airline's standard fees based on the
                selected fare class. Fees may vary based on size and weight
                restrictions as well as loyalty programs and other promotions.
                For more information, check with{" "}
                <a
                  href={`https://www.google.com/search?q=${airline}`}
                  target="_blank"
                  className="underline text-blue-600"
                >
                  {airline}
                </a>
                .
              </p>
              <p>
                You can purchase checked bags from{" "}
                <a
                  href={`https://www.google.com/search?q=${airline}`}
                  target="_blank"
                  className="underline text-blue-600"
                >
                  {airline}
                </a>{" "}
                or through the link in your confirmation or check-in emails.
              </p>
            </div>
          </div>
        </div>
        {/* Departure Flight End */}

        {/* Seats */}
        <div className="shadow-sm mx-8 rounded-lg mt-10 p-3 bg-white text-sm font-light space-y-2">
          <p className="text-lg font-bold">Seats</p>
          <div className="flex items-center space-x-2">
            <AiOutlineClose />
            <p>Seat choice not available</p>
          </div>

          <p>
            After booking, contact the airline directly to choose your seat.
          </p>
        </div>
        {/* Seats end */}

        {/* Bags */}
        <div className="shadow-sm mx-8 rounded-lg mt-10 p-3 bg-white text-sm font-light space-y-2">
          <p className="text-lg font-bold">Bags</p>
          <div className="flex items-center space-x-2">
            <BsCheckLg />
            <p>Carry-on bag included</p>
          </div>

          <div className="flex items-center space-x-2">
            <AiFillDollarCircle />
            <p>1st checked bag for a fee</p>
          </div>

          <p>
            Bags for this flight must be purchased through the airline after
            booking.
          </p>
        </div>
        {/* Bags end */}
      </div>

      {/* modal */}
      <div className="bottom-0 left-0 right-0 fixed rounded-lg  bg-white h-20 flex justify-between items-center p-6 mx-8">
        <div>
          <p className="font-light text-xs">Trip total</p>
          <p className="font-bold text-2xl">${price}</p>
        </div>
        <Link
          to={"/final-screen"}
          state={{
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
          }}
          className="bg-blue-700 text-white h-11 p-4 items-center flex rounded-lg font-semibold"
        >
          <button>Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
