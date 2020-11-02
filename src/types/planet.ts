import { PlanetData } from "../http/star-wars-api-client";

enum SpecialValue {
    Unknown = "?"
}

const isUnknown = (value: string) => {
    return value === "unknown";
};

const valueOrUnknown = (value: string) => {
    return isUnknown(value) ? SpecialValue.Unknown : value;
};

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

    printName(): string {
        return valueOrUnknown(this.name);
    }
}

export default Planet;
