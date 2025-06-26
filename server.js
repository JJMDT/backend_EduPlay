//Es el servidor principal del backend, hecho con Node.js y el framework Express. Se encarga de levantar la API y manejar las rutas relacionadas con autenticación, preguntas y puntajes.
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
const HOST = '127.0.0.1';
const { getConnection } = require('./src/DB/conexion');

//express: Framework para crear el servidor y las rutas de forma simple.

//cors: Permite que tu frontend (por ejemplo, en Angular) se comunique con el backend sin problemas de seguridad de origen cruzado.

//app: Es tu aplicación Express.

//PORT y HOST: Definen la dirección y el puerto donde corre tu servidor.

getConnection();
//Importás una función para conectarte a la base de datos y la ejecutás apenas inicia el servidor.
//esto asegura que el servidor no arranca si la base de datos no responde.
app.use(cors());
//cors(): Habilita las solicitudes desde otros dominios (como tu frontend).
const routerAuth = require('./src/routes/auth.routes');
const routerPreguntas = require('./src/routes/preguntas.routes');
const routerScore = require('./src/routes/score.routes');

app.use(express.json());   
//express.json(): Permite que Express entienda los cuerpos JSON en las peticiones (por ejemplo, cuando hacés un POST desde el frontend

app.use('/auth', routerAuth);
app.use('/pregunta', routerPreguntas);
app.use('/score', routerScore);

app.get('/', (req, res) => {
  res.send('Bienvenido a la api de EduPlay!');
});

app.use((req, res) => {
  res.status(404).send('Ruta ingresada no existe');
});

app.listen(PORT, HOST, () => {
  console.log(`Servidor corriendo http://${HOST}:${PORT}`);
});
//Este archivo es el corazón del backend de EduPlay. Utiliza Express para levantar un servidor en el puerto 3000 y conectar con la base de datos. Está dividido en tres rutas principales: autenticación, preguntas y puntajes. Cada una de ellas está organizada en archivos separados para mantener el código limpio y modular. También incluye seguridad básica con CORS y una ruta para manejar errores 404. Finalmente, el servidor queda escuchando en localhost para recibir peticiones del frontend.
