const mongoose = require('mongoose');

const Concesionario = mongoose.model('concesionario', {
    cochesRegistrados: Number,
    ubicacion: String
});

const Coches = mongoose.model('coches', {
    marca: String,
    modelo: String
});

module.exports = {
    Concesionario,
    Coches
};