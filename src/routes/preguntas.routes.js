const express = require('express');
const routerPreguntas = express.Router();
const controlador = require('../controllers/pregunta.Controller.js');
const creador = require('../controllers/pregunta.Controller.js');

routerPreguntas.use(express.json());

routerPreguntas.delete('/:id', controlador.eliminarPregunta);
routerPreguntas.post('/crear', creador.crearPreguntaController);


module.exports = routerPreguntas;