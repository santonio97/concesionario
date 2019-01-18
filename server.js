const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes');

//importaciones de los modulos
const app = express();
//conexion a bbdd
mongoose.connect('mongodb://localhost:27017/concesionario', { useNewUrlParser: true })
    .then(db => console.log('Conexión correcta a la BD'))
    .catch(err => console.log('Error en la conexión a la BD'));

app.use(express.static(path.join(__dirname, 'public')));
// modulo morgan para logger
app.use(morgan('dev'));
// Rutas
app.use(express.json());
app.use('/api', routes);
// --- PUERTO DE ESCUCHA
app.listen(3000, () => console.log('Servidor iniciado enpuerto 3000'));
