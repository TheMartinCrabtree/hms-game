import React from "react";
import { rollD2 } from "./utilities/rng";

const _createRoomData = (data) => {
  // add a difficulty modifier
  const { type } = data;
  let roomData = { mob: "none" };

  const genMonster = () => {
    let randMob = rollD2();
    return randMob === 1 ? "Dire Rat" : "Dire Beaver";
  };

  switch (type) {
    case "START":
      break;
    case "BOSS":
      roomData.mob = "BOSS!";
      break;
    default:
      roomData.mob = genMonster();
      break;
  }

  return roomData;
};

const MapGrid = () => {
  function createMap() {
    // Initialize a 6x6 array filled with "X"
    const mapArr = Array.from({ length: 6 }, () => Array(6).fill("X"));

    // Start the path at [0][0]
    mapArr[0][0] = "O";

    let row = 0;
    let col = 0;

    // Create a path to [5][5]
    while (row !== 5 || col !== 5) {
      const possibleMoves = [];

      if (col < 5) {
        possibleMoves.push("right");
      }
      if (row < 5) {
        possibleMoves.push("down");
      }

      const move =
        possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

      if (move === "right") {
        col++;
      } else if (move === "down") {
        row++;
      }

      mapArr[row][col] = "O";
    }

    return mapArr;
  }

  const grid = createMap();
  return (
    <table style={{ borderCollapse: "collapse" }}>
      <tbody>
        {grid.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MapGrid;
