var w =  900;
var h = 600;
let scl = 10;
let buffer = 10;
let lestartle;
let rightPaddle;
let ball;

let rightPoint = 0;
let leftPoint = 0;


let diff = 5;

let left = [45, 30, 15, 0, 0, -15, -30, -45];
let right = [135, 150, 165, 180, 180, -165, -150, -135];

function setup() {
  createCanvas(w, h);
  start();
  console.log(radians(left[0]));
}

function draw() {
  background(0);
  centerLine();
  checkMove();
  leftPaddle.show();
  rightPaddle.show();
  
  ball.update(leftPaddle, rightPaddle);
  ball.show();
  
  textSize(32);
  
  text(leftPoint, w / 4, 50);
  text(rightPoint, 3 * w / 4, 50);
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


function start() {
  
  leftPaddle = new Paddle(true);
  rightPaddle = new Paddle(false);
  
  
  ball = new Ball();
  
}

function restart(left) {
  if (left) {
    rightPoint++;
  } else {
    leftPoint++;
  }
  
  ball = new Ball();
}

function centerLine() {
  fill(255);
  let wi = scl / 2;
  let groups = h / (2 * wi);
  let tall = h / groups;
  for (let i = 0; i < groups; i++) {
    rect((w - wi) / 2, (3 * tall) * i, wi, 2 * tall);
  }
  
}


function startMenu() {
  
}
