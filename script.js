// Variable containing grid container.
var container = document.getElementById("grid-container");

// Variable contains total number of child elements that were appended to grid-container.
var totalSquares = document.getElementById("grid-container").childElementCount;

// Function creates the amount of squares specified in argument.
function createGrid(totalChildren) {
    for (i = totalChildren; i < 256; i++) {
        var square = document.createElement("div");
        square.setAttribute("class", "square");
        square.setAttribute("id", `square${i}`)
        container.appendChild(square);
    }
}

// Adds mouseover event to all squares by their id.
function addSquareEvent() {
    for (i = 0; i <256; i++) {
        let squareElement = document.getElementById("square" + i);
        squareElement.addEventListener("mouseover", function() {
            squareElement.style.backgroundColor = "black";
        })
    }
}

// Calls the function that creates a the grid.
createGrid(totalSquares);

// Calls functin to set events for mouseover.
addSquareEvent();

// Variable contains reference to reset button.
var resetButton = document.getElementById("reset");

// Variable contains reference to square class for all squares.
var allSquares = Array.from(document.getElementsByClassName("square"));

// Adds a click event listener to reset button that changes all square colors.
resetButton.addEventListener("click", function() {
    for (i = 0; i < 256; i++) {
        allSquares[i].style.backgroundColor = "grey";
    }
})