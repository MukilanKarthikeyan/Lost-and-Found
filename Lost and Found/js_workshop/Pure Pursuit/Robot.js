class Robot {
    
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.robotpos = new Point(x, y);
        this.velocity = new Point(0, 0);

    }

    setVel(x, y) {
        this.velcity = new Point(x, y);
    }

    normVect() {
        let mag = (this.velocity.x ^ 2) + (this.velocity.y ^ 2);
        mag = sqrt(mag);

        this.velocity.x /= mag;
        this.velocity.y /= mag;
    }

}