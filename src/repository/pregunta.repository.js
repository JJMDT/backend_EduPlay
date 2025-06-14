const preguntas = require('../DB/db.json')
const fs = require('fs').promises;
const path = require('path');
const dbPath = path.join(__dirname, '../DB/db.json');

exports.getPreguntaRepository = async (req, res) => {
  try {
    let pregunta = preguntas.find(p => p.id == 1);
    console.log(pregunta)
    return  pregunta

  } catch (err) {
    console.log("asdasd")
    res.status(500).json({ error: err.message });
  }
}

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

// Nueva función para traer todas las preguntas
exports.getAllPreguntasRepository = async () => {
  try {
    return await leerPreguntas();
  } catch (err) {
    throw new Error(err.message);
  }
}