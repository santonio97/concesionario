const express = require('express');
const { Concesionario, Coches } = require('./models');

const router = express.Router();

// ver todos los concesionarios
router.get('/concesionario', (req, res) => {
    Concesionario.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// ver todos los coches
router.get('/coches', (req, res) => {
    Coches.find({}, (err, data) => {
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
router.get('/coches/:id', (req, res) => {
    Coches.findOne({_id: req.params.id }, (err, data) => {
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
router.delete('/coches/:id', (req, res) => {
    Coches.findOneAndRemove({_id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// actualizar un concesionario
router.put('/concesionario/:id', (req, res) => {
    Concesionario.findOneAndUpdate({_id: req.params.id },
        { $set: { cochesRegistrados: req.body.cochesRegistrados,
                  ubicacion: req.body.ubicacion
                } 
            },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
});

// actualizar un coche
router.put('/coches/:id', (req, res) => {
    Coches.findOneAndUpdate({_id: req.params.id },
        { $set: { marca: req.body.marca,
                  modelo: req.body.modelo
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
        ubicacion: req.body.ubicacion
    });
    concesionario.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// insertar un coche
router.post('/coches', (req, res) => {
    const coches = new Coches({
        marca: req.body.marca,
        modelo: req.body.modelo
    });
    coches.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

module.exports = router;