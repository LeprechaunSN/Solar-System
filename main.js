import Planet from "./planet.js"
import * as params from "./solarSystemParameters.js"

const sun = new Planet(
    "sun",
    params.SUN_SIZE, 
    0, 
    0
);

const planets = [
    new Planet(
        "mercury",
        params.MERCURY_SIZE, 
        params.MERCURY_DISTANCE,
        params.MERCURY_SPEED
    ),

    new Planet(
        "venus",
        params.VENUS_SIZE,
        params.VENUS_DISTANCE,
        params.VENUS_SPEED
    ),

    new Planet(
        "earth",
        params.EARTH_SIZE,
        params.EARTH_DISTANCE, 
        params.EARTH_SPEED
    ),

    new Planet(
        "mars",
        params.MARS_SIZE,
        params.MARS_DISTANCE,
        params.MARS_SPEED
    ),

    new Planet(
        "jupiter",
        params.JUPITER_SIZE,
        params.JUPITER_DISTANCE,
        params.JUPITER_SPEED
    ),

    new Planet(
        "saturn",
        params.SATURN_SIZE,
        params.SATURN_DISTANCE,
        params.SATURN_SPEED
    ),

    new Planet(
        "uranus",
        params.URANUS_SIZE,
        params.URANUS_DISTANCE,
        params.URANUS_SPEED
    ),

    new Planet(
        "neptune",
        params.NEPTUNE_SIZE,
        params.NEPTUNE_DISTANCE,
        params.NEPTUNE_SPEED
    )
];

planets.forEach(planet => {
    setInterval(() => planet.spin(), 100 / planet.speed * 3);
});