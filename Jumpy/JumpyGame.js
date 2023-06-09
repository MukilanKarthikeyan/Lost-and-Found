var scl = 20;
var w = 800;
var h = 600;
let block;
let pillars = [];


function setup() {
  createCanvas(w, h);
  block = new Blocky();
  pillars.push(new Pillar());
  
}

function keyPressed() {
  if (key ==" ") {
    block.jump();
  }
}

function draw() {
  if (random(1) < 0.0075  ) {
    console.log("new pillar");
    pillars.push(new Pillar());
  }
  
  background(0);
  
  block.update();
  block.show();
  
  for (var i = 0; i < pillars.length; i++) {
    pillars[i].update();
    pillars[i].show();
  }
  
}
