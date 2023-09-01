const utils = require("../utils");
const expect = require("chai").expect;
const supertest = require("supertest-as-promised")(require("../app"));

describe("PUT /personaje", function () {
  let updates;
  beforeEach(
    () => (
      utils.reset(),
      utils.personajes.push(...utils.generarPersonajes(1)),
      (updates = {
        ...utils.personajes[0],
        nombre: "Daenerys Targaryen",
        numeroEpisodio: 5,
        casa: "Casa Targaryen",
      })
    )
  );

  it("PUT responde el mensaje de error en caso de que algo falle", async () => {
    return await supertest
      .put("/personaje")
      .send({ personaje: { ...updates, id: "no-existe" } })
      .expect(400)
      .expect("Content-Type", /json/)
      .expect(function (res) {
        expect(res.body).to.eql({
          error: "No se encontró el personaje solicitado",
        });
      });
  });

  it("PUT responde con un mensaje que indica que el personaje fue actualizado correctamente", (done) => {
    supertest
      .put("/personaje")
      .send({ personaje: updates })
      .expect(200)
      .expect("Content-Type", /json/)
      .expect(function (res) {
        expect(res.body).to.eql({
          message: "Personaje actualizado correctamente",
        });
      })
      .end(done);
  });

  it("PUT responde el mensaje de error en caso de que reciba algún valor undefined", () => {
    return supertest
      .put("/personaje")
      .send({ personaje: { ...updates, casa: undefined } })
      .expect(400)
      .expect("Content-Type", /json/)
      .expect(function (res) {
        expect(res.body).to.eql({
          error: "Faltan datos a completar",
        });
      });
  });
});
