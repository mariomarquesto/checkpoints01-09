/// ========================================================================== ///
/// ============================= HENRY-GOT ============================= ///
/// ================================== TESTS ================================= ///

const filtroPorEdad = require("../controllers/02-controller");
const utils = require("../utils");
const expect = require("chai").expect;

describe("---------- `filtroPorEdad` ----------", function () {
  const personajes = utils.generarPersonajes(4);

  beforeEach(function () {
    utils.reset();
  });

  it('Devuelve el mensaje de error que diga: "No hay personajes igual o menores a la edad solicitada"', function () {
    utils.personajes.push(personajes);
    utils.personajes = utils.personajes.flat();
    console.log(utils.personajes);
    expect(() => filtroPorEdad(10)).to.throw(
      "No hay personajes igual o menores a la edad solicitada"
    );
  });
  it("Devolver los personajes que sean igual o menor a la edad solicitada", function () {
    utils.personajes.push(personajes);
    utils.personajes = utils.personajes.flat();
    utils.personajes[0].edad = 11;
    utils.personajes[1].edad = 10;
    expect(filtroPorEdad(10)).to.deep.equal([utils.personajes[1]]);
  });
});
