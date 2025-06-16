const preguntas = require('../DB/db.json')

exports.getPreguntaRepository = async (req, res) => {
  try {
    const randomNumber = Math.floor(Math.random() * preguntas.length) + 1;
    let pregunta = preguntas.find(p => p.id == randomNumber);
    return  pregunta
  } catch (err) {
    res.status(500).json({ error: err.message });
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

