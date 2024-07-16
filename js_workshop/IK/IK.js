//const { reloadAsync } = require("expo-updates");

var scl = 20;
var xstart = 6 * scl;
var ystart = 300;

var w = 720;
var h = 720;

var diameter = 20;
const legLength = 100;



function setup() {
    cnv = createCanvas(w, h);
    centerCanvas();
    background(255);

    relorigin = createVector(w/2, h/2);
    end = createVector(relorigin.x + 100, relorigin.y + 100)
    vel = createVector(0, 0);
    midpoint = createVector(end.x, end.y).sub(relorigin).div(2).add(relorigin);

    relend = createVector(end.x - relorigin.x, end.y - relorigin.y);

    angleref = createVector(0, 100);
    alpha = 0;
    theta = 0;
    findAngles();

}
  
function draw() {
    background(255);
    update();

    stroke(2, 50)
    fill(0, 10);
    line(relorigin.x, relorigin.y, end.x, end.y); // refernce line

    fill(0, 20);
    strokeWeight(2);
    stroke(20, 50);
    circle(relorigin.x, relorigin.y, legLength*4);
    circle(relorigin.x, relorigin.y, legLength*2);
    circle(end.x, end.y, legLength*2);// circles for range of motion

    strokeWeight(1);
    stroke(20)
    fill(120, 145, 175, 200);
    circle(end.x, end.y, diameter);// mark end effector

    fill(255,0,0);
    circle(midpoint.x, midpoint.y, 5);// midpoint mark

    
    l1 = createVector(cos( PI/2 - theta - alpha), -sin(PI/2 - theta - alpha)).mult(legLength);
    l1.add(end);
    fill(0, 20);
    strokeWeight(2);
    stroke(20);
    line(end.x, end.y, l1.x, l1.y);

    line(relorigin.x, relorigin.y, l1.x, l1.y);

    
}


function update() {
    end.add(vel);
    limitRot();
    midpoint.set(end.x, end.y).sub(relorigin).div(2).add(relorigin);
    relend.set(end.x - relorigin.x, end.y - relorigin.y);
    findAngles();
}

function limitRot() {
    end.sub(relorigin).limit(legLength * 2).add(relorigin);
}

function findAngles() {
    len = relorigin.dist(end) / 2;
    theta = acos(len / legLength);

    alpha = angleref.angleBetween(relend);

    return theta;
}

function centerCanvas() {
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2;
    cnv.position(x, y);
}

function windowResized() {
    centerCanvas();
}


function keyTyped() {
 
}

function mouseDragged(event) {
    
    end.x = mouseX;
    end.y = mouseY;
    update();
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        vel.set(0, -1);
    } else if (keyCode == DOWN_ARROW) {
        vel.set(0, 1);
    } else if (keyCode == RIGHT_ARROW) {
        vel.set(1, 0);
    } else if (keyCode == LEFT_ARROW) {
        vel.set(-1, 0);
    } 
}

function keyReleased() {
    vel.set(0, 0);
}


