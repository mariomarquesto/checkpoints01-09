const utils = require("../utils");
/*⚠️ No modificar nada arriba de esta línea ⚠️

  5️⃣ ***** EJERCICIO 5 ***** - ordenarPorEdad 5️⃣:
  
  🟢 Retornar un array de personajes que esten ordenados por edad, de mayor a menor.

  🟢 Si no hay personajes en la base de datos, debes de retornar un error que diga: "No se encontraron personajes"
  
  📌 Investigar el método "sort" puede tener dos valores.

    📢 PUNTOS A TENER EN CUENTA 📢
  1) Recuerda que el mensaje de error deben ser exactamente como lo pide el enunciado.
*/

const ordenarPorEdad = () => {
  // Tu código aquí
   // Verificar si no hay personajes en la base de datos
   if (utils.personajes.length === 0) {
    throw new Error('No se encontraron personajes');
  }

  // Utilizar el método "sort" para ordenar los personajes por edad de mayor a menor
  const personajesOrdenados = utils.personajes.sort((a, b) => b.edad - a.edad);

  // Devolver el array de personajes ordenado
  return personajesOrdenados;
};

// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = ordenarPorEdad;
