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