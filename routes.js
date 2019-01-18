const express = require('express');
const { Concesionario, Coche } = require('./models');

const router = express.Router();

// ver todos los concesionarios
router.get('/concesionario', (req, res) => {
    Concesionario.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// ver todos los coches
router.get('/coche', (req, res) => {
    Coche.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// ver un concesionario
router.get('/concesionario/:id', (req, res) => {
    Concesionario.findOne({_id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// ver un coche
router.get('/coche/:id', (req, res) => {
    Coche.findOne({_id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// eliminar un concesionario
router.delete('/concesionario/:id', (req, res) => {
    Concesionario.findOneAndRemove({_id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// eliminar un coche
router.delete('/coche/:id', (req, res) => {
    Coche.findOneAndRemove({_id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// actualizar un concesionario
router.put('/concesionario/:id', (req, res) => {
    Concesionario.findOneAndUpdate({_id: req.params.id },
        { $set: { cochesRegistrados: req.body.cochesRegistrados,
                  ubicacion: req.body.ubicacion,
                  numVentas: req.body.numVentas 
                } 
            },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
});

// actualizar un coche
router.put('/coche/:id', (req, res) => {
    Coche.findOneAndUpdate({_id: req.params.id },
        { $set: { marca: req.body.marca,
                  modelo: req.body.modelo,
                  caracteristicas: req.body.caracteristicas,
                  precio: req.body.precio,
                  compras: req.body.compras 
                } 
            },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
});

// insertar un concesionario
router.post('/concesionario', (req, res) => {
    const concesionario = new Concesionario({
        cochesRegistrados: req.body.cochesRegistrados,
        ubicacion: req.body.ubicacion,
        numVentas: req.body.numVentas
    });
    concesionario.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// insertar un coche
router.post('/coche', (req, res) => {
    const coche = new Coche({
        marca: req.body.marca,
        modelo: req.body.modelo,
        caracteristicas: req.body.caracteristicas,
        precio: req.body.precio,
        compras: req.body.compras
    });
    coche.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

module.exports = router;