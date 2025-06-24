const repository = require('../repository/pregunta.repository')
const { getAllPreguntasRepository } = require('../repository/pregunta.repository');


exports.getPreguntaService = async () => {
  try {
    return await repository.getPreguntaRepository();
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.getAllPreguntasService = async () => {
  try {
    const preguntas = await getAllPreguntasRepository();
    return preguntas;
  } catch (error) {
    throw new Error(error.message);
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

exports.crearPreguntaServices = async (pregunta) => {
  try {
    return await repository.crearPreguntaRepository(pregunta);
  } catch (err) {
    throw new Error('Error al crear la pregunta: ' + err.message);
  }
};

exports.EliminarPreguntasServices = async (id) => {
  try {
    return await repository.deletePreguntaRepository(id);
  } catch (err) {
    throw new Error(err.message);
  }
};

