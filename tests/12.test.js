const supertest = require("supertest-as-promised")(require("../app"));
const utils = require("../utils");
const expect = require("chai").expect;

describe("GET /mostrarLaEdadMedia", function () {
  beforeEach(() => {
    utils.reset();
  });

  it("Devolver el valor del controlador 06", function () {
    const personaje = utils.generarPersonajes(5);
    utils.testPersonaje().push(personaje[0]);
    utils.testPersonaje().push(personaje[1]);
    utils.testPersonaje().push(personaje[2]);
    utils.testPersonaje().push(personaje[3]);
    utils.testPersonaje().push(personaje[4]);

    let valor0 = utils.personajes[0].edad;
    let valor1 = utils.personajes[1].edad;
    let valor2 = utils.personajes[2].edad;
    let valor3 = utils.personajes[3].edad;
    let valor4 = utils.personajes[4].edad;
    let info = valor0 + valor1 + valor2 + valor3 + valor4;
    let total = info / utils.personajes.length;
    return supertest
      .get(`/mostrarLaEdadMedia`)
      .expect(200)
      .expect("Content-Type", /json/)
      .expect((res) => {
        expect(res.body).to.eql({ results: Math.trunc(total) });
      });
  });

  it("Si no hay personajes arroja un error", function () {
    return supertest
      .get("/mostrarLaEdadMedia")
      .expect(400)
      .expect(function (res) {
        expect(res.body).to.eql({
          error: "No tenemos valores",
        });
      });
  });
});
