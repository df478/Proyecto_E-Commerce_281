const express = require('express');
const ProPromCliCarService = require('./../services/pro_prom_cli_car.service');
const router = express.Router();
const service = new ProPromCliCarService();

router.get('/', async (req, res) => {
    try {
        const aniadidos = await service.find();
        res.json(aniadidos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los aniadidos', error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const aniadido = await service.findOne(id);
        if (!aniadido) {
            return res.status(404).json({ message: 'aniadido no encontrado' });
        }
        res.json(aniadido);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el aniadido', error });
    }
});

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        const nuevoAniadido = await service.create(body);
        res.status(201).json(nuevoAniadido);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el aniadido', error });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const aniadido = await service.update(id, body);
        if (!aniadido) {
            return res.status(404).json({ message: 'aniadido no encontrado' });
        }
        res.json(aniadido);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el aniadido', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const rta = await service.delete(id);
        if (!rta) {
            return res.status(404).json({ message: 'aniadido no encontrado' });
        }
        res.json(rta);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el aniadido', error });
    }
});

module.exports = router;
