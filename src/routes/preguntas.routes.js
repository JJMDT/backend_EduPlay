const express = require('express');
const routerPreguntas = express.Router();
const controlador = require('../controllers/pregunta.Controller.js');
const puntuacion = require('../controllers/score.controller.js');

routerPreguntas.use(express.json());

routerPreguntas.post('/puntuacion', puntuacion.calcularPuntaje);
routerPreguntas.post('/crear', controlador.crearPreguntaController);
routerPreguntas.get('/traer', controlador.getPreguntaController);
routerPreguntas.get('/traerbyId/:id', controlador.getPreguntaByIdController);
routerPreguntas.get('/traerTodas', controlador.getAllPreguntasController);
routerPreguntas.put('/:id', controlador.putPreguntaController);
routerPreguntas.delete('/:id', controlador.eliminarPreguntaController);

module.exports = routerPreguntas;