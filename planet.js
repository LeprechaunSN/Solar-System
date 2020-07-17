import Point from "./point.js"
import CoordinateConverter from "./coordinateСonverter.js"

export default class Planet {
    constructor(name, size, distanceToSun, speed) {
        this.name = name;
        this.size = size;
        this.speed = speed;
        this.r = distanceToSun;
        this.phi = 180;
        this.element = document.getElementsByClassName(this.name)[0];
        this.setStyle();
    }

    setStyle() {
        this.element.style.width = this.element.style.height = this.size + "px";
        this.changePlace(this.calculateXY());
    }

    calculateXY() {
        return new Point(
            this.r * Math.cos(this.phi * Math.PI / 180),
            this.r * Math.sin(this.phi * Math.PI / 180)
        );
    }

    spin() {
        this.changePlace(this.calculateXY());
        this.phi--;
    }

    changePlace(point) {
        const converter = new CoordinateConverter(point);
        this.element.style.left = converter.getScreenX() - (this.size / 2) + "px";
        this.element.style.top = converter.getScreenY() - (this.size / 2) + "px";
    }
}