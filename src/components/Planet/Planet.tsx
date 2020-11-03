import React, { Component, FunctionComponent } from "react";

import PlanetType from "../../types/planet";

import classes from "./Planet.module.css";

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
                <td className={classes.TextColumn}>
                    <a href={planet.url} target="_blank" rel="noopener noreferrer">
                        {planet.printName()}
                    </a>
                </td>

                <td className={classes.TextColumn}>
                    {planet.printClimates().map(climate => <li key={climate}>{climate}</li>)}
                </td>

                <td className={classes.NumericColumn}>
                    {planet.printNumberOfNotableResidents()}
                </td>

                <td className={classes.TextColumn}>
                    {planet.printTerrains().map(terrain => <li key={terrain}>{terrain}</li>)}
                </td>

                <td className={classes.NumericColumn}>
                    {planet.printPopulation()}
                </td>

                <td className={classes.NumericColumn}>
                    {planet.printWaterSurfaceArea()}
                </td>
            </tr>
        );
    }
}

export default Planet;
