const express = require('express');
const MunicipioService = require('./../services/municipio.service'); 
const router = express.Router();
const service = new MunicipioService();

router.get('/', (req, res) => {
    try {
        const municipios = service.find();
        res.json(municipios);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los municipios', error });
    }
});

router.get('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const municipio = service.findOne(id);
        if (!municipio) {
            return res.status(404).json({ message: 'Municipio no encontrado' });
        }
        res.json(municipio);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el municipio', error });
    }
});

router.post('/', (req, res) => {
    try {
        const body = req.body;
        const nuevoMunicipio = service.create(body);
        res.status(201).json(nuevoMunicipio);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el municipio', error });
    }
});

router.patch('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const municipio = service.update(id, body);
        if (!municipio) {
            return res.status(404).json({ message: 'Municipio no encontrado' });
        }
        res.json(municipio);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el municipio', error });
    }
});

router.delete('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const rta = service.delete(id);
        if (!rta) {
            return res.status(404).json({ message: 'Municipio no encontrado' });
        }
        res.json(rta);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el municipio', error });
    }
});

module.exports = router;