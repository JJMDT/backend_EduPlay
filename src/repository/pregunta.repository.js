const Pregunta = require('../models/Pregunta');

exports.crearPreguntaRepository = async (preguntaData) => {
  try {
    const nuevaPregunta = new Pregunta(preguntaData);
    return await nuevaPregunta.save();
  } catch (err) {
    throw new Error('Error al crear la pregunta: ' + err.message);
  }
};

exports.deletePreguntaRepository = async (id) => {
  try {
    const eliminada = await Pregunta.findByIdAndDelete(id);
    if (!eliminada) {
      return null; 
    }
    return eliminada;
  } catch (err) {
    throw new Error('Error al eliminar la pregunta: ' + err.message);
  }
};

let repetidas = [];

exports.getPreguntaRepository = async () => {
  try {
    const total = await Pregunta.countDocuments();
    if (repetidas.length >= total) {
      repetidas = [];
    }

    let pregunta;
    let intentos = 0;
    const maxIntentos = 10;

    do {
      const random = Math.floor(Math.random() * total);
      const resultado = await Pregunta.find().skip(random).limit(1);
      pregunta = resultado[0];
      intentos++;
    } while (pregunta && repetidas.includes(pregunta._id.toString()) && intentos < maxIntentos);

    if (pregunta) repetidas.push(pregunta._id.toString());
    return pregunta;
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.getAllPreguntasRepository = async () => {
  try {
    const preguntas = await Pregunta.find();
    return preguntas;
  } catch (err) {
    throw new Error('Error al obtener todas las preguntas');
  }
};

exports.getPreguntaByIdRepository = async (id) => {
  try {
    const pregunta = await Pregunta.findById(id);
    return pregunta || null;
  } catch (err) {
    throw new Error('error en la búsqueda');
  }
};

exports.putPreguntaRepository = async (id, data) => {
  try {
    const result = await Pregunta.findByIdAndUpdate(id, data, { new: true });
    if (!result) throw new Error('Pregunta no encontrada');
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};
