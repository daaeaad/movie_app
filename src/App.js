import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./route/Home";
import About from "./route/About";
import Detail from "./route/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/detail" element={<Detail/>} />
        <Route path="/test" element={
          <h1>TEST</h1>
        } />
      </Routes>
    </Router>
  );
}

export default App;