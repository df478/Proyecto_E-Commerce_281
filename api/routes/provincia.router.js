const express = require('express');
const ProvinciaService = require('./../services/provincia.service'); 
const router = express.Router();
const service = new ProvinciaService();

router.get('/', (req, res) => {
    try {
        const provincias = service.find();
        res.json(provincias);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los provincias', error });
    }
});

router.get('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const provincia = service.findOne(id);
        if (!provincia) {
            return res.status(404).json({ message: 'provincia no encontrado' });
        }
        res.json(provincia);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el provincia', error });
    }
});

router.post('/', (req, res) => {
    try {
        const body = req.body;
        const nuevaProvincia = service.create(body);
        res.status(201).json(nuevaProvincia);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el provincia', error });
    }
});

router.patch('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const provincia = service.update(id, body);
        if (!provincia) {
            return res.status(404).json({ message: 'provincia no encontrado' });
        }
        res.json(provincia);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el provincia', error });
    }
});

router.delete('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const rta = service.delete(id);
        if (!rta) {
            return res.status(404).json({ message: 'provincia no encontrado' });
        }
        res.json(rta);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el provincia', error });
    }
});

module.exports = router;