const router = require("express").Router();
const updatePersonaje = require("../controllers/03-controller");
/* ⚠️ No modificar nada arriba de esta línea ⚠️

  9️⃣ * EJERCICIO 9 * - PUT / personaje 9️⃣:

  🟢 Integrar la función updatePersonaje que desarrollaste previamente (Ejercicio 3) para actualizar el personaje.
  🟢 Responder con un objeto que tenga una propiedad "message" con el valor de "Personaje actualizado correctamente".
  🟢 Si hay un error, responder un objeto con una propiedad "error" y que el valor sea el error.message.

    📢 PUNTOS A TENER EN CUENTA 📢
  1) Si algo falla al actualizar el personaje, debes responder con el mensaje del error.
  2) Recibirás los argumentos necesarios para ejecutar esa función updatePersonaje mediante la propiedad "body" de req.
  3) ¡Revisa en los tests el status que deben tener tus respuestas!
*/

router.put("/personaje", async(req, res) => {
  // Tu código aquí

  const { personaje } = req.body;
try{
  const resultado= updatePersonaje(personaje);
  res.status(200).json({message: "Personaje actualizado correctamente"})
} catch (error) {
  res.status(400).json({error: error.message})
}
 


   
});
//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = router;
