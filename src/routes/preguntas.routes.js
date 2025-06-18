const express = require('express');
const routerPreguntas = express.Router();
const controlador = require('../controllers/pregunta.Controller.js');
const puntuacion = require('../controllers/score.controller.js');
const creador = require('../controllers/pregunta.Controller.js');

routerPreguntas.use(express.json());

routerPreguntas.delete('/:id', controlador.eliminarPregunta);
routerPreguntas.post('/puntuacion',puntuacion.calcularPuntaje);
routerPreguntas.get('/traer', controlador.getPreguntaController);
routerPreguntas.get('/traerbyId/:id', controlador.getPreguntaByIdController);
routerPreguntas.put('/:id', controlador.putPreguntaController);
routerPreguntas.post('/crear', creador.crearPreguntaController);


module.exports = routerPreguntas;