const { configDB } = require('../DB/config');
const mongoose = require('mongoose');
const crearAdmin = require('../models/init');

const URI = `mongodb+srv://${configDB.user}:${configDB.password}@cluster0.p6ntsd8.mongodb.net/${configDB.database}?retryWrites=true&w=majority&appName=Cluster0`

exports.getConnection = async () => {
    try {
        await mongoose.connect(URI)
        console.log("Conexión exitosa a la base de datos");
        await crearAdmin();
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
        process.exit(1);
    }
}
//Esta parte del backend se encarga de conectar nuestra aplicación con la base de datos MongoDB en la nube.
//Construye la URL segura con los datos de usuario, contraseña y nombre de la base (que están en variables de entorno para mayor seguridad).
//Luego usa Mongoose para establecer la conexión.
//Además, al iniciar, crea un usuario administrador por defecto si no existe para poder manejar la app.

//Si la conexión falla, la aplicación se detiene para evitar errores mayores.
