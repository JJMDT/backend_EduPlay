const mongoose = require('mongoose');
const { Schema } = mongoose;

const preguntaSchema = new Schema({
  pregunta: {
    type: String,
    required: true
  },
  opciones: {
    type: [String],
    required: true
  },
  respuestaCorrecta: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
});
//Este modelo define cómo se guarda una pregunta en la base de datos. Cada pregunta tiene un enunciado, una lista de opciones y la respuesta correcta. Todo eso se guarda con Mongoose en MongoDB. Además, se registran automáticamente las fechas de creación y modificación. Este modelo se usa para crear, mostrar, editar o eliminar preguntas en la aplicación.
const Pregunta = mongoose.model('Pregunta', preguntaSchema);
module.exports = Pregunta;
