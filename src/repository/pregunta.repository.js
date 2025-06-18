const preguntas = require('../DB/db.json')
const fs = require('fs').promises;
const path = require('path');
const dbPath = path.join(__dirname, '../DB/db.json');

//clau//

// Función para leer el archivo JSON
async function leerPreguntas() {
  const data = await fs.readFile(dbPath, 'utf8');
  return JSON.parse(data);
}

exports.crearPreguntaRepository = async (pregunta) => {
  try {
     const data = await fs.readFile(dbPath, 'utf-8');
    const preguntas = JSON.parse(data);
    const nuevoId = preguntas.length > 0 ? preguntas[preguntas.length - 1].id + 1 : 1;
    const nuevaPregunta = { id: nuevoId, ...pregunta };

    preguntas.push(nuevaPregunta);

    await fs.writeFile(dbPath, JSON.stringify(preguntas, null, 2)); // guarda con formato
    console.log(`Pregunta creada desde repository: ${JSON.stringify(nuevaPregunta)}`);
    return nuevaPregunta; // retorna el objeto agregado
  } catch (err) {
    throw new Error('Error al crear la pregunta: ' + err.message);
  }
}

exports.deletePreguntaRepository = async (id) => {
  try {
    const preguntas = await leerPreguntas();
    const indice = preguntas.findIndex(pregunta => pregunta.id == id);
    console.log('Índice encontrado:', indice);//es para ver si funcionaba la funcion
    if (indice >= 0) {
      preguntas.splice(indice, 1);
      await fs.writeFile(dbPath, JSON.stringify(preguntas, null, 2), 'utf8');
      console.log('Se eliminó correctamente');
      return preguntas;
    } else {
      console.log('No se encontró ninguna pregunta con ese id');
      return [];
    }
  } catch (err) {
    console.error('Error al eliminar la pregunta:', err.message);
    throw err;
  }
}

let repetidas = [];

exports.getPreguntaRepository = async () => {
  try {
    let pregunta;
    let intentos = 0;
    const maxIntentos = 10;

    do {
      const randomNumber = Math.floor(Math.random() * preguntas.length) + 1;
      pregunta = preguntas.find((p) => p.id == randomNumber);
      intentos++;
    } while (repetidas.includes(pregunta) && intentos < maxIntentos);

    repetidas.push(pregunta);

    if (repetidas.length === preguntas.length+1) {
      console.log("repetidas vacia")
      repetidas = [];  
    }

    console.log(repetidas.length)

    return pregunta;
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.getPreguntaByIdRepository = async (id) => {
  try {
    const pregunta = preguntas.find(p => p.id === id);
    return pregunta || null;
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.putPreguntaRepository = async (id, pregunta) => {
  const index = preguntas.findIndex(p => p.id === Number(id));
  if (index === -1) 
    throw new Error('Pregunta no encontrada');
  preguntas[index-1] = { pregunta };
  return preguntas[index];
};

