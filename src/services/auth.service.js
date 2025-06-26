const authRepository = require('../repository/auth.repository.js');

exports.loginService = async ({username,password}) => {
    const user = await authRepository.findUserByUsername(username,password);
    if (!user) {
        throw new Error('Credenciales inválidas');
    }
    return { message: 'Login exitoso', user };
};
//En este servicio de autenticación, recibimos las credenciales y consultamos en la base de datos si el usuario existe. Si no existe, lanzamos un error que luego podemos manejar para informar al usuario. Si el usuario es válido, devolvemos un mensaje de éxito junto con su información para continuar con la sesión.
