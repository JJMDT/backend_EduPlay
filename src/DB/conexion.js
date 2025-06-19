const {configDB} = require('../DB/config');
const mongoose = require('mongoose');
const crearAdmin = require('../models/init');


const URI = `mongodb+srv://${configDB.user}:${configDB.password}@cluster0.p6ntsd8.mongodb.net/${configDB.database}?retryWrites=true&w=majority&appName=Cluster0`

exports.getConnection = async() =>{
    try {
        await mongoose.connect(URI)
        console.log("Conexión exitosa a la base de datos");
        await crearAdmin();
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
        process.exit(1); // Termina el proceso si la conexión falla
    }
}
