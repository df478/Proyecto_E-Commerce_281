const express = require('express');
const DeliveryService = require('./../services/delivery.service'); 
const router = express.Router();
const service = new DeliveryService();

router.get('/', async (req, res) => {
    try {
        const deliverys = service.find();
        res.json(deliverys);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los deliverys', error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const delivery = service.findOne(id);
        if (!delivery) {
            return res.status(404).json({ message: 'delivery no encontrado' });
        }
        res.json(delivery);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el delivery', error });
    }
});

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        const nuevadelivery = service.create(body);
        res.status(201).json(nuevadelivery);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el delivery', error });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const delivery = service.update(id, body);
        if (!delivery) {
            return res.status(404).json({ message: 'delivery no encontrado' });
        }
        res.json(delivery);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el delivery', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const rta = service.delete(id);
        if (!rta) {
            return res.status(404).json({ message: 'delivery no encontrado' });
        }
        res.json(rta);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el delivery', error });
    }
});

module.exports = router;