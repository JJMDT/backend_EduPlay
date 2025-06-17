const authRepository = require('../repository/auth.repository.js');

exports.loginService = async ({username,password}) => {
    const user = await authRepository.findUserByUsername(username,password);
    if (!user) {
        throw new Error('Credenciales inválidas');
    }
    

    return { message: 'Login exitoso', user };
};
