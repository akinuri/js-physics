// https://en.wikipedia.org/wiki/Point_(geometry)
// https://en.wikipedia.org/wiki/Vertex_(geometry)
class Point {
    
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    add(point) {
        this.x += point.x;
        this.y += point.y;
        return this;
    }
    
    subtract(point) {
        this.x -= point.x;
        this.y -= point.y;
        return this;
    }
    
    rotate(referencePoint, angle) {
        const sinTheta = Math.sin(angle);
        const cosTheta = Math.cos(angle);
        const dx = this.x - referencePoint.x;
        const dy = this.y - referencePoint.y;
        const rotatedX = dx * cosTheta - dy * sinTheta + referencePoint.x;
        const rotatedY = dx * sinTheta + dy * cosTheta + referencePoint.y;
        this.x = rotatedX;
        this.y = rotatedY;
    }
    
    distance(point) {
        // https://en.wikipedia.org/wiki/Hypotenuse
        let a = this.x - point.x;
        let b = this.y - point.y;
        let c = Math.sqrt(a**2, b**2);
        return c;
    }
    
    static copy(point) {
        return new Point(point.x, point.y);
    }
    
    angle(point) {
        let angle = Math.atan2(-(point.y - this.y), point.x - this.x);
	    return rad2deg(angle);
    }
    
    point(distance, angle = 0) {
        angle = deg2rad(angle);
        let x = Math.round(this.x + distance * Math.cos(angle));
        let y = Math.round(this.y - distance * Math.sin(angle));
        return new Point(x, y);
    }
    
}