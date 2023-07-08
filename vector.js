// https://en.wikipedia.org/wiki/Vector_(mathematics_and_physics)
class Vector {
    
    constructor(x, y) {
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
    
    scale(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }
    
    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    
    normalize() {
        const mag = this.magnitude();
        this.x /= mag;
        this.y /= mag;
        return this;
    }
    
    static dot(vector1, vector2) {
        return vector1.x * vector2.x + vector1.y * vector2.y;
    }
    
    static copy(vector) {
        return new Vector(vector.x, vector.y);
    }
    
    angle(reference = new Vector(1, 0)) {
        const dotProduct = Vector.dot(
            Vector.copy(this).normalize(),
            Vector.copy(reference).normalize(),
        );
        return Math.acos(dotProduct) * (180 / Math.PI);
    }
    
}