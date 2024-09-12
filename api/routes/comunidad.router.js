const express = require('express');
const ComunidadService = require('./../services/comunidad.service'); 
const router = express.Router();
const service = new ComunidadService();

router.get('/', (req, res) => {
    try {
        const comunidades = service.find();
        res.json(comunidades);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las comunidades', error });
    }
});

router.get('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const comunidad = service.findOne(id);
        if (!comunidad) {
            return res.status(404).json({ message: 'Comunidad no encontrada' });
        }
        res.json(comunidad);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la comunidad', error });
    }
});

router.post('/', (req, res) => {
    try {
        const body = req.body;
        const nuevaComunidad = service.create(body);
        res.status(201).json(nuevaComunidad);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear la comunidad', error });
    }
});

router.patch('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const comunidad = service.update(id, body);
        if (!comunidad) {
            return res.status(404).json({ message: 'Comunidad no encontrada' });
        }
        res.json(comunidad);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar la comunidad', error });
    }
});

router.delete('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const rta = service.delete(id);
        if (!rta) {
            return res.status(404).json({ message: 'Comunidad no encontrada' });
        }
        res.json(rta);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la comunidad', error });
    }
});

module.exports = router;
