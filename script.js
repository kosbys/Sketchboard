start();

const cells = document.querySelectorAll(".cell");

const reset = document.querySelector(`.reset`);

const slider = document.querySelector(`.slider`);

function start(size = 16) {
  const container = document.querySelector(".grid");
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
}

const resetGrid = function (cells) {
  cells.forEach((cell) => {
    cell.style.cssText = "background-color: white";
  });
};

const updateSlider = function () {
  const sliderText = document.querySelector(`.slider-text`);
  sliderText.innerText = `Current size: ${slider.value} ✕ ${slider.value}`;
};

cells.forEach((cell) => {
  cell.addEventListener("mouseover", () => {
    cell.style.cssText = "background-color: black;";
  });
});

reset.addEventListener("click", () => {
  resetGrid(cells);
});

slider.addEventListener("input", () => {
  updateSlider();
});
