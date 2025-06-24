const mongoose = require('mongoose');
const { Schema } = mongoose;

const scoreSchema = new Schema ({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    puntos: {
        type: Number,
        required: true
    }
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Score', scoreSchema);