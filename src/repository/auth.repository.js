const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../DB/users.json');

// Cargar usuarios cada vez que se necesiten
const loadUsers = () => {
    try {
        const data = fs.readFileSync(usersFilePath, 'utf-8');
        return JSON.parse(data) || [];
    } catch (error) {
        return []; // Si el archivo está vacío o no existe, retorna un array vacío
    }
};

exports.registerRepository = async (usuario) => {
    try {
        let users = loadUsers(); // Recargar los datos cada vez
        const newUser = {
            id: users.length + 1,
            ...usuario
        };
        users.push(newUser);

        // Guardar cambios en el archivo
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

        console.log('Usuario registrado:', newUser);
        return newUser;
    } catch (error) {
        throw new Error('Error al registrar el usuario: ' + error.message);
    }
};