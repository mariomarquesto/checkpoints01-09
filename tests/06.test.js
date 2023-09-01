/// ========================================================================== ///
/// ============================= HENRY-GOT ============================= ///
/// ================================== TESTS ================================= ///

const utils = require('../utils');
const mostrarLaEdadMedia = require('../controllers/06-controller');
const { util } = require('chai');
const expect = require('chai').expect;

describe('---------- `mostrarLaEdadMedia` ----------', function () {
   
   beforeEach(function () {
      utils.reset();
   });

   it('Retornar la edad media de los personajes', function () {
      const personaje = utils.generarPersonajes(10);
      utils.testPersonaje().push(personaje[0]);
      utils.testPersonaje().push(personaje[1]);
      utils.testPersonaje().push(personaje[2]);
      utils.testPersonaje().push(personaje[3]);
      utils.testPersonaje().push(personaje[4]);
      
      let valor0 = utils.personajes[0].edad
      let valor1 = utils.personajes[1].edad
      let valor2 = utils.personajes[2].edad
      let valor3 = utils.personajes[3].edad
      let valor4 = utils.personajes[4].edad
      let info = valor0  + valor1 +valor2 +valor3 +valor4 
      let total = info/utils.personajes.length
      expect(mostrarLaEdadMedia()).to.eql(
         Math.trunc(total)
      );
      utils.testPersonaje().push(personaje[5]);
      utils.testPersonaje().push(personaje[6]);
      utils.testPersonaje().push(personaje[7]);
      utils.testPersonaje().push(personaje[8]);
      utils.testPersonaje().push(personaje[9]);
      let valor5 = utils.personajes[5].edad
      let valor6 = utils.personajes[6].edad
      let valor7 = utils.personajes[7].edad
      let valor8 = utils.personajes[8].edad
      let valor9 = utils.personajes[9].edad
      let info2 = valor0  + valor1 +valor2 +valor3 +valor4 +valor5 +valor6 +valor7 +valor8 +valor9 
      let total2 = info2/utils.personajes.length
      expect(mostrarLaEdadMedia()).to.eql(
         Math.trunc(total2)
      );
   });

   it('Debe arrojar un error si no hay personajes', function () {
      expect(() => mostrarLaEdadMedia()).to.throw('No tenemos valores');
   });
});

