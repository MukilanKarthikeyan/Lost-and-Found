class MazeCell {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        this.walls = [true, true, true, true];
    }

    neighbors() {
        res = []
        if(!walls[0]) {
            res.push([i - 1, j]);
        }
        if(!walls[1]) {
            res.push([i, j + 1]);
        }
        if(!walls[2]) {
            res.push([i + 1, j]);
        }
        if(!walls[3]) {
            res.push([i, j - 1]);
        }
        return res;
    }
    
    show() {
        x = this.i * scl;
        y = this.j * scl;
        stroke(255);
        if(walls[0]) {
            line(x, y, x + w, y);
        }
        if(walls[1]) {
            line(x + w, y, x + w, y + w);
        }
        if(walls[2]) {
            line(x, y + w, x + w, y + w);
        }
        if(walls[3]) {
            line(x, y, x, y + w);
        }
    }

}