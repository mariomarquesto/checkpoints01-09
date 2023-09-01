"use strict";

// No modificar nada dentro de este archivo

const express = require("express");
const controller = require("../controllers/controllers");
const router = express.Router();

router.get("/rating/:product", (req, res) => {
  controller
    .getRating(req.params.product)
    .then((results) => {
      res.send({ rating: results });
    })
    .catch((err) => {
      res.status(404).send({ error: err.message });
    });
});

module.exports = router;
