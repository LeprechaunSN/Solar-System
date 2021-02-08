import SpaceObject from "./spaceObject.js";

export default class Planet extends SpaceObject {
    constructor(name, size, r, speed, imgSrc) {
        super(name, size, r, 180, imgSrc);
        this.speed = speed;
    }

    spin = (coordinatesConverter) => {
        this.coordinates.decrementPhi();
        this.changePlace(coordinatesConverter);
        const delayTime = 100 / this.speed * 3;
        setTimeout(() => {this.spin(coordinatesConverter)}, delayTime);
    }
}