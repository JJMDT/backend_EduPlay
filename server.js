const express = require('express');
const app = express();
const PORT = 3000;
const HOST =  '127.0.0.1';



app.get('/', (req, res) => {
  res.send('Bienvenido a la api de EduPlay!');
});

app.get('/{*any}', (req, res) => {
    res.send('Ruta ingresada no existe');
});

app.listen(PORT, HOST, () => {
  console.log(`Servidor corriendo http://${HOST}:${PORT}`);
});