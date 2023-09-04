// & Grab HTML elements
const grid = document.querySelector(".grid");
const refreshBtn = document.querySelector(".refresh-btn");
const defaultGridSize = 16;
let pixels = [];

// & Functions
function pixelEvent() {
  // Add event listener per pixel
  pixels.forEach((element) => {
    element.addEventListener("mouseover", (e) => {
      element.classList.add("hover");
    });
  });
}

function createGrid(newGrid) {
  for (i = 0; i < newGrid * newGrid; i++) {
    let pixelSize = 600 / newGrid;
    pixels[i] = document.createElement("div");
    pixels[i].classList.add("pixel");
    pixels[i].style.width = pixelSize + "px";
    pixels[i].style.height = pixelSize + "px";
    grid.appendChild(pixels[i]);
  }
}

function eraseGrid() {
  grid.textContent = "";
}

function refreshGrid() {
  refreshBtn.addEventListener("click", (e) => {
    // Erases grid and creates new user decided grid
    let newGrid = prompt(
      "Select how many pixels appear. The max grid is 100x100",
      100
    ); // User input

    if (newGrid > 100) {
      newGrid = 100;
    }

    if (newGrid < 1) {
      newGrid = 1;
    }

    eraseGrid();

    createGrid(newGrid);

    pixelEvent();
  });
}

// & Begin App
createGrid(defaultGridSize);

pixelEvent();

refreshGrid();
