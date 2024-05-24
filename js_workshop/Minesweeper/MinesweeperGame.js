let scl = 20;
let grid = [];
let boolGrid = [];


let w = 600;
let h = 600;
let nx = w / scl;
let ny = h / scl;
let sqrs = nx * ny;
let numMines = Math.floor(0.2 * sqrs);
let game = false;

let squaresRevealed = 0;
let lose = false;



document.oncontextmenu = function() {
  if (mouseX < w && mouseY < h)
    return false;
}

function setup() {
  console.log(sqrs + " " + numMines);
  cnv = createCanvas(600, 600);
  centerCanvas();
  start();
}

function draw() {
  background(220);
  noStroke();
  /*
  if (lose) {
    fill(100);
    let rectw = 350;
    let recth = 200;
    rect((w - rectw) / 2, (h - recth) / 2, rectw, recth);
    fill(255);
    //textFont(myFont);
    textSize(52);
    textAlign(CENTER);
    text("GAME OVER", w/2, h/2 - 25);
    return;
  }
  */
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if ((i + j) % 2 == 0) {
        fill('#70944a');
      } else {
        fill('#88b559');
      }
      if (game) {
        //grid[i][j].seen = true;
      }
      grid[i][j].show();
    }
  }
  //console.log(mouseX);
}

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);
}
  
function windowResized() {
  centerCanvas();
}

function start() {
  for (let i = 0; i < nx; i++) {
    let row = [];
    let boolRow = [];
    for (let j = 0; j < ny; j++) {
      row.push(new Cell(i * scl, j * scl));
      boolRow.push(false);
    }
    
    grid.push(row);
    boolGrid.push(boolRow);
  }
  
}

function plantMines(clkx, clky) {
  let planted = 0;
  while (planted < numMines) {
    let x = Math.floor(Math.random() * nx);
    let y = Math.floor(Math.random() * nx);
    if (grid[x][y].mine) {
      console.log("already planted " + x + " " + y);
    }
    if (clkx != x && clky != y && !grid[y][x].mine) {
      grid[x][y].setMine();
      planted++;
    }
  }
  updateNeighbors();
  console.log("mines planted");
  
  
}

function mousePressed(event) {
  let clickx = mouseX;
  let clicky = mouseY;

  if(clickx < 0 || clickx > w || clicky < 0 || clicky > h) {
    return;
  }
  
  let row =  floor(clickx / scl);
  let col = floor(clicky/ scl);

  if (!game && event.button == 0) {
    plantMines(row, col);
    game = true;
  }
  
  
  if (event.button == 0 && !grid[row][col].seen) {
    squaresRevealed++; 
  }
  
  if (grid[row][col].interact(event.button)) {
    revealNeighbors(row, col);
  }
  if (event.button != 2) {
    console.log("right");
    winConditon(row, col);
  }
  
  resetBool();
  //console.log(squaresRevealed);
  
  
}

function winConditon(row, col){
  if (squaresRevealed = sqrs - numMines) {
    this.win = true;
  }
  if (grid[row][col].mine) {
    this.lose = true;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        grid[i][j].gameover();
      }
    }
  }
}

function resetBool() {
  for (let i = 0; i < boolGrid.length; i++) {
    for (let j = 0; j < boolGrid[0].length; j++) {
      boolGrid[i][j] = false;
    }
  }
}

function clicks(row, col) {
  if (!grid[row][col].seen) {
    squaresRevealed++; 
  }

  if (grid[row][col].interact(0)) {
    revealNeighbors(row, col);
  }
  return
}

function revealNeighbors(rows, cols) {
  if (boolGrid[rows][cols]) {
    return;
  }

  boolGrid[rows][cols] = true;

  if (rows > 0) {
    clicks(rows - 1, cols);
    if (cols > 0) {
      clicks(rows - 1, cols -1);
      //grid[rows - 1][cols - 1].click(0);
    }
    if (cols < ny - 1) {
      clicks(rows - 1, cols + 1);
      //grid[rows - 1][cols + 1].adj++;
    }
    
  }
  if (cols > 0) {
    clicks(rows, cols - 1); 
    //grid[rows][cols - 1].adj++;
  }
  if (cols < ny - 1) {
    clicks(rows, cols + 1) 
    //grid[rows][cols + 1].adj++;
  }

  if (rows < nx - 1) {
    clicks (rows + 1, cols);
    //grid[rows + 1][cols].adj++;
    if (cols > 0) {
      clicks(rows + 1, cols - 1);
      //grid[rows + 1][cols - 1].adj++;
    }
    if (cols < ny - 1) {
      clicks(rows + 1, cols + 1);
      //grid[rows + 1][cols + 1].adj++;
    }
  }
}

/**
 * function will go through and put in numbers for each mine
 */
function updateNeighbors() {
  for (let i = 0; i < nx; i++) {
    for (let j = 0; j < ny; j++) {
      if (grid[i][j].mine) {
        upNeighbors(i, j);
      }
    }
  }
}

/**
 * incrementss the value surounding the given cell up by one
 * @param {*} rows 
 * @param {*} cols 
 */
function upNeighbors(rows, cols) {
  if (rows > 0) {
    grid[rows - 1][cols].adj++;
    if (cols > 0) {
      grid[rows - 1][cols - 1].adj++;
    }
    if (cols < ny - 1) {
      grid[rows - 1][cols + 1].adj++;
    }
    
  }
  if (cols > 0) {
    grid[rows][cols - 1].adj++;
  }
  if (cols < ny - 1) {
    grid[rows][cols + 1].adj++;
  }

  if (rows < nx - 1) {
    grid[rows + 1][cols].adj++;
    if (cols > 0) {
      grid[rows + 1][cols - 1].adj++;
    }
    if (cols < ny - 1) {
      grid[rows + 1][cols + 1].adj++;
    }
  }
}