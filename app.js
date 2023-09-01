"use strict";
const express = require("express");
const app = express();
const filtroPorEdad = require("./routes/08-route");
const addPersonajeYepisodio = require("./routes/07-route");
const updatePersonaje = require("./routes/09-route");
const deletePersonaje = require("./routes/10-route");
const ordenarPorEdad = require("./routes/11-route");
const mostrarLaMediaDelPeso = require("./routes/12-route");

app.use(express.json());
app.use(filtroPorEdad);
app.use(addPersonajeYepisodio);
app.use(updatePersonaje);
app.use(deletePersonaje);
app.use(ordenarPorEdad);
app.use(mostrarLaMediaDelPeso);

module.exports = app;
