const express = require('express');
const routerScore = express.Router();
const {calcularPuntaje, obtenerPuntajes} = require ('../controllers/score.controller.js')

routerScore.post('/score', calcularPuntaje)
routerScore.get('/ranking', obtenerPuntajes)
module.exports = routerScore;