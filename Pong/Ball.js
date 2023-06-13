class Ball {
    constructor() {
      
      this.x = (w - scl) / 2;
      this.y = (h - scl) / 2;
      
      this.xvel = 0;
      this.yvel = 0;
      this.restart()
    }  
    
    changeDir(paddle1, paddle2) {
      if (this.y == 0 || this.y >= (h - scl)) {
        this.yvel = this.yvel * (-1);
      }
      
      if (this.y >= paddle1.y 
          && this.y < paddle1.y + paddle1.size
          && this.x <= paddle1.x + scl) {
        
        this.xvel = this.xvel * -1;
      }
      
      if (this.y >= paddle2.y 
          && this.y < paddle2.y + paddle2.size
          && this.x + scl >= paddle2.x) {
        
        this.xvel = this.xvel * -1;
      }
    }
     
    update(paddle1, paddle2) {
      this.changeDir(paddle1, paddle2);
      
      this.pos += this.vel;
      this.x += this.xvel;
      this.y += this.yvel;
      this.y = constrain(this.y, 0, h);
    }
    
    show() {w
      fill(255);
      stroke(255);
      rect(this.x, this.y, scl,scl);
    }
    
    restart() {
      this.x = (w - scl) / 2;
      this.y = (h - scl) / 2;
      
      let angle = random(PI / 4, -PI / 4);
      this.xvel = 2 * Math.cos(angle);
      this.yvel = 2 * Math.sin(angle);
      
      if (random(1) < 0.5) {
        this.xvel *= -1;
      }
    }
    
    
  }
  
  