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
//Este es el controlador del ranking. Se encarga de recibir las solicitudes del frontend relacionadas con los puntajes. Tiene tres funciones:

//calcularPuntaje: guarda un nuevo puntaje que envía el usuario.

//obtenerPuntajes: devuelve los puntajes ordenados (top 10).

//reiniciarRanking: borra todos los puntajes guardados en la base.
//Cada función se conecta con la capa de servicios, que a su vez se conecta con MongoDB.
