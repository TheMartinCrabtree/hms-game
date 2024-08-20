import React from "react";

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
