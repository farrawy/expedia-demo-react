import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./screens/Checkout";
import Home from "./screens/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/checkout" component={Checkout} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
