const repository = require('../repository/pregunta.repository')

exports.getPreguntaServices = async (req, res) => {
  try {
    const preguntas = await repository.getPreguntaRepository();
    return preguntas;
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPreguntaByIdService = async (id) => {
  try {
    return await repository.getPreguntaByIdRepository(id);
  } catch (err) {
    throw new Error(err.message);
  }
};
