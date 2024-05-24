class Pillar {  
  constructor() { 
    this.x = w;
    
    this.gap = scl * int(random(5, 15));
    this.y = scl * int(random(1  , (h - this.gap) / scl));
    
    
    this.xspeed = -2.5;
    this.past = false;
  }
  
  update() {
    this.x = this.x + this.xspeed;
  }
  
  show() {
    fill(200);
    rect(this.x, 0, 2 * scl, this.y);
    rect(this.x, this.y + this.gap, 2 * scl, h);
  }
  
  offscreen() {
    if (this.x < - 2 * scl) {
      return true;
    }
    return false;
  }
  
  blockPassed(block) {
    if (this.x + (2 * scl) < block.x) {
      return true;
    }
    return false;
  }

  
  collide(block) {
    if ((this.x < block.x + scl) && (this.x + (2 * scl) > block.x)) {
      if ((block.y < this.y) || (block.y > this.y + this.gap)) {
        return true;
      }
    } 
    
    
    return false;
  }
  
}