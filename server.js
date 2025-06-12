const express = require('express');
const app = express();
const PORT = 3000;
const HOST =  '127.0.0.1';
const cors = require('cors');

app.use(cors()); // permite todos los orígenes


const routerAuth = require('./src/routes/auth.routes');
const routerPreguntas = require('./src/routes/preguntas.routes');
app.use('/auth', routerAuth);

app.get('/', (req, res) => {
  res.send('Bienvenido a la api de EduPlay!');
});

app.use('/pregunta', routerPreguntas)

app.get('/{*any}', (req, res) => {
    res.send('Ruta ingresada no existe');
});



app.listen(PORT, HOST, () => {
  console.log(`Servidor corriendo http://${HOST}:${PORT}`);
});