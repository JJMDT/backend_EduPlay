const User = require('../models/user');

exports.findUserByUsername = async (username, password) => {
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return null;
        }
        const passwordMatch = await user.comparePassword(password);
        if (!passwordMatch) {
            return null;
        }
        return user;
    } catch (error) {
        throw error;
    }
};
//Aquí está la validación real del usuario y contraseña.

//Permite que el servicio de login sepa si el usuario es válido o no.

//La contraseña no se compara directamente, sino con una función segura (hash).
//Esta función busca un usuario por su nombre y luego verifica que la contraseña sea correcta usando un método seguro de comparación. Si el usuario no existe o la contraseña es incorrecta, devuelve null. De lo contrario, devuelve el usuario para continuar con el proceso de autenticación.
