class Ball {
  constructor() {
    
    this.x = (w - scl) / 2;
    this.y = (h - scl) / 2;
    
    this.speed = 5;
    
    this.xvel = 0;
    this.yvel = 0;
    this.reset()
  }  
  
  changeDir(paddle1, paddle2) {
    if (this.y == 0 || this.y >= (h - scl)) {
      this.yvel = this.yvel * (-1);
    }
    
    if (this.x < 0) {
      restart(true);
    }
    if (this.x > w - scl) {
      restart(false);
    }
    
    //not a fan of this janky code that follows but sort of works
    if (this.y >= paddle1.y 
        && this.y <= paddle1.y + paddle1.size
        && this.x <= paddle1.x + scl 
        && this.xvel < 0) {
      var section = Math.floor((this.y - paddle1.y + (scl / 2)) / 15) % 8;
      console.log(this.y - paddle1.y + " " + section);
      console.log(left[section]);
      var ang = radians(left[section]);
      var angle = map(section, 1, paddle1.size, -ang, ang);
      this.xvel = this.speed * cos(angle);
      this.yvel = this.speed * sin(angle);
    }
    
    if (this.y >= paddle2.y 
        && this.y <= paddle2.y + paddle2.size
        && this.x + scl >= paddle2.x 
        && this.xvel > 0) {
      
      var section = Math.floor((this.y - paddle2.y + (scl / 2)) / 15 ) % 8;
      var ang = radians(right[section]);
      var angle = map(section, 1, paddle2.size, -ang, ang);
      this.xvel = this.speed * cos(angle);
      this.yvel = this.speed * sin(angle);
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
  
  reset() {
    this.x = (w - scl) / 2;
    this.y = random(0, (h - scl) / 2);
    
    let angle = random(PI / 4, -PI / 4);
    
    
    this.xvel = diff * Math.cos(angle);
    this.yvel = diff * Math.sin(angle);
    
    if (random(1) < 0.5) {
      this.xvel *= -1;
    }
  }
  
  
}

