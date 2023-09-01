const router = require("express").Router();
const filtroPorEdad = require("../controllers/02-controller");

/* ⚠️ No modificar nada arriba de esta línea ⚠️

  8️⃣ ***** EJERCICIO 8 ***** - GET /personajes 8️⃣:

  🟢 Integrar la función filtroPorEdad que desarrollaste previamente (Ejercicio 2) para obtener los personajes que coincidan con la edad propuesta por el cliente.
  🟢 Responder con los resultados encontrados.
  🟢 Si hay un error, responder un objeto con una propiedad "error": <el mensaje recibido en el objeto error>.

    📢 PUNTOS A TENER EN CUENTA 📢
  1) Recibirás el argumento necesario para ejecutar esa función filtroPorEdad mediante la propiedad "body" de *req*.
  2) ¡Revisa en los test el status que deben tener tus respuestas!
*/

router.get("/personajes", (req, res) => {
  // Tu código aquí
   // Obtén el argumento de edad desde el cuerpo de la solicitud
   const { edad } = req.body;

   // Verifica si se proporcionó la edad
   if (!edad) {
     // Si no se proporciona la edad, responde con un error
     return res.status(400).json({ error: "No hay personajes igual o menores a la edad solicitada" });
   }
 
   try {
    // Ejecuta la función filtroPorEdad para filtrar los personajes
    const personajesFiltrados = filtroPorEdad(edad);
  
    // Verifica si se encontraron personajes
    if (personajesFiltrados.length === 0) {
      // Si no se encontraron personajes, responde con un código de estado 400 y un mensaje de error
      return res.status(400).json({ error: "No hay personajes igual o menores a la edad solicitada" });
    }
  
    // Responde con los personajes filtrados
    res.status(200).json(personajesFiltrados);
  } catch (error) {
    // Si ocurre un error en la función filtroPorEdad, responde con un código de estado 500 y un objeto de error
    res.status(400).json({ error: error.message });
  }
});

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = router;
