const User = require('./user');
const bcrypt = require('bcryptjs');

const crearAdmin = async () => {
    try {
        const existe = await User.findOne({ username: 'admin' });
        if(!existe){
            const admin = new User({
                username: 'admin',
                password: bcrypt.hashSync('admin123', 10) // Hasheamos la contraseña
            });
            await admin.save();
            console.log('Usuario administrador creado exitosamente');
        }
        
    } catch (error) {
        console.error('Error al crear el usuario administrador:', error);
    }
}

module.exports = crearAdmin;