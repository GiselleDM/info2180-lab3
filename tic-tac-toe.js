document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll("#board div");
  const status = document.getElementById("status");
  const newGameButton = document.querySelector(".btn");
  let currentPlayer = "X"; // Initialize the current player as "X"
  let gameOver = false;

  // Define the win patterns
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  // Function to reset the game
  const resetGame = () => {
    squares.forEach((square) => {
      square.classList.remove("X", "O");
      square.textContent = "";
    });
    status.textContent = "Move your mouse over a square and click to play an X or an O.";
    status.classList.remove("you-won");
    gameOver = false;
    currentPlayer = "X";
  };

  // Function to check for a win
  const checkWin = () => {
    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        squares[a].classList.contains(currentPlayer) &&
        squares[b].classList.contains(currentPlayer) &&
        squares[c].classList.contains(currentPlayer)
      ) {
        return true;
      }
    }
    return false;
  };

  // Function to check for a draw
  const checkDraw = () => {
    return [...squares].every((square) => square.classList.contains("X") || square.classList.contains("O"));
  };

  squares.forEach((square) => {
    square.classList.add("square");

    square.addEventListener("click", () => {
      if (!square.classList.contains("X") && !square.classList.contains("O") && !gameOver) {
        square.classList.add(currentPlayer);
        square.textContent = currentPlayer;

        if (checkWin()) {
          status.textContent = `Congratulations! ${currentPlayer} is the Winner! 🎉`;
          status.classList.add("you-won");
          gameOver = true;
        } else if (checkDraw()) {
          status.textContent = "It's a draw!";
          gameOver = true;
        } else {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
          status.textContent = `Player ${currentPlayer}'s turn`;
        }
      }
    });

    square.addEventListener("mouseover", () => {
      square.classList.add("hover");
    });

    square.addEventListener("mouseout", () => {
      square.classList.remove("hover");
    });
  });

  newGameButton.addEventListener("click", resetGame);
});
