const container = document.querySelector(".container");

let grid = 16;

const boxSize = 600 / grid;

for(let i = 0; i < grid*grid; i++){
    const div = document.createElement("div");
    div.style.width = boxSize + "px";
    div.style.height = boxSize + "px";
    div.classList.add("box");
    container.append(div);
}