import React, { useState } from "react";
import { toast } from "react-hot-toast";
import image from "../assets/image.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import { GrPowerReset } from "react-icons/gr";
import bg from "../assets/bg.mp4";

const images = [image, image2, image3];

// Function to initialize the grid with random images
const initializeGrid = () => {
  let grid = [];
  for (let i = 0; i < 6; i++) {
    let row = [];
    for (let j = 0; j < 6; j++) {
      row.push({
        image: images[Math.floor(Math.random() * images.length)],
        revealed: false,
      });
    }
    grid.push(row);
  }
  return grid;
};

export default function ChainMode() {
  const [grid, setGrid] = useState(initializeGrid());
  const [tickets, setTickets] = useState(10);
  const [selected, setSelected] = useState([]);

  const handleClick = (i, j) => {
    if (tickets > 0 && !grid[i][j].revealed) {
      const newGrid = [...grid];
      newGrid[i][j].revealed = true;
      setGrid(newGrid);
      const newSelected = [...selected, newGrid[i][j].image];
      setSelected(newSelected);
      if (newSelected.length === 3) {
        if (!isMatch(newSelected)) {
          setTickets(tickets - 1);
          toast.error("You lost a ticket!");
        } else {
          setTickets(tickets + 10);
          toast.success("You won 10 tickets!");
        }
        setSelected([]);
      }
    }
  };

  const isMatch = (arr) => arr.every((val, i, arr) => val === arr[0]);

  const resetGame = () => {
    setGrid(initializeGrid());
    setTickets(10);
    setSelected([]);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <img
        src={image2}
        className="blur-md scale-125 absolute top-0 left-0 min-w-full min-h-full object-cover z-[-2]"
        alt=""
      />
      <video
        className=" absolute top-0 left-0 min-w-full min-h-full object-cover z-[-1]"
        muted
        loop
        autoPlay
        src={bg}
      ></video>
      <div className="text-white  text-xl text-center p-1 mb-4">
        Tickets: {tickets}
      </div>
      <button
        onClick={resetGame}
        className="mb-4 flex justify-center items-center gap-1 red-gradient-btn"
      >
        <GrPowerReset /> Reset
      </button>
      <div className=" grid grid-cols-6 gap-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6">
        {grid.map((row, i) =>
          row.map((cell, j) => (
            <div
              key={`${i}-${j}`}
              className={`w-16 h-16 sm:w-12 sm:h-12 lg:w-16 lg:h-16 ${
                cell.revealed
                  ? "bg-black rounded-md transition duration-500"
                  : "bg-gradient-to-r from-slate-300 to-slate-500 rounded-md transition duration-500"
              }`}
              onClick={() => handleClick(i, j)}
            >
              {cell.revealed && (
                <img
                  src={cell.image}
                  alt="fruit"
                  className="rounded-md w-full h-full object-cover"
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
