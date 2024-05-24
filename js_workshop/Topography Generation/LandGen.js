/*
author: Mukilan Karthikeyan
project: 3D terrain generation using Perlin noise
objective: learning to use data strucutures and p5 library, inspired by CodingTrain videos
*/


var cols, rows;
var scl = 20;
var w, h;
var terrain = [];
var flyingY = 0;
var flyingX = 0;
var move1 = 0;
var move2 = 0.1;
var path = 0.0;

function setup() {
    w = screen.width*2;
    h = screen.height*2;
    cnv = createCanvas(screen.width * 0.75, screen.height * 0.75, WEBGL);
    centerCanvas();
    cols = w/scl;
    rows = h/scl;
    for(var x = 0; x < cols; x++){
        terrain[x] = [];
        for(var y=0; y < rows; y++){
            terrain[x][y] = 0;
        }
    }

    frameRate(24);
}

function draw() {
    // y-offset variable is used to reduce the giant leap in whole numbers that are fed into the noise function
    var yoff = flyingY;
    for(var y=0; y < rows; y++){
        //x-offset is simiplar to y-offset
        var xoff = 0;
        for(var x=0; x < cols; x++){
            //use perlin noise to generate smooth random numbers
            terrain[x][y] = map(noise(xoff,yoff),0,1,-150,150);
            //changing how smooth of noise eot pick along the x-axis
            xoff += 0.05;
        }
        //changing how smooth of noise eot pick along the y-axis
        yoff -= 0.05;
    }

    move1 += 0.5;
    move2 += 0.5;

    background(50,171,216);
    rotateX(PI/2.5);

    //flyingX += 0.025; // creating a random horizontal motion
    flyingY += 0.1; //creating the scrolling effect
    rotateY(flyingX);
    //rotateZ(PI/6);

    console.log(flyingX);

    //draw everything relative to the center
    translate(-w/2, -h/2, -100);

    for(var y=0; y < rows-1; y++){
        stroke(30,0,60); //contor line color
        fill(30, 70, 125)//terrain color

        //uses the p5 library to draw the triangle strip shape
        beginShape(TRIANGLE_STRIP);
        for(var x=0; x < cols; x++){
            vertex(x*scl,y*scl,terrain[x][y]);
            vertex(x*scl, (y+1)*scl,terrain[x][y+1]);
        }
        endShape();
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