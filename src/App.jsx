import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChainMode from "./pages/ChainMode";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div>
      <Toaster />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChainMode />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
