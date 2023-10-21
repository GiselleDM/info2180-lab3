document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll("#board div");
  const status = document.getElementById("status");
  let currentPlayer = "X"; // Initialize the current player as "X"

  squares.forEach((square) => {
    square.classList.add("square");

    square.addEventListener("click", () => {
      if (!square.classList.contains("X") && !square.classList.contains("O")) {
        // Check if the square is empty
        square.classList.add(currentPlayer); // Add the "X" or "O" class for styling
        square.textContent = currentPlayer; // Add the X or O text

        // Check for a win or draw here (implement this logic later)

        // Switch the current player for the next turn
        currentPlayer = currentPlayer === "X" ? "O" : "X";

        // Update the status message
        status.textContent = `Player ${currentPlayer}'s turn`;
      }
    });
  });
});
