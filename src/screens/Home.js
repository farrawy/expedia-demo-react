import React from "react";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Form />
      <div className="w-60 bg-yellow-200 rounded">
        <p className="text-sm">
          Lütfen sadece aşağıdaki gibi aynı şehir sırasını seçin:
        </p>
        <ul className="flex space-x-2">
          <li className="text-sm">New York (JFK) </li>
          <li className="text-sm">Los Angeles (LAX)</li>
        </ul>
        <ul className="flex space-x-2">
          <li className="text-sm">Chicago (ORD)</li>
          <li className="text-sm">San Francisco (SFO)</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
