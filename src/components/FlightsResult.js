import React, { useState } from "react";
import Modal from "./Modal";

const FlightsResult = ({
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div
        className="w-full shadow-md rounded px-8 pt-6 pb-8 mb-4 items-center justify-center flex-col hover:cursor-pointer"
        onClick={openModal}
      >
        <div className="flex justify-between">
          <p className="font-bold text-lg">
            {departureTime} - {arrivalTime}
          </p>
          <p className="font-light text-lg">{flightTime} (Nonstop)</p>
          <p className="font-bold text-lg">{price}</p>
        </div>

        <div className="flex justify-between mb-3">
          <p className="text-sm font-light">
            {departureCity} ({departureAirport}) - {arrivalCity} (
            {arrivalAirport})
          </p>
          <p className="font-light text-sm">Roundtrip per traveller</p>
        </div>

        <div className="items-center flex">
          <img src={airlineLogo} alt="" className="w-10 " />
          <p className="text-sm">{airline}</p>
        </div>

        <div className="w-full bg-gray-200 my-5" style={{ height: 2 }} />
        <div className="mt-3">
          <p className="text-xs font-medium">
            No change fees • Carry-on included{" "}
          </p>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          closeModal={() => setIsModalOpen(false)}
          departureCity={departureCity}
          arrivalCity={arrivalCity}
          flightNumber={flightNumber}
          departureAirport={departureAirport}
          arrivalAirport={arrivalAirport}
          departureTime={departureTime}
          arrivalTime={arrivalTime}
          price={price}
          numberOfSeatsAvailable={numberOfSeatsAvailable}
          flightTime={flightTime}
          departureDate={departureDate}
          arrivalDate={arrivalDate}
          airline={airline}
          airlineLogo={airlineLogo}
        />
      )}
    </>
  );
};

export default FlightsResult;
