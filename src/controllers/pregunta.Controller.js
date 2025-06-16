const services = require('../services/preguntas.services.js')

exports.getPreguntaController = async (req, res) => {
  try {
    const preguntas = await services.getPreguntaServices();
    res.json(preguntas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPreguntaByIdController = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const pregunta = await services.getPreguntaByIdService(id);
    if (!pregunta) {
      return res.status(404).json({ mensaje: 'Pregunta no encontrada' });
    }
    res.json(pregunta);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getRespuestaByIdController = async (req, res) => {
  try {
    const respuesta = await getRespuestaByIdService(req.params.id);
    res.json(respuesta);
  } catch (err) {
    res.status(400).json({ error: 'No encontrada' });
  }
};


exports.putPreguntaController = async (req, res) => {
  try {
    const id = req.params.id
    const pregunta = req.body

    await services.putPreguntaServices(id, pregunta);
    res.json({ mensaje: 'Pregunta actualizada correctamente' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
