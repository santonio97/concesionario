const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes');

//importaciones de los modulos
const app = express(); 
//conexion a bbdd
mongoose.connect('mongodb://localhost:27017/autos', { useNewUrlParser: true })
    .then(db => console.log('Conexión correcta a la BD'))
    .catch(err => console.log('Error en la conexión a la BD'));

// --- MIDDLEWARE
app.use((req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https' && process.env.PORT )
    // Para redirigir trafico HTTP a HTTPS
    res.redirect(`https://${req.header('host')}${req.url}`);
  else
    next();
});

app.use(express.static(path.join(__dirname, 'public')));
// modulo morgan para logger
app.use(morgan('dev'));
// Rutas
app.use(express.json());
app.use('/api', routes);

// --- PUERTO DE ESCUCHA
app.listen(config.port, () => console.log('Servidor iniciado en puerto ' + config.port));
