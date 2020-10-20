// Variable containing grid container.
var container = document.getElementById("grid-container");

// Variable contains total number of child elements that were appended to grid-container.
var totalSquares = document.getElementById("grid-container").childElementCount;

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
function addSquareEvent(size = 16) {
    for (i = 0; i < (size*size); i++) {
        let squareElement = document.getElementById("square" + i);
        squareElement.addEventListener("mouseover", function() {
            squareElement.style.backgroundColor = "black";
        })
    }
}

// Calls the function that creates a the grid.
createGrid();

// Calls functin to set events for mouseover.
addSquareEvent();

// Variable contains reference to reset button.
var resetButton = document.getElementById("reset");

// Variable contains reference to square class for all squares.
var allSquares = Array.from(document.getElementsByClassName("square"));

/* Loops through and removes old squares from previous grid.
Creates new grid. */
resetButton.addEventListener("click", function() {
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    let userSize = prompt("Enter the size of your grid", "16")
    createGrid(userSize);
    addSquareEvent(userSize);
})
