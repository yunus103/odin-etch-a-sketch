const container = document.querySelector(".container");
const btnSet = document.querySelector("#set");
const btnReset = document.querySelector("#reset");

const defaultGrid = 16;

createGrid(defaultGrid);

btnSet.addEventListener("click", () => {
    const grid = Number(document.querySelector("#grid-count").value);
    
    if(!(grid < 1 || grid > 100))
    {
        container.replaceChildren();
        createGrid(grid);
    }
});

btnReset.addEventListener("click", () => {
    container.replaceChildren();
    createGrid(defaultGrid);
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
            if (!div.classList.contains("changed")) {
                div.style.backgroundColor = getRandomColor();
                div.classList.add("changed"); // Add the class to prevent further changes
            }
            let color = window.getComputedStyle(div).backgroundColor;
            color = ColorLuminanceRGB(color, -0.1);

            div.style.backgroundColor = color;
        });
        div.classList.add("box");
        container.append(div);
    }
  }

  function ColorLuminanceRGB(rgb, lum) {
    // Extract the RGB components from the color string
    let rgbArray = rgb.match(/\d+/g).map(Number);
    
    // Adjust each color component
    for (let i = 0; i < 3; i++) {
        let c = rgbArray[i];
        c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255));
        rgbArray[i] = c;
    }

    // Return the modified color in RGB format
    return `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
}