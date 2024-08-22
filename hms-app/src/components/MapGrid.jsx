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
    Array(6).fill({
      id: "default-room-id",
      type: "WALL",
      isOpen: false,
    })
  );

  // Start the path at [0][0] with START
  grid[0][0] = {
    ...grid[0][0],
    type: "START",
    isOpen: true,
    id: `room-${getRandomInt(3000).toString()}`,
  };

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

    // Randomly choose a move
    const move =
      possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

    if (move === "right") {
      col++;
    } else if (move === "down") {
      row++;
    }
    grid[row][col] = {
      ...grid[row][col],
      type: "ROOM",
      id: `room-${getRandomInt(3000).toString()}`,
    };
  }
  grid[5][5] = {
    ...grid[5][5],
    type: "ROOM",
    id: `room-${getRandomInt(3000).toString()}`,
  };

  return grid;
}

const MapGrid = () => {
  const [mapData, setMapData] = useState();
  useEffect(() => {
    const newMap = createMap;
    setMapData(newMap);
  }, []);
  console.log("mapData", mapData);

  const _renderRoom = (roomData) => {
    const { id, type, isOpen } = roomData;
    const clickable = type !== "WALL";

    return clickable ? (
      <td
        key={id}
        style={{
          border: "1px solid black",
          padding: "10px",
          textAlign: "center",
          backgroundColor: `${isOpen ? "white" : "grey"}`,
        }}
        onClick={() => console.log("clicked")}
      >
        {type}
      </td>
    ) : (
      <td
        key={`room-${getRandomInt(3000).toString()}`}
        style={{
          border: "1px solid black",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "black",
        }}
      >
        {type}
      </td>
    );
  };

  return (
    <table style={{ borderCollapse: "collapse" }}>
      <tbody>
        {mapData &&
          mapData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((roomData) => _renderRoom(roomData))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default MapGrid;
