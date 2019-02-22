const mongoose = require('mongoose');

const Concesionario = mongoose.model('concesionario', {
    cochesRegistrados: Number,
    ubicacion: String,
    nombre: String
});

const Coches = mongoose.model('coches', {
    marca: String,
    modelo: String,
    precio: Number
});

module.exports = {
    Concesionario,
    Coches
};