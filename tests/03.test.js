/* ==========================================================================
  =============================== HENRY-GOT =================================
  ================================== TESTS ================================= */

const utils = require("../utils");
const expect = require("chai").expect;
const updatePersonaje = require("../controllers/03-controller");

describe("----------`updatePersonaje`----------", function () {
  beforeEach(
    () => (utils.reset(), utils.personajes.push(...utils.generarPersonajes(10)))
  );

  it("Debe retornar un error al no encontrar el personaje", () => {
    expect(() =>
      updatePersonaje({
        ...utils.personajes[0],
        id: "no-existe",
        casa: "asd",
      })
    ).to.throw("No se encontró el personaje solicitado");
    expect(() =>
      updatePersonaje({
        ...utils.personajes[1],
        id: "sdsdsd",
        casa: "casa falsa",
      })
    ).to.throw("No se encontró el personaje solicitado");

    expect(() =>
      updatePersonaje({
        ...utils.personajes[2],
        id: "null",
        casa: "alguna casa",
      })
    ).to.throw("No se encontró el personaje solicitado");
  });

  it("Debe modificar de forma correcta al personaje encontrado", () => {
    let personaje = utils.personajes[0];
    const updates = {
      ...personaje,
      nombre: "Daenerys Targaryen",
      numeroEpisodio: 5,
      casa: "Casa Targaryen",
    };
    const updatedPersonaje = updatePersonaje(updates);

    expect(updatedPersonaje.id).to.equal(personaje.id);
    expect(updatedPersonaje.casa).to.equal(updates.casa);
    expect(updatedPersonaje.edad).to.equal(personaje.edad);
    expect(updatedPersonaje.nombre).to.equal(updates.nombre);
    expect(updatedPersonaje.descripcion).to.equal(personaje.descripcion);
    expect(updatedPersonaje.numeroEpisodio).to.equal(updates.numeroEpisodio);
  });

  it("Si alguno de los datos recibidos es undefined debe retornar un error", () => {
    expect(() =>
      updatePersonaje({ ...utils.personajes[0], casa: undefined })
    ).to.throw("Faltan datos a completar");
    expect(() =>
      updatePersonaje({ ...utils.personajes[1], nombre: undefined })
    ).to.throw("Faltan datos a completar");
    expect(() =>
      updatePersonaje({ ...utils.personajes[2], numeroEpisodio: undefined })
    ).to.throw("Faltan datos a completar");
  });
});
