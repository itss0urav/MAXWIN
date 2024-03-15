import React from "react";
import Navbar from "../components/Navbar";

export default function Leaderboard() {
  const tempData = [
    { id: 1, name: "Hari", tickets: 200 },
    { id: 2, name: "Arjun", tickets: 100 },
    { id: 3, name: "Rahul", tickets: 300 },
    { id: 4, name: "dany", tickets: 400 },
    { id: 5, name: "phony", tickets: 500 },
    { id: 6, name: "tocker", tickets: 600 },
  ];
  return (
    <div className="bg-black h-screen">
      <Navbar />
      {/* table here */}
    </div>
  );
}
