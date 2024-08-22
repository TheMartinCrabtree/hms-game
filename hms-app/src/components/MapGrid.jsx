import React, { useState, useEffect } from "react";
import { rollD2, getRandomInt } from "./utilities/rng";
import Room from "../classes/room";

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
function createMap() {
  // Initialize a 6x6 array
  const grid = Array.from({ length: 6 }, () =>
    Array(6).fill({ id: `room-${getRandomInt(3000).toString()}`, type: "WALL" })
  );

  // Start the path at [0][0] with START object
  grid[0][0] = { id: grid[0][0].id, type: "START" };

  let row = 0;
  let col = 0;

  // Create a path to [5][5]
  while (row !== 5 || col !== 5) {
    const possibleMoves = [];

    // Check if we can move right
    if (col < 5) {
      possibleMoves.push("right");
    }
    // Check if we can move down
    if (row < 5) {
      possibleMoves.push("down");
    }

    // Randomly choose a move
    const move =
      possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

    // Make the move
    if (move === "right") {
      col++;
    } else if (move === "down") {
      row++;
    }
    grid[row][col] = { id: grid[row][col].id, type: "ROOM" };
  }
  grid[5][5] = { id: grid[row][col].id, type: "ROOM" };

  return grid;
}

const MapGrid = () => {
  const [mapData, setMapData] = useState();
  useEffect(() => {
    const newMap = createMap;
    setMapData(newMap);
  }, []);

  return (
    <table style={{ borderCollapse: "collapse" }}>
      <tbody>
        {mapData &&
          mapData.map((row, rowIndex) => (
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
                  {cell.type}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default MapGrid;
