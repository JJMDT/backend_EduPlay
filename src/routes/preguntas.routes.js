const express = require('express');
const routerPreguntas = express.Router();
const controlador = require('../controllers/pregunta.Controller.js');

routerPreguntas.use(express.json());

routerPreguntas.get('/traer', controlador.getPreguntaController);
routerPreguntas.get('/traerbyId/:id', controlador.getPreguntaByIdController);
routerPreguntas.put('/:id', controlador.putPreguntaController);



module.exports = routerPreguntas;