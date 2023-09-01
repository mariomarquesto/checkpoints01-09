/// ========================================================================== ///
/// ============================= HENRY-GOT ============================= ///
/// ================================== TESTS ================================= ///

const supertest = require("supertest-as-promised")(require("../app"));
const utils = require("../utils");
const expect = require("chai").expect;

describe("---------- `getPersonajesPorEdad` ----------", function () {
  const personajes = utils.generarPersonajes(2);

  beforeEach(function () {
    utils.reset();
  });

  it("Si no hay personajes con la edad solicitada por el cliente, arroja un error", function () {
    personajes[0].edad = 12;
    personajes[1].edad = 2;
    utils.personajes.push(personajes);
    utils.personajes = utils.personajes.flat();
    return supertest
      .get("/personajes")
      .send({ edad: 1 })
      .expect(400)
      .expect(function (res) {
        expect(res.body).to.eql({
          error: "No hay personajes igual o menores a la edad solicitada",
        });
      });
  });

  it("Devuelve personajes que coincidan con la edad solicitada por el cliente", function () {
    personajes[0].edad = 12;
    personajes[1].edad = 2;
    utils.personajes.push(personajes);
    utils.personajes = utils.personajes.flat();
    return supertest
      .get("/personajes")
      .send({ edad: 6 })
      .expect(200)
      .expect("Content-Type", /json/)
      .expect(function (res) {
        expect(res.body).to.eql([personajes[1]]);
      });
  });
});
