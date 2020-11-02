import React, { Component, FunctionComponent } from "react";

import PlanetType from "../../types/planet";

type PlanetProps = {
    planet: PlanetType
}

class Planet extends Component<PlanetProps> {

    static Header: FunctionComponent = () => {
        return (
            <tr>
                <th>Name</th>
                <th>Climate(s)</th>
                <th># of Notable Residents</th>
                <th>Terrain(s)</th>
                <th>Population</th>
                <th>Water Surface Area (km<sup>2</sup>)</th>
            </tr>
        );
    };

    render() {
        const { planet } = this.props;

        return (
            <tr >
                <td>
                    <a href={planet.url} target="_blank" rel="noopener noreferrer">
                        {planet.name}
                    </a>
                </td>

                <td>
                    {planet.climate}
                </td>

                <td>
                    {planet.residents}
                </td>

                <td>
                    {planet.terrain}
                </td>

                <td>
                    {planet.population}
                </td>

                <td>
                    {planet.surface_water}
                </td>
            </tr>
        );
    }
}

export default Planet;