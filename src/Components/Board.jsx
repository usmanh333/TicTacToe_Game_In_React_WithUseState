import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
//   craeting state with null array of length 9
  const [state, setState] = useState(Array(9).fill(null));
//   creating playing turns
  const [isXTurn, setIsXTurn] = useState(true);

//   handling the clicks on the board and turns 
  const handleClick = (ind) => {
    // checking if user clicks on the board twice and the state dont need to change 
    if(state[ind] !== null  ){
        return
    }
    // making copy of the array 
    const copyState = [...state];
    copyState[ind] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };
// Possible winning state
  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 6],
      [2, 4, 6],
    ];
    // check which state matched and who won
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[b] === state[c]) {
        return state[a];
      }
    }
    return false;
  };
  const isWinner = checkWinner();

  return (
    <div>
      <div className="board-container">
        {isWinner ? (
            // Display the winner
          <>{isWinner} Won the Game <button onClick={()=>{
            setState(Array(9).fill(null))
          }}>Play Again</button></>
        ) : (
          <>
          {/* Displaying turns on screen */}
          <h4>Player {isXTurn? "X": "O"} Its Your Turn Now</h4>
            <div className="boad-row">
              <Square onClick={() => handleClick(0)} value={state[0]} />
              <Square onClick={() => handleClick(1)} value={state[1]} />
              <Square onClick={() => handleClick(2)} value={state[2]} />
            </div>
            <div className="boad-row">
              <Square onClick={() => handleClick(3)} value={state[3]} />
              <Square onClick={() => handleClick(4)} value={state[4]} />
              <Square onClick={() => handleClick(5)} value={state[5]} />
            </div>
            <div className="boad-row">
              <Square onClick={() => handleClick(6)} value={state[6]} />
              <Square onClick={() => handleClick(7)} value={state[7]} />
              <Square onClick={() => handleClick(8)} value={state[8]} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Board;
