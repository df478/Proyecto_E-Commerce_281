const express = require('express');
const PromocionService = require('./../services/promocion.service');
const router = express.Router();
const service = new PromocionService();

router.get('/', async (req, res) => {
    try {
        const promociones = await service.find();
        res.json(promociones);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las promociones', error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const promocion = await service.findOne(id);
        if (!promocion) {
            return res.status(404).json({ message: 'Promoción no encontrada' });
        }
        res.json(promocion);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la promoción', error });
    }
});

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        const nuevaPromocion = await service.create(body);
        res.status(201).json(nuevaPromocion);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear la promoción', error });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const promocion = await service.update(id, body);
        if (!promocion) {
            return res.status(404).json({ message: 'Promoción no encontrada' });
        }
        res.json(promocion);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar la promoción', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const rta = await service.delete(id);
        if (!rta) {
            return res.status(404).json({ message: 'Promoción no encontrada' });
        }
        res.json(rta);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la promoción', error });
    }
});

module.exports = router;