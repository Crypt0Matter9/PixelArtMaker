
let color = document.getElementById('colorPicker');
let table = document.getElementById('pixelCanvas');
let sizePicker = document.getElementById('sizePicker');


let height = document.getElementById('inputHeight').value;
let width = document.getElementById('inputWidth').value;
makeGrid(height, width);



sizePicker.addEventListener('click', (e) => {
    
    e.preventDefault();

    table.firstChild.remove();
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
    
    // make a grid
});

    // Select size input

    // When size is submitted by the user, cell makeGrid()

function makeGrid(height, width) {

    
    for (let i = 0; i <= height; i++){
        let row = table.insertRow(i);
        for (let j = 0; j <= width; j++){
            let cell = row.insertCell(j);
            cell.addEventListener('click', (e) => {
                console.log(e);
                cell.style.backgroundColor = color.value;
        });
   }

}

}