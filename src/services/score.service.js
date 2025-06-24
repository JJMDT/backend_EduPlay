const {guardarPuntaje, obtenerPuntaje, eliminarTodosLosPuntajes} = require('../repository/score.repository')

const guardarPuntajeService = async (nombre,puntaje) => {
    const nuevoPuntaje = puntaje 
    return await guardarPuntaje(nombre,nuevoPuntaje)
}

const obtenerTodoPuntos = async () => {
    return await obtenerPuntaje()
}

const reiniciarPuntajesService = async () => {
  return await eliminarTodosLosPuntajes();
};

module.exports = { guardarPuntajeService, obtenerTodoPuntos, reiniciarPuntajesService }