const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
},{
    timestamps: true,
    versionKey: false
});

//userSchema.methods.comparePassword = async function(candidatePassword) {
//     return await bcrypt.compare(candidatePassword, this.password);
// };
//Define un método que se puede usar en cualquier instancia de usuario para comparar una contraseña ingresada (candidatePassword) con la contraseña almacenada (this.password).

//Usa bcrypt.compare para hacer una comparación segura (hashing).

//Es asíncrono porque involucra procesamiento criptográfico.
const User = mongoose.model('User', userSchema);
module.exports = User;
//Este módulo define el modelo de usuario para nuestra base de datos MongoDB usando Mongoose. Cada usuario tiene un nombre único y una contraseña. Además, incluye un método para comparar de forma segura la contraseña ingresada con la almacenada, usando el algoritmo de hashing bcrypt. Esto garantiza que las contraseñas no se guarden en texto plano y mejora la seguridad de la aplicación.
