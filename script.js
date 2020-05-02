const container = document.querySelector("#container");
let gridSize = 32;
let mousePressed = false;
let color = "black"

generateNewCells(gridSize); //initial grid size set to 32x32
container.style["grid-template-columns"] = generateGridTemplateString(gridSize);
container.style["grid-template-rows"] = generateGridTemplateString(gridSize);

function selectColor(val){
    color = val;
}

//generate each individual cell for selected grid
function generateNewCells(numOfRows) {
    for (i = 0; i < (numOfRows * numOfRows); i++) {
        const newCell = document.createElement("div");
        newCell.style["background-color"] = "rgba(255,255,255,1)";
        newCell.setAttribute("class", "cell");
        container.appendChild(newCell);
    }
    
}

function generateGridTemplateString(numOfColumns) {
    let numOfColumnsAndRowsString = "";
    for (i = 0; i < numOfColumns; i++) {
        numOfColumnsAndRowsString += "auto ";
    }
    return numOfColumnsAndRowsString;
}

function createNewGrid(size) {
    document.querySelectorAll(".cell").forEach((cell) => cell.remove());
    gridSize = size;
    container.style["grid-template-columns"] = generateGridTemplateString(gridSize);
    container.style["grid-template-rows"] = generateGridTemplateString(gridSize);

    generateNewCells(gridSize);
}

container.addEventListener("mouseover",()=> {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.onmouseover = function(e) {
            if(mousePressed)
            e.target.style["background-color"] = color;
        }
    })
});

document.addEventListener("mousedown",()=> {
    mousePressed = true;
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.onmousedown = function(e) {
            e.target.style["background-color"] = color;
        }
    })
});

document.addEventListener("mouseup",()=> {
    mousePressed = false;
});

document.addEventListener("keypress", function onEvent(event) {
    if (event.key === "r") {
        createNewGrid(gridSize);
    }
});