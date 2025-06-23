const Pregunta = require('../models/Pregunta');

//clau//
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
      return null; // No encontrada
    }
    return eliminada;
  } catch (err) {
    throw new Error('Error al eliminar la pregunta: ' + err.message);
  }
};

let repetidas = 1
exports.getPreguntaRepository  = async () => {
  try {
    const total = await Pregunta.countDocuments();
    if (repetidas == total) {
      repetidas = 1;
    }
      const resultado = await Pregunta.find().skip(repetidas).limit(1);
      let pregunta = resultado[0];
     
    repetidas++;
    return pregunta;
  } catch (err) {
    throw new Error(err.message);
  }
}

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










