class Cell {
    constructor(x, y) {
      this.player = 0;

      this.x = x;
      this.y = y;

    }
    
    
    show() {
      switch (this.player) {
        case 0:
            break;
        case 1:
            break;
        case 2:
            break;
      }

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

      if (button == 2) {
        this.flag = !this.flag;
      } else if (button == 0) {
        this.seen = true;
      }

      //console.log("showing:" + this.x + " " + this.y + " " + this.flag + "|" + this.adj);
      this.show()

  
    }

    
    
    setSeen(s) {
      this.seen = s;
    }
    
  
  }