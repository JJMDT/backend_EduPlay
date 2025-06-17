const repository = require('../repository/pregunta.repository')


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

