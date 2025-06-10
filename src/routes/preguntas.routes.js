const express = require('express');
const routerPreguntas = express.Router();
const controlador = require('../controllers/pregunta.Controller.js');
const eliminador = require('../controllers/pregunta.delete.Controller.js')

routerPreguntas.use(express.json());

routerPreguntas.get('/traer', controlador.getPreguntaController);
routerPreguntas.delete('/:id', eliminador.eliminarPregunta);

module.exports = routerPreguntas;