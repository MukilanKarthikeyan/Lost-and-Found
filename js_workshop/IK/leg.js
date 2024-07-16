const { reloadAsync } = require("expo-updates");

class Leg {
    constructor(len, x, y) {
        this.legLen;
        this.relend = createVector(x, y);
        this.endEffector = createVector(x, y).add(relorigin);
        this.vel = createVector(0, 0);
        this.midpoint = createVector();
        this.hipAngle = 0;
        this.theta = 0; //thigh angle
        this.omega = 0; //calf angle
        this.update();
    }


    update() {
        endEffector.add(vel);
        limitRot();
        midpoint.set(endEffector.x, endEffector.y).sub(relorigin).div(2).add(relorigin);
        relend.set(endEffector.x - relorigin.x, endEffector.y - relorigin.y);
        findAngles();
    }

    limitRot() {
        endEffector.sub(relorigin).limit(legLen * 2).add(relorigin);
    }

    findAngles() {
        len = relorigin.dist(endEffector) / 2;
        omega = acos(len / legLen);
    
        theta = angleref.angleBetween(relend);
    
        return omega;
    }
}