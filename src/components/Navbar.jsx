import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className=" z-10 fixed w-full flex items-center justify-between px-6 py-4 text-white sm:px-12">
      <div className="text-2xl font-bold">Logo</div>
      <div className="space-x-4">
        <Link to="/Leaderboard">Leaderbaord</Link>
      </div>
    </nav>
  );
}
