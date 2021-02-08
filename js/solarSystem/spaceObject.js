import PolarCoordinates from "../coordinates/polarCoordinates.js";

export default class SpaceObject {
    constructor(name, size, r, phi) {
        this.name = name;
        this.size = size;
        this.coordinates = new PolarCoordinates(r, phi);
        this.element = document.querySelector("." + this.name);
    }

    _setContainerSize() {
        this.element.style.width = this.element.style.height = this.size + "px";
    }

    changePlace(coordinatesConverter) {
        this.element.style.left = coordinatesConverter.getScreenX(this.coordinates) - (this.size / 2) + "px";
        this.element.style.top = coordinatesConverter.getScreenY(this.coordinates) - (this.size / 2) + "px";
    }

    render(coordinatesConverter) {

        this._setContainerSize();
        this.changePlace(coordinatesConverter);
    }
}