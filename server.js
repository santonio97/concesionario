const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes');
const config = require('./config');

//importaciones de los modulos
const app = express(); 
//conexion a bbdd
mongoose.connect(config.db_uri, { useNewUrlParser: true })
    .then(db => console.log('Conexión correcta a la BD'))
    .catch(err => console.log('Error en la conexión a la BD'));

app.use(express.static(path.join(__dirname, 'public')));
// modulo morgan para logger
app.use(morgan('dev'));
// Rutas
app.use(express.json());
app.use('/api', routes);

// --- MIDDLEWARE
// Para redirigir trafico HTTP a HTTPS
app.use((req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https')
    res.redirect(`https://${req.header('host')}${req.url}`);
  else
    next();
});

// --- PUERTO DE ESCUCHA
app.listen(config.port, () => console.log('Servidor iniciado en puerto 3000'));
