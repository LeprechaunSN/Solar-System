import {WR, HR} from "./solarSystemParameters.js"; 

export default class CoordinateConverter {
    constructor(point) {
        this.point = point;
        this.xr = -WR / 2;
        this.yr = HR / 2;
        this.wr = WR;
        this.hr = HR;
        this.ws = document.documentElement.clientHeight;
        this.hs = document.documentElement.clientHeight;
    }

    getScreenX() {
        return this.ws * (this.point.x - this.xr) / this.wr + (this.ws / 2);
    }

    getScreenY() {
        return this.hs * (-this.point.y + this.yr) / this.hr;
    }
}