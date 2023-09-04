const grid = document.querySelector(".grid");
const refreshBtn = document.querySelector(".refresh-btn");
pixels = [];

for (i = 0; i < 256; i++) {
  pixels[i] = document.createElement("div");
  pixels[i].classList.add("pixel");
  grid.appendChild(pixels[i]);
}

pixels.forEach((element) => {
  element.addEventListener("mouseover", (e) => {
    element.classList.add("hover");
  });
});

refreshBtn.addEventListener("click", (e) => {
  let newGrid = prompt(
    "Select how many pixels appear. The max grid is 100x100",
    100
  );

  if (newGrid > 100) {
    newGrid = 100;
  }

  if (newGrid < 1) {
    newGrid = 1;
  }

  for (i = 0; i < pixels.length; i++) {
    pixels[i].remove();
  }

  for (i = 0; i < newGrid * newGrid; i++) {
    let pixelSize = 600 / newGrid - 2;
    pixels[i] = document.createElement("div");
    pixels[i].classList.add("pixel");
    pixels[i].style.width = pixelSize + "px";
    pixels[i].style.height = pixelSize + "px";
    grid.appendChild(pixels[i]);
  }

  pixels.forEach((element) => {
    element.addEventListener("mouseover", (e) => {
      element.classList.add("hover");
    });
  });
});
