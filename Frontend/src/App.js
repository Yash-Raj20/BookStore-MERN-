import React from "react";
import Home from "./home/home";
import { Navigate, Route, Routes } from "react-router-dom";
import Books from "./Books/Books";
import Signup from "./components/Signup";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider.js";


function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser);
  return (
    <>
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={authUser?<Books />:<Navigate to = "/signup"/>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
