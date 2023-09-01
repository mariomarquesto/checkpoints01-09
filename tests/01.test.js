/// ========================================================================== ///
/// ============================= HENRY-GOT ============================= ///
/// ================================== TESTS ================================= ///

const addPersonaje = require("../controllers/01-controller");
const utils = require("../utils");
const expect = require("chai").expect;

describe("---------- `addPersonajeYepisodio` ----------", function () {
  let personajes = utils.generarPersonajes(2);
  let episodios = utils.generarEpisodios(4);
  beforeEach(function () {
    utils.reset();
  });
  it("Si el personaje ya se encuentra dentro de utils.personajes, arrojar un Error('Ya existe ese personaje')", function () {
    utils.personajes.push(personajes[0], personajes[1]);
    expect(() => addPersonaje(personajes[0])).to.throw(
      "Ya existe ese personaje"
    );
    expect(utils.personajes).to.have.length(2);
  });

  it("Agregar un personaje a utils.personajes y retornar todos los personajes si la operación fue exitosa", function () {
    utils.personajes.push(personajes[1]);
    expect(utils.personajes).to.have.length(1);
    expect(addPersonaje(personajes[0])).to.equal(utils.personajes);
    expect(utils.personajes).to.have.length(2);
  });
});
