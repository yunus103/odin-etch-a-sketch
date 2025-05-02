const container = document.querySelector(".container");
const btnSet = document.querySelector("#set");

let defaultGrid = 16;

createGrid(defaultGrid);

btnSet.addEventListener("click", () => {
    const grid = Number(document.querySelector("#grid-count").value);
    
    if(!(grid < 1 || grid > 100))
    {
        container.replaceChildren();
        createGrid(grid);
    }
});



function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function createGrid(number){
    let boxSize = 600 / number;
    for(let i = 0; i < number*number; i++){
        const div = document.createElement("div");
        div.style.width = boxSize + "px";
        div.style.height = boxSize + "px";
    
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = getRandomColor();
        });
        div.classList.add("box");
        container.append(div);
    }
  }