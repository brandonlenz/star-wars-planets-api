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

    printClimates(): Array<string> {
        return Planet.parseList(this.climate).map(value => valueOrUnknown(value));
    }

    printNumberOfNotableResidents(): number {
        return this.residents.length;
    }

    printTerrains(): Array<string> {
        return Planet.parseList(this.terrain).map(value => valueOrUnknown(value));
    }

    printPopulation(): string | SpecialValue.Unknown {
        return this.population === "unknown" ? SpecialValue.Unknown : Planet.formatNumeric(this.population);
    }

    printWaterSurfaceArea(): string {
        if (isUnknown(this.diameter) || isUnknown(this.surface_water)) return SpecialValue.Unknown;

        const surfaceWater = parseInt(this.surface_water);
        if (isNaN(surfaceWater)) return SpecialValue.Unknown;

        const waterSurfaceArea = this.calculateSurfaceArea() * surfaceWater / 100;
        return Planet.formatNumeric(Math.ceil(waterSurfaceArea).toString());
    }

    private static parseList(commaSeparatedList: string): Array<string> {
        return commaSeparatedList.split(',');
    };

    private static formatNumeric(numericValue: string): string {
        if (numericValue.length > 3) {
            return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }

        return numericValue;
    }

    private calculateSurfaceArea(): number {
        const diameter = parseInt(this.diameter); //TODO: This could crash if diameter is not a number.
        return 4 * Math.PI * Math.pow(diameter / 2, 2);
    }
}

export default Planet;
