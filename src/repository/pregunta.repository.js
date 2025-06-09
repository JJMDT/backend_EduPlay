const preguntas = require('../DB/db.json')

exports.getPreguntaRepository = async (req, res) => {
  try {
    let pregunta = preguntas.find(p => p.id == 1);
    console.log(pregunta)
    return  pregunta
  } catch (err) {
    console.log("asdasd")
    res.status(500).json({ error: err.message });
  }
};