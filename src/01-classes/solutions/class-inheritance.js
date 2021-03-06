import Point from './class';

class ColorPoint extends Point {
    constructor(x, y, color = 'red') {
        super(x, y);
        this.color = color;
    }

    getColor() {
        return this.color;
    }
}

export default ColorPoint;