const express = require('express');
const PagoService = require('./../services/pago.service');
const router = express.Router();
const service = new PagoService();

router.get('/', async (req, res) => {
    try {
        const pagos = await service.find();
        res.json(pagos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los pagos', error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const pago = await service.findOne(id);
        if (!pago) {
            return res.status(404).json({ message: 'Pago no encontrado' });
        }
        res.json(pago);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el pago', error });
    }
});

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        const nuevoPago = await service.create(body);
        res.status(201).json(nuevoPago);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el pago', error });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const pago = await service.update(id, body);
        if (!pago) {
            return res.status(404).json({ message: 'Pago no encontrado' });
        }
        res.json(pago);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el pago', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const rta = await service.delete(id);
        if (!rta) {
            return res.status(404).json({ message: 'Pago no encontrado' });
        }
        res.json(rta);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el pago', error });
    }
});

module.exports = router;
