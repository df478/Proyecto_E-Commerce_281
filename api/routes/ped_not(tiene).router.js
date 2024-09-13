const express = require('express');
const PedNotService = require('./../services/ped_not(tiene).service');
const router = express.Router();
const service = new PedNotService();

router.get('/', async (req, res) => {
    try {
        const pedNot = await service.find();
        res.json(pedNot);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener PedNot', error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const pedNot = await service.findOne(id);
        if (!pedNot) {
            return res.status(404).json({ message: 'PedNot no encontrado' });
        }
        res.json(pedNot);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener PedNot', error });
    }
});

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        const nuevoPedNot = await service.create(body);
        res.status(201).json(nuevoPedNot);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear PedNot', error });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const pedNotActualizado = await service.update(id, body);
        if (!pedNotActualizado) {
            return res.status(404).json({ message: 'PedNot no encontrado' });
        }
        res.json(pedNotActualizado);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar PedNot', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const rta = await service.delete(id);
        if (!rta) {
            return res.status(404).json({ message: 'PedNot no encontrado' });
        }
        res.json(rta);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar PedNot', error });
    }
});

module.exports = router;
