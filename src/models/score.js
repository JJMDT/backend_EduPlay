const mongoose = require('mongoose');
const { Schema } = mongoose;

const scoreSchema = new Schema ({
    puntos: {
        type: Number,
        required: true
    }
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Score', scoreSchema);