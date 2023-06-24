//TODO: convert to a class and not a function

function Snake() {
  this.x = xstart;
  this.y = ystart;

  console.log(xstart, ystart);
  
  this.xspeed = 0;
  this.yspeed = 0;
  this.total = 1;
  this.tail = [];
  for (var i = 1; i <= this.total; i++) {
    this.tail.push(createVector(xstart - i * scl, ystart));
    console.log(this.tail[i - 1]);
  }
  
  
  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y)
    if (d < 1) {
      this.total++;
      return true;
    }
    return false;
  }
  
  this.end = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.total = 0;
        this.tail = [];
        gameOver = true;
      }
    }
  }
  
  
  this.dir = function(x,y) {
    this.xspeed = x;
    this.yspeed = y;
  }
  
  this.update = function() {
    if (gameOver == true) {
      return
    }

    this.end();
    
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length -1; i++) {
        this.tail[i] = this.tail[i+1];
      }
    }
    
    this.tail[this.total - 1] = createVector(this.x, this.y);
    
    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;
    
    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
    
    
  }
  
  this.show = function() {
    fill(255);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    
    rect(this.x, this.y, scl,scl);
  }
}
