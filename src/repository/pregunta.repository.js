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


/*exports.getPreguntaByIdRepository = async (id) => {
  try {
    let pregunta = preguntas.find(p => p.id == id);
    return pregunta;
  } catch (error) {
    console.log(error);
  }
};*/
