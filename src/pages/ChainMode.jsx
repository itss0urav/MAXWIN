import React, { useState } from "react";
import { toast } from "react-hot-toast";
import image from "../assets/image.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

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

  return (
    <div className="">
      <div className="text-white bg-gray-950 text-xl text-center p-1">
        Tickets: {tickets}
      </div>
      <div className="bg-gray-800 h-screen flex items-center justify-center">
        <div className="grid grid-cols-6 gap-4">
          {grid.map((row, i) =>
            row.map((cell, j) => (
              <div
                key={`${i}-${j}`}
                className={`w-16 h-16 ${
                  cell.revealed
                    ? "bg-green-500 rounded-md"
                    : " bg-gradient-to-r from-slate-300 to-slate-500 rounded-md"
                }`}
                onClick={() => handleClick(i, j)}
              >
                {cell.revealed && (
                  <img
                    src={cell.image}
                    alt="fruit"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
