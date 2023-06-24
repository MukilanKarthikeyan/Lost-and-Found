class Cell {
    constructor() {
      this.mine = false;
      this.seen = false;
      this.adj = 0;
    }
    
    
    show(x, y) {
      if (!this.seen) {
        rect(x, y, scl, scl);
      } else if (this.mine) {
        circle(x + (scl / 2), y + (scl / 2), scl * (0.75));
      } else if (this.adj != 0) {
        textAlign(CENTER, CENTER);
        text(this.adj, x + (scl / 2), y + (scl / 2));
      } else if (this.adj == 0) {
        fill (200);
        rect(x, y, scl, scl);
        neighbors(floor(y / scl), floor(x / scl));
      } 
  
    }
    
    setMine(m) {
      this.mine = m;
    }
    
    setSeen(s) {
      this.seen = s;
    }
    
    getAdj() {
      return this.adj;
    }
    
    setAdj(num) {
      this.adj = num;
    }
  
  }