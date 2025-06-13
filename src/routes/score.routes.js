const express = require('express');
const routerScore = express.Router();
const {calcularPuntaje} = require ('../controllers/score.controller.js')

routerScore.post('/score', calcularPuntaje)