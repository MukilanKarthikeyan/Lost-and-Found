class Cell {
    constructor(x, y) {
      this.mine = false;
      this.seen = false;
      this.flag = false;
      this.adj = 0;
      this.x = x;
      this.y = y;

    }
    
    
    show() {
      
      if (this.flag) {
        rect(this.x, this.y, scl, scl);
        fill('#a83632');
        triangle (this.x + 2, this.y + scl - 2, this.x + (scl / 2), this.y + 2, this.x + scl - 2, this.y + scl -2);
      } else if (!this.seen) {
        rect(this.x, this.y, scl, scl);
      } else if (this.mine) {
        circle(this.x + (scl / 2), this.y + (scl / 2), scl * (0.75));
      } else if (this.adj != 0) {
        textAlign(CENTER, CENTER);
        text(this.adj, this.x + (scl / 2), this.y + (scl / 2));
      } else if (this.adj == 0) {
        fill (200);
        rect(this.x, this.y, scl, scl);
        //neighbors(floor(this.y / scl), floor(this.x / scl));
      } 
  
    }

    interact(button) {
      if (this.seen) {
        return;
      }
      let neigh = true;

      if (button == 2) {
        this.flag = !this.flag;
        neigh = false;
      } else if (button == 0) {
        this.seen = true;
      }

      //console.log("showing:" + this.x + " " + this.y + " " + this.flag + "|" + this.adj);
      this.show()

      return (neigh && this.adj == 0 && !this.mine);
    }

    gameover() {
      this.seen = this.mine || this.seen;
      /*
      if (this.mine) {
        this.seen = true;
      }
      */
    }

    
    setMine() {
      this.mine = true;

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