const express = require('express');
const routerAuth = express.Router();
const {login, register} = require('../controllers/auth.controller');


routerAuth.use(express.json());

routerAuth.post('/login', login);
routerAuth.post('/register', register);

module.exports = routerAuth;