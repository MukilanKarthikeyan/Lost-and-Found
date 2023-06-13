class Paddle {
    constructor(left) {
      this.size = 5 * scl;
      if (left) {
        this.x = 0;
      } else {
        this.x = w - scl;
      }
      this.y = (h - this.size) / 2;
      this.vel = 5;
      
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