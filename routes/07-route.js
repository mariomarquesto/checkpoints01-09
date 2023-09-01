const router = require("express").Router();
const addPersonaje = require("../controllers/01-controller");

/* ⚠️ No modificar nada arriba de esta línea ⚠️

  7️⃣ ***** EJERCICIO 7 ***** - POST /personaje 7️⃣:
  
  🟢 Integrar la función addPersonaje que desarrollaste previamente (Ejericio 1) para agregar un nuevo personaje en la 
  base de datos.
  🟢 Responder un objeto con una propiedad "data": <la base de datos con el personaje agregado>.
  🟢 Si hay un error, responder un objeto con una propiedad "error": <el mensaje recibido en el objeto error>.

    📢 PUNTOS A TENER EN CUENTA 📢
  1) Recibirás los argumentos necesarios para ejecutar la función addPersonaje mediante la propiedad "body" de *req*.
  2) ¡Revisa en los test el status que deben tener tus respuestas!
*/

router.post("/personaje", (req, res) => {
  // Tu código aquí
  const { personaje } = req.body;

  try {
    const resultado = addPersonaje(personaje);
    res.status(201).json({ data: resultado });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = router;
