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

    getAllPlanets = () => {
        const planetsData: Array<PlanetData> = [];
        const planetsRootUrl = `${StarWarsApiClient.PLANETS}/`;
        return this.getPlanetsRecursive(planetsRootUrl, planetsData);
    };

    private getPlanetsRecursive = (pageUrl: string, planetsData: Array<PlanetData>) => {
        return new Promise<Array<PlanetData>>(
            (resolve, reject) => this.getPlanetsPage(pageUrl)
                .then(response => {
                    const { data } = response;
                    planetsData.push(...data.results);
                    if (data.next) {
                        this.getPlanetsRecursive(data.next, planetsData)
                            .then(resolve)
                            .catch(reject);
                    } else {
                        resolve(planetsData);
                    }
                })
                .catch(reject)
        );
    };
}

export default StarWarsApiClient;
