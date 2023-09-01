/* ========================================================================== 
===================================== HENRY-GOT =============================
===================================== TESTS ================================= */

const utils = require("../utils");
const expect = require("chai").expect;
const deletePersonaje = require("../controllers/04-controller");

describe("----------`deletePersonaje`----------", function () {
  beforeEach( () => (utils.reset(), utils.personajes.push(...utils.generarPersonajes(3) ) ) );

  it("Debe retornar un mensaje con un error al no encontrar el personaje", () => {  expect(() => deletePersonaje("xyz789")).to.throw(  `No existe el personaje con id: ${"xyz789"}` ); });
  
  it("Debe eliminar un personaje de forma correcta y responder con el arreglo de personajes teniendo en cuenta el eliminado", () => {
    const initialPersonajes = [...utils.personajes];
    const [deletedPersonaje, deletedPersonaje2] = utils.personajes;
    const result = deletePersonaje(deletedPersonaje.id);
    expect(result).not.to.contain(deletedPersonaje);
    expect(result).to.have.length(initialPersonajes.length - 1);

    const result2 = deletePersonaje(deletedPersonaje2.id);
    expect(result2).not.to.contain(deletedPersonaje2);
    expect(result2).to.have.length(initialPersonajes.length - 2);
  });

});