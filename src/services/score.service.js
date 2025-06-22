const {guardarPuntaje, obtenerPuntaje} = require('../repository/score.repository')

const guardarPuntajeService = async (nombre,puntaje) => {
    const nuevoPuntaje = puntaje 
    return await guardarPuntaje(nombre,nuevoPuntaje)
}

const obtenerTodoPuntos = async () => {
    return await obtenerPuntaje()
}

module.exports = { guardarPuntajeService, obtenerTodoPuntos}