
class Boid {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = p5.Vector.random2D();
        this.accl = createVector(0, 0);
        this.viewRadius = 20;

        this.maxSpeed = 1;
        this.maxAccl = 0.3;

        this.alignWeight = 0.0;
        this.cohesionweight = 0.0;
        this.sperationweight = 1;

        this.sepDist = 5;

    }

    show() {
        strokeWeight(10);
        stroke(200);
        point(this.pos.x, this.pos.y);
        
        strokeWeight(2);
        stroke('#ff0000');
        let dir = createVector(this.vel.x, this.vel.y);
        dir.mult(20);
        dir.add(this.pos);
        line(this.pos.x, this.pos.y, dir.x, dir.y);

        stroke('#00ff00');
        let adir = createVector(this.accl.x, this.accl.y);
        adir.mult(20);
        adir.add(this.pos);
        line(this.pos.x, this.pos.y, adir.x, adir.y);
        
    }


    fly(boids) {
        this.pos.add(this.vel);
        this.vel.add(this.accl);
        this.vel.limit(this.maxSpeed);
        this.accl = createVector(0,0);
        this.accl = this.align(boids).mult(this.alignWeight);
        this.accl.add(this.cohesion(boids).mult(this.cohesionweight));
        //this.accl.add(this.seperate(boids).mult(this.sperationweight));
        this.accl.limit(this.maxAccl);
       
    }
    
    inverseSigmoid(x) {
        return 1 / (1 + exp(-x));
    }

    seperate(boids) {
        let sepVect = createVector(0, 0);
        let count = 0;

        for (let b of boids) {
            let diff = Math.sqrt((this.pos.x - b.pos.x)^2 + (this.pos.y - b.pos.y)^2);
            if (diff <= this.sepDist) {
                count++;
                let dir = createVector(this.pos.x, this.pos.y);
                dir.sub(b.pos);
                
                // /dir.mult(this.sepDist);
                sepVect.add(dir.mult(this.inverseSigmoid(dir.mag()) * 5));
            }
        }
        sepVect.normalize();
        return sepVect;
    }
    //TODO: refacotr the three rules inot a single for loop to icnrease efficieny

    align(boids) {
        let avgVel = createVector(0, 0);
        let count = 0;

        for (let b of boids) {
            let diff = Math.sqrt((this.pos.x - b.pos.x)^2 + (this.pos.y - b.pos.y)^2);
            if (diff <= this.viewRadius) {
                count++;
                avgVel.add(b.vel);
            }
        }
        //avgVel.normalize();
        if (count > 0) {
            avgVel.div(count);
            avgVel.setMag(this.maxSpeed);
            avgVel.sub(this.vel);
            
        }

        return avgVel;
        //this.accl = avgVel;

        
    }

    cohesion(boids) {
        let center = createVector(0, 0);
        let count = 0;

        for (let b of boids) {
            let diff = Math.sqrt((this.pos.x - b.pos.x)^2 + (this.pos.y - b.pos.y)^2);
            if (diff <= this.viewRadius) {
                count++;
                center.add(b.pos);
            }
        }
        if (count > 0) {
            center.div(count);
            center.sub(this.pos);
            center.setMag(this.maxSpeed);
        }

        return center;
    }




    normalalizeVel() {
        let length = Math.sqrt(this.vel[0] ^ 2 + this.vel[1] ^ 2);
        this.vel[0] /= length;
        this.vel[1] /= length;
    }

    bounds(width, height) {

    }
}