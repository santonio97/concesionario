const mongoose = require('mongoose');

const concesionario = mongoose.model('Concesionario', {
    cochesRegistrados: Number,
    ubicacion: String,
    numVentas: Number
});

const coche = mongoose.model('Coche', {
    marca: String,
    modelo: String,
    caracteristicas: String,
    precio: Number,
    compras: Number
});

module.exports = {
    concesionario,
    coche
};