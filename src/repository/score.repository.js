const fs = require('fs').promises
const path = require('path')
const filePath = path.join(__dirname,'../DB/score.json')

const guardarPuntaje = async (puntaje) => {
    try {
        const puntos = await obtenerPuntaje()
        puntos.push(puntaje)
        await fs.writeFile(filePath,JSON.stringify(puntos,null,2))
        console.log('recibiendo puntaje',puntaje)
        return puntaje
    } catch (error) {
        console.error('Error al guardar puntaje', error)
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