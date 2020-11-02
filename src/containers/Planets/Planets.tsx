import React, { useEffect, useState } from "react";

import Planet from "../../components/Planet/Planet";
import PlanetType from "../../types/planet"
import StarWarsApiClient, { PlanetData } from "../../http/star-wars-api-client";

const api = new StarWarsApiClient();

const Planets = () => {
    const [planets, setPlanets] = useState<Array<PlanetType>>([]);

    return (
        <table>
            <thead>
                <Planet.Header />
            </thead>
            <tbody>

            </tbody>
        </table>
    );
};

export default Planets;
