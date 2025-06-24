const express = require('express');
const routerScore = express.Router();
const {calcularPuntaje, obtenerPuntajes, reiniciarRanking} = require ('../controllers/score.controller.js')

routerScore.post('/score', calcularPuntaje)
routerScore.get('/ranking', obtenerPuntajes)
routerScore.delete('/reiniciar', reiniciarRanking);


module.exports = routerScore;