const container = document.querySelector(".grid");

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
}

start();

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("mouseover", () => {
    cell.style.cssText = "background-color: black;";
  });
});
