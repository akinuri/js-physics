// https://en.wikipedia.org/wiki/Vector_(mathematics_and_physics)
class Vector {
    
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    
    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }
    
    subtract(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        return this;
    }
    
    multiply(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }
    
    divide(scalar) {
        this.x /= scalar;
        this.y /= scalar;
        return this;
    }
    
    normalize() {
        const mag = this.magnitude();
        if (mag != 0) this.divide(mag);
        return this;
    }
    
    getMagnitude(value) {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    
    setMagnitude(value) {
        this.normalize().multiply(value);
    }
    
    getAngle(reference = new Vector(1, 0)) {
        const dotProduct = Vector.dot(
            Vector.createCopy(this).normalize(),
            Vector.createCopy(reference).normalize(),
        );
        return rad2deg( Math.acos(dotProduct) );
    }
    
    setAngle(value) {
        let angle = deg2rad(value);
        let mag = this.getMagnitude();
        this.x = Math.cos(angle) * mag;
        this.y = Math.sin(angle) * mag;
        return this;
    }
    
    rotate(value) {
        this.setAngle(this.getAngle() + value);
        return this;
    }
    
    static dot(vector1, vector2) {
        return vector1.x * vector2.x + vector1.y * vector2.y;
    }
    
    static createCopy(vector) {
        return new Vector(vector.x, vector.y);
    }
    
    static createFromAngle(angle, magnitude) {
        let x = Math.cos( deg2rad(angle) );
        let y = Math.sin( deg2rad(angle) );
        let v = new Vector(x, y);
        v.magnitude(magnitude);
        return v;
    }
    
    static createFromPoints(point1, point2) {
        return Vector.createFromAngle(
            point2.angle(point1),
            point2.distance(point1),
        );
    }
    
}