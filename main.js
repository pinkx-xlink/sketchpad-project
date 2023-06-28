let color = "black";

function populateCanvas(size) {
    let canvas = document.querySelector(".canvas");
    let squares = canvas.querySelectorAll("div");
    squares.forEach(div=> div.remove());
    canvas.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = "pink";
        canvas.insertAdjacentElement('beforeend', square);
    }
}

populateCanvas(16);

function changeSize(input) {
    if(input >=2 || input <=100) {
    populateCanvas(input);    
    }
    else{
        console.log("TOO MANY SQUARES! D:");
    }
}

function colorSquare() {
    this.style.backgroundColor = color;
}

function changeColor(choice) {
    color = choice;
}