const mongoose = require('mongoose');

const Concesionario = mongoose.model('concesionario', {
    cochesRegistrados: Number,
    ubicacion: String,
    numVentas: Number
});

const Coche = mongoose.model('coche', {
    marca: String,
    modelo: String,
    caracteristicas: String,
    precio: Number,
    compras: Number
});

module.exports = {
    Concesionario,
    Coche
};