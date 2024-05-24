let scl = 5;
let w = 700;
let h = 700;
let grid;
let next;
let rows;
let cols;
let heightColorMap;

let pause;


document.oncontextmenu = function() {
  if (mouseX < w && mouseY < h)
    return false;
}

function setup() {
  pause = false;
  cnv = createCanvas(w, h);
  centerCanvas();
  rows = w/scl;
  cols = h/scl;

  grid = make2DArray(rows, cols);  
  next = make2DArray(rows, cols); 
  heightColorMap = make2DArray(rows, 4); 
  grid[5][0] = 1;
  //setInterval(step, 2000)
}

function draw() {
  
  noStroke();
  if (mouseIsPressed) {
    let x = floor(mouseX / scl);
    let y = floor(mouseY / scl);

    grid[x][y] = 1;
  }
  if (!pause) {
    step();
    temp = next;
    next = grid;
    grid = temp;
  }
 

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      
      fill(grid[i][j] * 255);
      square(i * scl, j * scl, scl);
    }
  }
}

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);
}
  
function windowResized() {
  centerCanvas();
}

function make2DArray(rows, cols) {
  let grid = [];
  for (let i = 0; i < rows; i++) {
    grid[i] = [];
    for (let j = 0; j < cols; j++) {
      grid[i][j] = 0;
    }
  }
  return grid;
}

function step() {
  //console.log("step called");
  //let next = make2DArray(rows, cols);
  
  /*for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      next[i][j] = 0;
      
    }
  }
  console.log("all empty");*/

  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      next[i][j] = 0;
    }
  }
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] == 0) {
        continue;
      }
      
      let curr = heightColorMap[i][0];

      if (j < cols - 1) {
        let left = (i > 0 && grid[i - 1][j + 1] == 0);
        let right = (i < cols && grid[i + 1][j + 1] == 0)
        
        if (grid[i][j + 1] == 0) {
          next[i][j] = 0;
          next[i][j + 1] = 1;
        } else if (left && right) {
          let dir = round(random(2)) - 1;
          next[i][j] = 0;
          next[i + dir][j + 1] = 1;
        } else if (left) { 
          next[i][j] = 0;
          next[i - 1][j + 1] = 1;
        } else if (right) {
          next[i][j] = 0;
          next[i + 1][j + 1] = 1;
        }else {
          next[i][j] = 1;
        }
      } else {
        next[i][j] = 1;
      }
    }
  }
  
}

function mousePressed(event) {
  let clickx = mouseX;
  let clicky = mouseY;
  
  let x = floor(mouseX / scl);
  let y = floor(mouseY / scl);

  grid[x][y] = 1;
  heightColorMap[x][0]++;
}

function keyTyped() {
  if (key === ' ') {
    pause = !pause;
  }
}




