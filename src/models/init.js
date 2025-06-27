const User = require('./user');
const bcrypt = require('bcryptjs');

const crearAdmin = async () => {
    try {
        const existe = await User.findOne({ username: 'admin' });
        if(!existe){
            const admin = new User({
                username: 'admin',
                password: bcrypt.hashSync('admin123', 10) 
            });
            await admin.save();
        }
    } catch (error) {
        console.error('Error al crear el usuario administrador:', error);
    }
}
//Este archivo contiene una función que se ejecuta al iniciar la aplicación. Verifica si ya existe un usuario con nombre "admin". Si no lo encuentra, crea uno nuevo con una contraseña encriptada por seguridad. Esto permite tener acceso de administrador desde el principio sin cargar manualmente datos en la base.
module.exports = crearAdmin;
