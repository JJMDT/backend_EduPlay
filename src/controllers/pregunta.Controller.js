const services = require('../services/preguntas.services.js')
const { getAllPreguntasService } = require('../services/preguntas.services');

exports.crearPreguntaController = async (req, res) => {
  try {
    let nuevaPregunta = req.body;
    console.log(nuevaPregunta);
    const preguntaCreada = await services.crearPreguntaServices(nuevaPregunta);
    res.status(201).json(preguntaCreada);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.eliminarPreguntaController = async (req, res) => {
  try {
    const id = req.params.id;
    const preguntaEliminada = await services.EliminarPreguntasServices(id);

    if (!preguntaEliminada) {
      return res.status(404).json({ mensaje: 'Pregunta no encontrada para eliminar' });
    }
    res.json({ mensaje: 'Pregunta eliminada correctamente', pregunta: preguntaEliminada });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPreguntaController = async (req, res) => {
  try {
    const preguntas = await services.getPreguntaService();
    res.json(preguntas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllPreguntasController = async (req, res) => {
  try {
    const preguntas = await getAllPreguntasService();
    res.status(200).json(preguntas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPreguntaByIdController = async (req, res) => {
  try {
    const id = req.params.id;
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
