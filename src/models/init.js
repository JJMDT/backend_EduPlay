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

module.exports = crearAdmin;