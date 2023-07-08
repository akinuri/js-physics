// https://en.wikipedia.org/wiki/Point_(geometry)
// https://en.wikipedia.org/wiki/Vertex_(geometry)
class Point {
    
    constructor(x = 0, y = 0) {
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
    
    rotateAround(referencePoint, angle) {
        const sinTheta = Math.sin(angle);
        const cosTheta = Math.cos(angle);
        const dx = this.x - referencePoint.x;
        const dy = this.y - referencePoint.y;
        const rotatedX = dx * cosTheta - dy * sinTheta + referencePoint.x;
        const rotatedY = dx * sinTheta + dy * cosTheta + referencePoint.y;
        this.x = rotatedX;
        this.y = rotatedY;
    }
    
    calcDistanceTo(point) {
        // https://en.wikipedia.org/wiki/Hypotenuse
        let a = this.x - point.x;
        let b = this.y - point.y;
        let c = Math.sqrt(a**2, b**2);
        return c;
    }
    
    calcAngleTo(point) {
        // https://stackoverflow.com/questions/9614109/how-to-calculate-an-angle-from-points
        // https://en.wikipedia.org/wiki/Theta
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2
        // https://en.wikipedia.org/wiki/Inverse_trigonometric_functions
        let dx = point.x - this.x;
        let dy = point.y - this.y;
        let theta = Math.atan2(-dy, -dx);
        theta = rad2deg(theta);
        if (theta < 0) theta += 360;
	    return rad2deg(angle);
    }
    
    createPointAt(distance, angle = 0) {
        angle = deg2rad(angle);
        let x = Math.round(this.x + distance * Math.cos(angle));
        let y = Math.round(this.y - distance * Math.sin(angle));
        return new Point(x, y);
    }
    
    static createCopy(point) {
        return new Point(point.x, point.y);
    }
    
}