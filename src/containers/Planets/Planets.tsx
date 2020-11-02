import React, { useEffect, useState } from "react";

import Planet from "../../components/Planet/Planet";
import PlanetType from "../../types/planet"
import StarWarsApiClient, { PlanetData } from "../../http/star-wars-api-client";

const api = new StarWarsApiClient();

const convert = (results: Array<PlanetData>) => {
    return results.map(planetData => new PlanetType(planetData));
};

const Planets = () => {
    const [planets, setPlanets] = useState<Array<PlanetType>>([]);

    useEffect(() => {
        const planetsList: Array<PlanetType> = [];
        api.getPlanets().then(response => {
            planetsList.push(...convert(response.data.results));
            setPlanets(planetsList);
        });
    }, []);

    return (
        <table>
            <thead>
                <Planet.Header />
            </thead>
            <tbody>
                {planets.map(planet => <Planet key={planet.name} planet={planet} />) /* TODO: Sort Alphabetically */}
            </tbody>
        </table>
    );
};

export default Planets;
