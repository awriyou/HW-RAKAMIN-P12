
import React, { useState } from "react";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function selectSquare(square) {
    if (squares[square] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[square] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function restart() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  function renderSquare(i) {
    return (
      <>
        <div
          className=" bg-teal-400 w-8 h-6 my-2 text-white"
          onClick={() => selectSquare(i)}
        >
          {squares[i]}
        </div>
      </>
    );
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (squares.every(Boolean)) {
    status = "Scratch: Cat's game";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="container bg-slate-200 text-center pt-10">
      <div>{status}</div>
      <div className="bg-white mt-4 shadow-xl rounded-xl w-1/2 text-center mx-auto py-4 flex gap-4 justify-center">
        <div className="">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <button
        className="bg-teal-300 my-10 px-4 py-1 text-sm font-thin hover:bg-teal-600 hover:text-white rounded-lg"
        onClick={restart}
      >
        Restart Game
      </button>
    </div>
  );
}

// Kode sisanya (Game, calculateWinner, dan sebagainya) sama seperti kode pertama


function Game() {
  return (
    <div >
      <div >
        <Board />
      </div>
    </div>
  );
}





// eslint-disable-next-line no-unused-vars
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  return <Game />;
}

export default App;
