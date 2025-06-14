const repository = require('../repository/pregunta.repository')

exports.getPreguntaServices = async (req, res) => {
  try {
    const preguntas = await repository.getPreguntaRepository();
    return preguntas;
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//clau//

exports.crearPreguntaServices = async (pregunta) => {
  try {
   console.log(`desde servicio - ${JSON.stringify(pregunta)}`)
    return await repository.crearPreguntaRepository(pregunta);
  } catch (err) {
    throw new Error('Error al crear la pregunta: ' + err.message);
  }
}


exports.EliminarPreguntasServices = async (id) =>{
  try{
    console.log("exitoso desde services")
    return await repository.deletePreguntaRepository(id) 
    

  }catch (err) {
    console.log("asdasd")
    res.status(500).json({ error: err.message });
  }
}

// Nuevo service para traer todas las preguntas
exports.getAllPreguntasServices = async () => {
  try {
    const preguntas = await repository.getAllPreguntasRepository();
    return preguntas;
  } catch (err) {
    throw new Error(err.message);
  }
};