import SolarSystem from "./solarSystem/solarSystem.js";
import { solarSystemParameters as params } from "./solarSystem/solarSystemParameters.js";

const solarSystem = new SolarSystem(params);

solarSystem.render();
solarSystem.spinPlanets();