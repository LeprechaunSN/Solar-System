export default class CartesianCoordinates {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getX() {
        return this.x;
    }

    getPhi() {
        return this.y;
    }
}