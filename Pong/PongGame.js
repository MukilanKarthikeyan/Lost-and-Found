var w =  800;
var h = 600;
let scl = 20;
let buffer = 10;
let lestartle;
let rightPaddle;
let ball;


function setup() {
  createCanvas(w, h);
  start();
}

function draw() {
  background(0);
  centerLine();
  checkMove();
  leftPaddle.show();
  rightPaddle.show();
  
  ball.update(leftPaddle, rightPaddle);
  ball.show();
}

function checkMove() {
  if (keyIsDown(87)) {
    leftPaddle.movePaddle(true);
  } else if (keyIsDown(83)) {
    leftPaddle.movePaddle(false);
  }
  
  if (keyIsDown(UP_ARROW)) {
    rightPaddle.movePaddle(true);
  } else if (keyIsDown(DOWN_ARROW)) {
    rightPaddle.movePaddle(false);
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

function start() {
  
leftPaddle = new Paddle(true);
rightPaddle = new Paddle(false);
  
ball = new Ball();
  
}

function centerLine() {
  fill(255);
  let wi = scl / 2;
  let groups = h / wi;
  let tall = h / groups;
  for (let i = 0; i < groups; i++) {
    rect((w - wi) / 2, (3 * tall) * i, wi, 2 * tall);
  }
  
}
