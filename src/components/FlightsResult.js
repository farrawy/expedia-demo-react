import React from "react";

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
  return (
    <div className="w-full shadow-md rounded px-8 pt-6 pb-8 mb-4 items-center justify-center flex-col hover:cursor-pointer">
      <div className="flex justify-between">
        <p className="font-bold text-lg">
          {departureTime} - {arrivalTime}
        </p>
        <p className="font-light text-lg">{flightTime} (Nonstop)</p>
        <p className="font-bold text-lg">{price}</p>
      </div>

      <div className="flex justify-between mb-3">
        <p className="text-sm font-light">
          {departureCity} ({departureAirport}) - {arrivalCity} ({arrivalAirport}
          )
        </p>
        <p className="font-light text-sm">Roundtrip per traveller</p>
      </div>

      <div className="flex items-center">
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
  );
};

export default FlightsResult;
