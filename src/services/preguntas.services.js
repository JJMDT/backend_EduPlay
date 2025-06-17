const repository = require('../repository/pregunta.repository')
//clau//

exports.EliminarPreguntasServices = async (id) =>{
  try{
    console.log("exitoso desde services")
    return await repository.deletePreguntaRepository(id) 
    

  }catch (err) {
    console.log("asdasd")
    res.status(500).json({ error: err.message });
  }
}

};

exports.getPreguntaByIdService = async (id) => {
  try {
    return await repository.getPreguntaByIdRepository(id);
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.putPreguntaServices = async (id, pregunta) => {
  try {
    return await repository.putPreguntaRepository(id, pregunta);
  } catch (err) {
    throw new Error(err.message);
  }
};

