const services = require('../services/preguntas.services.js')

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