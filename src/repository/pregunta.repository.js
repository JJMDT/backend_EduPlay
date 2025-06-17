const preguntas = require('../DB/db.json')

let repetidas = [];

exports.getPreguntaRepository = async () => {
  try {
    let pregunta;
    let intentos = 0;
    const maxIntentos = 100;

    do {
      const randomNumber = Math.floor(Math.random() * preguntas.length) + 1;
      pregunta = preguntas.find((p) => p.id == randomNumber);
      intentos++;
    } while (repetidas.includes(pregunta) && intentos < maxIntentos);

    repetidas.push(pregunta);

    if (repetidas.length === preguntas.length) {
      repetidas = [];  
    }

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

