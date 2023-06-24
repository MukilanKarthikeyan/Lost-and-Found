let scl = 20;
let grid = []

let w = 600;
let h = 600;



function setup() {
  createCanvas(600, 600);
  start();
}

function draw() {
  background(220);
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if ((i + j) % 2 == 0) {
        fill('#70944a');
      } else {
        fill('#88B559');
      }
      grid[i][j].show(i * scl, j * scl);
    }
  }
}

function start() {
  for (let i = 0; i < h / scl; i++) {
    let row = [];
    for (let j = 0; j < w / scl; j++) {
      row.push(new Cell());
    }
    grid.push(row);
  }
}

function mouseClicked() {
  let clickx = mouseX;
  let clicky = mouseY;
  
  let row =  floor(clickx / scl);
  let col = floor(clicky/ scl);
  
  grid[row][col].setSeen(true);
  
}

function neighbors(rows, cols) {

}