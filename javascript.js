let height = 56;
let width = 56;

sketchpad = document.querySelector(".sketch-container");

// Draws the grid to desired width and height
function createGrid() {
    for (let x=0; x<height; x++) {
        const row = document.createElement("div");
        row.classList.add("sketch-row");
        for (let i=0; i<width; i++) {
            const div = document.createElement("div");
            div.classList.add("square");
            row.appendChild(div);
        }
        sketchpad.appendChild(row);
    }
    setCellListeners()
}

// Listens for mouse overs on each cell and changes background color based on other settings
function setCellListeners() {
    cells = document.querySelectorAll(".square");
    color = document.querySelector("#color");
    rainbow = document.querySelector("#rainbow");
    eraser = document.querySelector("#eraser");

    cells.forEach(cell => {
        cell.onmouseover = function(e) {
            if (rainbow.checked) {
                let randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
                cell.style.backgroundColor = randomColor
            } else {
                cell.style.backgroundColor = color.value;
            }
            if (eraser.checked) {
                cell.style.backgroundColor = "white";
            }
        }
    });
}

// Destroys the grid.  You can call createGrid to make a new one
function clearGrid() {
    sketchpad.innerHTML = "";
}

let set = document.querySelector("#set-grid");
set.addEventListener("click", function() {
    width = document.querySelector("#width").value;
    height = document.querySelector("#height").value;
    console.log(`set width to ${width} and height to ${height}`);
    clearGrid();
    createGrid();
});

let clear = document.querySelector("#clear-grid");
clear.addEventListener("click", function() {
    clearGrid();
    createGrid();
});

createGrid();