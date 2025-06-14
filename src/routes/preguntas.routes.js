const express = require('express');
const routerPreguntas = express.Router();
const controlador = require('../controllers/pregunta.Controller.js');
const creador = require('../controllers/pregunta.Controller.js');

routerPreguntas.use(express.json());

routerPreguntas.get('/traer', controlador.getPreguntaController);
routerPreguntas.delete('/:id', controlador.eliminarPregunta);
routerPreguntas.post('/crear', creador.crearPreguntaController);
routerPreguntas.get('/traerTodas', controlador.getAllPreguntasController); // NUEVA RUTA para todas las preguntas


module.exports = routerPreguntas;