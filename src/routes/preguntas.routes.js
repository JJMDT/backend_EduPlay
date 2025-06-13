const express = require('express');
const routerPreguntas = express.Router();
const controlador = require('../controllers/pregunta.Controller.js');
const puntuacion = require('../controllers/score.controller.js')

routerPreguntas.use(express.json());

routerPreguntas.get('/traer', controlador.getPreguntaController);
routerPreguntas.delete('/:id', controlador.eliminarPregunta);
routerPreguntas.post('/puntuacion',puntuacion.calcularPuntaje)

module.exports = routerPreguntas;