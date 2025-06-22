const Score = require('../models/score')

const guardarPuntaje = async (nombre,puntaje) => {
    try {
        const nuevoPuntaje = new Score({ nombre:nombre, puntos: puntaje });
        const resultado = await nuevoPuntaje.save();
        return resultado;
    } catch (error) {
        console.error('Error al guardar puntaje', error)
        throw error;
    }
}

const obtenerPuntaje = async () => {
    try {
        const datos = await Score.find().sort({puntos: -1}).limit(10).lean()
        return datos.map(item=>({
            nombre: item.nombre,
            puntos: item.puntos
        }))
    } catch (error) {
        console.error('error al leer el puntaje', error)
        throw error
    }
}

module.exports = { guardarPuntaje, obtenerPuntaje}