// Variable containing grid container.
var container = document.getElementById("grid-container");

// Variable contains total number of squares in the grid.
var totalSquares = document.getElementById("grid-container").childElementCount;

// Function creates the amount of squares specified in argument.
function createGrid(totSquares) {
    for (i = totSquares; i < 256; i++) {
        var square = document.createElement("div");
        square.setAttribute("class", "square");
        container.appendChild(square);
    }
}

createGrid(totalSquares);