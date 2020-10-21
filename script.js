// Variable containing grid container.
let container = document.getElementById("grid-container");

// Node list of all squares.
let allSquaresNodeList = document.getElementsByClassName("square");

// Reset button element.
let resetButton = document.getElementById("reset");

// Random color button element.
let randomButton = document.getElementById("randomButton");

// Default button element.
let defaultButton = document.getElementById("defaultButton");

// Function creates the amount of squares specified in argument.
function createGrid(s = 16) {
    for (i = 0; i < (s * s); i++) {
        container.style.gridTemplateRows = `repeat(${s}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${s}, 1fr)`;
        var square = document.createElement("div");
        square.setAttribute("class", "square");
        square.setAttribute("id", `square${i}`)
        container.appendChild(square);
    }
    Array.from(allSquaresNodeList).forEach(square => {
        square.addEventListener("mouseover", function() {
            square.style.backgroundColor = "black";
        })
    })
}

createGrid()

function randomRGB() {
    let color = "#";
    let values = "0123456789ABCDEFG";
    for (i = 0; i < 6; i++) {
        color += values[Math.floor(Math.random() * 16)]
    }
    return color;
}

randomButton.addEventListener("click", function() {
    Array.from(allSquaresNodeList).forEach(square => {
        square.addEventListener("mouseover", function() {
            square.style.backgroundColor = randomRGB();
        })
    })
})

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

resetButton.addEventListener("click", function() {
    let size = prompt("Enter your grid size:", "16");
    while (size > 100) {
        alert("Max size is 100");
        size = prompt("Enter your grid size:", "16");
    }
    removeAllChildNodes(container);
    createGrid(size);
})

defaultButton.addEventListener("click", function() {
    Array.from(allSquaresNodeList).forEach(square => {
        square.addEventListener("mouseover", function() {
            square.style.backgroundColor = "black";
        })
    })
})

