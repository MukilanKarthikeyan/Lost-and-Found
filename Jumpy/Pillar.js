class Pillar {
  
    constructor() { 
      this.x = w;
      
      this.gap = scl * int(random(5, 15));
      this.y = scl * int(random(0, (h - this.gap) / scl));
      console.log(this.y);
      
      this.xspeed = -2.5;
    }
    
    update() {
      this.x = this.x + this.xspeed;
    }
    
    show() {
      fill(250);
      rect(this.x, 0, scl, this.y);
      rect(this.x, this.y + this.gap, scl, h);
    }
    
  }