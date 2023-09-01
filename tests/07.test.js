const supertest = require("supertest-as-promised")(require("../app"));
const utils = require("../utils");
const expect = require("chai").expect;

describe("POST /personaje", function () {
  const personaje = utils.generarPersonajes(2);

  beforeEach(function () {
    utils.reset();
  });

  const personajeTest = {
    id: "hjl8d1m9n0",
    nombre: "testpersonaje",
    edad: 1,
    descripcion: `surviving member `,
    numeroEpisodio: 3,
  };

  it("POST si el personaje ya existe, responde con el error correspondiente y un status 400", async () => {
    utils.personajes.push(personaje);
    utils.personajes = utils.personajes.flat();
    const result = await supertest
      .post("/personaje")
      .send({ personaje: utils.personajes[0] });
    expect(result.status).to.eql(400);
    expect(result.body).to.eql({
      error: "Ya existe ese personaje",
    });
  });

  it("POST debe agregar el personaje de forma correcta y retornar todos los personajees junto a un status 201", async () => {
    utils.personajes.push(personaje);
    utils.personajes = utils.personajes.flat();
    const agregradoOk = [...utils.personajes, personajeTest];
    const result = await supertest
      .post("/personaje")
      .send({ personaje: personajeTest });
    expect(result.status).to.eql(201);
    expect(result.body).to.eql({
      data: agregradoOk,
    });
  });
});
