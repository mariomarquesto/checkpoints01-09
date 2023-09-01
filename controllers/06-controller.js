const utils = require("../utils");
/* ⚠️ No modificar nada arriba de esta línea ⚠️

    6️⃣ ***** EJERCICIO 6 ***** - mostrarLaEdadMedia 6️⃣:

   🟢 Debes de sacar la edad media de todos los personajes que se encuentran en la serie. RECUERDA QUE DEBE SER UN VALOR ENTERO
   🟢 Si la media no existe, arrojar un error que diga: "No tenemos valores".
      
    📌 Investigar el método "Math.trunc".

   📢 PUNTOS A TENER EN CUENTA 📢
   1) Recuerden que la media se saca sumando la edad de cada personaje, dividido la suma total de personajes.
   2) Debemos encontrar la manera que la media nos dé un numero entero
*/

const mostrarLaEdadMedia = () => {
  // Tu código aquí
   // Verificar si no hay personajes en la serie
   if (utils.personajes.length === 0) {
    throw new Error('No tenemos valores');
  }

  // Calcular la suma total de edades
  const sumaEdades = utils.personajes.reduce((acumulador, personaje) => {
    return acumulador + personaje.edad;
  }, 0);

  // Calcular la media y usar Math.trunc para obtener un número entero
  const mediaEdad = sumaEdades / utils.personajes.length;
  const mediaEntera = Math.trunc(mediaEdad);

  return mediaEntera;
};

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = mostrarLaEdadMedia;
