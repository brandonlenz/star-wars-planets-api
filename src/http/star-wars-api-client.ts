import HttpClient from "./http-client"

export interface PlanetData {
    name: string
    diameter: string
    rotation_period: string
    orbital_period: string
    gravity: string
    population: string
    climate: string
    terrain: string
    surface_water: string
    residents: Array<string>
    films: Array<string>
    url: string
    created: string
    edited: string
}

interface PlanetsData {
    count: number;
    next: string | null;
    previous: string | null;
    results: Array<PlanetData>
}

class StarWarsApiClient extends HttpClient {

    private static BASE_URL = 'https://swapi.dev/api/';
    private static PLANETS = 'planets';

    constructor() {
        super(StarWarsApiClient.BASE_URL);
    }

    getPlanetsPage = (pageUrl: string) => {
        return this.instance.get<PlanetsData>(pageUrl);
    };

    getPlanets = () => {
        const planetsRootUrl = `${StarWarsApiClient.PLANETS}/`;
        return this.getPlanetsPage(planetsRootUrl);
    };
}

export default StarWarsApiClient;
