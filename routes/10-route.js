const router = require("express").Router();
const deletePersonaje = require("../controllers/04-controller");

/* ⚠️ No modificar nada arriba de esta línea ⚠️

  🔟 * EJERCICIO 10 * - DELETE / Personaje 🔟:

  🟢 Integrar la función deletePersonaje que desarrollaste previamente (Ejercicio 4) para eliminar un personaje.
  🟢 Responder con un objeto con una propiedad "message" que sea igual al string `El personaje con el id ${id} fue 
  eliminado de forma exitosa`.
  🟢 Si hay un error, responder un objeto con una propiedad "error": <el mensaje recibido en el objeto error>.

    📢 PUNTOS A TENER EN CUENTA 📢
  1) Si algo falla debes responder con el mensaje del error.
  2) ¡Revisa en los test el status que deben tener tus respuestas!
  3) Revisa también los tests para saber por dónde vendrá el id del personaje que queremos eliminar
*/

router.delete("/personaje", (req, res) => {
  // Tu código aquí
  // Obtén el ID del personaje a eliminar desde el cuerpo de la solicitud
  const { id } = req.body;

  // Verifica si se proporcionó el ID del personaje
  if (!id) {
    // Si no se proporcionó el ID, responde con un error
    return res.status(500).json({ error: "Se requiere el ID del personaje en el cuerpo de la solicitud." });
  }

  try {
    // Ejecuta la función deletePersonaje para eliminar el personaje
    deletePersonaje(id);

    // Responde con un mensaje de éxito
    res.status(200).json({ message: `El personaje con el id ${id} fue eliminado de forma exitosa` });
  } catch (error) {
    // Si ocurre un error en la función deletePersonaje, responde con un objeto de error
    res.status(400).json({ error: error.message });
  }
});

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = router;
