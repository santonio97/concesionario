const mongoose = require('mongoose');

const concesionario = mongoose.model('concesionario', {
    cochesRegistrados: Number,
    ubicacion: String,
    numVentas: Number
});

const coche = mongoose.model('coche', {
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