const utils = require("../utils");
const expect = require("chai").expect;
const supertest = require("supertest-as-promised")(require("../app"));

describe("DELETE /personaje", function () {
  beforeEach(
    () => (utils.reset(), utils.personajes.push(...utils.generarPersonajes(5)))
  );

  it("DELETE responde con un mensaje que nos indica que el personaje fue eliminado correctamente", () => {
    const aux = utils.personajes[0].id;
    return supertest
      .delete("/personaje")
      .send({ id: aux })
      .expect(200)
      .expect("Content-Type", /json/)
      .expect(function (res) {
        expect(res.body).to.eql({
          message: `El personaje con el id ${aux} fue eliminado de forma exitosa`,
        });
      });
  });

  it("DELETE responde el mensaje de error en caso de que no encuentre el personaje", (done) => {
    supertest
      .delete("/personaje")
      .send({ id: 900 })
      .expect(400)
      .expect("Content-Type", /json/)
      .expect(function (res) {
        expect(res.body).to.eql({
          error: `No existe el personaje con id: ${900}`,
        });
      })
      .end(done);
  });
});
