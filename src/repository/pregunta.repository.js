const preguntas = require('../DB/db.json')

exports.getPreguntaRepository = async (req, res) => {
  try {
    let pregunta = preguntas.find(p => p.id == 1);
    console.log(pregunta)
    return  pregunta

  } catch (err) {
    console.log("asdasd")
    res.status(500).json({ error: err.message });
  }
}

//clau//
exports.deletePreguntaRepository = async (id) => {
  try {

    const indice = await preguntas.findIndex(pregunta => pregunta.id == id)
    

    if (indice>=0) {

      preguntas.splice(indice,1);
      console.log("se elimino el id")
      return preguntas

    } else {
      console.log("no hay nada")
      return []
    }
  } catch (err) {
    console.log("asdasd")
    res.status(500).json({ error: err.message });
  }
}