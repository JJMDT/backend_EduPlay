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



exports.findUserByUsername = async (username, password) => {
    const users = loadUsers();
    return users.find(user => user.username === username && user.password === password);
};

