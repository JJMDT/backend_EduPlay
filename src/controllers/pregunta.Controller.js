const services = require('../services/preguntas.services.js')

exports.getPreguntaController = async (req, res) => {
  try {
    const preguntas = await services.getPreguntaServices();
    console.log("no hay pregunta")
    res.json(preguntas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPreguntaByIdController = async (req, res) => {
  try {
    const pregunta = await getPreguntaByIdService(req.params.id);
    res.json(pregunta);
  } catch (err) {
    res.status(400).json({ error: 'No encontrada' });
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
    const pregunta = req.body
    const id = req.params.id
    await putPreguntaServices(id, pregunta);
    res.json({ mensaje: 'Actualizada correctamente' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


//clau//

exports.eliminarPregunta = async (req,resq) => {
    try{

        const id = req.params.id;
        const pregunta = await services.EliminarPreguntasServices(id)
        console.log("exitoso desde controler")

    } catch (err) {

        console.log("asdasd")
        res.status(500).json({ error: err.message });

    }
}