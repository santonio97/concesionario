const mongoose = require('mongoose');

const Concesionario = mongoose.model('Concesionario', {
    cochesRegistrados: Number,
    ubicacion: String,
    numVentas: Number
});

const Coche = mongoose.model('Coche', {
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