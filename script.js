// Variable containing grid container.
var container = document.getElementById("grid-container");

// Variable contains total number of squares in the grid.
var totalSquares = document.getElementById("grid-container").childElementCount;

// Function creates the amount of squares specified in argument.
function createGrid(totSquares) {
    for (i = totSquares; i < 256; i++) {
        var square = document.createElement("div");
        square.setAttribute("class", "square");
        square.setAttribute("id", `square${i}`)
        container.appendChild(square);
    }
}

createGrid(totalSquares);



var squaresNodeList = document.querySelectorAll(".square");

// Adds mouseover event to all squares by their id.
function addSquareEvent() {
    for (i = 0; i <256; i++) {
        let squareElement = document.getElementById("square" + i);
        squareElement.addEventListener("mouseover", function() {
            squareElement.style.backgroundColor = "red";
        })
    }
}


// Calls functin to set events for mouseover.
addSquareEvent()


