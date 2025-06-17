const services = require('../services/preguntas.services.js')

//clau//

exports.crearPreguntaController = async (req,res) => {
    try {
        let nuevaPregunta = req.body;
        console.log("esta es la pregunta que viene del cliente")
        console.log(nuevaPregunta)
        res.send(await services.crearPreguntaServices(nuevaPregunta));
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

}

exports.eliminarPregunta = async (req,res) => {
    try{

        const id = req.params.id;
        const pregunta = await services.EliminarPreguntasServices(id)
        console.log("exitoso desde controler")

    } catch (err) {

        console.log("asdasd")
        res.status(500).json({ error: err.message });

    }
}

