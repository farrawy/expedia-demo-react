import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { MdLocationOn } from "react-icons/md";

import "react-datepicker/dist/react-datepicker.css";
import FlightsResult from "./FlightsResult";

const flights = [
  {
    flightNumber: "AA123",
    departureCity: "New York",
    arrivalCity: "Los Angeles",
    departureAirport: "JFK",
    arrivalAirport: "LAX",
    departureDate: "January 1, 2022",
    departureTime: "8:00 AM",
    arrivalTime: "11:00 AM",
    flightTime: "3h",
    price: "$300",
    numberOfSeatsAvailable: 50,
    airline: "American Airlines",
    airlineLogo:
      "https://s21.q4cdn.com/616071541/files/multimedia-gallery/assets/Logos/american-airlines/THUMB-aa_aa__vrt_rgb_grd_pos.png",
  },
  {
    flightNumber: "BA456",
    departureCity: "Chicago",
    arrivalCity: "San Francisco",
    departureAirport: "ORD",
    arrivalAirport: "SFO",
    departureDate: "January 2, 2022",
    departureTime: "9:00 AM",
    arrivalTime: "12:00 PM",
    flightTime: "3h",
    price: "$350",
    numberOfSeatsAvailable: 40,
    airline: "American Airlines",
    airlineLogo:
      "https://s21.q4cdn.com/616071541/files/multimedia-gallery/assets/Logos/american-airlines/THUMB-aa_aa__vrt_rgb_grd_pos.png",
  },
  {
    flightNumber: "DL789",
    departureCity: "Miami",
    arrivalCity: "Seattle",
    departureAirport: "MIA",
    arrivalAirport: "SEA",
    departureDate: "January 3, 2022",
    departureTime: "10:00 AM",
    arrivalTime: "1:00 PM",
    flightTime: "3h",
    price: "$400",
    numberOfSeatsAvailable: 30,
    airline: "Delta Airlines",
    airlineLogo:
      "https://logos-world.net/wp-content/uploads/2021/08/Delta-Emblem.png",
  },
  {
    flightNumber: "UA321",
    departureCity: "Boston",
    arrivalCity: "Denver",
    departureAirport: "BOS",
    arrivalAirport: "DEN",
    departureDate: "January 4, 2022",
    departureTime: "11:00 AM",
    arrivalTime: "2:00 PM",
    flightTime: "3h",
    price: "$450",
    numberOfSeatsAvailable: 20,
    airline: "United Airlines",
    airlineLogo:
      "https://marka-logo.com/wp-content/uploads/2020/11/United-Airlines-Logo.png",
  },
  {
    flightNumber: "FJ654",
    departureCity: "Istanbul",
    arrivalCity: "Ankara",
    departureAirport: "IST",
    arrivalAirport: "ANK",
    departureDate: "January 5, 2022",
    departureTime: "12:00 PM",
    arrivalTime: "3:00 PM",
    flightTime: "3h",
    price: "$100",
    numberOfSeatsAvailable: 10,
    airline: "Pegasus Airlines",
    airlineLogo:
      "https://www.frankfurt-airport.com/content/dam/fraport-travel/airport/fl%C3%BCge-und-airlines/airlines/airline-icons_1_1/PC_Pegasus1.png/_jcr_content/renditions/original./PC_Pegasus1.png",
  },
  {
    flightNumber: "FJ654",
    departureCity: "Istanbul",
    arrivalCity: "Ankara",
    departureAirport: "IST",
    arrivalAirport: "ANK",
    departureDate: "January 5, 2022",
    departureTime: "12:00 PM",
    arrivalTime: "3:00 PM",
    flightTime: "3h",
    price: "$150",
    numberOfSeatsAvailable: 10,
    airline: "Turkish Airlines",
    airlineLogo:
      "https://1000logos.net/wp-content/uploads/2020/04/Turkish-Airlines-symbol.png",
  },
];

const FlightsList = () => {
  const [departureCity, setDepartureCity] = useState(flights[0].departureCity); //option 1
  const [arrivalCity, setArrivalCity] = useState(flights[0].arrivalCity); //option 2
  const [filteredData, setFilteredData] = useState([]);
  const [departureDate, setDepartureDate] = useState(new Date());
  const [arrivalDate, setArrivalDate] = useState(new Date());

  function handleDepartureCityChange(event) {
    setDepartureCity(event.target.value);
  }

  function handleArrivalCityChange(event) {
    setArrivalCity(event.target.value);
  }

  const handleDepartureDateChange = (date) => {
    setDepartureDate(date);
  };

  const handleArrivalDateChange = (date) => {
    setArrivalDate(date);
  };

  function handleSubmit(event) {
    event.preventDefault();
    const filtered = flights.filter((flight) => {
      return (
        flight.departureCity === departureCity &&
        flight.arrivalCity === arrivalCity
      );
    });
    setFilteredData(filtered);
  }

  useEffect(() => {
    console.log(departureDate);
  }, []);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 items-center justify-center flex-col text-center"
      >
        <div>
          <div className="mb-4 flex-row flex">
            {/* departure city */}
            <select
              value={departureCity}
              onChange={handleDepartureCityChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              {flights.map((city) => (
                <option value={city.departureCity}>
                  <p>
                    {city.departureCity} ({city.departureAirport})
                  </p>
                </option>
              ))}
            </select>

            {/* arrival city */}
            <select
              value={arrivalCity}
              onChange={handleArrivalCityChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              {flights.map((city) => (
                <option value={city.arrivalCity}>
                  {city.arrivalCity} ({city.arrivalAirport})
                </option>
              ))}
            </select>

            <DatePicker
              selected={departureDate}
              onChange={handleDepartureDateChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />

            <DatePicker
              selected={arrivalDate}
              onChange={handleArrivalDateChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <button
            type="submit"
            className="bg-[#3E6A7E] px-3 py-2 font-semibold text-white rounded-lg"
          >
            Search
          </button>
        </div>
      </form>

      {filteredData.map((flight) => (
        <FlightsResult
          key={flight.flightNumber}
          flightNumber={flight.flightNumber}
          departureCity={flight.departureCity}
          departureAirport={flight.departureAirport}
          arrivalCity={flight.arrivalCity}
          arrivalAirport={flight.arrivalAirport}
          departureTime={flight.departureTime}
          arrivalTime={flight.arrivalTime}
          price={flight.price}
          numberOfSeatsAvailable={flight.numberOfSeatsAvailable}
          flightTime={flight.flightTime}
          departureDate={departureDate}
          arrivalDate={arrivalDate}
          airline={flight.airline}
          airlineLogo={flight.airlineLogo}
        />
      ))}
    </div>
  );
};

export default FlightsList;
