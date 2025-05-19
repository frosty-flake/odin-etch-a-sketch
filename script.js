const container = document.querySelector("#container");

for (let i = 1; i <= 16; i++) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("sketch-row");
    for (let j = 1; j <= 16; j++) {
        let boxDiv = document.createElement("div");
        boxDiv.classList.add("sketch-box");
        rowDiv.appendChild(boxDiv);
    }
    container.appendChild(rowDiv);
};