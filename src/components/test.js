const [departureCity, setDepartureCity] = useState("");
const [arrivalCity, setArrivalCity] = useState("");
const [filteredData, setFilteredData] = useState([]);
const [departureDate, setDepartureDate] = useState(new Date());
const [arrivalDate, setArrivalDate] = useState(new Date());

function handleDepartureCityChange(event) {
  setDepartureCity(event.target.value);
}

function handleArrivalCityChange(event) {
  setArrivalCity(event.target.value);
}

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

return (
  <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={departureCity}
        onChange={handleDepartureCityChange}
        className="border border-black rounded-lg mx-2 inline-block"
      />

      <input
        type="text"
        value={arrivalCity}
        onChange={handleArrivalCityChange}
        className="border border-black rounded-lg mx-2 inline-block"
      />

      <DatePicker
        selected={departureDate}
        onChange={(date) => setDepartureDate(date)}
        className="inline-block text-center"
      />

      <DatePicker
        selected={arrivalDate}
        onChange={(date) => setArrivalDate(date)}
        className="inline-block text-center"
      />

      <button
        type="submit"
        className="bg-gray-500 p-1 font-semibold text-white rounded-lg"
      >
        Search
      </button>
    </form>
    {filteredData.map((flight) => (
      <div key={flight.flightNumber}>
        <h2>{flight.flightNumber}</h2>
        <p>
          Departure: {flight.departureCity} ({flight.departureAirport})
        </p>
        <p>
          Arrival: {flight.arrivalCity} ({flight.arrivalAirport})
        </p>
        <p>Departure time: {flight.departureTime}</p>
        <p>Arrival time: {flight.arrivalTime}</p>
        <p>Price: {flight.price}</p>
        <p>Seats available: {flight.numberOfSeatsAvailable}</p>
      </div>
    ))}
  </div>
);

import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class MyForm extends React.Component {
  state = {
    startDate: new Date(),
    endDate: new Date(),
    option1: "",
    option2: "",
  };

  handleStartDateChange = (date) => {
    this.setState({ startDate: date });
  };

  handleEndDateChange = (date) => {
    this.setState({ endDate: date });
  };

  handleOption1Change = (event) => {
    this.setState({ option1: event.target.value });
  };

  handleOption2Change = (event) => {
    this.setState({ option2: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // submit the form data here
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="option1"
          >
            Option 1
          </label>
          <select
            value={this.state.option1}
            onChange={this.handleOption1Change}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="option2"
          >
            Option 2
          </label>
          <select
            value={this.state.option2}
            onChange={this.handleOption2Change}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="startDate"
          >
            Start Date
          </label>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleStartDateChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline
-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="endDate"
          >
            End Date
          </label>
          <DatePicker
            selected={this.state.endDate}
            onChange={this.handleEndDateChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}
