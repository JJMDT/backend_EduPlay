const { guardarPuntajeService, obtenerTodoPuntos,reiniciarPuntajesService } = require('../services/score.service')

exports.calcularPuntaje = async (req, res) => {
  const { nombre, puntos } = req.body
  try {
    const guardar = await guardarPuntajeService(nombre, puntos)
    res.status(201).json({ mensaje: 'puntaje exitoso', puntaje: guardar })
  } catch (err) {
    res.status(500).json({ error: 'error al guardar puntaje' });
  }
};

exports.obtenerPuntajes = async (req, res) => {
  try {
    const puntos = await obtenerTodoPuntos()
    res.json(puntos)
  } catch (error) {
    res.status(500).json({ error: 'error al obtener puntaje' })
  }
}

exports.reiniciarRanking = async (req, res) => {
  try {
    await reiniciarPuntajesService();
    res.status(200).json({ mensaje: 'Ranking reiniciado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al reiniciar el ranking' });
  }
};