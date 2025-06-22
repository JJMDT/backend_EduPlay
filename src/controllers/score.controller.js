const {guardarPuntajeService, obtenerTodoPuntos} = require('../services/score.service')

exports.calcularPuntaje = async (req, res) => {
    const {nombre,puntos} = req.body
  try {
    console.log(puntos)
    const guardar = await guardarPuntajeService(nombre,puntos)
    res.status(201).json({mensaje:'puntaje exitoso',puntaje:guardar})

  } catch (err) {
    res.status(500).json({ error: 'error al guardar puntaje' });
  }
};

exports.obtenerPuntajes = async (req, res) => {
  try {
    const puntos = await obtenerTodoPuntos()
    res.json(puntos)
  } catch (error) {
    res.status(500).json({ error: 'error al obtener puntaje'})
  }
}