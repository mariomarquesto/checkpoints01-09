const utils = require("../utils");

/* ⚠️ No modificar nada arriba de esta línea ⚠️ */

/* 4️⃣ * EJERCICIO 4 * - deletePersonaje 4️⃣:

🟢 Busca un personaje por ID. Elimínalo de la base de datos y responde con el array de personajes teniendo en cuenta que no está más el que acabas de eliminar.
🟢 Si no existe el personaje con ese ID, arrojá un error que diga: `No existe el personaje con id: ${personajeID}`.
*/

const deletePersonaje = (personajeID) => {
  // Tu código aquí
  // Buscar el índice del personaje por su ID
  const index = utils.personajes.findIndex((personaje) => personaje.id === personajeID);

  // Verificar si el personaje existe
  if (index === -1) {
    throw new Error(`No existe el personaje con id: ${personajeID}`);
  }

  // Eliminar el personaje del array
  const personajeEliminado = utils.personajes.splice(index, 1)[0];

  // Devolver el array de personajes actualizado
  return utils.personajes;
};

// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = deletePersonaje;
