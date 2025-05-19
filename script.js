const container = document.querySelector("#container");

function makeGrid(dimension) {
   for (let i = 1; i <= dimension; i++) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("sketch-row");
    for (let j = 1; j <= dimension; j++) {
        let boxDiv = document.createElement("div");
        boxDiv.classList.add("sketch-box");
        rowDiv.appendChild(boxDiv);
    }
    container.appendChild(rowDiv);
    }; 
};

makeGrid(64);

const boxes = document.querySelectorAll(".sketch-box");

boxes.forEach((box) => {
    box.addEventListener("mouseenter", (e) => {
        box.classList.add("hovered");
    });
});