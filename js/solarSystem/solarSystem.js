import CoordinatesConverter from "../coordinates/coordinatesConverter.js";
import Planet from "./planet.js";
import Star from "./star.js";

export default class SolarSystem {
    constructor(parameters) {
        this.width = parameters.width;
        this.height = parameters.height;
        this.sun = this._createSun(parameters);
        this.planets = this._createPlanets(parameters);
        this.coordinatesConverter = new CoordinatesConverter(this.width, this.height);
    }

    _createSun(parameters) {
        return new Star(
            "sun",
            parameters.sunSize, 
            0, 
            0
        );
    }

    _createPlanets(parameters) {
        return [
            this._createPlanet("mercury", parameters),
            this._createPlanet("venus", parameters),
            this._createPlanet("earth", parameters),
            this._createPlanet("mars", parameters),
            this._createPlanet("jupiter", parameters),
            this._createPlanet("saturn", parameters),
            this._createPlanet("uranus", parameters),
            this._createPlanet("neptune", parameters),
        ];
    }

    _createPlanet(name, parameters) {
        return new Planet(
            name,
            parameters.planetsSizes[name],
            parameters.planetsDistancesToSun[name],
            parameters.planetsSpeeds[name]
        )
    }

    render() {
        this.sun.render(this.coordinatesConverter);

        this.planets.forEach(planet => {
            planet.render(this.coordinatesConverter);
        });
    }

    spinPlanets() {
        this.planets.forEach(planet => {
            planet.spin(this.coordinatesConverter);
        });
    }
}