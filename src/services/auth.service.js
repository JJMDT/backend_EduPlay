const authRepository = require('../repository/auth.repository.js');

exports.registerService = async (usuario) => {
    try {
       return await authRepository.registerRepository(usuario);
    } catch (error) {
        throw new Error('Error al registrar el usuario: ' + error.message);
    }
}