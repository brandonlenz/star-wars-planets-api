import { PlanetData } from "../http/star-wars-api-client";

class Planet {

    name: string;
    climate: string;
    residents: Array<string>;
    terrain: string;
    population: string;
    surface_water: string;
    diameter: string;
    url: string;

    constructor({name, climate, residents, terrain, population, surface_water, diameter, url}: PlanetData) {
        this.name = name;
        this.climate = climate;
        this.residents = residents;
        this.terrain = terrain;
        this.population = population;
        this.surface_water = surface_water;
        this.diameter = diameter;
        this.url = url;
    }
}
