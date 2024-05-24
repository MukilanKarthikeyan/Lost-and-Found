class Blocky {
  
  constructor() {
    this.x = 100;
    this.y = h / 2;
  
    this.yspeed = 0;
    this.grav = 0.25;
  }
  
  
  jump() {
    this.yspeed = -6;
  }

   update() {
     this.y = this.y + this.yspeed;
     //this.y = constrain(this.y, 0, h - scl);
     this.yspeed = this.yspeed + this.grav;
     this.y = constrain(this.y, 0, h);
     //console.log(this.y);
   
   }
  
  show() {
    fill(255);
    rect(this.x, this.y , scl, scl);
  }
     
  collision() {
    if (this.y <= 0 || this. y > h - scl) {
      return true;
    }
    return false;
  }
}