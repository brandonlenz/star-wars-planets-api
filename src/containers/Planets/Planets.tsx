import React, { useEffect, useState } from "react";

import Planet from "../../components/Planet/Planet";
import PlanetType from "../../types/planet"
import StarWarsApiClient, { PlanetData, useApi } from "../../http/star-wars-api-client";

import classes from "./Planets.module.css";

const api = new StarWarsApiClient();

const convert = (results: Array<PlanetData>) => {
    return results.map(planetData => new PlanetType(planetData));
};

const Planets = () => {
    const [planets, setPlanets] = useState<Array<PlanetType>>([]);

    const [response, loading, error] = useApi(api.getAllPlanets);

    useEffect(() => {
        const planetsList: Array<PlanetType> = [];
        if (response) {
            planetsList.push(...convert(response));
            planetsList.sort((p1, p2) => p1.name.localeCompare(p2.name));
            setPlanets(planetsList);
        }
    }, [response]);

    return (
        loading
            ?   <div>loading planet data...</div>
            :   error
                ?   <>
                        <div>An error has occurred!</div>
                        <div>{error.name}: {error.message}</div>
                    </>
                :   <table className={classes.PlanetTable}>
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
