const container = document.querySelector(`.grid`);

const reset = document.querySelector(`.reset`);

const slider = document.querySelector(`.slider`);

let rainbow = document.querySelector(`.rainbow`);

function start(size = 16) {
  container.style.cssText = `display: grid;
    grid-template-columns: repeat(${size}, ${960 / size}px);
    grid-template-rows: repeat(${size}, ${960 / size}px);`;
  for (let i = 0; i < size; i++) {
    for (let i = 0; i < size; i++) {
      let div = document.createElement("div");
      div.classList.add("cell");

      container.appendChild(div);
    }
  }

  let cells = findCells();

  cells.forEach((cell) => {
    cellColor(cell);
  });
}

const resetGrid = function () {
  removeAllChildNodes(container);
};
const findCells = function () {
  return document.querySelectorAll(".cell");
};
const cellColor = function (cell, color = "black") {
  cell.addEventListener("mouseover", () => {
    cell.style.cssText = `background-color: ${color};`;
  });
};

const updateSlider = function () {
  const sliderText = document.querySelector(`.slider-text`);
  sliderText.innerText = `Current size: ${slider.value} ✕ ${slider.value}`;
};

const toggleRainbow = function () {
  let cells = findCells();

  if (rainbow.value == `false`) {
    rainbow.value = `true`;
    cells.forEach((cell) => {
      cellColor(cell, randomRgba());
    });
  } else {
    rainbow.value = `false`;
    cells.forEach((cell) => {
      cellColor(cell, `black`);
    });
  }
};

/* Event listeners */

reset.addEventListener("click", () => {
  resetGrid();
  start(slider.value);
});

slider.addEventListener("input", () => {
  updateSlider();
});

slider.addEventListener("mouseup", () => {
  resetGrid();
  start(slider.value);
});

rainbow.addEventListener("click", () => {
  toggleRainbow();
});

/* Helper functions */

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function randomRgba() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return "rgb(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")";
}

/* init */
start();
