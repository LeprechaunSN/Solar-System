export default class PolarCoordinates {
    constructor(r, phi) {
        this.r = r;
        this.phi = phi;
    }

    decrementPhi() {
        this.phi--;
    }

    getR() {
        return this.r;
    }

    getPhi() {
        return this.phi;
    }
}