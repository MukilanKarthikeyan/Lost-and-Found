class Paddle {
  constructor(left) {
    this.size = 80;
    if (left) {
      this.x = 10;
    } else {
      this.x = w - scl - 10;
    }
    this.y = (h - this.size) / 2;
    this.vel = 10;
    
  }
  
  movePaddle(up) {
    if (up) {
      this.y = this.y - this.vel;
    } else {
      this.y = this.y + this.vel;
    }
    
    this.y = constrain(this.y, 0, h - this.size);
  }
  
  show() {
    fill(255);
    rect(this.x, this.y, scl, this.size);
  }
  
  
}