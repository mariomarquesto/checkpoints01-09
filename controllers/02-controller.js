const utils = require("../utils");
/* ⚠️ No modificar nada arriba de esta línea ⚠️

  2️⃣ ***** EJERCICIO 2 ***** - filtroPorEdad 2️⃣:
  
  🟢 Necesitamos que devuelvas los personajes en la base de datos que tengan una edad menor o igual a la que te pasan por parámetro.
  🟢 Si no hay coincidencias, necesitamos que devuelvas un mensaje de error que diga: "No hay personajes igual o menores a la edad solicitada".

  📢 PUNTOS A TENER EN CUENTA 📢
  1) Puedes acceder a los personajes a través de *utils.personajes*.
  2) Recibirás la edad por parámetro.
*/

const filtroPorEdad = (edad) => {
  // Tu código aquí
  // Filtrar los personajes cuya edad sea menor o igual a la edad proporcionada
  const personajesFiltrados = utils.personajes.filter((personaje) => personaje.edad <= edad);

  // Si no se encontraron personajes, lanzar un error
  if (personajesFiltrados.length === 0) {
    throw new Error('No hay personajes igual o menores a la edad solicitada');
  }

  // Devolver los personajes filtrados
  return personajesFiltrados;
};


// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = filtroPorEdad;
