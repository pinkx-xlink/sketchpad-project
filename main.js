let canvas = document.querySelector('.canvas');
canvas.style.gridTemplateColumns = repeat(16 , 1fr);
canvas.style.gridTemplateRows = repeat(16 , 1fr);

for(let i = 0; i<256; i++) {
    let square = document.createElement('div');
    square.style.backgroundColor = 'red';
    canvas.insertAdjacentElement('beforeend', square);
}