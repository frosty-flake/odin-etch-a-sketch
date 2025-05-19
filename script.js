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
        box.addEventListener("mouseenter", () => {
            if (box.style.opacity != 1.0) {
                box.style.opacity = Number(box.style.opacity) + 0.1;
            }
            box.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        });
    });
};

makeGrid(16);

const sizeButton = document.querySelector("#size-button");

sizeButton.addEventListener("click", () => { 
    let size = prompt("Enter your grid size (between 1 and 100:");

    if (size === null) return;

    while (size <= 0 || size > 100){
        size = prompt("Enter your grid size (between 1 and 100):");
        if (size < 0) {
            alert("That's less than zero!");
        } else if (size > 100) {
            alert("That's too big!");
        };
    }
    makeGrid(size);
});