document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll("#board div");
  const status = document.getElementById("status");
  const newGameButton = document.querySelector(".btn");
  let currentPlayer = "X"; // Initialize the current player as "X"
  let gameOver = false;

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

  squares.forEach((square) => {
    square.classList.add("square");

    square.addEventListener("click", () => {
      if (!square.classList.contains("X") && !square.classList.contains("O") && !gameOver) {
        // Check if the square is empty and the game is not over
        square.classList.add(currentPlayer); // Add the "X" or "O" class for styling
        square.textContent = currentPlayer; // Add the X or O text

        // Check for a win or draw
        if (checkWin()) {
          status.textContent = `Congratulations! ${currentPlayer} is the Winner! 🎉`;
          status.classList.add("you-won");
          gameOver = true;
        } else if (checkDraw()) {
          status.textContent = "It's a draw!";
          gameOver = true;
        } else {
          // Switch the current player for the next turn
          currentPlayer = currentPlayer === "X" ? "O" : "X";
          status.textContent = `Player ${currentPlayer}'s turn`;
        }
      }
    });

    // Add mouseover event listener to change style on hover
    square.addEventListener("mouseover", () => {
      square.classList.add("hover");
    });

    // Add mouseout event listener to revert to the original style on mouseout
    square.addEventListener("mouseout", () => {
      square.classList.remove("hover");
    });
  });

  newGameButton.addEventListener("click", resetGame);

  // Function to check for a win
  const checkWin = () => {
    // Your win condition logic goes here
    // Return true if there's a win, otherwise return false
  };

  // Function to check for a draw
  const checkDraw = () => {
    // Your draw condition logic goes here
    // Return true if it's a draw, otherwise return false
  };
});
