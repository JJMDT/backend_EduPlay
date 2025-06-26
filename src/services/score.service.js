
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
//En este archivo implementamos la capa de servicios para manejar los puntajes del juego. Esta capa llama al repositorio para guardar, obtener o eliminar datos en la base. La separación en capas mejora la organización del código, facilita su mantenimiento y la posibilidad de escalar o cambiar la forma en que se accede a los datos sin afectar al resto de la aplicación.
