const Score = require('../models/score')

const guardarPuntaje = async (puntaje) => {
    try {
        const nuevoPuntaje = new Score({ puntos: puntaje });
        const resultado = await nuevoPuntaje.save();
        return resultado;
    } catch (error) {
        console.error('Error al guardar puntaje', error)
        throw error;
    }
}

const obtenerPuntaje = async () => {
    try {
        const data = await fs.readFile(filePath,'utf-8')
        return JSON.parse(data)
    } catch (error) {
        console.error('error al leer el puntaje', error)
        return []
    }
}

module.exports = { guardarPuntaje, obtenerPuntaje}