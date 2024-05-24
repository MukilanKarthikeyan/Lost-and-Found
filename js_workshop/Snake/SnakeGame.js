var s;
var f;
var scl = 20;
var xstart = 6 * scl;
var ystart = 300;
var gameOver = false;
var gamePlay = false;
var counter = 0;

var w = 600;
var h = 600;


document.onkeydown = function() {
    
}

function setup() {
  cnv = createCanvas(w, h);
  button = createButton("Play Again");
  centerCanvas();

  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;

  //createButton();

  start();
  
}

function draw() {
  if (!gameOver) {
    background(51);
    s.update();
    s.show();
  
    if (s.eat(f.pos)) {
      f.pickLocation();
    }
  
    f.show();
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

function keyPressed() {
  if (!gamePlay){
    gamePlay = true;
    s.dir(1,0);
  }
    
  if (keyCode == UP_ARROW && (s.xspeed, s.yspeed) != (0, 1)) {
    s.dir(0,-1);
  } else if (keyCode == DOWN_ARROW && (s.xspeed, s.yspeed) != (0, -1)) {
    s.dir(0,1);
  } else if (keyCode == RIGHT_ARROW && (s.xspeed, s.yspeed) != (-1, 0)) {
    s.dir(1,0);
  } else if (keyCode == LEFT_ARROW && (s.xspeed, s.yspeed) != (1, 0)) {
    s.dir(-1, 0);
  } else if (keyCode == 32) {
    gamePlay = false;
  }

}

function createButton() {
  button.style("background-color", "green")
  button.style("font-size", "1em")
  button.style("color", "white")
  
  button.style("padding", "5px")
  button.style("position", "absolute")
  
  button.mousePressed(start);
  button.hide();
}

function Food() {
  this.pos = createVector(0,0);
  
  this.pickLocation = function() {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    this.pos = createVector(floor(random(cols)), floor(random(rows)));
    this.pos.mult(scl);
    console.log(this.pos);
  }
  
  this.show = function() {
    fill(255, 0, 100);
    rect(this.pos.x, this.pos.y, scl, scl);
  }
}

function over() {
  gameOver = true;
  fill(100);
  let rectw = 350;
  let recth = 200;

  rect((w - rectw) / 2, (h - recth) / 2, rectw, recth);
  fill(255);
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

  s = new Snake();
  f = new Food();
  f.pickLocation();
  frameRate(10);

  gameOver = false;
  gamePlay = false;
}