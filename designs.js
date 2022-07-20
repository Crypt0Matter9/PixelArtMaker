let color = document.getElementById("colorPicker");
let table = document.getElementById("pixelCanvas");
let sizePicker = document.getElementById("sizePicker");

const height_input = document.getElementById("inputHeight");
const width_input = document.getElementById("inputWidth");
makeGrid(height_input.value, width_input.value);

sizePicker.addEventListener("click", (e) => {
  e.preventDefault();

  table.firstChild.remove();
  const height = height_input.value;
  const width = width_input.value;
  makeGrid(height_input.value, width_input.value);

  // make a grid
});

// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
  // Create the grid with the values passed in the function

  for (let i = 0; i < height; i++) {
    // Insert a row in every i iteration
    let row = table.insertRow(i);
    for (let j = 0; j < width; j++) {
      const cell = row.insertCell(j);
      cell.addEventListener("click", (e) => {
        console.log(e);
        cell.style.backgroundColor = color.value;
      });
    }
  }
}
