const supertest = require('supertest-as-promised')(require('../app'));
const utils = require('../utils');
const expect = require('chai').expect;
describe('GET /personajesOrdenados', function () {
   beforeEach(function () {
      utils.reset();
   });

   it('Devuelve los personajes ordenados', function () {
      const valores0 ={ min: 1, max: 15 }
      const valores1 ={ min: 15, max: 25 }
      const valores2 ={ min: 25, max: 35 }
      const valores3 ={ min: 35, max: 45 }
      const personaje0 = utils.generarPersonajes(1);
      personaje0[0].edad = valores0;
      const personaje1 = utils.generarPersonajes(1);
      personaje1[0].edad = valores1;
      const personaje2 = utils.generarPersonajes(1);
      personaje2[0].edad = valores2;
      const personaje3 = utils.generarPersonajes(1);
      personaje3[0].edad = valores3;
      utils.testPersonaje().push(personaje3[0]);
      utils.testPersonaje().push(personaje2[0]);
      utils.testPersonaje().push(personaje1[0]);
      utils.testPersonaje().push(personaje0[0]);
      return supertest
         .get('/personajesOrdenados')
         .expect(200)
         .expect('Content-Type', /json/)
         .expect(function (res) {
            expect(res.body).to.eql([
               personaje3[0],
               personaje2[0],
               personaje1[0],
               personaje0[0],
            ]);
         });
   });
   it('Si no hay personajes arroja un error', function () {
      return supertest
         .get('/personajesOrdenados')
         .expect(400)
         .expect(function (res) {
            expect(res.body).to.eql({
               error: 'No se encontraron personajes',
            });
         });
   });
});
