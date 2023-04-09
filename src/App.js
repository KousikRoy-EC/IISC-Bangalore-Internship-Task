import React from "react";
import HomePage from "./Components/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Modes from "./Components/Modes";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/modes" element={<Modes />} />
      </Routes>
    </Router>
  );
}

export default App;
