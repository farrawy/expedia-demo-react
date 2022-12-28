import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./screens/Checkout";
import Home from "./screens/Home";
import FinalScreen from "./screens/FinalScreen";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/final-screen" element={<FinalScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
