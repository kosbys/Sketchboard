const container = document.querySelector(".grid");

const reset = document.querySelector(`.reset`);

const slider = document.querySelector(`.slider`);
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

  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.cssText = "background-color: black;";
    });
  });
}

const resetGrid = function () {
  removeAllChildNodes(container);
};

const updateSlider = function () {
  const sliderText = document.querySelector(`.slider-text`);
  sliderText.innerText = `Current size: ${slider.value} ✕ ${slider.value}`;
};

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

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

start();
