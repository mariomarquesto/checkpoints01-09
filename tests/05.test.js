/// ========================================================================== ///
/// ============================= HENRY-GOT ============================= ///
/// ================================== TESTS ================================= ///

const utils = require('../utils');
const ordenarPorEdad = require('../controllers/05-controller');
const expect = require('chai').expect;
describe('---------- `ordenarPorEdad` ----------', function () {
   beforeEach(function () {
      utils.reset();
   });
   const valores0 = { min: 1, max: 15 }
   const valores1 = { min: 15, max: 25 }
   const valores2 = { min: 25, max: 35 }
   const valores3 = { min: 35, max: 45 }

   it("Debes de devolver a los personajes de mayor a menor con lo que respecta a su edad", () => {
      const personaje0 = utils.generarPersonajes(1);
      personaje0[0].edad = valores0
      const personaje1 = utils.generarPersonajes(1);
      personaje1[0].edad = valores1
      const personaje2= utils.generarPersonajes(1);
      personaje2[0].edad = valores2
      const personaje3 = utils.generarPersonajes(1);
      personaje3[0].edad = valores3
      utils.testPersonaje().push(personaje3[0]);
      utils.testPersonaje().push(personaje2[0]);
      utils.testPersonaje().push(personaje1[0]);
      utils.testPersonaje().push(personaje0[0]);
      expect(ordenarPorEdad()).to.eql([
         personaje3[0],
         personaje2[0],
         personaje1[0],
         personaje0[0],
      ]);
   });

   it('Debe arrojar un error si no hay personajes', function () {
      expect(() => ordenarPorEdad()).to.throw('No se encontraron personajes');
   });
});
