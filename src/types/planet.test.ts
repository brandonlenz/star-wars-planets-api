import Planet from './planet'

describe('planet.ts', () => {
    const planet = new Planet({
        climate: "arid",
        created: "2014-12-09T13:50:49.641000Z",
        diameter: "10465",
        edited: "2014-12-20T20:58:18.411000Z",
        films: [],
        gravity: "1 standard",
        name: "Tatooine",
        orbital_period: "304",
        population: "200000",
        residents: [],
        rotation_period: "23",
        surface_water: "1",
        terrain: "desert",
        url: "http://swapi.dev/api/planets/1/"
    });

    it('can properly calculate and display population', () => {
        expect(planet.printPopulation()).toEqual("200 000");
    });

   it('can properly calculate and display water surface area', () => {
       expect(planet.printWaterSurfaceArea()).toEqual("3 440 554");
   });
});
