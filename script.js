// Variable containing grid container.
var container = document.getElementById("grid-container");

// Function creates the amount of squares specified in argument.
function createGrid(size = 16) {
    for (i = 0; i < (size * size); i++) {
        let gridContainer = document.getElementById("grid-container");
        gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        var square = document.createElement("div");
        square.setAttribute("class", "square");
        square.setAttribute("id", `square${i}`)
        container.appendChild(square);
    }
}

// Adds mouseover event to all squares by their id.
function addSquareEvent(size=16, color="black") {
    for (i = 0; i < (size*size); i++) {
        let squareElement = document.getElementById("square" + i);
        if (squareElement) {
            squareElement.addEventListener("mouseover", function() {
                squareElement.style.backgroundColor = color;
            })
        }
    }
}

// Calls the function that creates a the grid.
createGrid();

// Calls functin to set events for mouseover.
addSquareEvent();

// Variable contains reference to reset button.
var resetButton = document.getElementById("reset");


/*  Loops through and removes old squares from previous grid.
Creates new grid. */
resetButton.addEventListener("click", function() {
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    var userSize = askGridSize()
    createGrid(userSize);
    addSquareEvent(userSize);
})

// Function prompts user for grid size, checks that is it under 100.
function askGridSize() {
    let size = prompt("Enter the size of your grid", "16");
    if (size > 100) {
        alert("Max size is 100")
        askGridSize();
    } else {
        return size;
    }
}

// Variable contains reference to random color button.
var randomColorButton = document.getElementById("randomColor");

var allSquares = (Array.from(document.getElementsByClassName("square"))).length;

// Set click event listener on random color button.
randomColorButton.addEventListener("click", function() {
    var gridSize = (Array.from(document.getElementsByClassName("square"))).length;
    addSquareEvent(gridSize, randomColor());
})

function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
