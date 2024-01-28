let scl = 5;
let w = 800;
let h = 800;
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
  background(220);
  noStroke();
  if (mouseIsPressed) {
    let x = floor(mouseX / scl);
    let y = floor(mouseY / scl);

    grid[x][y] = 1;
  }
  console.log(pause);
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
      if (j != cols - 1 && grid[i][j + 1] == 0) {
        next[i][j] = 0;
        next[i][j + 1] = 1;
      } else if (i > 0 && i < cols -1 && j != cols - 1) {

        let left = heightColorMap[i - 1][0];
        let right = heightColorMap[i + 1][0];

        if (curr < left && curr <= right) {
          next[i][j] = 1 ;
        } else if (curr > left && curr > right) {
          dir = round(random(2)) - 1;
          next[i][j] = 0;
          next[i + dir][j + 1] = 1;
          heightColorMap[i][0]--;
          heightColorMap[i + dir][0]++;
        } else if (curr > left) {
          next[i][j] = 0;
          next[i - 1][j + 1] = 1
          heightColorMap[i][0]--;
          heightColorMap[i - 1][0]++;
        } else{
          next[i][j] = 0;
          next[i + 1][j + 1] = 1
          heightColorMap[i][0]--;
          heightColorMap[i + 1][0]++;
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
    console.log("paused" + pause);
    pause = !pause;

  }
}




