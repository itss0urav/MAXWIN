import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChainMode from "./pages/ChainMode";
import { Toaster } from "react-hot-toast";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Leaderboard from "./pages/Leaderboard";
export default function App() {
  return (
    <div>
      <Toaster />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChainMode />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Leaderboard" element={<Leaderboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
