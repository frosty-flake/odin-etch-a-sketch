const container = document.querySelector("#container");

function makeGrid(dimension) {
    while (container.firstElementChild) {
        container.removeChild(container.firstElementChild);
    };

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

    const boxes = document.querySelectorAll(".sketch-box");

    boxes.forEach((box) => {
        box.addEventListener("mouseenter", (e) => {
            box.classList.add("hovered");
        });
    });
};

makeGrid(64);

const sizeButton = document.querySelector("#size-button");

sizeButton.addEventListener("click", () => {
    let size = -1;

    while (size < 0 || size > 100){
        size = prompt("Enter your grid size:",50);
        if (size < 0) {
            alert("That's less than zero!");
        } else if (size > 100) {
            alert("That's too big!");
        };

    }
    if (size != -1) {
        makeGrid(size);
    };
});