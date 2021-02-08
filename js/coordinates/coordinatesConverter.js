import CartesianCoordinates from "./cartesianCoordinates.js";
import PolarCoordinates from "./polarCoordinates.js";

export default class CoordinatesConverter {
    constructor(realWidth, realHeight) {
        this._realX = -realWidth / 2;
        this._realY = realHeight / 2;
        this._realWidth = realWidth;
        this._realHeight = realHeight;
        this._sreenWidth = document.documentElement.clientHeight;
        this._screenHeight = document.documentElement.clientHeight;
    }

    _getScreenXFromCartesianCoordinates(x) {
        return this._sreenWidth * (x - this._realX) / this._realWidth + (this._sreenWidth / 2);
    }

    _getScreenYFromCartesianCoordinates(y) {
        return this._screenHeight * (-y + this._realY) / this._realHeight;
    }

    _getScreenXFromPolarCoordinates(r, phi) {
        const x = this.convertPolarCoordinatesToCartesianX(r, phi);
        return this._getScreenXFromCartesianCoordinates(x);
    }

    _getScreenYFromPolarCoordinates(r, phi) {
        const y = this.convertPolarCoordinatesToCartesianY(r, phi);
        return this._getScreenYFromCartesianCoordinates(y);
    }

    getScreenX(coordinates) {
        if (coordinates instanceof CartesianCoordinates) {
            return this._getScreenXFromCartesianCoordinates(coordinates.getX());
        }
        if (coordinates instanceof PolarCoordinates) {
            return this._getScreenXFromPolarCoordinates(coordinates.getR(), coordinates.getPhi());
        }
    }

    getScreenY(coordinates) {
        if (coordinates instanceof CartesianCoordinates) {
            return this._getScreenYFromCartesianCoordinates(coordinates.getY());
        }
        if (coordinates instanceof PolarCoordinates) {
            return this._getScreenYFromPolarCoordinates(coordinates.getR(), coordinates.getPhi());
        }
    }

    convertPolarCoordinatesToCartesianX(r, phi) {
        return r * Math.cos(phi * Math.PI / 180);
    }

    convertPolarCoordinatesToCartesianY(r, phi) {
        return r * Math.sin(phi * Math.PI / 180);
    }
}