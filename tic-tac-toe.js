document.addEventListener("DOMContentLoaded", () => {
  // Get all the squares
  const squares = document.querySelectorAll("#board div");

  // Add the "square" class to each square
  squares.forEach((square) => {
    square.classList.add("square");
  });
});
