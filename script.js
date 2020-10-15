// A variable that creates a new div element.
var square = document.createElement("div");

// Sets the class of created div element.
square.setAttribute("class", "square");

// Variable containing grid container.
var container = document.getElementById("grid-container");

// Add div element to grid container.
container.appendChild(square);

// Variable contains total number of squares in the grid.
var totalSquares = document.getElementById("grid-container").childElementCount;


