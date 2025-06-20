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

const Pregunta = mongoose.model('Pregunta', preguntaSchema);
module.exports = Pregunta;
