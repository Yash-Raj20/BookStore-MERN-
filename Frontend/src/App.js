import React from "react";
import Home from "./home/home";
import { Route, Routes } from "react-router-dom";
import Books from "./Books/Books";
import Signup from "./components/Signup";


function App() {
  return (
    <>
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
