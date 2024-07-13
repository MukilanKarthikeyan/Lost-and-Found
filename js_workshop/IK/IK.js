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
    midpoint = createVector(end.x, end.y).sub(relorigin).div(2).add(relorigin);

    relend = createVector(end.x - relorigin.x, end.y - relorigin.y);

    angleref = createVector(0, 100);
    alpha = 0;
    theta = 0;
    findAngles();

}
  
function draw() {
    background(255);


    stroke(2)
    fill(0, 50);
    line(relorigin.x, relorigin.y, end.x, end.y);

    fill(0, 20);
    strokeWeight(2);
    stroke(20);
    circle(relorigin.x, relorigin.y, legLength*4);
    circle(relorigin.x, relorigin.y, legLength*2);
    circle(end.x, end.y, legLength*2);

    strokeWeight(1);
    fill(120, 145, 175, 200);
    circle(end.x, end.y, diameter);

    fill(255,0,0);
    circle(midpoint.x, midpoint.y, 5);

    findAngles();
    l1 = createVector(cos( PI/2 - theta - alpha), -sin(PI/2 - theta - alpha)).mult(legLength);
    l1.add(end);
    fill(0, 20);
    strokeWeight(2);
    stroke(20);
    line(end.x, end.y, l1.x, l1.y);

    line(relorigin.x, relorigin.y, l1.x, l1.y);

    
}

function findAngles() {
    len = relorigin.dist(end) / 2;
    theta = acos(len / legLength);

    alpha = angleref.angleBetween(relend);


    return theta;
}

function limitRot() {
    end.sub(relorigin).limit(legLength * 2).add(relorigin);
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
    limitRot();
    midpoint = createVector(end.x, end.y).sub(relorigin).div(2).add(relorigin);
    relend = createVector(end.x - relorigin.x, end.y - relorigin.y);
}

