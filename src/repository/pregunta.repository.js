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










/*let repetidas = [];

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
};*/

/*exports.getPreguntaByIdRepository = async (id) => {
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
};*/

