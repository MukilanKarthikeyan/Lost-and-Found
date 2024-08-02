class Leg {
    constructor(len, x, y, relativeOrigin) {
        this.legLen;
        this.relend = createVector(x, y);
        this.relorigin = relativeOrigin;
        this.endEffector = createVector(x, y).add(this.relorigin);
        this.vel = createVector(0, 0);
        this.midpoint = createVector();
        this.hipAngle = 0;
        this.theta = 0; //thigh angle; angle from vertical to hip-mid line
        this.omega = 0; //calf angle; angle between hip-end line to calf
        this.update();
        
    }


    update() {
        this.endEffector.add(this.vel);
        limitRot();
        this.midpoint.set(this.endEffector.x, this.endEffector.y).sub(relorigin).div(2).add(relorigin);
        this.relend.set(this.endEffector.x - relorigin.x, this.endEffector.y - relorigin.y);
        findAngles();
    }

    limitRot() {
        this.endEffector.sub(this.relorigin).limit(legLen * 2).add(this.relorigin);
    }

    findAngles() {
        len = this.limitRotrelorigin.dist(this.endEffector) / 2;
        this.omega = acos(len / legLen);
    
        this.theta = angleref.angleBetween(relend);
    
        return omega;
    }
}