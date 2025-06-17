const services = require('../services/preguntas.services.js')
//clau//

exports.eliminarPregunta = async (req,res) => {
    try{


        const id = req.params.id;
        const pregunta = await services.EliminarPreguntasServices(id)
        console.log("exitoso desde controler")
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


    } catch (err) {

        console.log("asdasd")
        res.status(500).json({ error: err.message });

    }
}


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
