var s;
var f;
var scl = 10;
var xstart = 6 * scl;
var ystart = 300;
var gamePlay = false;

document.onkeydown = function() {
    
}

function setup() {
  cnv = createCanvas(600, 600);
  centerCanvas();
  s = new Snake();
  f = new Food();
  f.pickLocation();
  frameRate(10);
}

function draw() {
  background(51);
  if (gamePlay) {
    s.update();
  }
  s.show();
  
  if (s.eat(f.pos)) {
    f.pickLocation();
  }
  
  f.show();
  
}

function centerCanvas() {
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2;
    cnv.position(x, y);
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