var scl = 20;
var xstart = 6 * scl;
var ystart = 300;

var w = 600;
var h = 600;

var diameter = 10;
var robot;

var noChange = true;
var arr = 0;

function Point(x, y) {
    this.x = x;
    this.y = y;
}

function setup() {
    pointArray = new Array();
    pointArray.push(new Array());
    cnv = createCanvas(w, h);
    centerCanvas();

    
    background(255);
  
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2;

    


  
  
}
  
function draw() {
    if (noChange) {
        return;
    }
    background(255);
    //console.log("draw called");
    if (robot) {
        fill(100, 200, 50);
        rect(robot.x, robot.y, 10)
    }
    fill(0);
    for (let j = 0; j <= arr; j++) {
        for (let i = 0; i < pointArray[j].length; i++) {
            circle(pointArray[j][i].x, pointArray[j][i].y, diameter);
        }
        for (let i = 1; i < pointArray[j].length; i++) {
            line(pointArray[j][i - 1].x, pointArray[j][i-1].y, pointArray[j][i].x, pointArray[j][i].y);
        }
    }
    
    noChange = true;
}

function centerCanvas() {
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2;
    cnv.position(x, y);
}

function windowResized() {
    centerCanvas();
}

function undo() {
    
}
function mouseDragged(event) {
    let clickx = mouseX;
    let clicky = mouseY;
    

  
}

function keyTyped() {
    if (key === 'a') {
        pointArray.push(new Array());
        arr++;
        console.log("-------------------track " + arr + "------------------------")
    } 
    if (key === 'b') {
        console.log("-------------------points------------------------")
        for (let i = 0; i <= arr; i++) {
            let temp = new Array();
            for (let j = 0; j < pointArray[i].length; j++) {
                
                temp.push(pointArray[i][j].x + ", " + pointArray[i][j].y + "\n");
                
            }
            console.log(...temp);
        }
       
        
    } 
}

function mousePressed(event) {
    let clickx = mouseX;
    let clicky = mouseY;

    if(clickx < 0 || clickx > w || clicky < 0 || clicky > h) {
        return;
    }

    if (keyIsDown(SHIFT)) {
        locked = true;
        noChange = false;
        robot = new Robot(clickx, clicky);
        return;
    }

    pointArray[arr].push(new Point(clickx, clicky));
    console.log(clickx + ","  + clicky);
    noChange = false;
    return;
  }
