const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
const HOST =  '127.0.0.1';

app.use(cors());

const routerAuth = require('./src/routes/auth.routes');
const routerPreguntas = require('./src/routes/preguntas.routes');
app.use('/auth', routerAuth);
app.use('/pregunta', routerPreguntas);





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