const {guardarPuntaje, obtenerPuntaje} = require('../repository/score.repository')

const guardarPuntajeService = async (puntaje) => {
    const nuevoPuntaje = puntaje 
    return await guardarPuntaje(nuevoPuntaje)
}

const obtenerTodoPuntos = async () => {
    return await obtenerPuntaje()
}

module.exports = { guardarPuntajeService, obtenerTodoPuntos}