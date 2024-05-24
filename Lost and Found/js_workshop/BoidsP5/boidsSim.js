const width = 800;
const height = 600;
const bckgrdColor = 100; //"#87ceeb"; //"#02ccfe";
let flock;
let numBoids = 200;


function setup() {
    cnv = createCanvas(width, height);
    centerCanvas();
    
    flock = [];

    for (let i = 0; i < numBoids; i++) {
        //flock.push(new Boid(getRandomInt(width), getRandomInt(height)));
        flock.push(new Boid(width/2 + getRandomInt(20), height/2 + getRandomInt(20)));
        //console.log(flock[i].pos);
        //console.log("velocity" + flock[i].vel);
        //frameRate(5);
        
    }
}

function draw() {
    background(bckgrdColor);


    for (let i = 0; i < flock.length; i++) {
        flock[i].show();
    }
    step();
}

function step() {
    for (let i = 0; i < flock.length; i++) {
        flock[i].fly(flock);
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

function getRandomInt(max) {
    return Math.floor(Math.random() * max);

}

function getRandomIntInRange(min, max) {
    let range = max - min;
    let avg = (max + min) / 2;
    return Math.floor((Math.random() * (range)) - avg);
}
