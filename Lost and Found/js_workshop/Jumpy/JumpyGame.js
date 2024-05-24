var scl = 20;
var w = 800;
var h = 600;
let buffer = 100; 
let block;
let pillars;
let counter = 0;

let gameOver = false;

function preload() {
  //myFont = loadFont('PressStart2P-Regular.ttf');
}

function setup() {
  cnv = createCanvas(w, h);
  button = createButton("Play Again");
  centerCanvas();
  
  
  
  // button.position((width - button.width) / 2, height/2 + 50);
  button.style("background-color", "green")
  button.style("font-size", "1em")
  button.style("color", "white")
  
  button.style("padding", "5px")
  button.style("position", "absolute")
  
  button.mousePressed(start);
  button.hide();
  
  start();
}

function keyPressed() {
  if (key == " ") {
    block.jump();
  }
}

function draw() {
  
  if (!gameOver) {
    if (pillars.length == 0 
        || (pillars[pillars.length - 1].x < (w - (scl * 2) - buffer) 
        && random(1) < 0.01)) {
      pillars.push(new Pillar());
    }
  
    background(0);
  
    block.update();
    block.show();
    if (block.collision()) {
      over();
    }
  
    for (let i = 0; i < pillars.length; i++) {
      
      
      if (!pillars[i].past && pillars[i].blockPassed(block)) {
        pillars[i].past = true;
        counter++;
      }
      
      if (pillars[i].offscreen()) {
        pillars.splice(i, 1);
      } 
      
      if (pillars.length > 0) {
        pillars[i].update();
        pillars[i].show();
        
        if (pillars.length != 0 && pillars[i].collide(block)) {
          gameOver = true;
        }
      }
      
    }
  } else {
    over();
  }
  
  
}

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);
  button.position(x + (width - button.width) / 2, y + height/2  + 50);
}

function windowResized() {
  centerCanvas();
}

function over() {
  gameOver = true;
  fill(100);
  let rectw = 350;
  let recth = 200;
  rect((w - rectw) / 2, (h - recth) / 2, rectw, recth);
  fill(255);
  //textFont(myFont);
  textSize(52);
  textAlign(CENTER);
  text("GAME OVER", w/2, h/2 - 25);
  score = "Score: " + counter;
  textSize(36);
  text(score, w/2, h/2 + 25);
  button.show();
  
}


function start() {
  button.hide();
  
  block = new Blocky();
  pillars = [];
  pillars.push(new Pillar());
    
  
  
  console.log(pillars.length);
  gameOver = false;
}

