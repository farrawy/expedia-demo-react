import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const FinalScreen = () => {
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

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [cardholder, setCardholder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [threeDigit, setThreeDigit] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      IdNumber: idNumber,
      FirstName: name,
      LastName: lastName,
      Email: email,
      Address: address,
      PhoneNumber: phoneNumber,
      Airline: airline,
      DepartureCity: departureCity,
      DepartureAirport: departureAirport,
      ArrivalCity: arrivalCity,
      ArrivalAirport: arrivalAirport,
      DepartureDate: departureDate,
      ArrivalDate: arrivalDate,
      DepartureTime: departureTime,
      ArrivalTime: arrivalTime,
      FlightTime: flightTime,
      Price: price,
      NumberOfSeats: numberOfSeatsAvailable,
      FlightNumber: flightNumber,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/c59a4325-b714-4447-a373-b5f0c013657e",
        data
      )
      .then((response) => {
        console.log(response);
        setAddress("");
        setEmail("");
        setName("");
        setLastName("");
        setPhoneNumber("");
        setIdNumber("");
      });
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  return (
    <div className="">
      <Navbar />
      <div className="items-center justify-center m-5 flex-col flex ">
        <h1 className="text-3xl font-bold">
          Confirm Purchase for flight to {arrivalCity} ({arrivalAirport})
        </h1>
        <div className="flex space-x-1">
          <p>Flight Number: </p>
          <p className="font-semibold"> {flightNumber}</p>
        </div>
      </div>
      <div className="w-1/3 mx-auto px-4 py-8 rounded-lg mt-10">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 items-center justify-center  "
        >
          <div className=" grid grid-cols-2 gap-x-4 gap-y-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                placeholder="John"
              />
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
                placeholder="Doe"
              />
            </label>

            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                placeholder="john@doe.com"
              />
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Address:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                required
                placeholder="123 Main St"
              />
            </label>

            <label className="block text-gray-700 text-sm font-bold mb-2 ">
              Phone Number:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                required
                placeholder="123-456-7890"
              />
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2 ">
              ID Number:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                value={idNumber}
                onChange={(event) => setIdNumber(event.target.value)}
                required
                placeholder="123-456-7890"
              />
            </label>
          </div>

          <div className="border-t border-gray-200 my-2" />

          {/* Credit Card Form */}
          <label class="relative w-full flex flex-col">
            <span class="font-bold mb-3">Card number</span>
            <input
              class="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
              type="text"
              name="card_number"
              placeholder="0000 0000 0000 0000"
              maxLength={16}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          </label>

          <label class="relative flex-1 flex flex-col">
            <span class="font-bold mb-3">Expire date</span>
            <input
              class="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
              type="text"
              name="expire_date"
              placeholder="MM/YY"
              maxLength={4}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </label>

          <label class="relative flex-1 flex flex-col">
            <span class="font-bold flex items-center gap-3 mb-3">CVC/CVV</span>
            <input
              class="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
              type="text"
              name="card_cvc"
              placeholder="&bull;&bull;&bull;"
              maxLength={3}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </label>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 w-full"
            type="submit"
          >
            Purchase Ticket ${price}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FinalScreen;
