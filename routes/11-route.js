const router = require("express").Router();
const ordenarPorEdad = require("../controllers/05-controller");

/* ⚠️ No modificar nada arriba de esta línea ⚠️

  1️⃣1️⃣ ***** EJERCICIO 11 ***** - GET /personajesOrdenados 1️⃣1️⃣:
  
  🟢 Integrar la función ordenarPorEdad que desarrollaste previamente (Ejercicio 5) para obtener los personajes ordenados.
  🟢 Si hay un error, responder un objeto con una propiedad "error": <el mensaje recibido en el objeto error>.
  
    📢 PUNTOS A TENER EN CUENTA 📢
  1) Si algo falla debes responder con el mensaje del error.
  2) ¡Revisa en los test el status que deben tener tus respuestas!
*/

router.get("/personajesOrdenados", (req, res) => {
  // Tu código aquí
  try {
    // Ejecuta la función ordenarPorEdad para obtener los personajes ordenados
    const personajesOrdenados = ordenarPorEdad();

    // Responde con los personajes ordenados
    res.status(200).json(personajesOrdenados);
  } catch (error) {
    // Si ocurre un error en la función ordenarPorEdad, responde con un objeto de error
    res.status(400).json({ error: error.message });
  }
});

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = router;
